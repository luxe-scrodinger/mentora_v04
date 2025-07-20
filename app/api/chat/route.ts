import { generateText } from "ai"
import { openai } from "@ai-sdk/openai"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const { message } = await req.json()

    // Define the chatbot's persona and capabilities
    const systemPrompt = `You are Lara, Mentora AI's helpful and knowledgeable assistant. You are an expert in education technology and personalized learning.

Your capabilities include:
- Explaining Mentora AI's features in detail (Contextual Lesson Generation, Smart Assessment Creator, PAL, Real-Time Analytics, Automatic Intervention)
- Providing step-by-step guidance on using specific tools (Lesson Plan, Slide Presentation, Quiz, Science Lab, etc.)
- Offering troubleshooting assistance and best practices
- Explaining how PAL (Personalized Adaptive Learning) works
- Helping teachers understand analytics and student progress
- Providing educational insights and teaching tips

Key features to highlight:
- PAL System: Adapts questions based on student performance - correct answers advance, wrong answers provide remedial support
- Real-time Analytics: Teachers see student misconceptions instantly
- Google Classroom Integration: Push assignments directly to classrooms
- Automatic Intervention: AI bridges learning gaps without teacher involvement
- 50,000+ active teachers, 1M+ students learning globally

Always be:
- Friendly and encouraging
- Specific and actionable in your advice
- Educational and informative
- Supportive of both teachers and students
- Enthusiastic about AI-powered education

Keep responses conversational but informative, around 2-3 paragraphs maximum.`

    const hasOpenAIKey = !!process.env.OPENAI_API_KEY

    let botReply = ""

    if (hasOpenAIKey) {
      const { text } = await generateText({
        model: openai("gpt-4o"),
        prompt: message,
        system: systemPrompt,
        temperature: 0.7,
        maxTokens: 500,
      })
      botReply = text
    } else {
      // Provide intelligent demo responses based on common questions
      botReply = generateDemoResponse(message.toLowerCase())
    }

    return NextResponse.json({
      success: true,
      aiResponse: botReply,
      timestamp: new Date().toISOString(),
    })
  } catch (error) {
    console.error("Chatbot API Error:", error)
    return NextResponse.json(
      {
        success: false,
        aiResponse:
          "I apologize, but I'm experiencing some technical difficulties right now. Please try again in a moment, or feel free to explore our platform features in the meantime!",
        error: "Internal Server Error",
      },
      { status: 500 },
    )
  }
}

function generateDemoResponse(message: string): string {
  // Common question patterns and responses
  if (message.includes("pal") || message.includes("personalized") || message.includes("adaptive")) {
    return `Great question about PAL! Our Personalized Adaptive Learning system is truly revolutionary. Here's how it works: when students answer questions correctly, they advance to the next concept and earn points. But when they get something wrong, PAL doesn't just mark it incorrect - it identifies the underlying misconception and provides easier questions on prerequisite concepts.

For example, if a student struggles with quadratic equations, PAL might take them back to linear equations or even basic algebra until they master those foundations. This ensures every student builds solid understanding before moving forward. Teachers love it because they can see real-time analytics showing exactly where each student is in their learning journey!

Would you like to know more about how teachers use the analytics dashboard, or are you curious about the student experience?`
  }

  if (message.includes("lesson plan") || message.includes("generate") || message.includes("create")) {
    return `I'd be happy to help you with lesson planning! Mentora AI's Contextual Lesson Generation is one of our most popular features. Simply enter your topic, grade level, and any specific context about your class, and our AI creates comprehensive lesson plans tailored to your needs.

The best part? You can push these lessons directly to Google Classroom with PAL enabled, so students get personalized question paths based on their understanding. Teachers report saving 10+ hours per week on lesson prep! The AI considers curriculum standards, learning objectives, and even suggests differentiation strategies for different learner needs.

Try clicking on the "Lesson Plan" tool in your dashboard - it's the one with the book icon. What subject are you planning to teach?`
  }

  if (message.includes("quiz") || message.includes("assessment") || message.includes("test")) {
    return `Assessments are where Mentora AI really shines! Our Smart Assessment Creator doesn't just generate random questions - it creates contextual questions perfectly aligned to learning gaps and curriculum standards. You can specify the number of questions, difficulty level, and question types (multiple choice, open-ended, or both).

Once you create a quiz, you can push it to Google Classroom where PAL takes over. Students who answer correctly move forward, while those who struggle get immediate feedback and remedial questions on prerequisite concepts. Teachers get real-time analytics showing misconceptions as they happen - no more waiting for test results!

The system has helped schools achieve an average 23% improvement in test scores. Would you like me to walk you through creating your first quiz?`
  }

  if (message.includes("analytics") || message.includes("progress") || message.includes("track")) {
    return `Our Real-Time Learning Analytics are a game-changer for teachers! Instead of waiting weeks for test results, you can see exactly how each student is performing right now. The dashboard shows individual progress, identifies struggling students, and even highlights specific misconceptions.

The AI provides actionable insights like "4 students are struggling with linear equations - consider reviewing basic algebraic manipulation" or "Sarah is ready for advanced topics in polynomials." Teachers can intervene immediately when students need help, rather than discovering problems too late.

You can access the analytics dashboard anytime to see class-wide trends, individual student journeys, and get AI-powered recommendations for next steps. It's like having a teaching assistant that never sleeps!`
  }

  if (message.includes("google classroom") || message.includes("integration") || message.includes("push")) {
    return `Yes! Mentora AI integrates seamlessly with Google Classroom. When you create lesson plans, quizzes, or any learning materials, you can push them directly to your classroom with just one click. The integration maintains all the PAL functionality, so students get the full personalized learning experience.

Here's what happens: You create content in Mentora → Push to Google Classroom → Students access through their familiar Classroom interface → PAL provides personalized question paths → You get real-time analytics on student progress. It's that simple!

The integration respects all Google Classroom permissions and workflows, so it feels natural for both teachers and students. No need to learn new platforms - just enhanced functionality in the tools you already use!`
  }

  if (message.includes("student") || message.includes("learn") || message.includes("portal")) {
    return `Students love the Mentora AI experience! When they log into the Student Portal, they see their personalized learning path with progress tracking, points, and achievement levels. The PAL system makes learning feel like a game - they earn points for correct answers and get helpful guidance when they struggle.

What makes it special is that wrong answers aren't failures - they're learning opportunities. The AI immediately provides feedback and easier questions to build understanding step by step. Students can see their progress visually and feel motivated to keep learning.

Parents and teachers can track progress in real-time, seeing exactly which concepts students have mastered and where they might need extra support. It's personalized learning that actually adapts to each student's unique needs!`
  }

  if (message.includes("help") || message.includes("how") || message.includes("start")) {
    return `I'm here to help you get the most out of Mentora AI! Here are some great ways to get started:

🎯 **Try the Dashboard**: Click on any tool icon (Lesson Plan, Quiz, etc.) to create your first AI-generated content
📊 **Explore Analytics**: Check out the real-time progress tracking for your students  
🧠 **Test PAL**: Visit the Student Portal to see how personalized adaptive learning works
🔗 **Google Integration**: Push your content directly to Google Classroom with one click

What specific feature would you like to explore first? I can provide step-by-step guidance for any tool or answer questions about how our AI personalizes learning for each student.`
  }

  // Default response for unmatched queries
  return `Hi there! I'm Lara, your Mentora AI assistant. I'm here to help you make the most of our personalized learning platform! 

I can help you with:
• Understanding how PAL (Personalized Adaptive Learning) works
• Creating lesson plans, quizzes, and other educational content
• Using real-time analytics to track student progress  
• Integrating with Google Classroom
• Troubleshooting any issues you might have

What would you like to know more about? Feel free to ask me anything about Mentora AI's features or how to use them effectively in your classroom!`
}
