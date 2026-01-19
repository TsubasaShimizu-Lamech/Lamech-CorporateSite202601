"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Send, CheckCircle, Loader2, AlertCircle } from "lucide-react"

export function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    subject: "",
    message: "",
  })
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up")
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = sectionRef.current?.querySelectorAll(".animate-on-scroll")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData((prev) => ({ ...prev, [id]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("submitting")

    const formUrl =
      "https://docs.google.com/forms/d/e/1FAIpQLSf4tPkoi90mb_1HWLANxwpmENVPq_EmrTt1SlW5MO2ToC9a7A/formResponse"
    const form = new FormData()
    form.append("entry.440491378", formData.name)
    form.append("entry.2023816419", formData.email)
    form.append("entry.589339108", formData.message)
    form.append("entry.926209921", formData.company)
    form.append("entry.142479619", formData.subject)

    try {
      // CORS制約を回避するためにno-corsモードを使用
      await fetch(formUrl, {
        method: "POST",
        mode: "no-cors",
        body: form,
      })

      setStatus("success")
      setFormData({ name: "", company: "", email: "", subject: "", message: "" })
      // Display success message for a while (or permanently until refresh?)
      // The previous code showed a success screen. Let's stick to that but maybe allow resetting?
      // For now, let's follow the user's snippet which resets status to 'idle' after 5s?
      // Use logic: if success, show success message.
    } catch (error) {
      console.error(error)
      setStatus("error")
      setTimeout(() => setStatus("idle"), 5000)
    }
  }

  return (
    <section ref={sectionRef} id="contact" className="py-24 bg-primary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="animate-on-scroll opacity-0 text-sm font-medium text-accent uppercase tracking-wider mb-3">
            Contact
          </p>
          <h2 className="animate-on-scroll opacity-0 animation-delay-100 text-2xl md:text-3xl font-bold text-primary-foreground text-balance">
            お問い合わせ
          </h2>
          <p className="animate-on-scroll opacity-0 animation-delay-200 mt-4 text-primary-foreground/70 max-w-md mx-auto">
            プロジェクトのご相談、お見積もりなど、お気軽にお問い合わせください。
          </p>
        </div>

        <div className="max-w-lg mx-auto">
          {status === "success" ? (
            <div className="animate-on-scroll opacity-0 bg-background rounded-2xl p-8 text-center">
              <CheckCircle className="w-16 h-16 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-2">送信完了</h3>
              <p className="text-muted-foreground mb-6">
                お問い合わせありがとうございます。
                <br />
                2営業日以内にご連絡いたします。
              </p>
              <Button onClick={() => setStatus("idle")} variant="outline">
                フォームに戻る
              </Button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="animate-on-scroll opacity-0 bg-background rounded-2xl p-8 space-y-6"
            >
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-foreground">
                    お名前 <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="name"
                    required
                    placeholder="山田 太郎"
                    className="bg-secondary border-border"
                    value={formData.name}
                    onChange={handleChange}
                    disabled={status === "submitting"}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company" className="text-foreground">
                    会社名
                  </Label>
                  <Input
                    id="company"
                    placeholder="株式会社〇〇"
                    className="bg-secondary border-border"
                    value={formData.company}
                    onChange={handleChange}
                    disabled={status === "submitting"}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground">
                  メールアドレス <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="email"
                  type="email"
                  required
                  placeholder="email@example.com"
                  className="bg-secondary border-border"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={status === "submitting"}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject" className="text-foreground">
                  件名 <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="subject"
                  required
                  placeholder="お問い合わせ内容の件名"
                  className="bg-secondary border-border"
                  value={formData.subject}
                  onChange={handleChange}
                  disabled={status === "submitting"}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-foreground">
                  お問い合わせ内容 <span className="text-destructive">*</span>
                </Label>
                <Textarea
                  id="message"
                  required
                  rows={5}
                  placeholder="ご相談内容をご記入ください"
                  className="bg-secondary border-border resize-none"
                  value={formData.message}
                  onChange={handleChange}
                  disabled={status === "submitting"}
                />
              </div>

              {status === "error" && (
                <div className="flex items-center gap-2 text-destructive text-sm font-medium">
                  <AlertCircle className="w-4 h-4" />
                  送信中にエラーが発生しました。時間をおいて再度お試しください。
                </div>
              )}

              <Button
                type="submit"
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                disabled={status === "submitting"}
              >
                {status === "submitting" ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    送信中...
                  </>
                ) : (
                  <>
                    送信する
                    <Send className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
