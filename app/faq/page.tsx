import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { MessageCircle } from "lucide-react"
import Link from "next/link"

export default function FAQPage() {
  const faqs = [
    {
      category: "Getting Started",
      items: [
        {
          question: "What is Spark School AI and how does it work?",
          answer:
            "Spark School AI is an advanced educational technology platform that uses artificial intelligence to provide personalized adaptive learning (PAL) experiences. Our system analyzes each student's learning patterns, strengths, and areas for improvement to create customized study plans, generate relevant questions, and adapt content difficulty in real-time. It supports CBSE, ICSE, IB, and other curricula for grades 1-12.",
        },
        {
          question: "How is Spark School AI different from other educational platforms?",
          answer:
            "Unlike traditional platforms, Spark School AI uses advanced AI algorithms to create truly personalized learning experiences. Our PAL system adapts in real-time, our content is specifically designed for Indian curricula, we provide comprehensive teacher tools, and we maintain strict privacy standards especially for children under 13 (COPPA compliant).",
        },
        {
          question: "Is Spark School AI suitable for all learning styles?",
          answer:
            "Yes! Our PAL system is designed to adapt to different learning styles through various content delivery methods including text, video, images, and audio. The system automatically adjusts based on student responses, providing visual learners with diagrams, auditory learners with explanations, and kinesthetic learners with interactive activities.",
        },
      ],
    },
    {
      category: "Features & Capabilities",
      items: [
        {
          question: "What teacher tools are available in Spark School AI?",
          answer:
            "Teachers have access to: Contextual Lesson Generator, Smart Assessment Creator, Real-Time Analytics, Misconception Detector, Automatic Intervention System, Google Classroom Integration, Mind Map Creator, Exam Generator, Activity Ideas Generator, Review Tutor, and Learning Recovery Plan Builder.",
        },
        {
          question: "Can I create my own content or assignments?",
          answer:
            "Teachers can create custom lessons, assignments, and assessments. The system also provides AI-assisted generation tools to help create content faster. You can customize all generated content before sharing with students.",
        },
        {
          question: "How does PAL (Personalized Adaptive Learning) work?",
          answer:
            "PAL analyzes each student answer and adapts the next question accordingly. Correct answers lead to progression to new concepts and points. Wrong answers trigger instant feedback and easier questions on the same concept. The system identifies misconceptions and provides targeted remediation automatically.",
        },
      ],
    },
    {
      category: "Pricing & Plans",
      items: [
        {
          question: "What are the pricing options?",
          answer:
            "For Students: Free tier with limited questions, ₹999/month for one subject, ₹1999/month for all subjects. For Teachers: Free tier with limited features, ₹699/month for professional plan. For Schools: Starting from ₹14,999/month for up to 5 teachers and 100 students. All plans include free trial periods.",
        },
        {
          question: "Do you offer discounts for educational institutions?",
          answer:
            "Yes! We offer significant discounts for educational institutions, bulk licenses, and multi-year commitments. Contact our sales team at hello@qubilearn.in for custom pricing and enterprise solutions.",
        },
        {
          question: "Is there a free trial available?",
          answer:
            "Yes! All users can sign up for free and access demo features. Students get 5 free questions daily, teachers get limited question generation, and schools can explore the platform with a full trial before committing.",
        },
      ],
    },
    {
      category: "Accounts & Device Support",
      items: [
        {
          question: "What devices are supported?",
          answer:
            "Spark School AI works on all modern devices including computers, tablets, and smartphones. Supported browsers include Chrome, Firefox, Safari, and Edge (latest versions). We also have dedicated mobile apps for iOS and Android for the best mobile experience.",
        },
        {
          question: "Can I use Spark School AI on multiple devices?",
          answer:
            "Yes! Your account data is synchronized across all devices. Start learning on your computer and continue on your tablet or phone seamlessly.",
        },
        {
          question: "How many accounts can a teacher or school create?",
          answer:
            "Teachers can create multiple accounts and manage classes. Schools can add multiple teachers and students depending on their subscription plan. Enterprise plans offer unlimited flexibility.",
        },
      ],
    },
    {
      category: "Integration & Support",
      items: [
        {
          question: "How can teachers integrate Spark School AI into their classroom?",
          answer:
            "Teachers can use Spark School AI as a supplementary tool for homework and practice, push assignments directly to Google Classroom, set up class-based learning paths, track student progress in real-time, and use the analytics dashboard to identify struggling students.",
        },
        {
          question: "Does Spark School AI integrate with Google Classroom?",
          answer:
            "Yes! Teachers can push lessons and assignments directly to Google Classroom. This integration allows for seamless workflow and centralized class management.",
        },
        {
          question: "What kind of support do you offer?",
          answer:
            "We provide email support for all users, priority phone support for paid plans, comprehensive documentation and tutorials, video guides, webinars for teachers, and a community forum for peer support.",
        },
      ],
    },
    {
      category: "Privacy & Security",
      items: [
        {
          question: "Is my data safe with Spark School AI?",
          answer:
            "Yes! We use industry-standard encryption, comply with COPPA for users under 13, follow FERPA guidelines for educational records, never sell student data, and conduct regular security audits.",
        },
        {
          question: "What is your privacy policy for children?",
          answer:
            "We are COPPA compliant for children under 13. We collect minimal personal information, never share data with third parties, and parents can request data deletion anytime. Teachers have full control over student data in their classes.",
        },
        {
          question: "Can my school download or export data?",
          answer:
            "Yes! Schools can export student progress reports, achievement data, and analytics at any time. Data export is available in various formats for compliance and archival purposes.",
        },
      ],
    },
    {
      category: "Troubleshooting",
      items: [
        {
          question: "What should I do if I forget my password?",
          answer:
            "Click 'Forgot Password' on the login page and follow the instructions sent to your email. If you don't receive an email, check your spam folder or contact our support team.",
        },
        {
          question: "Why isn't my student accessing content correctly?",
          answer:
            "Check browser compatibility, clear browser cache and cookies, ensure stable internet connection, verify student's subscription status, and contact support if issues persist.",
        },
        {
          question: "How do I report a technical issue?",
          answer:
            "Contact our support team at support@sparkschoolai.com with details about the issue, screenshots, and your browser information. Our team typically responds within 24 hours.",
        },
      ],
    },
  ]

  return (
    <div className="flex flex-col min-h-screen pt-16">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 px-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
            <p className="text-xl opacity-90">
              Find answers to common questions about Spark School AI, our features, and how to get the most out of our
              platform.
            </p>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              {faqs.map((faqGroup, groupIdx) => (
                <div key={groupIdx}>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    <Badge className="mr-3 bg-blue-600">{faqGroup.category}</Badge>
                  </h2>
                  <Accordion type="single" collapsible className="space-y-3">
                    {faqGroup.items.map((item, itemIdx) => (
                      <AccordionItem key={itemIdx} value={`item-${groupIdx}-${itemIdx}`} className="border rounded-lg">
                        <AccordionTrigger className="px-4 py-3 hover:bg-gray-50 font-semibold text-gray-900">
                          {item.question}
                        </AccordionTrigger>
                        <AccordionContent className="px-4 py-3 text-gray-600 bg-gray-50">
                          {item.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              ))}
            </div>

            {/* Still have questions? */}
            <Card className="mt-16 border-2 border-blue-200 bg-blue-50">
              <CardHeader className="text-center">
                <CardTitle className="flex items-center justify-center gap-2 text-blue-600">
                  <MessageCircle className="w-6 h-6" />
                  Still have questions?
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-6">
                  Our support team is here to help you get the most out of Spark School AI
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact">
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3">
                      Contact Support
                    </Button>
                  </Link>
                  <Button
                    variant="outline"
                    className="border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold px-8 py-3 bg-transparent"
                  >
                    Start Live Chat
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
