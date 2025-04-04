import { SEO } from '../components/SEO';

export function Creator() {
  const userData = {
    name: "Y. Siva Sai Krishna",
    image: "https://github.com/ysskrishna.png",
    bio: "Full stack developer specialized in creating cutting-edge web scalable applications. Proficient in SQL, Node.js, Python (Flask, FastAPI), React, Redux and Distributed Systems",
    email: "sivasaikrishnassk@gmail.com",
    website: "https://bento.me/ysskrishna",
    github: "https://github.com/ysskrishna",
    linkedin: "https://linkedin.com/in/ysskrishna",
    producthunt: "https://www.producthunt.com/@ysskrishna/submitted",
    youtube: "https://www.youtube.com/@ysskrishna",
  }
  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <SEO
        title="Creator"
        description={userData.bio}
        ogImage={userData.image}
        ogType="profile"
        canonicalUrl={`${window.location.origin}/creator`}
      />
      <div className="text-center">
        <img
          src={userData.image}
          alt={`${userData.name}'s Profile`}
          className="w-32 h-32 rounded-full mx-auto mb-4"
        />
        <h1 className="text-3xl font-bold mb-2">{userData.name}</h1>
        <p className="text-gray-600 mb-6">
          {userData.bio}
        </p>
        
        <div className="space-y-2">
          <p>
            <span className="font-semibold">Email:</span>{" "}
            <a href={`mailto:${userData.email}`} className="text-blue-600 hover:underline">
              {userData.email}
            </a>
          </p>
          <p>
            <span className="font-semibold">Website:</span>{" "}
            <a href={userData.website} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              {userData.website}
            </a>
          </p>
          <p>
            <span className="font-semibold">GitHub:</span>{" "}
            <a href={userData.github} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              {userData.github}
            </a>
          </p>
          <p>
            <span className="font-semibold">LinkedIn:</span>{" "}
            <a href={userData.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              {userData.linkedin}
            </a>
          </p>
          <p>
            <span className="font-semibold">Product Hunt:</span>{" "}
            <a href={userData.producthunt} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              {userData.producthunt}
            </a>
          </p>
          <p>
            <span className="font-semibold">YouTube:</span>{" "}
            <a href={userData.youtube} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              {userData.youtube}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}