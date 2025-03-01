export function About() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <div className="text-center">
        <img
          src="https://github.com/yourusername.png"
          alt="Profile"
          className="w-32 h-32 rounded-full mx-auto mb-4"
        />
        <h1 className="text-3xl font-bold mb-2">John Doe</h1>
        <p className="text-gray-600 mb-6">
          Passionate food enthusiast and recipe creator. I love experimenting with new flavors
          and sharing my culinary adventures with the world.
        </p>
        
        <div className="space-y-2">
          <p>
            <span className="font-semibold">Email:</span>{" "}
            <a href="mailto:john@example.com" className="text-blue-600 hover:underline">
              john@example.com
            </a>
          </p>
          <p>
            <span className="font-semibold">Website:</span>{" "}
            <a href="https://johndoe.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              johndoe.com
            </a>
          </p>
          <p>
            <span className="font-semibold">GitHub:</span>{" "}
            <a href="https://github.com/johndoe" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              github.com/johndoe
            </a>
          </p>
          <p>
            <span className="font-semibold">LinkedIn:</span>{" "}
            <a href="https://linkedin.com/in/johndoe" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              linkedin.com/in/johndoe
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}