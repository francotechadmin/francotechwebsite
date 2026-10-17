export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 px-6 py-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-600">
        <span className="font-medium text-gray-400">Gabriel Franco &mdash; Houston, TX</span>
        <a
          href="mailto:francotechnologiesllc@gmail.com"
          className="text-gray-500 hover:text-primary transition-colors duration-200"
        >
          francotechnologiesllc@gmail.com
        </a>
        <span>&copy; {new Date().getFullYear()} Franco Technologies</span>
      </div>
    </footer>
  )
}
