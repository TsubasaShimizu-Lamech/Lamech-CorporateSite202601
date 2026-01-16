"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Send, CheckCircle } from "lucide-react"

export function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isSubmitted, setIsSubmitted] = useState(false)

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
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
          {isSubmitted ? (
            <div className="animate-on-scroll opacity-0 bg-background rounded-2xl p-8 text-center">
              <CheckCircle className="w-16 h-16 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-2">送信完了</h3>
              <p className="text-muted-foreground">
                お問い合わせありがとうございます。
                <br />
                2営業日以内にご連絡いたします。
              </p>
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
                  <Input id="name" required placeholder="山田 太郎" className="bg-secondary border-border" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company" className="text-foreground">
                    会社名
                  </Label>
                  <Input id="company" placeholder="株式会社〇〇" className="bg-secondary border-border" />
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
                  placeholder="example@email.com"
                  className="bg-secondary border-border"
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
                />
              </div>

              <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                送信する
                <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
