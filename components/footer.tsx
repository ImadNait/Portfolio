import { Github, Linkedin, Mail } from "lucide-react"

function XIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 bg-muted/30">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-muted-foreground">© {currentYear} ImadNait, Built with NextJS and Tailwind.</p>
          <div className="flex items-center space-x-4">
            <a
              href="https://github.com/ImadNait"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 transition-colors rounded-full hover:bg-muted hover:text-primary"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/imadnaitmihoub/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 transition-colors rounded-full hover:bg-muted hover:text-primary"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="https://x.com/naitmihoub"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 transition-colors rounded-full hover:bg-muted hover:text-primary"
              aria-label="X (Twitter)"
            >
              <XIcon size={18} />
            </a>
            <a
              href="mailto:naitmihoubimzd@gmail.com"
              className="p-2 transition-colors rounded-full hover:bg-muted hover:text-primary"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
