// with parallax effect but all the videos are getting paused after completion 

// import React from 'react';
// import { motion ,useInView} from 'framer-motion';
// import ReactPlayer from 'react-player';
// import { Play, Pause, RotateCcw, ChevronLeft, ChevronRight } from 'lucide-react';
// import backyard from "../assets/images/backyard.jpg";
// import selfINTRO from "../assets/videos/IntroaboutNilax.mp4";
// import hobbies from "../assets/videos/HobbiesOfNilax.mp4";
// import geeta from "../assets/videos/commentryOfGeetaByNilax.mp4";
// import youtube from "../assets/videos/YoutubeNIlax.mp4";
// import Pastprojects from "../assets/videos/PastCaseStudyandProjNIlax.mp4";
// import artPieces from "../assets/videos/3dartNilax.mp4";

// const videos = [selfINTRO, hobbies, geeta, youtube, artPieces, Pastprojects];

// const IntroVideos = () => {
//   const [currentVideo, setCurrentVideo] = React.useState(0);
//   const [isPlaying, setIsPlaying] = React.useState(false);
//   const [carouselComplete, setCarouselComplete] = React.useState(false);

// const sectionRef = React.useRef(null);
// const isSectionInView = useInView(sectionRef, { once: false });

// React.useEffect(() => {
//   if (isSectionInView) {
//     setIsPlaying(true);
//   } else {
//     setIsPlaying(false);
//   }
// }, [isSectionInView]);

//   const handleNext = () => {
//     if (currentVideo + 1 < videos.length) {
//       setCurrentVideo((prev) => prev + 1);
//     } else {
//       setCarouselComplete(true);
//       setIsPlaying(false);
//     }
//   };

//   const handlePrev = () => {
//     if (currentVideo > 0) {
//       setCurrentVideo((prev) => prev - 1);
//     }
//   };

//   const handleRestart = () => {
//     setCurrentVideo(0);
//     setCarouselComplete(false);
//     setIsPlaying(true);
//   };

//   return (
//     <section 
//       className="relative min-h-screen py-20 overflow-hidden bg-cover bg-center bg-no-repeat bg-fixed"
//       style={{ backgroundImage: `url(${backyard})` }} // Static background
//     >
//       <div className="relative z-10 container mx-auto px-6">
//         <motion.h2
//           initial={{ y: 50, opacity: 0 }}
//           whileInView={{ y: 0, opacity: 1 }}
//           transition={{ duration: 0.6 }}
//           className="text-4xl font-bold mb-12 text-center text-white"
//         >
//           Get to Know Me
//         </motion.h2>

//         <div className="relative max-w-lg mx-auto">
//           <motion.div
//             key={currentVideo}
//             initial={{ x: 300, opacity: 0 }}
//             animate={{ x: 0, opacity: 1 }}
//             exit={{ x: -300, opacity: 0 }}
//             transition={{ duration: 0.8, ease: "easeInOut" }}
//             className="w-full h-[60vh] sm:h-[70vh] md:h-[75vh] lg:h-auto rounded-2xl overflow-hidden shadow-2xl"
//           >
//             <div className="relative w-full h-[60vh] sm:h-[70vh] md:h-[75vh]">
//               <ReactPlayer
//                 url={videos[currentVideo]}
//                 width="100%"
//                 height="100%"
//                 playing={isPlaying}
//                 onEnded={handleNext}
//                 controls={true}
//                 muted={false}
//                 className="absolute top-0 left-0"
//               />
//             </div>
//           </motion.div>

//           <div className="flex justify-between items-center mt-6">
//             <button
//               onClick={handlePrev}
//               disabled={currentVideo === 0}
//               className="p-3 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-300 disabled:opacity-50"
//             >
//               <ChevronLeft size={24} />
//             </button>

//             {!carouselComplete && (
//               <button
//                 onClick={() => setIsPlaying(!isPlaying)}
//                 className="p-3 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-300"
//               >
//                 {isPlaying ? <Pause size={24} /> : <Play size={24} />}
//               </button>
//             )}

//             <button
//               onClick={handleNext}
//               disabled={currentVideo === videos.length - 1}
//               className="p-3 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-300 disabled:opacity-50"
//             >
//               <ChevronRight size={24} />
//             </button>
//           </div>

//           {carouselComplete && (
//             <div className="flex justify-center items-center gap-4 mt-6">
//               <button
//                 onClick={handleRestart}
//                 className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-full shadow-md hover:bg-blue-700 transition-all duration-300"
//               >
//                 <RotateCcw size={24} />
//               </button>
//             </div>
//           )}

//           <div className="flex justify-center gap-2 mt-4">
//             {videos.map((_, index) => (
//               <div
//                 key={index}
//                 className={`w-4 h-4 rounded-full transition-all duration-300 ${
//                   currentVideo === index ? 'bg-sky-500 scale-125' : 'bg-gray-300'
//                 }`}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default IntroVideos;


// old


import React from 'react';
import { motion, useInView } from 'framer-motion';
import ReactPlayer from 'react-player';
import { Play, Pause, RotateCcw, ChevronLeft, ChevronRight } from 'lucide-react';
import backyard from "../assets/images/greenGarden.jpg";
import selfINTRO from "../assets/videos/finalIntro.mp4";
import hobbies from "../assets/videos/finalHobby.mp4";
import geeta from "../assets/videos/finalGeeta.mp4";
import youtube from "../assets/videos/finalYT.mp4";
import Pastprojects from "../assets/videos/finalPastProj.mp4";
import artPieces from "../assets/videos/final3Dart.mp4";

const videos = [
  selfINTRO,
  hobbies,
  youtube,
  artPieces,
  Pastprojects,
  geeta
];

const IntroVideos = () => {
  const [currentVideo, setCurrentVideo] = React.useState(0);
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [carouselComplete, setCarouselComplete] = React.useState(false);

  const sectionRef = React.useRef(null);
  const isSectionInView = useInView(sectionRef, { once: false });

  React.useEffect(() => {
    if (isSectionInView) {
      setIsPlaying(true);
    } else {
      setIsPlaying(false);
    }
  }, [isSectionInView]);

  const handleNext = () => {
    if (currentVideo + 1 < videos.length) {
      setCurrentVideo((prev) => prev + 1);
    } else {
      setCarouselComplete(true);
      setIsPlaying(false);
    }
  };

  const handlePrev = () => {
    if (currentVideo > 0) {
      setCurrentVideo((prev) => prev - 1);
    }
  };

  const handleRestart = () => {
    setCurrentVideo(0);
    setCarouselComplete(false);
    setIsPlaying(true);
  };

  

  return (
    <motion.section
      ref={sectionRef}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      // className="min-h-screen py-20 bg-gradient-to-b from-black to-sky-50"
      className="min-h-screen py-20 bg-white bg-cover bg-center bg-no-repeat"
      // style={{ backgroundImage: `url(${backyard})` }}
    >
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-12 text-center"
        >
          Get to Know Me
        </motion.h2>

        <div className="relative max-w-6xl mx-auto">
          <motion.div
            key={currentVideo}
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="w-full h-[60vh] sm:h-[70vh] md:h-[75vh] lg:h-auto rounded-2xl overflow-hidden shadow-2xl"
          >
            <div className="relative w-full h-[60vh] sm:h-[70vh] md:h-[75vh]">
              <ReactPlayer
                url={videos[currentVideo]}
                width="100%"
                height="100%"
                playing={isPlaying}
                onEnded={handleNext}
                controls={true}
                muted={false}
                className="absolute top-0 left-0"
              />
            </div>
          </motion.div>

          <div className="flex justify-between items-center mt-6">
            <button
              onClick={handlePrev}
              disabled={currentVideo === 0}
              className="p-3 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-300 disabled:opacity-50"
            >
              <ChevronLeft size={24} />
            </button>

            {!carouselComplete && (
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="p-3 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-300"
              >
                {isPlaying ? <Pause size={24} /> : <Play size={24} />}
              </button>
            )}

            <button
              onClick={handleNext}
              disabled={currentVideo === videos.length - 1}
              className="p-3 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-300 disabled:opacity-50"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {carouselComplete && (
            <div className="flex justify-center items-center gap-4 mt-6">
              <button
                onClick={handleRestart}
                className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-full shadow-md hover:bg-blue-700 transition-all duration-300"
              >
                <RotateCcw size={24} />
              </button>
            </div>
          )}

          <div className="flex justify-center gap-2 mt-4">
            {videos.map((_, index) => (
              <div
                key={index}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  currentVideo === index ? 'bg-sky-500 scale-125' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default IntroVideos;