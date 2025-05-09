import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Copy, MessageSquare } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    user_email: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState('');
  const [copied, setCopied] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  if (!formData.name || !formData.user_email || !formData.message) {
    setFormStatus('incomplete');
    return;
  }

  setFormStatus('sending');

  try {
    await emailjs.sendForm(
      'service_fyjow25',
      'template_a5jinsx',
      formRef.current!,
      '7mddD-O2XQtHAeKSY'
    );
    setFormStatus('success');
    setFormData({ name: '', user_email: '', message: '' });
  } catch (error) {
    setFormStatus('error');
  }
};


  const copyEmail = () => {
    navigator.clipboard.writeText('nilax.shirke@nextschool.org');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-sky-100 via-green-100 to-blue-100 scroll-mt-20">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-sky-600 via-green-600 to-yellow-600 text-transparent bg-clip-text"
        >
          Get in Touch
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="group"
              >
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border-2 border-transparent bg-white/80 backdrop-blur-sm focus:border-sky-500 focus:ring-2 focus:ring-sky-500 transition-all duration-300"
                />
                <div className="h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-sky-500 via-green-500 to-yellow-500 transition-all duration-300" />
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="group"
              >
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Your Email
                </label>
                <input
                  type="email"
                  name="user_email"
                  value={formData.user_email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border-2 border-transparent bg-white/80 backdrop-blur-sm focus:border-sky-500 focus:ring-2 focus:ring-sky-500 transition-all duration-300"
                />
                <div className="h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-sky-500 via-green-500 to-yellow-500 transition-all duration-300" />
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="group"
              >
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg border-2 border-transparent bg-white/80 backdrop-blur-sm focus:border-sky-500 focus:ring-2 focus:ring-sky-500 transition-all duration-300 resize-none"
                />
                <div className="h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-sky-500 via-green-500 to-yellow-500 transition-all duration-300" />
              </motion.div>

              <motion.button
                type="submit"
                disabled={formStatus === 'sending'}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full z-index:500 bg-gradient-to-r from-sky-500 via-green-500 to-yellow-500 text-white px-6 py-3 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-green-500/30  "
              >
                <Send size={20} className="animate-pulse" />
                {formStatus === 'sending' ? 'Sending...' : 'Send Message'}
              </motion.button>

              {formStatus === 'success' && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-green-500 text-center font-medium"
                >
                  Message sent successfully!
                </motion.p>
              )}
              {formStatus === 'error' && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-500 text-center font-medium"
                >
                  Something went wrong. Please try again.
                </motion.p>
              )}
              {formStatus === 'incomplete' && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-yellow-500 text-center font-medium"
                >
                  Please fill in all fields.
                </motion.p>
              )}
            </form>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-sky-500"
            >
              <button
                onClick={copyEmail}
                className="w-full flex items-center justify-between gap-4 text-left"
              >
                <div>
                  <h3 className="font-semibold mb-1 bg-gradient-to-r from-sky-600 to-green-600 text-transparent bg-clip-text">Email Me</h3>
                  <p className="text-gray-600">nilax.shirke@nextschool.org</p>
                </div>
                <motion.div
                  animate={copied ? { scale: [1, 1.2, 1] } : {}}
                  transition={{ duration: 0.3 }}
                >
                  {copied ? (
                    <span className="text-green-500">Copied!</span>
                  ) : (
                    <Copy size={20} className="text-gray-400" />
                  )}
                </motion.div>
              </button>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-green-500"
            >
              <a
                href="https://wa.me/+919967626508"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-between gap-4"
              >
                <div>
                  <h3 className="font-semibold mb-1 bg-gradient-to-r from-green-600 to-yellow-600 text-transparent bg-clip-text">WhatsApp</h3>
                  <p className="text-gray-600">Connect with Me on WhatsApp 📲</p>
                </div>
                <MessageSquare size={20} className="text-green-500" />
              </a>
            </motion.div>

            {/* <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-yellow-500 h-64"
            >
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241316.5950574475!2d72.8789412!3d19.08255545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1741850933574!5m2!1sen!2sin" 
              width="100%"
              height="100%"
              style={{ border: 0 }}
              // allowFullScreen=""
              loading="lazy"
              ></iframe>
            </motion.div> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
