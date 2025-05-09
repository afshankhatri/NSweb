import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Youtube, Instagram, Mail, Globe, ArrowRight } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribeStatus, setSubscribeStatus] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) {
      setSubscribeStatus('error');
      return;
    }
    setSubscribeStatus('success');
    setEmail('');
    // Add your newsletter subscription logic here
  };

  return (
    <footer className="bg-gradient-to-br from-sky-100 via-green-100 to-yellow-100 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-sky-600 to-green-600 text-transparent bg-clip-text">Nilax</h3>
            <p className="text-gray-600">
              Young explorer, creator, and dreamer. Join me on my journey of discovery and creation.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-green-600 to-yellow-600 text-transparent bg-clip-text">Quick Links</h3>
            <ul className="space-y-2">
              {['About', 'Projects', 'Blog', 'Contact'].map((item, index) => (
                <motion.li
                  key={item}
                  whileHover={{ x: 5 }}
                  className="group"
                >
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-600 hover:text-gray-900 transition-colors inline-block"
                  >
                    {item}
                    <div className="h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-sky-500 via-green-500 to-yellow-500 transition-all duration-300" />
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-sky-600 to-green-600 text-transparent bg-clip-text">Connect</h3>
            <div className="flex space-x-4">
              {[
                { icon: Youtube, color: 'hover:text-red-500', href: 'https://www.youtube.com/@prehistorichistory-bypalae1183?sub_confirmation=1' },
                // { icon: Instagram, color: 'hover:text-yellow-500', href: '#' },
                { icon: Mail, color: 'hover:text-sky-500', href: 'https://mail.google.com/mail/u/0/#inbox?compose=new' },
                { icon: Globe, color: 'hover:text-green-500', href: 'https://www.nilaxshirke.com' }
              ].map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className={`text-gray-600 ${item.color} transition-colors`}
                >
                  <item.icon size={24} />
                </motion.a>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-green-600 to-yellow-600 text-transparent bg-clip-text">Newsletter</h3>
            <form onSubmit={handleSubscribe} className="space-y-4">
              <div className="relative group">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 rounded-lg border-2 border-transparent bg-white/80 backdrop-blur-sm focus:border-sky-500 focus:ring-2 focus:ring-sky-500 transition-all duration-300"
                />
                <div className="h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-sky-500 via-green-500 to-yellow-500 transition-all duration-300" />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-gradient-to-r from-sky-500 via-green-500 to-yellow-500 text-white px-4 py-2 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-green-500/30"
              >
                Subscribe
                <ArrowRight size={20} className="animate-pulse" />
              </motion.button>
              {subscribeStatus === 'success' && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-green-500 text-sm"
                >
                  Successfully subscribed!
                </motion.p>
              )}
              {subscribeStatus === 'error' && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-500 text-sm"
                >
                  Please enter a valid email.
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 pt-8 border-t border-gray-200"
        >
          <p className="text-center text-gray-600">
            © {new Date().getFullYear()} Nilax. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;