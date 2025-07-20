import { type NextRequest, NextResponse } from "next/server"
import { generateText } from "ai"
import { openai } from "@ai-sdk/openai"
import { xai } from "@ai-sdk/xai"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { subject, topic, grade, numQuestions, difficulty, questionType, aiModel } = body

    // Validate required fields
    if (!subject || !topic || !numQuestions) {
      return NextResponse.json({ success: false, error: "Missing required fields" }, { status: 400 })
    }

    // Select AI model
    const model = aiModel === "xai" ? xai("grok-3") : openai("gpt-4o")

    // Create prompt based on question type
    const getPrompt = () => {
      const basePrompt = `Generate ${numQuestions} ${difficulty} level ${questionType} questions about ${topic} for ${grade} students studying ${subject}.`

      switch (questionType) {
        case "mcq":
          return `${basePrompt}
          
Format each question as:
Q: [Question text]
A) [Option 1]
B) [Option 2] 
C) [Option 3]
D) [Option 4]
Correct: [Letter of correct answer]

Make sure questions test understanding, not just memorization. Include explanations for correct answers.`

        case "short":
          return `${basePrompt}
          
Format each question as:
Q: [Question text]
Expected Answer: [Brief expected answer]

Focus on questions that require 2-3 sentence answers demonstrating understanding.`

        case "long":
          return `${basePrompt}
          
Format each question as:
Q: [Question text]
Key Points: [List of key points that should be covered in the answer]

Design questions that require detailed explanations and critical thinking.`

        case "true-false":
          return `${basePrompt}
          
Format each question as:
Q: [Statement]
Answer: [True/False]
Explanation: [Brief explanation of why the answer is correct]

Create statements that test conceptual understanding.`

        default:
          return basePrompt
      }
    }

    // Generate questions using selected AI model
    const { text } = await generateText({
      model,
      prompt: getPrompt(),
      temperature: 0.7,
    })

    // Parse the generated text into structured questions
    const questions = parseGeneratedQuestions(text, questionType, subject, topic, aiModel)

    return NextResponse.json({
      success: true,
      questions,
      metadata: {
        subject,
        topic,
        grade,
        difficulty,
        questionType,
        aiModel,
        generatedAt: new Date().toISOString(),
      },
    })
  } catch (error) {
    console.error("Error generating questions:", error)
    return NextResponse.json({ success: false, error: "Failed to generate questions" }, { status: 500 })
  }
}

function parseGeneratedQuestions(text: string, questionType: string, subject: string, topic: string, aiModel: string) {
  const questions = []
  const lines = text.split("\n").filter((line) => line.trim())

  let currentQuestion: any = {}
  let questionCounter = 0

  for (const line of lines) {
    const trimmedLine = line.trim()

    if (trimmedLine.startsWith("Q:") || trimmedLine.match(/^Q\d+[:.]/)) {
      // Save previous question if exists
      if (currentQuestion.question) {
        questions.push({
          ...currentQuestion,
          id: `q${questionCounter + 1}`,
        })
        questionCounter++
      }

      // Start new question
      currentQuestion = {
        question: trimmedLine.replace(/^Q\d*[:.]\s*/, ""),
        type: questionType,
        difficulty: "medium", // This could be parsed from context
        subject,
        topic,
        aiModel,
      }
    } else if (questionType === "mcq") {
      if (trimmedLine.match(/^[A-D]\)/)) {
        if (!currentQuestion.options) currentQuestion.options = []
        currentQuestion.options.push(trimmedLine.substring(2).trim())
      } else if (trimmedLine.startsWith("Correct:")) {
        const correctLetter = trimmedLine.replace("Correct:", "").trim()
        currentQuestion.correctAnswer = correctLetter.charCodeAt(0) - 65 // Convert A,B,C,D to 0,1,2,3
      }
    } else if (questionType === "true-false") {
      if (trimmedLine.startsWith("Answer:")) {
        currentQuestion.correctAnswer = trimmedLine.includes("True") ? 0 : 1
        currentQuestion.options = ["True", "False"]
        currentQuestion.type = "mcq" // Treat as MCQ for consistency
      }
    }
  }

  // Add the last question
  if (currentQuestion.question) {
    questions.push({
      ...currentQuestion,
      id: `q${questionCounter + 1}`,
    })
  }

  return questions
}
