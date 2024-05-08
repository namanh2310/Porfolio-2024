'use client'

import About from '@/components/About'
import Navbar from '@/components/Navbar'
import Project from '@/components/Project'
import Reward from '@/components/Reward'
import Skill from '@/components/Skill'
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Page() {
  const [isVisible, setIsVisible] = useState(false);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
  const handleScroll = () => {
    const scrollTop = window.pageYOffset;
    if (scrollTop > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }

  // Add scroll event listener when component mounts
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className='min-h-screen px-8 bg-mybg inset-0  bg-[radial-gradient(#585a62,transparent_1px)] [background-size:24px_24px]'>
      <div className="max-w-7xl m-auto relative py-16">
        <About/>
      </div>
      <div className="max-w-7xl m-auto relative py-16">
        <Skill/>
      </div>
      <div className="max-w-7xl m-auto relative py-16">
        <Project/>
      </div>
      <div className="max-w-7xl m-auto relative py-16">
        <Reward/>
      </div>
      <AnimatePresence>
        {isVisible && (
          <motion.button 
          key={'modal'}
          onClick={scrollToTop} 
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.3 }}
          className={`fixed invisible md:visible bottom-6 right-4 bg-gray-800 text-white px-4 py-2 rounded-full shadow-md hover:bg-gray-700 transition-colors duration-300`}
        >
          Scroll to Top
        </motion.button>
        )}
      </AnimatePresence>
    </div>
  )
}
