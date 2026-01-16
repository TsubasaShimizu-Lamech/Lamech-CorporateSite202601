"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function HeroSection() {
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
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                className="text-primary-foreground"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="absolute top-20 left-10 opacity-5">
        <Image src="/images/lamech-icon.png" alt="" width={256} height={256} className="w-64 h-64 invert" />
      </div>
      <div className="absolute bottom-20 right-10 opacity-5">
        <Image src="/images/lamech-icon.png" alt="" width={384} height={384} className="w-96 h-96 invert" />
      </div>
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 opacity-[0.03]">
        <Image src="/images/lamech-icon.png" alt="" width={500} height={500} className="w-[500px] h-[500px] invert" />
      </div>

      <div className="container mx-auto px-6 py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-on-scroll opacity-0 flex justify-center mb-8">
            <Image
              src="/images/lamech-icon.png"
              alt="Lamech"
              width={96}
              height={112}
              className="w-20 h-24 md:w-24 md:h-28 invert"
            />
          </div>

          <h1 className="animate-on-scroll opacity-0 text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground leading-tight mb-6 text-balance">
            誰よりも丁寧な対話で、
            <br />
            ITの『難しい』を『価値』に変える。
          </h1>
          <p className="animate-on-scroll opacity-0 animation-delay-100 text-base md:text-lg text-primary-foreground/80 leading-relaxed mb-10 max-w-2xl mx-auto text-pretty">
            複雑な課題を解きほぐし、確実な実装と教育で組織の自走を支える。
            <br className="hidden md:block" />
            私たちは、技術と人の間に立つ『伴走型』ITパートナーです。
          </p>
          <div className="animate-on-scroll opacity-0 animation-delay-200 flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-background text-foreground hover:bg-background/90">
              <Link href="#services">
                サービスを見る
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
            >
              <Link href="#contact">お問い合わせ</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full mt-2" />
        </div>
      </div>
    </section>
  )
}
