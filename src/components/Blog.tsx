import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, ArrowRight, View } from 'lucide-react';
import blogstory1 from "../assets/images/BolgStory1.pdf";
import blogstory2 from "../assets/images/BlogStory2.pdf";
import blog2 from "../assets/images/blogimages2.jpeg";
import blog1 from "../assets/images/blogimage2.jpg";

const BlogSection = () => {
  interface BlogPost {
    title: string;
    excerpt: string;
    image: string;
    category: string;
    pdfContent: string;
  }
  
  const [selectedBlog, setSelectedBlog] = useState<BlogPost | null>(null);

  const posts = [
    {
      title: 'The Search for Perfection',
      excerpt: 'I am physically perfect, but my mind is overloaded. What is perfection?',
      image: blog2,
      category: 'Sci-Fi/Dystopian',
      pdfContent: blogstory2
    },
    {
      title: 'The Shattered Crown: Rise of the Dark God',
      excerpt: 'A young prince must unite unlikely allies to retrieve seven lost crystals before a tyrant resurrects.',
      image: blog1,
      category: 'Epic Fantasy / Adventure',
      pdfContent: blogstory1
    }
  ];

  return (
    <section id="blog" className="py-20 bg-gradient-to-b from-blue-50 to-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">
            Latest Blog Posts
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto text-sm sm:text-base">
            Discover insights, tutorials, and behind-the-scenes content.
          </p>
        </motion.div>

        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {posts.map((post, index) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ scale: 1.05, rotateY: 10 }}
              className="relative group perspective"
            >
              <div className="relative h-full bg-gradient-to-br from-white to-gray-100 rounded-lg overflow-hidden shadow-lg transform transition-all duration-500 group-hover:shadow-2xl">
                <div className="relative h-40 sm:h-48 overflow-hidden">
                  <motion.img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-red-500 text-white px-2 py-1 text-xs sm:text-sm rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-5 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-semibold text-black mb-2 group-hover:text-red-600 transition-colors duration-300">
                    {post.title}
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-base mb-4">{post.excerpt}</p>
                  <button
                    onClick={() => setSelectedBlog(post)}
                    className="inline-flex items-center text-red-500 hover:text-red-400 transition-colors duration-300"
                  >
                    <span>Read More</span>
                    <ArrowRight size={16} className="ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Responsive Dialog Box with PDF */}
      {selectedBlog && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4"
        >
          <div className="bg-white rounded-lg shadow-lg p-5 sm:p-6 max-w-3xl w-full relative">
            <button
              onClick={() => setSelectedBlog(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <X size={24} />
            </button>
            <h3 className="text-lg sm:text-2xl font-bold text-black mb-4">
              {selectedBlog.title}
            </h3>

            {/* PDF Viewer - Mobile Responsive */}
            <div className="w-full h-[400px] sm:h-[500px]">
              {/* If iframe doesn't load, show an alternative object tag */}
              <iframe
                src={selectedBlog.pdfContent}
                className="w-full h-full rounded-md hidden sm:block"
                title="Blog PDF"
              ></iframe>

              {/* Alternative Embed for Mobile */}
              <object
                data={selectedBlog.pdfContent}
                type="application/pdf"
                className="w-full h-full rounded-md block sm:hidden"
              >
                <p className="text-center text-gray-700 mt-4">
                Your browser may not support direct viewing of this Project. 
                  <a
                    href={selectedBlog.pdfContent}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-500 font-semibold underline ml-1"
                  >
                    Click here to view in other tab
                  </a>
                </p>
              </object>
            </div>

            {/* Download PDF Button for Mobile */}
            <div className="text-center mt-4 sm:hidden">
              <a
                href={selectedBlog.pdfContent}
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

export default BlogSection;
