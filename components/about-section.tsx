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
            Lamech-レメク-について
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* CEO Message */}
          <div className="animate-on-scroll opacity-0">
            <div className="bg-secondary/30 rounded-2xl p-8 md:p-12 border border-border">
              <div className="mb-6">
                <Quote className="w-10 h-10 text-accent/30" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">代表メッセージ</h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>公務員として行政の現場で働いた経験から、「本当に使いやすいシステム」とは何かを追求してきました。</p>
                <p>
                  技術は手段であり、目的ではありません。お客様の課題を深く理解し、現場で本当に役立つソリューションを提供すること。それが私たちの使命です。
                </p>
                <p>「誠実」と「品質」を何より大切に、お客様と共に歩むパートナーでありたいと考えています。</p>
              </div>
              <p className="mt-6 text-foreground font-medium">代表取締役  清水 翼</p>
            </div>

            <div className="mt-12 grid md:grid-cols-2 gap-8">
              <div className="bg-background rounded-xl p-6 border border-border">
                <h4 className="font-bold text-foreground mb-4">会社概要</h4>
                <dl className="grid grid-cols-[auto,1fr] gap-x-6 gap-y-3 text-sm">
                  <dt className="text-muted-foreground">社名</dt>
                  <dd className="text-foreground">株式会社Lamech(レメク)</dd>
                  <dt className="text-muted-foreground">代表</dt>
                  <dd className="text-foreground">清水 翼（Tsubasa Shimizu）</dd>
                  <dt className="text-muted-foreground">所在地</dt>
                  <dd className="text-foreground">〒634-0803 奈良県橿原市上品寺町81-16-201</dd>
                  <dt className="text-muted-foreground">事業内容</dt>
                  <dd className="text-foreground">アプリ開発、システム開発、IT研修</dd>
                </dl>
              </div>
              <div className="bg-background rounded-xl p-6 border border-border">
                <h4 className="font-bold text-foreground mb-4">代表プロフィール</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  元公務員として行政機関で勤務した後、IT業界へ転身。現場視点を大切にしたシステム開発と、わかりやすいIT研修に定評がある。Flutter、Python、AWSを中心とした技術スタックで、官公庁・企業のDX推進をサポート。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
