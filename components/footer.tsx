import { GraduationCap, Mail, Phone, MapPin, Facebook, Youtube, Linkedin } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-primary-dark text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <GraduationCap className="h-8 w-8" />
              <span className="text-xl font-bold">DUTCareers</span>
            </div>
            <p className="text-sm text-white/80">Nền tảng việc làm chính thức của Đại học Bách khoa Đà Nẵng</p>
          </div>

          <div>
            <h3 className="mb-4 font-bold uppercase">Liên kết</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-highlight transition-colors">
                  Tìm việc làm
                </Link>
              </li>
              <li>
                <Link href="/companies" className="hover:text-highlight transition-colors">
                  Doanh nghiệp
                </Link>
              </li>
              <li>
                <Link href="/events" className="hover:text-highlight transition-colors">
                  Sự kiện
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-highlight transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-bold uppercase">Hỗ trợ</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-highlight transition-colors">
                  Về chúng tôi
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-highlight transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-highlight transition-colors">
                  Điều khoản
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-highlight transition-colors">
                  Chính sách
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-bold uppercase">Liên hệ</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>54 Nguyễn Lương Bằng, Đà Nẵng</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>(0236) 3736 666</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>careers@dut.udn.vn</span>
              </li>
            </ul>
            <div className="mt-4 flex gap-3">
              <Link href="#" className="hover:text-highlight transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="hover:text-highlight transition-colors">
                <Youtube className="h-5 w-5" />
              </Link>
              <Link href="#" className="hover:text-highlight transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-white/20 pt-8 text-center text-sm text-white/60">
          <p>© 2025 DUTCareers - Đại học Bách khoa Đà Nẵng. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
