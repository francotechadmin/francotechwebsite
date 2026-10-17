export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 px-6 py-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between text-xs text-gray-600">
        <span className="text-gray-500">© {new Date().getFullYear()} Gabriel Franco</span>
        <a
          href="mailto:francotechnologiesllc@gmail.com"
          className="text-gray-600 hover:text-primary transition-colors duration-200"
        >
          francotechnologiesllc@gmail.com
        </a>
      </div>
    </footer>
  )
}
