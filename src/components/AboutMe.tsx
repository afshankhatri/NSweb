import React, { useState, useEffect, useRef } from 'react';
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { Youtube, Palette, Trophy, Globe2, Brain, Book, PenTool, Lightbulb, Layers, BarChart, Code, Server, Rocket ,ChevronLeft, ChevronRight, Globe, Space } from "lucide-react";
import nilaxImage from "../assets/images/animationGif.gif"
import space from "../assets/images/space.jpg"
import atomicHabit from "../assets/images/nilaxImages/atomicHabit.jpg"
import zomato from "../assets/images/zomato.jpeg"
import zomatoVideo from "../assets/videos/zomatovideo.mp4"
import altmat from "../assets/images/altmat.png"
import altmatVideo from "../assets/videos/altmatvideo.mp4"
import SevHabits from "../assets/images/7habits.jpg"
import richPoorDad from "../assets/images/richpoordad.jpg"
import hobbit from "../assets/images/hobbiy.jpg"
import LOR from "../assets/images/lordOfRings.jpg"
import silmarillion from "../assets/images/silmarillion.jpg"
import jungleBook from "../assets/images/jungleBook.jpg"
import theTale from "../assets/images/theTale.jpg"
import geetabyswami from "../assets/images/geetabyswami.jpg"
import republicPlato from "../assets/images/repulicofplato.webp"
import karma from "../assets/images/karma.webp"
import secret from "../assets/images/secret.jpg"
import howTotalk from "../assets/images/howtotalktoanyone.jpg"
import ikigai from "../assets/images/ikigai.jpg"
import transformers from "../assets/images/transformers.webp"
import dhandha from "../assets/images/dhandha.jpg"
import frakenstien from "../assets/images/frankenstein.webp"
import dracula from "../assets/images/dracula.png"
import tigerBear from "../assets/images/tigerBear.jpg"
import mahabharat from "../assets/images/mahabh.jpg"
import meditation from "../assets/images/meditation.jpg"
import supernatural from "../assets/images/supernatural.jpg"
import placebo from "../assets/images/placebo.jpg"
import sogood from "../assets/images/soGood.jpg"
import thinkFastNslow from "../assets/images/thinkFastNslow.jpg"



import resume from "../assets/images/CVnilax.pdf"
import '../styles/AboutMe.css';
import { Dialog } from '@headlessui/react';
import { X, FileText } from 'lucide-react';


const icons = [
  <Youtube className="text-red-500" size={32} />, 
  <Palette className="text-purple-500" size={32} />, 
  <Trophy className="text-yellow-500" size={32} />, 
  <Globe2 className="text-blue-500" size={32} />, 
  <Brain className="text-green-500" size={32} />, 
  <Book className="text-indigo-500" size={32} />, 
  <PenTool className="text-pink-500" size={32} />, 
  <Lightbulb className="text-yellow-400" size={32} />, 
  <Layers className="text-gray-500" size={32} />, 
  <BarChart className="text-teal-500" size={32} />,
  <Code className="text-blue-600" size={32} />, 
  <Server className="text-gray-700" size={32} />, 
  <Rocket className="text-orange-500" size={32} />
];




interface CarouselItem {
  serialNumber: number;
  image: string;
  title: string;
  description: string;
}

const carouselItems: CarouselItem[] = [
  {
    serialNumber: 1,
    description: "A self-improvement classic that outlines seven key habits to cultivate personal and professional effectiveness, leading to success and fulfillment.",
    title: "7 habits of highly effective people",
    image: SevHabits
  },
  {
    serialNumber: 2,
    description: "A book that stresses the importance of early financial education, comparing the money mindsets of the author's family and his wealthy friend's family. It shares lessons his friend’s father taught them about money.",
    title: "Rich Dad Poor Dad",
    image: richPoorDad
  },
  {
    serialNumber: 3,
    description: "Travelling all over the world to bring various successful stories of business into itself, 'Dhanda' is a book that inspires and teaches readers about how strategies and hard work contribute to a successful business.",
    title: "Dhandha",
    image: dhandha
  },
  {
    serialNumber: 4,
    description: "Thirteen Dwarves, the wizard Gandalf, and the humble Hobbit Bilbo Baggins set out on a dangerous journey to take back their home and treasure from Smaug, a fierce dragon.",
    title: "The Hobbit",
    image: hobbit
  },
  {
    serialNumber: 5,
    description: "The Dark Lord’s One Ring, lost for centuries, has fallen into the hands of the humble Frodo Baggins. Now, he and a fellowship of humans, elves, and dwarves must unite to destroy it.",
    title: "The Lord Of The Rings",
    image: LOR
  },
  {
    serialNumber: 6,
    description: "Discover the legends of Middle-earth’s past—tragic heroes, dark villains, and epic battles that shaped The Hobbit and The Lord of the Rings. A true fantasy masterpiece.",
    title: "The Silmarillion",
    image: silmarillion
  },
  {
    serialNumber: 7,
    description: "A collection of Rudyard Kipling’s tales—from Mowgli’s search for belonging to the brave mongoose defending his human hosts.",
    title: "The Jungle Book",
    image: jungleBook
  },
  {
    serialNumber: 8,
    description: "The fun adventure of a brave, young mouse as he attempts to save his human princess friend from the evil rats who live in the depths of the royal palace.",
    title: "The Tale of Despereaux",
    image: theTale
  },
  {
    serialNumber: 9,
    description: "The Bhagavad Gita is more than an ancient text—it is a guide to life, where Krishna reveals the philosophy of the world and the path to true peace, fulfillment, and happiness.",
    title: "Bhagavad Gita",
    image: geetabyswami
  },
  {
    serialNumber: 10,
    description: "A philosophical dialogue led by Socrates on the meaning of justice, whether a just man is happier than an unjust one, and deeper themes like aging and immortality.",
    title: "The Republic Of Plato",
    image: republicPlato
  },
  {
    serialNumber: 11,
    description: "Sadhguru explains Karma as a real but unseen account of one’s good and bad actions, carried across lifetimes until all debts are settled, leading to salvation.",
    title: "Karma",
    image: karma
  },
  {
    serialNumber: 12,
    description: "A self-improvement book on the Law of Attraction, which teaches that thoughts shape reality. By manifesting desires in your mind and working toward them, you can achieve your dreams.",
    title: "The Secret",
    image: secret
  },
  {
    serialNumber: 13,
    description: "A practical guide to mastering social skills and communication. Leil Lowndes shares 92 techniques to improve conversations, build confidence, whether in a professional or personal setting.",
    title: "How To Talk To Anyone",
    image: howTotalk
  },
  {
    serialNumber: 14,
    description: "In Japanese philosophy, ‘Ikigai’ is the pursuit of life’s purpose, blending passion, skills, earnings, and societal needs. This book by Hector Garcia and Frances Minorolles adapts it for children in a modern way.",
    title: "IKIGAI",
    image: ikigai
  },
  {
    serialNumber: 15,
    description: "A visual guide to the Transformers franchise, exploring its history through the artists behind its TV shows, comics, and games.",
    title: "Transformers",
    image: transformers
  },
  {
    serialNumber: 16,
    description: "A man creates a monster, but is society the real villain? This tragic tale of ambition and rejection explores the harsh reality of discrimination and the cost of lost dreams.",
    title: "Frankenstein",
    image: frakenstien
  },
  {
    serialNumber: 17,
    description: "A timeless horror classic with no single hero, it begins with solicitor Jonathan Carter’s visit to Count Dracula’s castle—only to uncover a terrifying truth: the nobleman is a vampire.",
    title: "Dracula",
    image: dracula
  },
  {
    serialNumber: 18,
    description: "A modern tale by Akshay Manwani, blending India’s rich wildlife with political intrigue as the Tiger King’s most trusted lieutenant is sent to prison, sparking chaos in the jungle.",
    title: "The Tiger, the Bear and the Battle for Mahovann",
    image: tigerBear
  },
  {
    serialNumber: 19,
    description: "Soma Guha presents a modern, accessible retelling of the Mahabharata, bringing the lives of the Pandavas and Kauravas to readers while sharing its timeless lessons on life.",
    title: "Mahabharat",
    image: mahabharat
  },
  {
    serialNumber: 20,
    description: "A collection of personal reflections by Roman Emperor Marcus Aurelius, offering timeless wisdom on life, death, and self-improvement through the lessons he learned from those around him.",
    title: "Meditation",
    image: meditation
  },
  {
    serialNumber: 21,
    description: "Dr. Joe Dispenza explores the power of the mind in shaping reality, blending science with meditation and energy fields to help individuals break limits and reach their full potential.",
    title: "Becoming Supernatural",
    image: supernatural
  },
  {
    serialNumber: 22,
    description: "Dr. Joe Dispenza explores how belief shapes health, using science and real-life cases to reveal the mind’s power to heal the body and transform well-being.",
    title: "You are the Placebo",
    image: placebo
  },
  {
    serialNumber: 23,
    description: "Cal Newport challenges the “follow your passion” mindset, arguing that mastery, hard work, and rare skills are the keys to a successful and fulfilling career.",
    title: "So Good They Can't Ignore You",
    image: sogood
  },
  {
    serialNumber: 24,
    description: "This book teaches how small daily habits can lead to big changes over time by focusing on tiny improvements and building good routines.",
    title: "Atomic Habits",
    image: atomicHabit
  },
  {
    serialNumber: 25,
    description: "It explains how our brain has two thinking systems: one fast and instinctive, the other slow and logical, and how they shape our decisions.",
    title: "Thinking, Fast and Slow",
    image: thinkFastNslow
  }
];
 

const AboutMe = () => {
  const [index, setIndex] = useState(0);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

   const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [isOpen, setIsOpen] = useState(false);
    const carouselRef = useRef<HTMLDivElement | null>(null);
  
    const handleImageClick = (image: string) => {
      setSelectedImage(image);
      setIsOpen(true);
    };
  
    const [isPaused, setIsPaused] = useState(false);
    const [isInitialized, setIsInitialized] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);
    const animationFrameRef = useRef<number>();
    const lastTimeRef = useRef<number>(0);
    const scrollSpeedRef = useRef(200); // pixels per second
    const containerWidthRef = useRef(0);
    // const carouselRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
  
    const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
      setIsDragging(true);
      if (carouselRef.current) {
        setStartX(e.pageX - carouselRef.current.offsetLeft);
      }
      if (carouselRef.current) {
        setScrollLeft(carouselRef.current.scrollLeft);
      }
    };
  
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      if (!isDragging) return;
      e.preventDefault();
      if (carouselRef.current) {
        const x = e.pageX - carouselRef.current.offsetLeft;
        const walk = (x - startX) * 1.5; // Adjust speed of dragging
        carouselRef.current.scrollLeft = scrollLeft - walk;
      }
    };
  
    const handleMouseUp = () => {
      setIsDragging(false);
    };
  
    useEffect(() => {
      const initializeCarousel = () => {
        if (carouselRef.current) {
          containerWidthRef.current = carouselRef.current.scrollWidth / 3;
          setScrollPosition(0);
          setIsInitialized(true);
        }
      };
  
      const images = document.querySelectorAll('img');
      let loadedImages = 0;
      
      const handleImageLoad = () => {
        loadedImages++;
        if (loadedImages === images.length) {
          initializeCarousel();
        }
      };
  
      images.forEach(img => {
        if (img.complete) {
          handleImageLoad();
        } else {
          img.addEventListener('load', handleImageLoad);
        }
      });
  
      return () => {
        images.forEach(img => {
          img.removeEventListener('load', handleImageLoad);
        });
      };
    }, []);
  
    useEffect(() => {
      if (!isInitialized) return;
  
      const animate = (currentTime: number) => {
        if (!lastTimeRef.current) lastTimeRef.current = currentTime;
        const deltaTime = currentTime - lastTimeRef.current;
        lastTimeRef.current = currentTime;
  
        if (!isPaused) {
          let newPosition = scrollPosition + (scrollSpeedRef.current * deltaTime) / 1000;
  
          // Reset position when reaching the end of the middle set
          if (newPosition >= containerWidthRef.current) {
            newPosition = 0;
          }
  
          setScrollPosition(newPosition);
        }
  
        animationFrameRef.current = requestAnimationFrame(animate);
      };
  
      animationFrameRef.current = requestAnimationFrame(animate);
  
      return () => {
        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current);
        }
      };
    }, [isPaused, scrollPosition, isInitialized]);
  
    const handleSpeedChange = (faster: boolean) => {
      scrollSpeedRef.current = Math.max(
        20,
        Math.min(200, scrollSpeedRef.current + (faster ? 20 : -20))
      );
    };
  
    // Triple the items to create a seamless loop
    const duplicatedItems = [...carouselItems];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-sky-50"> 
  <div className="container mx-auto px-6">
    <div className="flex flex-col items-center overflow-hidden">
      {/* More About Me Section */}
      <motion.h2
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-12 text-center"
      >
        More About Me
      </motion.h2>

      {/* Continuous Scrolling Icons */}
      <div className="relative w-full overflow-hidden py-6 md:py-8">
        <motion.div
          className="flex space-x-8"
          initial={{ x: 0 }}
          animate={{ x: ["0%", "-100%"] }}
          transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
          style={{ display: "flex", whiteSpace: "nowrap" }}
        >
          {[...icons, ...icons].map((icon, index) => (
            <div key={index} className="shrink-0">{icon}</div>
          ))}
        </motion.div>
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* YouTube Subscribe Box */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-r from-gray-800 via-blue-900 to-black rounded-2xl shadow-2xl p-10 hover:shadow-2xl transition-all duration-300 relative z-10 flex flex-col items-center justify-center"
      >
        <div className="flex flex-col items-center mb-6">
          <div className="flex items-center gap-4 mb-4">
            <Youtube className="text-white" size={40} />
            <h3 className="text-2xl font-bold text-white animate-pulse">Join My Journey</h3>
          </div>
        </div>
        <a
          href="https://www.youtube.com/@prehistorichistory-bypalae1183?sub_confirmation=1"
          target="_blank"
          rel="noopener noreferrer"
          className="relative inline-block px-8 py-3 text-lg font-semibold text-white bg-red-600 rounded-full shadow-xl transition-transform duration-500 hover:scale-110"
        >
          Subscribe Now
        </a>
      </motion.div>

      {/* Moving Icons Box */} 
      <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 w-full">
        {/* Resume Section */}
        <div className="bg-white flex items-center justify-center p-4 w-full h-auto sm:h-40">
          <div className="relative group w-full">
            {/* Animated border */}
            <div className="absolute -inset-1">
              <div className="w-full h-full rotate-180 opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200">
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 animate-border-flow"></div>
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-transparent via-white to-transparent blur-sm animate-light-patch"></div>
              </div>
            </div>

            {/* Resume Content */}
            <div className="relative flex flex-col items-center px-6 sm:px-8 py-4 sm:py-6 bg-white rounded-lg leading-none border border-gray-100 shadow-sm w-full">
              <div className="flex flex-col items-center space-y-4 sm:space-y-6 text-center">
                <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-sky-500 to-blue-700 bg-clip-text text-transparent">
                  Professional Resume
                </h1>
                <button 
                  onClick={() => setIsResumeOpen(true)}
                  className="group relative inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 font-medium tracking-wide text-white transition-all duration-500 ease-in-out bg-gradient-to-r from-sky-500 to-blue-700 rounded-lg hover:from-purple-500 hover:to-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
                >
                  <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-32 group-hover:h-32 opacity-10"></span>
                  <FileText className="w-4 sm:w-5 h-4 sm:h-5 mr-2" />
                  <span>View Resume</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Resume Dialog Box */}
      <Dialog open={isResumeOpen} onClose={() => setIsResumeOpen(false)} className="relative z-50">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4"
        >
          <div className="bg-white rounded-lg shadow-lg p-5 sm:p-6 max-w-3xl w-full relative">
            <button
              onClick={() => setIsResumeOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <X size={24} />
            </button>
            <h3 className="text-lg sm:text-2xl font-bold text-black mb-4">
              Professional Resume
            </h3>

            {/* PDF Viewer - Mobile Responsive */}
            <div className="w-full h-[400px] sm:h-[500px]">
              <iframe src={resume} className="w-full h-full rounded-md hidden sm:block" title="Resume PDF"></iframe>
              <object data={resume} type="application/pdf" className="w-full h-full rounded-md block sm:hidden">
                <p className="text-center text-gray-700 mt-4">
                  PDF not supported on mobile.  
                  <a href={resume} target="_blank" rel="noopener noreferrer" className="text-red-500 font-semibold underline ml-1">
                    Click here to view
                  </a>
                </p>
              </object>
            </div>
            {/* Download PDF Button for Mobile */}
            <div className="text-center mt-4 sm:hidden">
              <a href={resume} download className="bg-red-500 text-white px-4 py-2 rounded-md flex items-center justify-center w-full">
                <FileText size={18} className="mr-2" /> Download PDF
              </a>
            </div>
          </div>
        </motion.div>
      </Dialog>
      {/*  yaha pe tha wo content ... ye do bracket k bich me dal de*/}

      <div className="relative z-20 mt-10 w-full lg:col-span-2">
              <div className="relative w-full overflow-hidden bg-transparent py-12">
                {/* Books That Shaped Me Section */}
      <div className="mt-12 flex flex-col items-center text-center">
        <h2 className="text-3xl font-extrabold text-gray-800 mb-4">
          📚 Book's that shaped me
        </h2>
        <p className="text-gray-600 max-w-2xl">
          A collection of books that have influenced my thoughts and perspectives.
        </p>
      </div>

          <div
            ref={carouselRef}
            className="flex will-change-transform overflow-x-auto scroll-smooth no-scrollbar cursor-grab active:cursor-grabbing scrollbar-transparent w-full"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            {duplicatedItems.map((item, index) => (
              <div
                key={`${item.serialNumber}-${index}`}
                className="min-w-[95vw] md:min-w-[600px] lg:min-w-[800px] p-4 transition-transform duration-300 hover:scale-[1.02]"
                >
                <div className="bg-white rounded-xl shadow-lg overflow-hidden h-[400px] flex flex-col md:flex-row">
                  <div className="md:w-2/5 p-6 flex flex-col justify-center">
                    <h3 className="text-2xl font-bold mb-3 text-gray-800">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                  <div className="w-full h-[200px] md:h-auto md:w-3/5 relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                      loading="eager"
                      onClick={() => handleImageClick(item.image)}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      
            {/* Dialog Box */}
            <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
              <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4 sm:p-6 md:p-8">
                <Dialog.Panel className="bg-white p-5 rounded-lg w-full max-w-md sm:max-w-lg md:max-w-2xl">
                  <img src={selectedImage!} alt="Selected Artwork" className="w-full rounded-lg" />
                  <button onClick={() => setIsOpen(false)} className="mt-3 p-2 bg-red-500 text-white rounded">
                    Close
                  </button>
                </Dialog.Panel>
              </div>
            </Dialog>
    </div>
  </div>
</section>

  );
};

export default AboutMe;