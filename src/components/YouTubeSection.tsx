import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import ReactPlayer from "react-player";

interface VideoData {
  title: string;
  // thumbnail: string;
  url: string;
}

const videos: VideoData[] = [
  {
    title: "The Evolution of Flight",
    // thumbnail: "https://images.unsplash.com/photo-1544717305-996b815c338c?q=80&w=1000",
    url: "https://www.youtube.com/watch?v=KtWCxvoA1O0",
  },
  {
    title: "Before The dinosaurs",
    // thumbnail: "https://images.unsplash.com/photo-1544717305-996b815c338c?q=80&w=1000",
    url: "https://www.youtube.com/watch?v=pmYQqsSikIk",
  },
  {
    title: "Did Azhdarchids Really Fly?",
    // thumbnail: "https://images.unsplash.com/photo-1544717305-996b815c338c?q=80&w=1000",
    url: "https://www.youtube.com/watch?v=wjjAvL2A0Kw",
  },
];

const YouTubeSection = () => {
  const [activeVideo, setActiveVideo] = useState(0);
  const [hoveredVideo, setHoveredVideo] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false); // Tracks if the video is playing
  const [isMuted, setIsMuted] = useState(true); // Start muted for autoplay
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsPlaying(entry.isIntersecting); // Start playing when section is visible
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    if (sectionRef.current) {
      // Check initial visibility
      const isCurrentlyVisible =
        sectionRef.current.getBoundingClientRect().top >= 0 &&
        sectionRef.current.getBoundingClientRect().bottom <= window.innerHeight;

      if (isCurrentlyVisible) {
        setIsPlaying(true); // Auto-play if already visible
      }

      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleVideoClick = () => {
    setIsMuted(false); // Unmute video on user interaction
  };

  return (
    <motion.section
      id="youtube"
      ref={sectionRef}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen py-16 bg-gradient-to-b from-sky-50 via-green-50 to-blue-50 scroll-mt-20"
    >
      <div className="container mx-auto px-4 max-w-full">
        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-sky-500 via-green-500 to-yellow-500 text-transparent bg-clip-text"
        >
          My YouTube Journey
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-center">
          {/* Video Section */}
          <motion.div
            initial={{ scale: 0.95 }}
            whileInView={{ scale: 1 }}
            // whileHover={{ scale: 1.05 }} // Hover effect: scale up slightly
            className="relative lg:col-span-3 aspect-video rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-600"
            onClick={handleVideoClick} // Unmute on click
          >
            <ReactPlayer
              url={videos[2].url}
              width="100%"
              height="100%"
              playing={isPlaying} // Dynamically controlled
              muted={isMuted} // Start muted for autoplay
              controls={true} // Enable user controls
              style={{ borderRadius: "12px" }}
            />
          </motion.div>

          {/* Text Section */}
          <div className="space-y-4 lg:col-span-1 max-w-sm">
            {videos.map((video, index) => (
              <motion.div
                key={video.title}
                initial={{ scale: 0.9, opacity: 1 }}
                animate={{ scale: hoveredVideo === index ? 1.1 : 0.9 }}
                transition={{ duration: 0.3 }}
                className={`relative cursor-pointer overflow-hidden rounded-lg transition-all duration-300 ${
                  hoveredVideo === index ? "shadow-2xl" : "shadow-lg"
                }`}
                onMouseEnter={() => setHoveredVideo(index)}
                onMouseLeave={() => setHoveredVideo(null)}
                onClick={() => window.open(video.url, "_blank")}
              >
                <div
                  className={`relative w-full ${
                    hoveredVideo === index ? "h-56" : "h-32"
                  } bg-gradient-to-r  from-blue-50 to-blue-200 flex items-center justify-center rounded-lg transition-all duration-300`}
                >
                  {hoveredVideo === index ? (
                    <ReactPlayer
                      url={video.url}
                      width="100%"
                      height="100%"
                      playing
                      muted
                      controls={false}
                      style={{ borderRadius: "12px" }}
                    />
                  ) : (
                    <h3 className="text-lg font-semibold text-gray-500 px-4 text-center">
                      {video.title}
                    </h3>
                  )}
                </div>
              </motion.div>
            ))}
          </div>    
        </div>
      </div>
    </motion.section>
  );
};
export default YouTubeSection;




// import React, { useEffect, useRef, useState } from "react";
// import { motion } from "framer-motion";
// import ReactPlayer from "react-player";

// interface VideoData {
//   title: string;
//   url: string;
// }

// const videos: VideoData[] = [
//   {
//     title: "Exploring Dinosaur Fossils",
//     url: "https://www.youtube.com/watch?v=wqHUomFRaTY",
//   },
//   {
//     title: "My Latest Sculpture Creation",
//     url: "https://www.youtube.com/watch?v=wqHUomFRaTY",
//   },
// ];

// const YouTubeSection = () => {
//   const [activeVideo, setActiveVideo] = useState(0);
//   const [hoveredVideo, setHoveredVideo] = useState<number | null>(null);
//   const [isPlaying, setIsPlaying] = useState(false); // Tracks if the video is playing
//   const [isMuted, setIsMuted] = useState(true); // Start muted for autoplay
//   const sectionRef = useRef<HTMLElement>(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         setIsPlaying(entry.isIntersecting); // Start playing when section is visible
//       },
//       { threshold: 0.5 } // Trigger when 50% of the section is visible
//     );

//     if (sectionRef.current) {
//       // Check initial visibility
//       const isCurrentlyVisible =
//         sectionRef.current.getBoundingClientRect().top >= 0 &&
//         sectionRef.current.getBoundingClientRect().bottom <= window.innerHeight;

//       if (isCurrentlyVisible) {
//         setIsPlaying(true); // Auto-play if already visible
//       }

//       observer.observe(sectionRef.current);
//     }

//     return () => {
//       if (sectionRef.current) {
//         observer.unobserve(sectionRef.current);
//       }
//     };
//   }, []);

//   const handleVideoClick = () => {
//     setIsMuted(false); // Unmute video on user interaction
//   };

//   return (
//     <motion.section
//       id="youtube"
//       ref={sectionRef}
//       initial={{ opacity: 0 }}
//       whileInView={{ opacity: 1 }}
//       transition={{ duration: 0.8 }}
//       className="min-h-screen py-16 bg-gradient-to-b from-sky-50 via-green-50 to-yellow-50 scroll-mt-20"
//     >
//       <div className="container mx-auto px-4 max-w-full">
//         <motion.h2
//           initial={{ y: 50, opacity: 0 }}
//           whileInView={{ y: 0, opacity: 1 }}
//           transition={{ duration: 0.6 }}
//           className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-sky-500 via-green-500 to-yellow-500 text-transparent bg-clip-text"
//         >
//           My YouTube Journey
//         </motion.h2>

//         <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-center">
//           {/* Video Section */}
//           <motion.div
//             initial={{ scale: 0.95 }}
//             whileInView={{ scale: 1 }}
//             className="relative lg:col-span-3 aspect-video rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-600"
//             onClick={handleVideoClick} // Unmute on click
//             onMouseEnter={() => setIsPlaying(true)} // Play video on hover
//             onMouseLeave={() => setIsPlaying(false)} // Pause video when not hovered
//           >
//             <ReactPlayer
//               url={videos[activeVideo].url}
//               width="100%"
//               height="100%"
//               playing={isPlaying} // Dynamically controlled
//               muted={isMuted} // Start muted for autoplay
//               controls={false} // Disable user controls
//               style={{ borderRadius: "12px" }}
//             />
//           </motion.div>

//           {/* Text Section */}
//           <div className="space-y-4 lg:col-span-1 max-w-sm">
//             {videos.map((video, index) => (
//               <motion.div
//                 key={video.title}
//                 initial={{ x: 50, opacity: 0 }}
//                 whileInView={{ x: 0, opacity: 1 }}
//                 whileHover={{ scale: 1.15 }} // Hover effect for text section
//                 transition={{ duration: 0.5 }}
//                 className="relative cursor-pointer overflow-hidden rounded-lg"
//                 onMouseEnter={() => setIsPlaying(true)} // Play video on hover
//             onMouseLeave={() => setIsPlaying(false)} // Pause video when not hovered
//                 onClick={() => setActiveVideo(index)}
//               >
//                 <ReactPlayer
//               url={videos[activeVideo].url}
//               width="100%"
//               height="100%"
//               playing={isPlaying} // Dynamically controlled
//               muted={isMuted} // Start muted for autoplay
//               controls={false} // Disable user controls
//               style={{ borderRadius: "12px" }}
//             />
//                 <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
//                   <motion.div
//                     initial={false}
//                     animate={{
//                       height: hoveredVideo === index ? "auto" : "0",
//                       opacity: hoveredVideo === index ? 1 : 0,
//                     }}
//                     transition={{ duration: 0.5 }}
//                     className="overflow-hidden"
//                   >
//                     {/* Thumbnail can be added here if needed */}
//                   </motion.div>
//                   <h3 className="text-base font-semibold bg-gradient-to-r from-sky-500 to-green-500 bg-clip-text text-transparent">
//                     {video.title}
//                   </h3>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </motion.section>
//   );
// };

// export default YouTubeSection;



