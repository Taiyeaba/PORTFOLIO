import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skill from "./components/Skill";
import Project from "./components/Project";
import ShowAllProject from "./components/ShowAllProject";
import Features from "./components/Features";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { ThemeProvider } from "./components/ThemeProvider";


const App = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>

          {/* HOME PAGE */}
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Home />
                <Features />
                <About/>
                <div className="w-[80%] mx-auto mb-6">
                  <Skill />
                </div>
                <Project />
                <Contact />
                <Footer />
              </>
            }
          />

          {/* ALL PROJECTS PAGE (NO NAVBAR) */}
          <Route path="/projects" element={<ShowAllProject />} />

        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
