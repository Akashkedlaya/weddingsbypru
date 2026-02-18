import { Instagram, Mail, Phone } from 'lucide-react'

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div>
            <h3 className="text-2xl font-serif mb-4">Weddings by Pru</h3>
            <p className="text-gray-400">
              Capturing timeless moments and creating beautiful memories
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-2">
              <a href="mailto:pruthvi@weddingsbypru.com" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                <Mail size={18} />
                <span>pruthvi@weddingsbypru.com</span>
              </a>
              <a href="tel:+919538939944" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                <Phone size={18} />
                <span>+91 919538939944</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
              <Instagram size={18} />
              <span>@weddingsbypru</span>
            </a>
          </div>

        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>© 2026 Weddings by Pru. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer