"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Calendar, Clock, Search, TrendingUp, ArrowRight, Eye, MessageCircle } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const categories = [
    { id: "all", name: "All Posts", count: 24 },
    { id: "pal", name: "Personalized Learning", count: 8 },
    { id: "ai-education", name: "AI in Education", count: 6 },
    { id: "teaching-tips", name: "Teaching Tips", count: 5 },
    { id: "student-success", name: "Student Success", count: 3 },
    { id: "research", name: "Educational Research", count: 2 },
  ]

  const featuredPost = {
    id: 1,
    title: "The Science Behind Personalized Adaptive Learning: Why Every Student Needs PAL",
    excerpt:
      "Discover the cognitive science and educational psychology research that proves why personalized adaptive learning is not just beneficial, but essential for modern education.",
    content: "In-depth exploration of how PAL technology works with the brain's natural learning processes...",
    author: "Dr. Priya Sharma",
    authorRole: "Educational Psychologist & PAL Researcher",
    authorAvatar: "PS",
    publishDate: "2025-01-15",
    readTime: "12 min read",
    category: "pal",
    categoryName: "Personalized Learning",
    image: "/placeholder.svg?height=400&width=800&text=PAL+Science+Research",
    views: 2847,
    comments: 23,
    featured: true,
  }

  const blogPosts = [
    {
      id: 2,
      title: "How AI is Revolutionizing Indian Classrooms: A Teacher's Perspective",
      excerpt:
        "Real stories from teachers across India who are using AI tools to transform their teaching methods and improve student outcomes.",
      author: "Rajesh Kumar",
      authorRole: "Senior Mathematics Teacher",
      authorAvatar: "RK",
      publishDate: "2025-01-12",
      readTime: "8 min read",
      category: "ai-education",
      categoryName: "AI in Education",
      image: "/placeholder.svg?height=300&width=500&text=AI+Classrooms+India",
      views: 1923,
      comments: 15,
    },
    {
      id: 3,
      title: "5 Signs Your Child Would Benefit from Personalized Learning",
      excerpt:
        "Learn to identify the key indicators that suggest your child could significantly benefit from a personalized adaptive learning approach.",
      author: "Anjali Gupta",
      authorRole: "Child Development Specialist",
      authorAvatar: "AG",
      publishDate: "2025-01-10",
      readTime: "6 min read",
      category: "pal",
      categoryName: "Personalized Learning",
      image: "/placeholder.svg?height=300&width=500&text=Child+Learning+Signs",
      views: 3156,
      comments: 28,
    },
    {
      id: 4,
      title: "The Future of Education: Why Traditional Methods Are Failing Our Children",
      excerpt:
        "An analysis of current educational challenges and how adaptive learning technology addresses the shortcomings of traditional teaching methods.",
      author: "Dr. Vikram Patel",
      authorRole: "Education Technology Researcher",
      authorAvatar: "VP",
      publishDate: "2025-01-08",
      readTime: "10 min read",
      category: "research",
      categoryName: "Educational Research",
      image: "/placeholder.svg?height=300&width=500&text=Future+of+Education",
      views: 2234,
      comments: 19,
    },
    {
      id: 5,
      title: "Success Story: How PAL Helped Arjun Improve His Math Scores by 45%",
      excerpt:
        "A detailed case study of how personalized adaptive learning transformed a struggling student's academic performance and confidence.",
      author: "Meera Singh",
      authorRole: "Academic Counselor",
      authorAvatar: "MS",
      publishDate: "2025-01-05",
      readTime: "7 min read",
      category: "student-success",
      categoryName: "Student Success",
      image: "/placeholder.svg?height=300&width=500&text=Student+Success+Story",
      views: 1876,
      comments: 12,
    },
    {
      id: 6,
      title: "10 Practical Tips for Implementing AI Tools in Your Classroom",
      excerpt:
        "A comprehensive guide for teachers looking to integrate AI-powered educational tools into their daily teaching practice.",
      author: "Sunita Reddy",
      authorRole: "Technology Integration Specialist",
      authorAvatar: "SR",
      publishDate: "2025-01-03",
      readTime: "9 min read",
      category: "teaching-tips",
      categoryName: "Teaching Tips",
      image: "/placeholder.svg?height=300&width=500&text=AI+Teaching+Tips",
      views: 2567,
      comments: 21,
    },
    {
      id: 7,
      title: "Understanding Learning Styles: How PAL Adapts to Every Student",
      excerpt:
        "Explore how personalized adaptive learning technology identifies and accommodates different learning styles for optimal educational outcomes.",
      author: "Dr. Kavita Joshi",
      authorRole: "Cognitive Learning Specialist",
      authorAvatar: "KJ",
      publishDate: "2025-01-01",
      readTime: "8 min read",
      category: "pal",
      categoryName: "Personalized Learning",
      image: "/placeholder.svg?height=300&width=500&text=Learning+Styles+PAL",
      views: 1654,
      comments: 16,
    },
  ]

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "all" || post.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  return (
    <div className="flex flex-col min-h-screen pt-16">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 px-6 bg-gradient-to-br from-blue-50 to-purple-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-blue-100 text-blue-800 px-4 py-2">EDUCATION INSIGHTS</Badge>
              <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
                The Mentora AI <span className="text-blue-600">Education Blog</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Discover the latest insights on personalized adaptive learning, AI in education, and how technology is
                transforming the way students learn and teachers teach.
              </p>

              {/* Search Bar */}
              <div className="relative max-w-2xl mx-auto">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-3 text-lg border-2 border-gray-200 focus:border-blue-500 rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-8 px-6 bg-white border-b">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === category.id
                      ? "bg-blue-600 text-white shadow-lg"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Post */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-2 mb-8">
              <TrendingUp className="w-5 h-5 text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-900">Featured Article</h2>
            </div>

            <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="relative">
                  <img
                    src={featuredPost.image || "/placeholder.svg"}
                    alt={featuredPost.title}
                    className="w-full h-64 lg:h-full object-cover"
                  />
                  <Badge className="absolute top-4 left-4 bg-blue-600 text-white">Featured</Badge>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="secondary" className="bg-purple-100 text-purple-800">
                      {featuredPost.categoryName}
                    </Badge>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {formatDate(featuredPost.publishDate)}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {featuredPost.readTime}
                      </div>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-tight">{featuredPost.title}</h3>

                  <p className="text-gray-600 mb-6 leading-relaxed">{featuredPost.excerpt}</p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Avatar className="w-10 h-10">
                        <AvatarFallback className="bg-blue-100 text-blue-600 font-semibold">
                          {featuredPost.authorAvatar}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold text-gray-900">{featuredPost.author}</p>
                        <p className="text-sm text-gray-600">{featuredPost.authorRole}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Eye className="w-4 h-4" />
                        {featuredPost.views.toLocaleString()}
                      </div>
                      <div className="flex items-center gap-1">
                        <MessageCircle className="w-4 h-4" />
                        {featuredPost.comments}
                      </div>
                    </div>
                  </div>

                  <Link href={`/blog/${featuredPost.id}`}>
                    <Button className="w-full mt-6 bg-blue-600 hover:bg-blue-700">
                      Read Full Article
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-gray-900">Latest Articles</h2>
              <p className="text-gray-600">
                {filteredPosts.length} article{filteredPosts.length !== 1 ? "s" : ""} found
              </p>
            </div>

            {filteredPosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post) => (
                  <Card key={post.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
                    <div className="relative">
                      <img
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <Badge variant="secondary" className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm">
                        {post.categoryName}
                      </Badge>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {formatDate(post.publishDate)}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {post.readTime}
                        </div>
                      </div>

                      <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight group-hover:text-blue-600 transition-colors">
                        {post.title}
                      </h3>

                      <p className="text-gray-600 text-sm mb-4 leading-relaxed">{post.excerpt}</p>

                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                          <Avatar className="w-8 h-8">
                            <AvatarFallback className="bg-gray-100 text-gray-600 text-xs font-semibold">
                              {post.authorAvatar}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="text-sm font-medium text-gray-900">{post.author}</p>
                            <p className="text-xs text-gray-500">{post.authorRole}</p>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3 text-xs text-gray-500">
                          <div className="flex items-center gap-1">
                            <Eye className="w-3 h-3" />
                            {post.views.toLocaleString()}
                          </div>
                          <div className="flex items-center gap-1">
                            <MessageCircle className="w-3 h-3" />
                            {post.comments}
                          </div>
                        </div>

                        <Link href={`/blog/${post.id}`}>
                          <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700 p-0">
                            Read More
                            <ArrowRight className="w-3 h-3 ml-1" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No articles found</h3>
                <p className="text-gray-600 mb-6">
                  We couldn't find any articles matching your search criteria. Try different keywords or browse all
                  categories.
                </p>
                <Button
                  onClick={() => {
                    setSearchTerm("")
                    setSelectedCategory("all")
                  }}
                  variant="outline"
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-16 px-6 bg-blue-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Stay Updated with Educational Insights</h2>
            <p className="text-xl text-blue-100 mb-8">
              Get the latest articles on personalized learning, AI in education, and teaching strategies delivered to
              your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input type="email" placeholder="Enter your email address" className="flex-1 bg-white border-white" />
              <Button className="bg-white text-blue-600 hover:bg-gray-100 font-semibold">Subscribe</Button>
            </div>
            <p className="text-blue-100 text-sm mt-4">Join 10,000+ educators and parents. Unsubscribe anytime.</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
