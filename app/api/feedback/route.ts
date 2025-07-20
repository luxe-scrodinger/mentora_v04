import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const feedbackData = await req.json()
    console.log("Received Chatbot Feedback:", feedbackData)

    // In a real application, you would save this feedback to a database
    // For now, we'll just log it.

    return NextResponse.json({ success: true, message: "Feedback received successfully!" })
  } catch (error) {
    console.error("Feedback API Error:", error)
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
  }
}
