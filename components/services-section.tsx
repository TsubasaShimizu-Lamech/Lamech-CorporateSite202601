"use client"

import { useEffect, useRef } from "react"
import { Smartphone, Server, Lightbulb, GraduationCap } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const developmentServices = [
  {
    icon: Smartphone,
    title: "アプリ開発",
    subtitle: "Flutter",
    description: "iOS/Android両対応のクロスプラットフォームアプリを効率的に開発",
  },
  {
    icon: Server,
    title: "バックエンド開発",
    subtitle: "Python / AWS",
    description: "スケーラブルで保守性の高いサーバーサイドシステムを構築",
  },
  {
    icon: Lightbulb,
    title: "DX支援",
    subtitle: "Digital Transformation",
    description: "業務プロセスのデジタル化と効率化をトータルサポート",
  },
]

const trainingServices = [
  {
    title: "エンジニア向け研修",
    description: "最新技術のハンズオントレーニングとベストプラクティス習得",
  },
  {
    title: "非IT人材向け研修",
    description: "ITリテラシー向上とデジタルツール活用スキルの習得支援",
  },
]

export function ServicesSection() {
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
    <section ref={sectionRef} id="services" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="animate-on-scroll opacity-0 text-sm font-medium text-accent uppercase tracking-wider mb-3">
            Services
          </p>
          <h2 className="animate-on-scroll opacity-0 animation-delay-100 text-2xl md:text-3xl font-bold text-foreground text-balance">
            サービス内容
          </h2>
        </div>

        {/* Development Services */}
        <div className="mb-16">
          <h3 className="animate-on-scroll opacity-0 text-xl font-bold text-foreground mb-8 flex items-center gap-3">
            <span className="w-8 h-[2px] bg-accent" />
            Development
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {developmentServices.map((service, index) => (
              <Card
                key={service.title}
                className={`animate-on-scroll opacity-0 animation-delay-${(index + 1) * 100} border-border hover:border-accent/30 transition-colors`}
              >
                <CardHeader>
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="w-5 h-5 text-accent" />
                  </div>
                  <CardTitle className="text-foreground">{service.title}</CardTitle>
                  <CardDescription className="text-accent font-medium">{service.subtitle}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Training Services */}
        <div>
          <h3 className="animate-on-scroll opacity-0 text-xl font-bold text-foreground mb-8 flex items-center gap-3">
            <span className="w-8 h-[2px] bg-accent" />
            Training
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {trainingServices.map((service, index) => (
              <Card
                key={service.title}
                className={`animate-on-scroll opacity-0 animation-delay-${(index + 1) * 100} border-border hover:border-accent/30 transition-colors`}
              >
                <CardHeader>
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                    <GraduationCap className="w-5 h-5 text-accent" />
                  </div>
                  <CardTitle className="text-foreground">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
