import AboutUsPage from "./pages/AboutUsPage";
import LandingPage from "./pages/LandingPage"
import { Routes, Route } from "react-router-dom";


const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutUsPage />} />

      </Routes>

    </>
  )
}

export default App
