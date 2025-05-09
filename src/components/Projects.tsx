import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, X, View } from "lucide-react";

// Import assets
import geeta2 from "../assets/images/geetathumbn.jpg";
import geeta from "../assets/images/geetathumbnail.jpg";
import sketch1 from "../assets/images/sketch1.png";
import sketch2 from "../assets/images/sketch2.jpg";
import CookingApp from "../assets/images/cookportfinal.jpg";
import CookingApp3 from "../assets/images/chef1.jpg";
import getaProject from "../assets/images/Shreemad_Bhagavad_Gita-Commentary_by_Nilax.pdf";
import CookingAppVideo from "../assets/videos/cookPortVideos.mp4";
import redevelopment from "../assets/images/Haritdhara.pdf";
import criteriaC from "../assets/images/HaritdharaCriteriaC.pdf";
import zomato from "../assets/images/zomato.jpeg";
import zomatoVideo from "../assets/videos/zomatovideo.mp4";
import altmat from "../assets/images/altmat.png";
import altmatVideo from "../assets/videos/altmatvideo.mp4";

const projects = [
  {
    title: ["Writer ", "Writer "],
    description: [
      "The Gita teaches us to focus on our duty with sincerity, without attachment to the results.",
      "The Gita teaches us to focus on our duty with sincerity, without attachment to the results.",
    ],
    link: [getaProject, getaProject],
    type: "pdf",
    position: "right",
    color: ["from-yellow-400 to-orange-500", "from-yellow-400 to-orange-500"],
    bgImage: [geeta2, geeta],
    headTxt: ["from-white to-white", "from-white to-white"],
    para: ["text-white", "text-white text-lg drop-shadow-[2px_2px_4px_rgba(0,0,0,0.9)]"],
    viewProj: ["text-white", "text-white"],
    viewType: "Project",
  },
  {
    title: ["Harithdhara", "Harithdhara"],
    description: [
      "Sustainable Redevelopment of Dharavi for better infrastructure.",
      "This project reimagines Dharavi as Haritdhara—a sustainable, green city ",
    ],
    link: [redevelopment, criteriaC],
    type: "pdf",
    position: "left",
    color: ["from-green-300 to-green-900", "from-green-300 to-green-900"],
    bgImage: [sketch1, sketch2],
    headTxt: ["from-black to-black", "from-white to-white"],
    para: ["text-black text-lg drop-shadow-[2px_2px_4px_rgba(0,0,0,0.9)]", "text-white text-lg drop-shadow-[2px_2px_4px_rgba(0,0,0,0.9)]"],
    viewProj: ["text-black", "text-white"],
    viewType: "Project",
  },
  {
    title: ["Cook Port App", "Cook Port App"],
    description: ["Founder - Cook Port ", "Founder - Cook Port "],
    link: [CookingAppVideo, CookingAppVideo],
    type: "video",
    position: "right",
    color: ["from-white to-blue-300", "from-white to-blue-300"],
    bgImage: [CookingApp, CookingApp3],
    headTxt: ["from-white to-white", "from-white to-white"],
    para: ["text-white", "text-white text-lg drop-shadow-[2px_2px_4px_rgba(0,0,0,0.9)]"],
    viewProj: ["text-white", "text-white"],
    viewType: "Project",
  },
  {
    title: ["AltMat", "Zomato"],
    description: [
      "AltMat is transforming agricultural waste into eco-friendly fabrics.",
      "Zomato revolutionized food delivery with tech and innovation.",
    ],
    link: [altmatVideo, zomatoVideo],
    type: "video",
    position: "left",
    color: ["from-white to-green-300", "from-white to-red-300"],
    bgImage: [altmat, zomato],
    headTxt: ["from-black to-black", "from-white to-white"],
    para: ["text-black text-lg drop-shadow-[2px_2px_4px_rgba(0,0,0,0.9)]", "text-black"],
    viewProj: ["text-green-800", "text-black"],
    viewType: "Case study",
  },
];

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState<{ link: string; type: string; title: string } | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % projects[0].bgImage.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  const openModal = (link: string, type: string, title: string) => {
    setSelectedProject({ link, type, title });
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-blue-50 via-sky-50 to-blue-100 relative scroll-mt-20">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-sky-500 via-green-500 to-yellow-500 text-transparent bg-clip-text"
        >
          My Projects
        </motion.h2>

        <div className="relative">
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            transition={{ duration: 10 }}
            className="absolute left-1/2 -translate-x-1/2 w-1 bg-gradient-to-b from-sky-300 via-green-300 to-yellow-300"
          />

          <div className="space-y-12">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: project.position === "right" ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`flex ${project.position === "right" ? "justify-start" : "justify-end"}`}
              >
                <div className={`relative w-1/2 ${project.position === "right" ? "ml-8" : "mr-8"}`}>
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-1000"
                    style={{
                      backgroundImage: `url(${project.bgImage[currentIndex]})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      height: "100%",
                      minHeight: "400px",
                    }}
                  >
                    <h3 className={`text-xl font-bold mb-2 bg-gradient-to-r ${project.headTxt[currentIndex]} bg-clip-text text-transparent`}>
                      {project.title[currentIndex]}
                    </h3>
                    <p className={`${project.para[currentIndex]} mb-4`}>{project.description[currentIndex]}</p>
                    
                    <motion.button
                      onClick={() => openModal(project.link[currentIndex], project.type, project.title[currentIndex])}
                      className={`inline-flex items-center gap-2 bg-transparent px-3 py-1.5 rounded-md ${project.viewProj[currentIndex]} hover:text-blue-300 transition-colors group backdrop-blur-md shadow-[0px_0px_15px_rgba(59,130,246,0.6)]`}
                    >
                      View {project.viewType} <ExternalLink size={16} />
                    </motion.button>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Responsive Dialog Box with PDF */}
      {selectedProject && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4"
        >
          <div className="bg-white rounded-lg shadow-lg p-5 sm:p-6 max-w-3xl w-full relative">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <X size={24} />
            </button>
            <h3 className="text-lg sm:text-2xl font-bold text-black mb-4">
              {selectedProject.title}
            </h3>

            {/* PDF Viewer - Mobile Responsive */}
            <div className="w-full h-[400px] sm:h-[500px]">
              {selectedProject.type === "video" ? (
                <video
                  src={selectedProject.link}
                  className="w-full h-full rounded-md"
                  controls
                  autoPlay
                  loop
                  // muted
                ></video>
              ) : (
                <>
                  <iframe
                    src={selectedProject.link}
                    className="w-full h-full rounded-md hidden sm:block"
                    title="Project PDF"
                  ></iframe>
                  <object
                    data={selectedProject.link}
                    type="application/pdf"
                    className="w-full h-full rounded-md block sm:hidden"
                  >
                    <p className="text-center text-gray-700 mt-4">
                      Your browser may not support direct viewing of this Project. 
                      <br />
                      <a
                        href={selectedProject.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-red-500 font-semibold underline ml-1"
                      >
                        Click here to view in other tab
                      </a>
                    </p>
                  </object>
                </>
              )}
            </div>

            {/* Download PDF Button for Mobile */}
            <div className="text-center mt-4 sm:hidden">
              <a
                href={selectedProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-500 text-white px-4 py-2 rounded-md flex items-center justify-center w-full"
              >
                <View size={18} className="mr-2" /> View
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </section>
  );
};

export default Projects;