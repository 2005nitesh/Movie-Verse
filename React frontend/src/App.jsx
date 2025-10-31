import './css/App.css'
import Home from "./Pages/HomePage.jsx"
import Favorites from "./Pages/FavoritePage.jsx"
import { Routes, Route } from "react-router-dom"
import { MovieProvider } from "./Contexts/MovieContext.jsx"
import NavBar from "./Components/NavBar.jsx";

function App() {

  return (
    <MovieProvider>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </main>
    </MovieProvider>
  )
}

export default App;
