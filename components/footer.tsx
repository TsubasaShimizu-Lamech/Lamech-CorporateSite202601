import Link from "next/link"
import Image from "next/image"
import { imagePath } from "@/lib/utils"

const footerLinks = [
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#case-study", label: "Case Study" },
  { href: "#contact", label: "Contact" },
]

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          {/* Logo & Company Info */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <Image
                src={imagePath("/images/lamech-logo-new.png")}
                alt="Lamech"
                width={140}
                height={40}
                className="h-10 w-auto object-contain brightness-0 invert"
              />
            </Link>
            <p className="text-background/70 text-sm">
              株式会社Lamech
              <br />
              〒634-0803 奈良県橿原市上品寺町81-16-201
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold mb-4">Links</h4>
            <nav className="flex flex-col gap-2">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-background/70 hover:text-background transition-colors text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <p className="text-background/70 text-sm">
              お問い合わせは
              <br />
              フォームよりお願いいたします。
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-background/20 text-center">
          <p className="text-background/50 text-sm">
            © {new Date().getFullYear()} 株式会社Lamech. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
