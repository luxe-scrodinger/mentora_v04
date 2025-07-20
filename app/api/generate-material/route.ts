import { generateText } from "ai"
import { openai } from "@ai-sdk/openai"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const { type, topic, grade, context, ...rest } = await req.json()

    let prompt = ""
    let generatedContent = ""

    switch (type) {
      case "slide-presentation":
        prompt = `Create a detailed slide presentation outline for the topic "${topic}" for grade "${grade}". 
        Context: ${context}. Number of slides: ${rest.numSlides}.
        
        Please provide:
        1. Title slide
        2. Learning objectives
        3. Main content slides with key points
        4. Interactive elements
        5. Summary/conclusion slide
        
        Format as a structured outline with slide numbers and content.`
        break

      case "science-lab":
        prompt = `Design a comprehensive science lab experiment for the topic "${topic}" for grade "${grade}". 
        Learning outcomes: ${rest.learningOutcomes}. Context: ${context}.
        
        Please include:
        1. Experiment objective
        2. Materials needed
        3. Safety precautions
        4. Step-by-step procedure
        5. Expected results
        6. Discussion questions
        7. Extensions for advanced learners`
        break

      case "lesson-plan":
        prompt = `Create a detailed lesson plan for the topic "${topic}" for grade "${grade}". 
        Subject: ${rest.subject}. Duration: ${rest.duration} minutes. 
        Methodology: ${rest.methodology}. Description: ${rest.description}.
        
        Please include:
        1. Learning objectives
        2. Materials needed
        3. Lesson structure (introduction, main activity, conclusion)
        4. Assessment methods
        5. Differentiation strategies
        6. Homework/extension activities`
        break

      case "quiz":
        prompt = `Create a comprehensive quiz on "${topic}" for grade "${grade}" in subjects ${rest.subjects?.join(", ")}. 
        Number of questions: ${rest.numQuestions}. Difficulty: ${rest.difficulty}%.
        
        Please include:
        1. ${rest.questionTypes?.multipleChoice ? "Multiple choice questions" : ""}
        2. ${rest.questionTypes?.openEnded ? "Open-ended questions" : ""}
        3. Answer key with explanations
        4. Scoring rubric
        5. Learning objectives alignment`
        break

      case "instructional-sequence":
        prompt = `Generate a comprehensive instructional sequence for subject "${rest.subject}", 
        grade "${grade}", topic "${topic}". Number of lessons: ${rest.numLessons}. 
        Learning outcomes: ${rest.learningOutcomes}. Context: ${context}.
        
        Please provide:
        1. Sequence overview
        2. Individual lesson outlines
        3. Progressive skill building
        4. Assessment checkpoints
        5. Differentiation strategies`
        break

      default:
        return NextResponse.json({ error: "Unknown material type" }, { status: 400 })
    }

    const hasOpenAIKey = !!process.env.OPENAI_API_KEY

    if (hasOpenAIKey) {
      const { text } = await generateText({
        model: openai("gpt-4o"),
        prompt,
        temperature: 0.7,
        maxTokens: 2000,
      })
      generatedContent = text
    } else {
      // Provide detailed demo content when no API key is available
      generatedContent = generateDemoContent(type, topic, grade, rest)
    }

    return NextResponse.json({
      success: true,
      message: `Successfully generated ${type.replace("-", " ")} for "${topic}"`,
      content: generatedContent,
      metadata: {
        type,
        topic,
        grade,
        timestamp: new Date().toISOString(),
      },
    })
  } catch (error) {
    console.error("API Error:", error)
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
  }
}

function generateDemoContent(type: string, topic: string, grade: string, options: any): string {
  switch (type) {
    case "lesson-plan":
      return `# Lesson Plan: ${topic}
      
## Grade Level: ${grade}
## Duration: ${options.duration || "50"} minutes

### Learning Objectives:
- Students will understand the key concepts of ${topic}
- Students will be able to apply knowledge in practical scenarios
- Students will demonstrate mastery through assessment

### Materials Needed:
- Whiteboard/projector
- Student worksheets
- Interactive materials
- Assessment rubric

### Lesson Structure:

#### Introduction (10 minutes)
- Hook: Engaging question or demonstration
- Review prior knowledge
- Introduce learning objectives

#### Main Activity (30 minutes)
- Direct instruction with examples
- Guided practice
- Independent work time
- Peer collaboration

#### Conclusion (10 minutes)
- Summary of key points
- Quick assessment check
- Preview next lesson

### Assessment:
- Formative: Exit ticket with 3 questions
- Summative: Quiz next class
- Differentiation: Provide additional support for struggling learners

### Homework:
- Practice worksheet (15 minutes)
- Read textbook pages related to ${topic}

*Generated by Mentora AI - Review and customize as needed*`

    case "quiz":
      return `# Quiz: ${topic}
      
## Grade Level: ${grade}
## Questions: ${options.numQuestions || "10"}

### Multiple Choice Questions:

1. **What is the main concept of ${topic}?**
   a) Option A
   b) Option B  
   c) Option C ✓
   d) Option D

2. **Which of the following best describes ${topic}?**
   a) Description A
   b) Description B ✓
   c) Description C
   d) Description D

### Open-Ended Questions:

3. **Explain the importance of ${topic} in your own words.**
   *Answer: Students should demonstrate understanding of key concepts and provide real-world examples.*

4. **How would you apply ${topic} to solve a real-world problem?**
   *Answer: Look for creative applications and logical reasoning.*

### Answer Key:
1. C - Correct answer with explanation
2. B - Detailed explanation of why this is correct
3. Rubric: 3 points for complete explanation, 2 for partial, 1 for minimal
4. Rubric: 3 points for creative application, 2 for basic application, 1 for attempt

*Generated by Mentora AI - Customize difficulty and add more questions as needed*`

    case "slide-presentation":
      return `# Slide Presentation: ${topic}
      
## Total Slides: ${options.numSlides || "10"}
## Grade Level: ${grade}

### Slide 1: Title Slide
- **Title:** ${topic}
- **Subtitle:** Understanding Key Concepts
- **Grade:** ${grade}
- **Date:** [Insert Date]

### Slide 2: Learning Objectives
- Understand the fundamentals of ${topic}
- Apply concepts to real-world scenarios
- Analyze and evaluate information

### Slide 3-4: Introduction
- What is ${topic}?
- Why is it important?
- Real-world connections

### Slide 5-7: Main Content
- Key Concept 1: Definition and examples
- Key Concept 2: Applications and uses
- Key Concept 3: Advanced applications

### Slide 8: Interactive Activity
- Group discussion questions
- Hands-on demonstration
- Student participation

### Slide 9: Summary
- Recap of main points
- Key takeaways
- Connection to next lesson

### Slide 10: Questions & Assessment
- Review questions
- Exit ticket
- Next steps

*Generated by Mentora AI - Add visuals, animations, and interactive elements*`

    default:
      return `# ${type.replace("-", " ").toUpperCase()}: ${topic}

## Overview
This ${type.replace("-", " ")} has been generated for ${grade} level students focusing on ${topic}.

## Content
Detailed content would be generated here based on the specific requirements and parameters provided.

## Key Features
- Aligned with curriculum standards
- Age-appropriate content
- Interactive elements
- Assessment opportunities

*Generated by Mentora AI - Please review and customize as needed*`
  }
}
