export function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-12">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-gray-400">
              This is a demo application showcasing the Express React Typescript SEO Starter template.
              The recipe sharing platform demonstrates advanced SEO optimization, TypeScript integration,
              and modern React best practices.
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
                <a href="/creator" className="text-gray-400 hover:text-white transition">
                  Creator
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Creator</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://bento.me/ysskrishna" target="_blank" rel="noopener noreferrer"
                   className="text-gray-400 hover:text-white transition">
                  Website
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/ysskrishna/" target="_blank" rel="noopener noreferrer" 
                   className="text-gray-400 hover:text-white transition">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://github.com/ysskrishna" target="_blank" rel="noopener noreferrer"
                   className="text-gray-400 hover:text-white transition">
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://www.producthunt.com/@ysskrishna/submitted" target="_blank" rel="noopener noreferrer"
                   className="text-gray-400 hover:text-white transition">
                  Product Hunt
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/@ysskrishna" target="_blank" rel="noopener noreferrer"
                   className="text-gray-400 hover:text-white transition">
                  YouTube
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Featured On</h3>
            <a href="https://www.producthunt.com/posts/directory-printer?embed=true&utm_source=badge-featured&utm_medium=badge&utm_souce=badge-directory&#0045;printer" target="_blank" rel="noopener noreferrer">
              <img 
                src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=867506&theme=light&t=1739465160860" 
                alt="Directory&#0032;Printer - Desktop&#0032;app&#0032;for&#0032;viewing&#0032;and&#0032;exporting&#0032;directory&#0032;structures | Product Hunt" 
                style={{ width: '250px', height: '54px' }} 
                width="250" 
                height="54" 
              />
            </a>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} ysskrishna. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}