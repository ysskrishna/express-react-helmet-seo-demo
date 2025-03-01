export function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-12">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-gray-400">
              Discover delicious recipes and improve your cooking skills with our 
              collection of tested recipes from around the world.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-400 hover:text-white transition">
                  Home
                </a>
              </li>
              <li>
                <a href="/recipes" className="text-gray-400 hover:text-white transition">
                  Recipes
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-400 hover:text-white transition">
                  About
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" 
                   className="text-gray-400 hover:text-white transition">
                  Twitter
                </a>
              </li>
              <li>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
                   className="text-gray-400 hover:text-white transition">
                  Facebook
                </a>
              </li>
              <li>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                   className="text-gray-400 hover:text-white transition">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Recipe App. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}