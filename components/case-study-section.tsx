"use client"

import { useEffect, useRef } from "react"
import { Building2, Smartphone, Workflow } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const caseStudies = [
  {
    icon: Building2,
    category: "Government",
    title: "官公庁システム開発",
    description: "大規模な行政システムの設計・開発・保守を担当。セキュリティと使いやすさを両立したシステムを構築。",
    tags: ["大規模開発", "セキュリティ", "アクセシビリティ"],
  },
  {
    icon: Smartphone,
    category: "Enterprise",
    title: "企業向けアプリPM",
    description: "全国展開する企業の業務アプリケーション開発プロジェクトを統括。要件定義から運用まで一貫してサポート。",
    tags: ["PM/PMO", "Flutter", "チーム管理"],
  },
  {
    icon: Workflow,
    category: "Internal DX",
    title: "社内DX支援",
    description: "業務プロセスの可視化から改善提案、ツール導入まで。現場に寄り添ったDX推進を実現。",
    tags: ["業務改善", "研修", "ツール導入"],
  },
]

export function CaseStudySection() {
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
    <section ref={sectionRef} id="case-study" className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="animate-on-scroll opacity-0 text-sm font-medium text-accent uppercase tracking-wider mb-3">
            Case Study
          </p>
          <h2 className="animate-on-scroll opacity-0 animation-delay-100 text-2xl md:text-3xl font-bold text-foreground text-balance">
            実績紹介
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <div
              key={study.title}
              className={`animate-on-scroll opacity-0 animation-delay-${(index + 1) * 100} bg-background rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group`}
            >
              <div className="h-48 bg-primary relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <study.icon className="w-16 h-16 text-primary-foreground/20" />
                </div>
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="bg-background/90 text-foreground">
                    {study.category}
                  </Badge>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-3">{study.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{study.description}</p>
                <div className="flex flex-wrap gap-2">
                  {study.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs border-accent/30 text-accent">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
