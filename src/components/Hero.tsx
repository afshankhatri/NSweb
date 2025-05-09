import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { ChevronLeft, ChevronRight, Youtube, Palette, Code, Camera, Star } from 'lucide-react';

import nilaxImg9 from "../assets/images/latestNILAX/WA0006.jpg"
import nilaxImg8 from "../assets/images/latestNILAX/WA0007.jpg"
import nilaxImg1 from "../assets/images/latestNILAX/WA0014.jpg"

const slides = [
  {
    title: "I AM NILAX",
    subtitle: " ",
    roles: ['A Youtuber', 'A Creative Minded Person', 'A Digital Artist', 'A Content Creator', 'An Innovator'],
    description: "Where imagination meets innovation",
    images: [
      nilaxImg9,
      nilaxImg8,
      nilaxImg1
    ],
    bgColor: "from-blue-50 via-purple-50 to-pink-50"
  },
  {
    title: "Hi, I'm Nilax",
    subtitle: "Welcome to My Creative Universe!",
    description: "Brilliant Ideas, Bold Art, Endless Creativity...",
    subtext: "From the mind of Nilax, where imagination meets innovation",
    images: [
      nilaxImg8,
      nilaxImg1,
      nilaxImg9
    ],
    bgColor: "from-green-50 via-blue-50 to-yellow-50"
  },
  {
    title: "I AM NILAX",
    subtitle: "Brilliant Ideas, Bold Art, Endless Creativity...",
    description: "I’m a learner who loves exploring, creating, and bringing ideas to life",
    images: [
      nilaxImg1,
      nilaxImg9,
      nilaxImg8
    ],
    bgColor: "from-yellow-50 via-green-50 to-blue-50"
  }
];

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentRole, setCurrentRole] = useState(0);
  const [currentImage, setCurrentImage] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();

  const y = useTransform(scrollY, [0, 600], [0, 400]);
  const opacity = useTransform(scrollY, [0, 600], [1, 0]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const moveX = (clientX - window.innerWidth / 2) * 0.05;
    const moveY = (clientY - window.innerHeight / 2) * 0.05;
    setMousePosition({ x: moveX, y: moveY });
  };

  // Role animation interval
  useEffect(() => {
    if (currentSlide === 0) {
      const roleInterval = setInterval(() => {
        setCurrentRole((prev) => (prev + 1) % (slides[0].roles?.length || 1));
      }, 3000);
      return () => clearInterval(roleInterval);
    }
  }, [currentSlide]);

  // Image animation interval
  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % slides[currentSlide].images.length);
    }, 4000); // Change image every 4 seconds
    return () => clearInterval(imageInterval);
  }, [currentSlide]);

  // Comment out or remove this useEffect to disable auto-scroll
  // useEffect(() => {
  //   const slideInterval = setInterval(() => {
  //     setCurrentSlide((prev) => (prev + 1) % slides.length);
  //     setCurrentImage(0); // Reset image index on slide change
  //   }, 12000); // Increased to 12 seconds to allow for image transitions
  //   return () => clearInterval(slideInterval);
  // }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setCurrentImage(0);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setCurrentImage(0);
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden ">
      Hero Section
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 5 }}  // Manage time of appearing of hero section here
        className="min-h-[15vh] relative overflow-hidden overflow-x-hidden bg-white " // changed here
        onMouseMove={handleMouseMove}
        id="home"
      >
        {/* Content for Hero Section (Optional, add any relevant content here) */}
      </motion.section>

      <motion.div 
        className={`absolute inset-0 bg-gradient-to-br ${slides[currentSlide].bgColor}`}
        initial={false}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <motion.div 
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.8)_0%,transparent_100%)]"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5 }}
        />
      </motion.div>

      {/* Carousel Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        {/* Navigation Buttons */}
        <motion.button
          onClick={prevSlide}
          className="absolute left-2 lg:left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/80 hover:bg-white shadow-lg z-10"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronLeft className="w-6 h-6" />
        </motion.button>
        <motion.button
          onClick={nextSlide}
          className="absolute right-2 lg:right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/80 hover:bg-white shadow-lg z-10"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronRight className="w-6 h-6" />
        </motion.button>

        {/* Carousel Frame */}
        <div className="bg-white/40 backdrop-blur-sm rounded-3xl overflow-hidden h-[calc(100vh-16rem)] shadow-2xl">
          <div className="relative h-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="absolute inset-0 grid grid-cols-1 lg:grid-cols-2"
              >
                {/* Text Content */}
                <div className="relative p-6 sm:p-12 lg:p-16 flex flex-col justify-center overflow-hidden">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="space-y-4 sm:space-y-6"
                  >
                    <motion.h1 
                        className="text-4xl sm:text-5xl lg:text-7xl font-bold bg-gradient-to-r from-sky-500 via-green-500 to-yellow-500 text-transparent bg-clip-text"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                      >
                      {slides[currentSlide].title}
                    </motion.h1>
                    <motion.h2 
                      className="text-xl sm:text-2xl lg:text-3xl text-gray-700 font-light"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.4, duration: 0.8 }}
                    >
                      {slides[currentSlide].subtitle}
                    </motion.h2>
                    <motion.div
                      className="text-lg sm:text-xl lg:text-2xl text-gray-600"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.5, duration: 0.8 }}
                    >
                      {currentSlide === 0 ? (
                        <motion.span
                          key={currentRole}
                          initial={{ x: -20, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          exit={{ x: 20, opacity: 0 }}
                          className="block text-purple-600 font-semibold"
                        >
                           {slides[0].roles && slides[0].roles[currentRole]}
                        </motion.span>
                      ) : (
                        <p>{slides[currentSlide].description}</p>
                      )}
                    </motion.div>
                    {slides[currentSlide].subtext && (
                      <motion.p
                        className="text-base sm:text-lg text-gray-500 italic"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                      >
                        {slides[currentSlide].subtext}
                      </motion.p>
                    )}
                  </motion.div>
                </div>

                {/* Image Section */}
                <div className="relative h-full overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-purple-100/20 to-blue-100/20"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                  />
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={`${currentSlide}-${currentImage}`}
                      src={slides[currentSlide].images[currentImage]}
                      alt={`Slide ${currentSlide + 1}`}
                      initial={{ scale: 1.1, opacity: 0, y: 20 }}
                      animate={{ scale: 1, opacity: 1, y: 0 }}
                      exit={{ scale: 0.9, opacity: 0, y: -20 }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className="w-full h-full object-cover"
                    />
                  </AnimatePresence>
                  <motion.div
                    className="absolute inset-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    style={{
                      background: 'linear-gradient(to right, rgba(255,255,255,0.1), transparent)',
                      boxShadow: 'inset 0 0 100px rgba(255,255,255,0.2)'
                    }}
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex items-center space-x-4">
          <div className="flex space-x-3">
            {slides.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => {
                  setCurrentSlide(index);
                  setCurrentImage(0);
                }}
                className={`h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index 
                    ? 'bg-purple-600 w-8' 
                    : 'bg-gray-300 hover:bg-gray-400 w-3'
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;