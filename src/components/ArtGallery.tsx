import React, { useState, useEffect, useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { motion, useScroll } from 'framer-motion';
import { Mesh } from 'three';
import { OrbitControls } from '@react-three/drei';
import dino2 from "../assets/images/dinothumbnai2.jpg";
import dino from "../assets/images/dinothumbnail3.jpg";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Dialog } from '@headlessui/react';

import euroDrag from "../assets/images/europeanDrag.jpg";
import transformer from "../assets/images/hobbitmodel.jpg";
import manInMirror from "../assets/images/manInMirror.jpg";
import dairymilk from "../assets/images/dairyMilk.jpg";
import bread from "../assets/images/bread.jpg";
// import transfo from "../assets/images/transformers.webp";
import Chandelier from "../assets/images/Chandilier.jpg";
import weapon from "../assets/images/katanaSword.jpg";
import dinosarous from "../assets/images/dinosarous.jpg";
import mongoose from "../assets/images/mongooseNsnake.png";
import ghost from "../assets/images/ghost.jpg";
import lamp from "../assets/images/lamp.jpg";
import tortoise from "../assets/images/tortoise.jpg";
import screem from "../assets/images/screem.jpg";
import dragon from "../assets/images/dragonBamboosupported.jpg";
import decay from "../assets/images/earthDecay.png";
import myportrait from "../assets/images/myPortrait.jpg";



interface CarouselItem {
  id: number;
  image: string;
  title: string;
  description: string;
}

const carouselItems: CarouselItem[] = [
  {
    id: 1,
    image: dinosarous,
    title: 'Spinosaurus',
    description: 'A palaeontological accurate representation of my favourite dinosaur, the Spinosaurus based on the most recent scientific discoveries.',
  },
  {
    id: 2,
    image: euroDrag,
    title: 'Hybrid Dragon',
    description: 'In this artwork, I experimented with blending more shades than usual while creating a unique dragon—rooted in European design but enriched with Asian-inspired features.',
  },  {
    id: 3,
    image: decay,
    title: 'Decay',
    description: 'My artwork depicts Earths decay over time—from pure natural beauty to a ruined, contaminated future. Using only shades of green and grey.',
  },
  {
    id: 4,
    image: mongoose,
    title: 'My Tail got me Killed',
    description: 'This artwork, modifying an existing image with materials like brushes and rocks, highlights how poaching is as deadly to the mongoose as its natural enemy, the cobra.',
  },
  {
    id: 5,
    image: ghost,
    title: 'Barrow Wight',
    description: 'My take on a Barrow Wight from The Lord of the Rings by J.R.R Tolkien, resting in the nothingness of glass to cast its shadow upon whatever surface it goes on.',
  },
  {
    id: 6,
    image: dairymilk,
    title: 'Eco Friendly Packaging',
    description: 'I designed an eco-friendly Dairy Milk packaging, replacing plastic and aluminum with durable paper outside and butter paper inside, reducing environmental harm.',
  },
  {
    id: 7,
    image: tortoise,
    title: 'Wings of Courage',
    description: 'Wings of Courage – A fearless turtle sheds its shell for wings to soar.',
  },
  {
    id: 8,
    image: screem,
    title: 'The Screaming Still',
    description: 'Using clay, paint, popsicle sticks, and miniatures, this piece reimagines The Scream a million years later—where the subject mouth holds a universe.',
  },
  {
    id: 9,
    image: manInMirror,
    title: 'Man in the Mirror',
    description: 'A piece symbolising Michael Jackson’s song ‘Man in the Mirror.’ It is made of broken CDs, making the artwork reflective, magnificent .',
  },
  {
    id: 10,
    image: bread,
    title: 'I am Bready',
    description: 'Just a picture collage artwork to remind you that Bread is more significant than any of us give it credit for.',
  },
  {
    id: 11,
    image: lamp,
    title: 'The Ghost & 21 Cobras',
    description: 'The Ghost and 21 Cobras – A pale-white Ghost Tree in an Indian jungle shelters a slither of 21+ King Cobras. ',
  },
  {
    id: 12,
    image: transformer,
    title: 'Galvatron + Smaug = Arekentron',
    description: 'My take on a fusion between Galvatron, leader of the Decepticons from Transformers and the dragon Smaug the Magnificent from The Hobbit.',
  },
  {
    id: 13,
    image: weapon,
    title: 'Peacemaker',
    description: 'The Peacemaker, a fusion of Samurai katanas and Greek gladiator swords, is crafted entirely from recycled materials like a bicycle mudguard, table mat, and comb.',
  },
  {
    id: 14,
    image: Chandelier,
    title: 'Rain of Silver',
    description: 'A chandelier that can look good in any kind of space and is made completely out of recycled cardboard and spools that get wasted in millions in the textile industry.',
  },
  {
    id: 15,
    image: dragon,
    title: 'Dragon King',
    description: 'This sculpture recreates an old, damaged dragon piece while honoring Asian folklore. Made from air-dry clay and a wooden branch.',
  },
  {
    id: 16,
    image: myportrait,
    title: 'My Portrait',
    description: 'My portrait blends my face with elements of my personality using picture collage. By merging images from different sources.',
  }
];

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/base_basic_shaded.glb');
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.model as Mesh).geometry}
        material={materials.CustomMaterial}
        rotation={[Math.PI / 2, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload('/base_basic_shaded.glb');

const ArtGallery = () => {
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

  // Initialize container width and start position
  useEffect(() => {
    const initializeCarousel = () => {
      if (carouselRef.current) {
        containerWidthRef.current = carouselRef.current.scrollWidth / 3;
        // Start from the middle set of items
        setScrollPosition(0);
        setIsInitialized(true);
      }
    };

    // Wait for images to load before initializing
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

  // Animation loop
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



  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] });

  

  return (
    <section
      ref={sectionRef}
      id="gallery"
      className="relative py-20 scroll-mt-20 overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed "
        style={{ backgroundImage: `url(${dino2})` }}
      />

      <div className="relative z-10 container mx-auto px-6">
        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-12 text-center text-white"
        >
          3D Art Gallery
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="rounded-xl p-6 sm:p-8 shadow-lg max-w-3xl mx-auto space-y-6 bg-gradient-to-br from-blue-50 via-white to-pink-50"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-4 md:mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
              My Latest Creation
            </h3>
            <p className="text-gray-800 text-justify leading-relaxed md:leading-loose">
            Wings of Courage is a deeply symbolic artwork that portrays the journey of transformation and personal growth. The central figure—a brave turtle—represents an individual who dares to step beyond their limitations. Traditionally, a turtle’s shell is a symbol of protection and security, shielding it from external threats. However, in this piece, the turtle willingly lets its shell shatter, signifying the courage to abandon comfort, familiarity, and self-imposed restrictions.The broken coconut shell, clay, and decorative paper used in the artwork further enhance the theme of reinvention. The coconut shell, once rigid and unyielding, is now fragmented, making way for something new. The wings replacing the turtle’s shell symbolize the newfound freedom and potential that emerge when one dares to embrace change. Just like the turtle in the artwork, individuals must sometimes shed their protective barriers—fear, doubt, or routine—to reach greater heights in their personal and professional lives. Through this piece, the message is clear: growth and self-discovery often require stepping outside of our comfort zones, taking risks, and embracing the unknown with courage and determination.
            </p>
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-2 md:gap-4">
                <span className="font-semibold text-gray-800">Material:</span>
                <span className="text-gray-600">Clay and Mixed Media</span>
              </div>
              <div className="flex flex-wrap items-center gap-2 md:gap-4">
                <span className="font-semibold text-gray-800">Dimensions:</span>
                <span className="text-gray-600">30cm x 20cm x 15cm</span>
              </div>
              <div className="flex flex-wrap items-center gap-2 md:gap-4">
                <span className="font-semibold text-gray-800">Created:</span>
                <span className="text-gray-600">2024</span>
              </div>
            </div>
          </motion.div>

          <motion.div
  initial={{ x: 50, opacity: 0 }}
  whileInView={{ x: 0, opacity: 1 }}
  transition={{ duration: 0.6 }}
  className="aspect-square rounded-xl overflow-hidden shadow-lg bg-transparent flex flex-col items-center relative"
>
  {/* Background Blur Effect */}
  <div className="aspect-square rounded-xl overflow-hidden shadow-lg bg-transparent backdrop-blur-md flex flex-col items-center"></div>

  {/* 3D Model Canvas (NO Blur) */}
  <Canvas camera={{ position: [0, 0, 5] }} className="relative z-10">
    <ambientLight intensity={0.5} />
    <directionalLight position={[2, 2, 2]} intensity={1} />
    <Model />
    <OrbitControls />
  </Canvas>

  {/* Buttons - Closer to Canvas */}
  <div className=" w-full flex justify-center px-6 relative z-10">
    <a href="https://wa.me/+919967626508?text=Hello,%20I%20am%20interested%20in%20purchasing%20a%20sculpture%20model%20from%20your%20website.%0A%0AModel%20Name:%20[Enter%20Model%20Name]%0AMaterial%20Preference%20(if%20any):%20[Enter%20Material]%0ASize%20Preference:%20[Enter%20Size]%0A%0APlease%20provide%20me%20with%20more%20details%20and%20pricing.%20Looking%20forward%20to%20your%20response.%20Thank%20you!">
      <motion.button
        type="submit"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-full max-w-[220px] bg-gradient-to-r from-sky-500 via-green-500 to-yellow-500 text-white px-6 py-3 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-green-500/30"
      >
        Buy My Stuff
      </motion.button>
    </a>
  </div>
</motion.div>



        </div>
      </div>


      <div className="relative z-20 mt-10">
        <div className="relative w-full overflow-hidden bg-transparent py-12">
          <div
            ref={carouselRef}
            className="flex will-change-transform overflow-x-auto scroll-smooth no-scrollbar cursor-grab active:cursor-grabbing scrollbar-transparent"
            onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
            >
            

            {duplicatedItems.map((item, index) => (
              <div
                key={`${item.id}-${index}`}
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
    </section>
    
  );
};

export default ArtGallery;