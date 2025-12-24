import { Container } from '../ui/Container'
import { Github, Twitter } from 'lucide-react'

const footerLinks = {
  product: [
    { name: 'Features', href: '#features' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Use Cases', href: '#use-cases' },
  ],
  resources: [
    { name: 'Documentation', href: '#' },
    { name: 'API Reference', href: '#' },
    { name: 'Blog', href: '#' },
  ],
  company: [
    { name: 'About', href: '#' },
    { name: 'Careers', href: '#' },
    { name: 'Contact', href: '#' },
  ],
  legal: [
    { name: 'Privacy', href: '#' },
    { name: 'Terms', href: '#' },
    { name: 'Security', href: '#' },
  ],
}

export function Footer() {
  return (
    <footer className="bg-slate-950 text-gray-400">
      <Container>
        <div className="py-12">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            <div className="col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <img src="/logo.webp" alt="Sora2 Logo" className="h-8 w-auto" />
              </div>
              <p className="text-sm text-gray-500 mb-4">
                Create cinematic videos with synced audio using AI. Realistic physics, consistent characters, and multi-shot control.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-blue-400 transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-sm">
                {footerLinks.product.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="hover:text-blue-400 transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-sm">
                {footerLinks.resources.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="hover:text-blue-400 transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="hover:text-blue-400 transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-blue-500/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-500">
              © 2024 Sora2. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0 text-sm">
              {footerLinks.legal.map((link) => (
                <a key={link.name} href={link.href} className="hover:text-blue-400 transition-colors">
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}
