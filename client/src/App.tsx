import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Recipes } from './pages/Recipes';
import { RecipeDetail } from './pages/RecipeDetail';
import { Creator } from './pages/Creator';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
function App() {

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Header />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/recipes" element={<Recipes />} />
            <Route path="/recipe/:slug" element={<RecipeDetail />} />
            <Route path="/creator" element={<Creator />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;