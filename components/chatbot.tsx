"use client"

import { useState, useRef, useEffect } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Send, X, Bot, ThumbsUp, ThumbsDown, Loader2 } from "lucide-react"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

interface ChatbotProps {
  isOpen: boolean
  onClose: () => void
}

interface Message {
  id: string
  text: string
  sender: "user" | "bot"
  feedback?: "positive" | "negative"
}

export function Chatbot({ isOpen, onClose }: ChatbotProps) {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState("")
  const [isSending, setIsSending] = useState(false)
  const [feedbackMessageId, setFeedbackMessageId] = useState<string | null>(null)
  const [feedbackText, setFeedbackText] = useState("")
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = async () => {
    if (input.trim() === "") return

    const newUserMessage: Message = { id: Date.now().toString(), text: input, sender: "user" }
    setMessages((prevMessages) => [...prevMessages, newUserMessage])
    setInput("")
    setIsSending(true)

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: input }),
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = await response.json()
      const botResponse: Message = { id: Date.now().toString(), text: data.aiResponse, sender: "bot" }
      setMessages((prevMessages) => [...prevMessages, botResponse])
    } catch (error) {
      console.error("Error sending message to chatbot:", error)
      setMessages((prevMessages) => [
        ...prevMessages,
        { id: Date.now().toString(), text: "Sorry, I couldn't process that. Please try again.", sender: "bot" },
      ])
    } finally {
      setIsSending(false)
    }
  }

  const handleFeedback = async (messageId: string, type: "positive" | "negative") => {
    setMessages((prevMessages) => prevMessages.map((msg) => (msg.id === messageId ? { ...msg, feedback: type } : msg)))
    setFeedbackMessageId(messageId) // Set the message ID for which feedback is being given
    // Optionally, send feedback to backend
    try {
      await fetch("/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messageId, type, feedbackText }),
      })
      console.log("Feedback sent:", { messageId, type, feedbackText })
    } catch (error) {
      console.error("Failed to send feedback:", error)
    }
    setFeedbackText("") // Clear feedback text after sending
  }

  const handleSendFeedbackText = async () => {
    if (feedbackMessageId && feedbackText.trim() !== "") {
      await handleFeedback(feedbackMessageId, messages.find((m) => m.id === feedbackMessageId)?.feedback || "positive") // Re-send with text
      setFeedbackMessageId(null) // Reset feedback state
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md h-[70vh] p-0 flex flex-col">
        <DialogHeader className="p-4 pb-2 border-b border-gray-200 flex flex-row items-center justify-between">
          <DialogTitle className="flex items-center gap-2 text-lg font-bold">
            <Bot className="w-5 h-5 text-blue-600" />
            Mentora AI Chatbot
          </DialogTitle>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="w-4 h-4" />
          </Button>
        </DialogHeader>

        <ScrollArea className="flex-1 p-4">
          <div className="space-y-4">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    msg.sender === "user"
                      ? "bg-blue-600 text-white rounded-br-none"
                      : "bg-gray-100 text-gray-800 rounded-bl-none"
                  }`}
                >
                  <p className="text-sm">{msg.text}</p>
                  {msg.sender === "bot" && (
                    <div className="flex items-center gap-2 mt-2 text-gray-500">
                      <Button
                        variant="ghost"
                        size="icon"
                        className={`h-6 w-6 ${msg.feedback === "positive" ? "text-green-500" : ""}`}
                        onClick={() => handleFeedback(msg.id, "positive")}
                      >
                        <ThumbsUp className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className={`h-6 w-6 ${msg.feedback === "negative" ? "text-red-500" : ""}`}
                        onClick={() => handleFeedback(msg.id, "negative")}
                      >
                        <ThumbsDown className="w-4 h-4" />
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            ))}
            {isSending && (
              <div className="flex justify-start">
                <div className="max-w-[80%] p-3 rounded-lg bg-gray-100 text-gray-800 rounded-bl-none flex items-center gap-2">
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span className="text-sm">Typing...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        </ScrollArea>

        {feedbackMessageId && (
          <div className="p-4 border-t border-gray-200">
            <Label htmlFor="feedback-text" className="text-sm mb-2 block">
              Provide additional feedback:
            </Label>
            <Textarea
              id="feedback-text"
              placeholder="Tell us more about your experience..."
              value={feedbackText}
              onChange={(e) => setFeedbackText(e.target.value)}
              rows={2}
              className="mb-2"
            />
            <Button onClick={handleSendFeedbackText} className="w-full bg-blue-600 hover:bg-blue-700">
              Submit Feedback
            </Button>
          </div>
        )}

        <div className="p-4 border-t border-gray-200 flex items-center gap-2">
          <Input
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === "Enter" && !isSending) {
                handleSendMessage()
              }
            }}
            disabled={isSending}
          />
          <Button size="icon" onClick={handleSendMessage} disabled={isSending}>
            {isSending ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
