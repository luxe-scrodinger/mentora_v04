import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const { wasCorrect, currentConcept, studentLevel } = await req.json()

    // Simulate PAL algorithm for next question selection
    let nextQuestion

    if (wasCorrect) {
      // Student got it right - advance to next level or concept
      nextQuestion = {
        id: "adv_" + Date.now(),
        question: "Solve for x: 3x + 7 = 22",
        options: ["x = 5", "x = 7", "x = 9", "x = 15"],
        correctAnswer: 0,
        concept: currentConcept,
        difficulty: "medium",
      }
    } else {
      // Student got it wrong - provide remedial question
      nextQuestion = {
        id: "rem_" + Date.now(),
        question: "What is the first step to solve 2x + 5 = 13?",
        options: [
          "Subtract 5 from both sides",
          "Divide both sides by 2",
          "Add 5 to both sides",
          "Multiply both sides by 2",
        ],
        correctAnswer: 0,
        concept: "Basic Algebra",
        difficulty: "easy",
      }
    }

    console.log("PAL Next Question:", {
      wasCorrect,
      currentConcept,
      studentLevel,
      nextQuestion: nextQuestion.id,
    })

    return NextResponse.json({
      success: true,
      question: nextQuestion,
      reasoning: wasCorrect ? "Advancing to next level" : "Providing remedial support",
    })
  } catch (error) {
    console.error("PAL Next Question Error:", error)
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
  }
}
