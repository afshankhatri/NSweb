import  { useState, useEffect } from "react";
import React from "react";
import Navbar from "./components/Navbar";
import LoadingAnimation from "./components/LoadingAnimation";
import Hero from "./components/Hero";
import YouTubeSection from "./components/YouTubeSection";
import IntroVideos from "./components/IntroVideos";
import Projects from "./components/Projects";
import ArtGallery from './components/ArtGallery';
import AboutMe from "./components/AboutMe";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading animation duration (adjust as needed)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000); // 3 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative dynamic-bg overflow-x-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-sky-200/50 via-green-200/50 to-yellow-200/50 animate-gradient-xy" />

      <div className="relative">
        {isLoading ? (
          <LoadingAnimation />
        ) : (
          <>
            <Navbar />
            <Hero />
            <YouTubeSection />
            <IntroVideos />
            <Projects />
            <ArtGallery /> 
            <AboutMe />  
            <Blog />          
            <Contact />
            <Footer />
          </>
        )}
      </div>
    </div>
  );
}

export default App;


// import React from 'react';
// import Navbar from './components/Navbar';
// import LoadingAnimation from './components/LoadingAnimation';
// import Hero from './components/Hero';
// import YouTubeSection from './components/YouTubeSection';
// import IntroVideos from './components/IntroVideos';
// import Projects from './components/Projects';
// import AboutMe from './components/AboutMe';
// import Blog from './components/Blog';
// import ArtGallery from './components/ArtGallery';
// import Contact from './components/Contact';
// import Footer from './components/Footer';

// function App() {
//   return (
//     <div className="relative dynamic-bg">
//       <div className="absolute inset-0 bg-gradient-to-br from-sky-200/50 via-green-200/50 to-yellow-200/50 animate-gradient-xy" />
//       <div className="relative">
//         <LoadingAnimation />
//         <Navbar />
//         <Hero />
//         <YouTubeSection />
//         <IntroVideos />
//         <Projects />
//         <AboutMe />
//         <Blog />
//         <ArtGallery />
//         <Contact />
//         <Footer />
//       </div>
//     </div>
//   );
// }

// export default App;