"use client"

import { useEffect, useRef } from "react"
import { MessageSquare, ShieldCheck, Users } from "lucide-react"

const strengths = [
  {
    icon: MessageSquare,
    title: "専門用語を共通言語へ",
    description:
      "技術的な専門用語を、お客様にもわかりやすい言葉に翻訳。対話を通じて認識のズレを防ぎ、プロジェクトを確実に前進させます。",
  },
  {
    icon: ShieldCheck,
    title: "大規模案件を支える管理の作法",
    description:
      "官公庁・大企業案件で培った高品質なPM/PMO標準。確実な進捗管理と品質保証で、複雑なプロジェクトを成功に導きます。",
  },
  {
    icon: Users,
    title: "現場が使い続けられる設計思想",
    description:
      "公務員経験から得た「現場目線」のUI/UX設計。ユーザーが本当に使いやすい、持続可能なシステムを構築します。",
  },
]

export function StrengthsSection() {
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
    <section ref={sectionRef} className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="animate-on-scroll opacity-0 text-sm font-medium text-accent uppercase tracking-wider mb-3">
            Our Strengths
          </p>
          <h2 className="animate-on-scroll opacity-0 animation-delay-100 text-2xl md:text-3xl font-bold text-foreground text-balance">
            私たちが選ばれる理由
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {strengths.map((strength, index) => (
            <div
              key={strength.title}
              className={`animate-on-scroll opacity-0 animation-delay-${(index + 1) * 100} bg-background p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow`}
            >
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-6">
                <strength.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3">{strength.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">{strength.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
