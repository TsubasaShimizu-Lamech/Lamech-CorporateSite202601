"use client"

import { useEffect, useRef } from "react"
import { Quote } from "lucide-react"

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)

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

  return (
    <section ref={sectionRef} id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="animate-on-scroll opacity-0 text-sm font-medium text-accent uppercase tracking-wider mb-3">
            About
          </p>
          <h2 className="animate-on-scroll opacity-0 animation-delay-100 text-2xl md:text-3xl font-bold text-foreground text-balance">
            会社について
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* CEO Photo Placeholder */}
            <div className="animate-on-scroll opacity-0">
              <div className="aspect-[4/5] bg-secondary rounded-2xl overflow-hidden relative">
                <img src="/professional-japanese-businessman-in-navy-suit.jpg" alt="CEO 清水翼" className="w-full h-full object-cover" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary/90 to-transparent p-6">
                  <p className="text-primary-foreground font-bold">清水 翼</p>
                  <p className="text-primary-foreground/80 text-sm">代表取締役</p>
                </div>
              </div>
            </div>

            {/* CEO Message */}
            <div className="animate-on-scroll opacity-0 animation-delay-200">
              <div className="mb-6">
                <Quote className="w-10 h-10 text-accent/30" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">代表メッセージ</h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed text-sm">
                <p>公務員として行政の現場で働いた経験から、「本当に使いやすいシステム」とは何かを追求してきました。</p>
                <p>
                  技術は手段であり、目的ではありません。お客様の課題を深く理解し、現場で本当に役立つソリューションを提供すること。それが私たちの使命です。
                </p>
                <p>「誠実」と「品質」を何より大切に、お客様と共に歩むパートナーでありたいと考えています。</p>
              </div>

              <div className="mt-8 pt-8 border-t border-border">
                <h4 className="font-bold text-foreground mb-4">会社概要</h4>
                <dl className="grid grid-cols-[auto,1fr] gap-x-6 gap-y-2 text-sm">
                  <dt className="text-muted-foreground">社名</dt>
                  <dd className="text-foreground">株式会社Lamech</dd>
                  <dt className="text-muted-foreground">代表</dt>
                  <dd className="text-foreground">清水 翼（Tsubasa Shimizu）</dd>
                  <dt className="text-muted-foreground">所在地</dt>
                  <dd className="text-foreground">奈良県橿原市</dd>
                  <dt className="text-muted-foreground">事業内容</dt>
                  <dd className="text-foreground">アプリ開発、システム開発、IT研修</dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
