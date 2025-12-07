import { generateText } from "ai"
import { groq } from "@ai-sdk/groq"
import { xai } from "@ai-sdk/xai"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const { type, topic, grade, context, aiModel = "groq", ...rest } = await req.json()

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
        
        Format as a structured outline with slide numbers and content. Make it engaging and grade-appropriate.`
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
        7. Extensions for advanced learners
        
        Make it practical and suitable for a classroom setting.`
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
        5. Differentiation strategies for different learning levels
        6. Homework/extension activities
        
        Ensure it's practical and ready to implement.`
        break

      case "quiz":
        prompt = `Create a comprehensive quiz on "${topic}" for grade "${grade}" in subjects ${rest.subjects?.join(", ")}. 
        Number of questions: ${rest.numQuestions}. Difficulty level: ${rest.difficulty}.
        
        Please provide:
        1. ${rest.questionTypes?.multipleChoice ? "Multiple choice questions with 4 options each" : ""}
        2. ${rest.questionTypes?.openEnded ? "Open-ended questions requiring detailed answers" : ""}
        3. Complete answer key with detailed explanations
        4. Scoring rubric
        5. Alignment with learning standards
        
        Make questions clear, unambiguous, and grade-appropriate.`
        break

      case "instructional-sequence":
        prompt = `Generate a comprehensive instructional sequence for subject "${rest.subject}", 
        grade "${grade}", topic "${topic}". Number of lessons: ${rest.numLessons}. 
        Learning outcomes: ${rest.learningOutcomes}. Context: ${context}.
        
        Please provide:
        1. Sequence overview and progression
        2. Individual lesson outlines with objectives
        3. Progressive skill building approach
        4. Assessment checkpoints after each lesson
        5. Differentiation strategies for varied learners
        6. Connection to real-world applications
        
        Ensure logical progression and scaffolding of concepts.`
        break

      case "mind-map":
        prompt = `Create a detailed mind map outline for the topic "${topic}" for grade "${grade}".
        
        Please provide:
        1. Central concept
        2. Main branches (3-5 key categories)
        3. Sub-branches with related concepts
        4. Examples and applications
        5. Connections between ideas
        
        Format it hierarchically and make it visually organized.`
        break

      case "exam":
        prompt = `Create a comprehensive exam on "${topic}" for grade "${grade}".
        Number of questions: ${rest.numQuestions}. Duration: ${rest.duration} minutes.
        Exam name: ${rest.examName}.
        
        Please structure:
        1. Section breakdown (40% multiple choice, 40% short answer, 20% essay)
        2. Progressive difficulty through sections
        3. Clear instructions for each section
        4. Complete answer key with marking rubric
        5. Time allocation per section
        
        Make it challenging but fair, with clear expectations.`
        break

      case "activity-ideas":
        prompt = `Generate engaging classroom activity ideas for the topic "${topic}" for grade "${grade}".
        Student count: ${rest.studentCount}. Duration: ${rest.duration} minutes.
        
        Please provide at least 3 activities with:
        1. Activity name and learning objective
        2. Description of what students will do
        3. Materials needed
        4. Time required
        5. Differentiation options
        6. Assessment method
        7. Why it's effective for this age group
        
        Make activities interactive, collaborative, and engaging.`
        break

      case "review-tutor":
        prompt = `Create comprehensive tutoring content for the concept "${rest.concept}" in "${topic}" for grade "${grade}".
        Difficult areas: ${rest.difficultAreas}.
        
        Please include:
        1. Clear explanation of the concept
        2. Step-by-step breakdown
        3. 3-5 key learning points
        4. Common misconceptions and how to address them
        5. 2-3 worked examples
        6. Practice problems with solutions
        7. Real-world applications
        
        Use simple language and make complex ideas accessible.`
        break

      case "recovery-plan":
        prompt = `Create a learning recovery plan for students struggling with "${topic}" in grade "${grade}".
        Issues: ${rest.issues}. Timeframe: ${rest.timeframe}.
        
        Please structure:
        1. Assessment phase (identify specific gaps)
        2. Targeted instruction phase (focused lessons)
        3. Practice and reinforcement phase
        4. Progress monitoring checkpoints
        5. Parent communication template
        6. Resources and materials needed
        7. Success criteria
        
        Make it practical and implementable.`
        break

      default:
        return NextResponse.json({ error: "Unknown material type" }, { status: 400 })
    }

    const hasGroqKey = !!process.env.GROQ_API_KEY
    const hasXaiKey = !!process.env.XAI_API_KEY

    if (hasGroqKey && aiModel !== "xai") {
      try {
        const { text } = await generateText({
          model: groq("mixtral-8x7b-32768"),
          prompt,
          temperature: 0.7,
          maxTokens: 2000,
        })
        generatedContent = text
      } catch (groqError) {
        console.error("Groq API error, falling back to demo:", groqError)
        generatedContent = generateDemoContent(type, topic, grade, rest)
      }
    } else if (hasXaiKey && aiModel === "xai") {
      try {
        const { text } = await generateText({
          model: xai("grok-4"),
          prompt,
          temperature: 0.7,
          maxTokens: 2000,
        })
        generatedContent = text
      } catch (xaiError) {
        console.error("Grok API error, falling back to demo:", xaiError)
        generatedContent = generateDemoContent(type, topic, grade, rest)
      }
    } else {
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
        aiModel: hasGroqKey || hasXaiKey ? aiModel : "demo",
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

*Generated by Spark School AI - Review and customize as needed*`

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

*Generated by Spark School AI - Customize difficulty and add more questions as needed*`

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

*Generated by Spark School AI - Add visuals, animations, and interactive elements*`

    case "mind-map":
      return `# Mind Map: ${topic}
      
## Grade Level: ${grade}

### Central Concept: ${topic}

### Main Branches:
1. Category 1
2. Category 2
3. Category 3
4. Category 4
5. Category 5

### Sub-Branches:
- **Category 1:**
  - Sub-concept 1
  - Sub-concept 2
- **Category 2:**
  - Sub-concept 3
  - Sub-concept 4
- **Category 3:**
  - Sub-concept 5
  - Sub-concept 6
- **Category 4:**
  - Sub-concept 7
  - Sub-concept 8
- **Category 5:**
  - Sub-concept 9
  - Sub-concept 10

### Examples and Applications:
- Example 1: Application in real-world scenario
- Example 2: Another application

### Connections Between Ideas:
- Concept 1 connects to Concept 2 through [relationship]
- Concept 2 connects to Concept 3 through [relationship]

*Generated by Spark School AI - Add visuals and organize hierarchically*`

    case "exam":
      return `# Exam: ${options.examName || topic}
      
## Grade Level: ${grade}
## Duration: ${options.duration || "60"} minutes

### Section Breakdown:
1. **Multiple Choice (40%):** ${Math.floor((options.numQuestions || 10) * 0.4)} questions
2. **Short Answer (40%):** ${Math.floor((options.numQuestions || 10) * 0.4)} questions
3. **Essay (20%):** ${Math.floor((options.numQuestions || 10) * 0.2)} questions

### Instructions:
- **Section 1:** Answer each question by selecting the best option.
- **Section 2:** Provide detailed answers to each question.
- **Section 3:** Write a short essay on the topic.

### Answer Key:
- **Section 1:** Detailed explanations for each option.
- **Section 2:** Correct answers with marking criteria.
- **Section 3:** Essay rubric with success criteria.

*Generated by Spark School AI - Review and adjust difficulty as needed*`

    case "activity-ideas":
      return `# Activity Ideas for ${topic}
      
## Grade Level: ${grade}
## Student Count: ${options.studentCount || "30"}
## Duration: ${options.duration || "45"} minutes

### Activity 1: ${options.activity1?.name || "Concept Exploration"}
- **Objective:** Understand ${topic} through exploration.
- **Description:** Students will engage in hands-on activities to explore ${topic}.
- **Materials Needed:** ${options.activity1?.materials || "Exploration kits"}
- **Time Required:** ${options.activity1?.time || "20"} minutes
- **Differentiation Options:** ${options.activity1?.differentiation || "Additional resources for advanced learners"}
- **Assessment Method:** ${options.activity1?.assessment || "Observation and participation"}
- **Effectiveness:** Engaging and promotes critical thinking.

### Activity 2: ${options.activity2?.name || "Group Discussion"}
- **Objective:** Discuss and analyze ${topic}.
- **Description:** Students will work in groups to discuss ${topic} and share findings.
- **Materials Needed:** ${options.activity2?.materials || "Discussion sheets"}
- **Time Required:** ${options.activity2?.time || "15"} minutes
- **Differentiation Options:** ${options.activity2?.differentiation || "Peer mentoring for less confident learners"}
- **Assessment Method:** ${options.activity2?.assessment || "Group presentation"}
- **Effectiveness:** Promotes collaboration and communication.

### Activity 3: ${options.activity3?.name || "Application Project"}
- **Objective:** Apply ${topic} to a real-world project.
- **Description:** Students will create a project that demonstrates their understanding of ${topic}.
- **Materials Needed:** ${options.activity3?.materials || "Project materials"}
- **Time Required:** ${options.activity3?.time || "10"} minutes
- **Differentiation Options:** ${options.activity3?.differentiation || "Flexible project requirements"}
- **Assessment Method:** ${options.activity3?.assessment || "Project evaluation"}
- **Effectiveness:** Reinforces learning through practical application.

*Generated by Spark School AI - Review and adjust activities as needed*`

    case "review-tutor":
      return `# Review Tutoring Content: ${topic}
      
## Grade Level: ${grade}
## Concept: ${options.concept || "Core Concept"}

### Clear Explanation:
- ${options.conceptExplanation || "Detailed explanation of the concept"}

### Step-by-Step Breakdown:
1. Step 1: ${options.step1 || "Explanation of step 1"}
2. Step 2: ${options.step2 || "Explanation of step 2"}
3. Step 3: ${options.step3 || "Explanation of step 3"}

### Key Learning Points:
1. Point 1: ${options.keyPoint1 || "Key point 1"}
2. Point 2: ${options.keyPoint2 || "Key point 2"}
3. Point 3: ${options.keyPoint3 || "Key point 3"}
4. Point 4: ${options.keyPoint4 || "Key point 4"}
5. Point 5: ${options.keyPoint5 || "Key point 5"}

### Common Misconceptions:
- Misconception 1: ${options.misconception1 || "Common misconception 1"}
- Misconception 2: ${options.misconception2 || "Common misconception 2"}

### Worked Examples:
1. Example 1: ${options.example1 || "Worked example 1"}
2. Example 2: ${options.example2 || "Worked example 2"}
3. Example 3: ${options.example3 || "Worked example 3"}

### Practice Problems:
1. Problem 1: ${options.problem1 || "Practice problem 1"}
   - Solution: ${options.solution1 || "Solution to problem 1"}
2. Problem 2: ${options.problem2 || "Practice problem 2"}
   - Solution: ${options.solution2 || "Solution to problem 2"}
3. Problem 3: ${options.problem3 || "Practice problem 3"}
   - Solution: ${options.solution3 || "Solution to problem 3"}

### Real-World Applications:
- Application 1: ${options.application1 || "Real-world application 1"}
- Application 2: ${options.application2 || "Real-world application 2"}

*Generated by Spark School AI - Simplify language and make complex ideas accessible*`

    case "recovery-plan":
      return `# Learning Recovery Plan: ${topic}
      
## Grade Level: ${grade}
## Timeframe: ${options.timeframe || "1 month"}

### Assessment Phase:
- Identify specific gaps in student understanding.

### Targeted Instruction Phase:
- Develop focused lessons to address identified gaps.

### Practice and Reinforcement Phase:
- Provide additional practice materials and activities.

### Progress Monitoring Checkpoints:
- Regular assessments to monitor progress.

### Parent Communication Template:
- Template for communicating progress and support needs to parents.

### Resources and Materials Needed:
- ${options.resources || "List of resources and materials"}

### Success Criteria:
- Define clear criteria for successful recovery.

*Generated by Spark School AI - Ensure practicality and implementability*`

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

*Generated by Spark School AI - Please review and customize as needed*`
  }
}
