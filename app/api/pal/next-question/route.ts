import { NextResponse } from "next/server"

const questionBankByGrade: { [key: number]: any[] } = {
  4: [
    {
      id: "g4_adv",
      question: "What is 25 + 38?",
      options: ["63", "62", "64", "61"],
      correctAnswer: 0,
      concept: "Addition",
      difficulty: "medium",
    },
  ],
  5: [
    {
      id: "g5_adv",
      question: "If 3/5 of a number is 15, what is the number?",
      options: ["25", "24", "26", "23"],
      correctAnswer: 0,
      concept: "Fractions",
      difficulty: "hard",
    },
  ],
  6: [
    {
      id: "g6_adv",
      question: "Solve: 3x + 4 = 16. What is x?",
      options: ["4", "5", "3", "6"],
      correctAnswer: 0,
      concept: "Linear Equations",
      difficulty: "hard",
    },
  ],
  7: [
    {
      id: "g7_adv",
      question: "If 2(x - 3) = 10, what is x?",
      options: ["8", "7", "9", "6"],
      correctAnswer: 0,
      concept: "Linear Equations",
      difficulty: "hard",
    },
  ],
}

export async function POST(req: Request) {
  try {
    const { wasCorrect, currentConcept, studentLevel, grade = 5, misconceptions = [] } = await req.json()

    let nextQuestion

    if (wasCorrect) {
      // Student got it right - advance to next level or concept
      nextQuestion = questionBankByGrade[grade]?.[0] || {
        id: "adv_" + Date.now(),
        question: "Solve for x: 3x + 7 = 22",
        options: ["x = 5", "x = 7", "x = 9", "x = 15"],
        correctAnswer: 0,
        concept: currentConcept,
        difficulty: "hard",
      }
    } else {
      // Student got it wrong - provide remedial question
      nextQuestion = {
        id: "rem_" + Date.now(),
        question: `What is the first step to solve for variables in ${currentConcept}?`,
        options: [
          "Isolate the variable on one side",
          "Add all numbers together",
          "Multiply everything by 2",
          "Write the answer first",
        ],
        correctAnswer: 0,
        concept: "Review: " + currentConcept,
        difficulty: "easy",
      }
    }

    console.log("PAL Next Question:", {
      wasCorrect,
      currentConcept,
      studentLevel,
      grade,
      misconceptions,
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
