"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { X, Settings, Cookie } from "lucide-react"

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [preferences, setPreferences] = useState({
    necessary: true,
    functional: false,
    analytics: false,
    marketing: false,
  })

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent")
    if (!consent) {
      setShowBanner(true)
    }
  }, [])

  const handleAcceptAll = () => {
    const allPreferences = {
      necessary: true,
      functional: true,
      analytics: true,
      marketing: true,
    }
    setPreferences(allPreferences)
    localStorage.setItem("cookie-consent", JSON.stringify(allPreferences))
    setShowBanner(false)
  }

  const handleAcceptSelected = () => {
    localStorage.setItem("cookie-consent", JSON.stringify(preferences))
    setShowBanner(false)
    setShowSettings(false)
  }

  const handleDeclineAll = () => {
    const minimalPreferences = {
      necessary: true,
      functional: false,
      analytics: false,
      marketing: false,
    }
    setPreferences(minimalPreferences)
    localStorage.setItem("cookie-consent", JSON.stringify(minimalPreferences))
    setShowBanner(false)
  }

  if (!showBanner) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-black/50 backdrop-blur-sm">
      <Card className="max-w-4xl mx-auto p-6 shadow-2xl border-2 border-blue-200">
        <div className="flex items-start gap-4">
          <Cookie className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">We Value Your Privacy</h3>
            <p className="text-gray-600 mb-4">
              We use cookies to enhance your experience, analyze site usage, and assist in our marketing efforts. By
              continuing to use our site, you consent to our use of cookies.{" "}
              <a href="/privacy" className="text-blue-600 hover:underline">
                Learn more
              </a>
            </p>

            {showSettings && (
              <div className="space-y-4 mb-4 p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center justify-between">
                  <Label htmlFor="necessary" className="font-medium">
                    Necessary Cookies
                  </Label>
                  <Switch id="necessary" checked={preferences.necessary} disabled />
                </div>
                <p className="text-sm text-gray-600">
                  Required for basic site functionality and security. Cannot be disabled.
                </p>

                <div className="flex items-center justify-between">
                  <Label htmlFor="functional" className="font-medium">
                    Functional Cookies
                  </Label>
                  <Switch
                    id="functional"
                    checked={preferences.functional}
                    onCheckedChange={(checked) => setPreferences({ ...preferences, functional: checked })}
                  />
                </div>
                <p className="text-sm text-gray-600">
                  Remember your preferences and provide enhanced features like language selection.
                </p>

                <div className="flex items-center justify-between">
                  <Label htmlFor="analytics" className="font-medium">
                    Analytics Cookies
                  </Label>
                  <Switch
                    id="analytics"
                    checked={preferences.analytics}
                    onCheckedChange={(checked) => setPreferences({ ...preferences, analytics: checked })}
                  />
                </div>
                <p className="text-sm text-gray-600">
                  Help us understand how you use our site to improve user experience.
                </p>

                <div className="flex items-center justify-between">
                  <Label htmlFor="marketing" className="font-medium">
                    Marketing Cookies
                  </Label>
                  <Switch
                    id="marketing"
                    checked={preferences.marketing}
                    onCheckedChange={(checked) => setPreferences({ ...preferences, marketing: checked })}
                  />
                </div>
                <p className="text-sm text-gray-600">
                  Used to show you relevant ads and measure advertising effectiveness.
                </p>
              </div>
            )}

            <div className="flex flex-wrap gap-3">
              <Button onClick={handleAcceptAll} className="bg-blue-600 hover:bg-blue-700 text-white">
                Accept All
              </Button>
              <Button
                variant="outline"
                onClick={() => setShowSettings(!showSettings)}
                className="border-blue-600 text-blue-600 hover:bg-blue-50"
              >
                <Settings className="w-4 h-4 mr-2" />
                Customize
              </Button>
              {showSettings && (
                <Button onClick={handleAcceptSelected} className="bg-green-600 hover:bg-green-700 text-white">
                  Accept Selected
                </Button>
              )}
              <Button variant="outline" onClick={handleDeclineAll} className="text-gray-600 bg-transparent">
                Decline All
              </Button>
            </div>
          </div>
          <Button variant="ghost" size="icon" onClick={() => setShowBanner(false)} className="hover:bg-gray-100">
            <X className="w-5 h-5" />
          </Button>
        </div>
      </Card>
    </div>
  )
}

export default CookieConsent
