import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';

interface NavbarProps {
  className?: string;
}

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'YouTube', href: '#youtube' },
  { name: 'Projects', href: '#projects' },
  { name: 'Blog', href: '#blog' },
  { name: 'Art Gallery', href: '#gallery' },
  { name: 'Contact', href: '#contact' }
];

const Navbar: React.FC<NavbarProps> = ({ className }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => {
        setIsMobileMenuOpen(false);
      }, 500); // Delay to allow smooth scrolling to begin
    }
  };

  return (
    <nav className={className}>
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 , delay: 0 }}
        className={`fixed z-50 top-6 left-1/2 transform -translate-x-1/2 ${
          isScrolled
            ? 'bg-gradient-to-r from-green-200 to-blue-200  shadow-lg'//to-yellow-200
            : 'bg-white/60'
        } backdrop-blur-lg rounded-full px-8 py-4 flex justify-between items-center w-[90%] max-w-4xl`}
        style={{
          transition: 'all 0.3s ease-in-out',
        }}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-2xl font-bold bg-gradient-to-r from-sky-500 via-green-500 to-yellow-500 text-transparent bg-clip-text"
            >
              Nilax
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-6">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="relative text-gray-600 font-bold hover:text-gray-900 transition-colors group cursor-pointer"
                >
                  {item.name}
                  <motion.span
                    className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-sky-500 to-green-500 group-hover:w-full transition-all duration-300"
                    whileHover={{ width: '100%' }}
                  />
                </motion.a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-gray-600 hover:text-gray-900"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white rounded-lg border-t shadow-lg absolute top-20 left-1/2 transform -translate-x-1/2 w-[90%] max-w-sm"
            >
              <div className="px-6 py-4">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="block py-3 text-gray-600 hover:text-gray-900 border-b border-gray-100 cursor-pointer"
                  >
                    {item.name}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Scroll Indicator */}
      <motion.div
        className="fixed bottom-8 right-8 z-50 hidden md:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="bg-white/80 backdrop-blur-sm rounded-full p-3 shadow-lg cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <ChevronDown className="transform rotate-180 text-gray-600" />
        </motion.div>
      </motion.div>
    </nav>
  );
};

export default Navbar;

// import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Menu, X, ChevronDown } from 'lucide-react';

// interface NavbarProps {
//   className?: string;
// }

// const navItems = [
//   { name: 'Home', href: '#home' },
//   { name: 'YouTube', href: '#youtube' },
//   { name: 'Projects', href: '#projects' },
//   { name: 'Blog', href: '#blog' },
//   { name: 'Art Gallery', href: '#gallery' },
//   { name: 'Contact', href: '#contact' }
// ];

// const Navbar: React.FC<NavbarProps> = ({ className }) => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
//     e.preventDefault();
//     const element = document.querySelector(href);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//       setTimeout(() => {
//         setIsMobileMenuOpen(false);
//       }, 500); // Delay to allow smooth scrolling to begin
//     }
//   };

//   return (
//     <nav className={className}>
//       <motion.nav
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.6 , delay: 5 }}
//         className={`fixed z-50 top-6 left-1/2 transform -translate-x-1/2 ${
//           isScrolled
//             ? 'bg-gradient-to-r from-green-200 via-blue-200 to-yellow-200 shadow-lg'
//             : 'bg-white/60'
//         } backdrop-blur-lg rounded-full px-8 py-4 flex justify-between items-center w-[90%] max-w-4xl`}
//         style={{
//           transition: 'all 0.3s ease-in-out',
//         }}
//       >
//         <div className="container mx-auto px-6">
//           <div className="flex items-center justify-between h-20">
//             <motion.div
//               initial={{ opacity: 0, x: -20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.6, delay: 0.2 }}
//               className="text-2xl font-bold bg-gradient-to-r from-sky-500 via-green-500 to-yellow-500 text-transparent bg-clip-text"
//             >
//               Nilax
//             </motion.div>

//             {/* Desktop Menu */}
//             <div className="hidden md:flex items-center space-x-6">
//               {navItems.map((item, index) => (
//                 <motion.a
//                   key={item.name}
//                   href={item.href}
//                   onClick={(e) => handleNavClick(e, item.href)}
//                   initial={{ opacity: 0, y: -20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.3, delay: index * 0.1 }}
//                   className="relative text-gray-600 font-bold hover:text-gray-900 transition-colors group cursor-pointer"
//                 >
//                   {item.name}
//                   <motion.span
//                     className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-sky-500 to-green-500 group-hover:w-full transition-all duration-300"
//                     whileHover={{ width: '100%' }}
//                   />
//                 </motion.a>
//               ))}
//             </div>

//             {/* Mobile Menu Button */}
//             <motion.button
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.9 }}
//               onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//               className="md:hidden text-gray-600 hover:text-gray-900"
//             >
//               {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
//             </motion.button>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         <AnimatePresence>
//           {isMobileMenuOpen && (
//             <motion.div
//               initial={{ opacity: 0, height: 0 }}
//               animate={{ opacity: 1, height: 'auto' }}
//               exit={{ opacity: 0, height: 0 }}
//               className="md:hidden bg-white rounded-lg border-t shadow-lg absolute top-20 left-1/2 transform -translate-x-1/2 w-[90%] max-w-sm"
//             >
//               <div className="px-6 py-4">
//                 {navItems.map((item, index) => (
//                   <motion.a
//                     key={item.name}
//                     href={item.href}
//                     initial={{ opacity: 0, x: -20 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     transition={{ delay: index * 0.1 }}
//                     onClick={(e) => handleNavClick(e, item.href)}
//                     className="block py-3 text-gray-600 hover:text-gray-900 border-b border-gray-100 cursor-pointer"
//                   >
//                     {item.name}
//                   </motion.a>
//                 ))}
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </motion.nav>

//       {/* Scroll Indicator */}
//       <motion.div
//         className="fixed bottom-8 right-8 z-50 hidden md:block"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 1 }}
//       >
//         <motion.div
//           animate={{ y: [0, 10, 0] }}
//           transition={{ duration: 1.5, repeat: Infinity }}
//           className="bg-white/80 backdrop-blur-sm rounded-full p-3 shadow-lg cursor-pointer"
//           onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
//         >
//           <ChevronDown className="transform rotate-180 text-gray-600" />
//         </motion.div>
//       </motion.div>
//     </nav>
//   );
// };

// export default Navbar;