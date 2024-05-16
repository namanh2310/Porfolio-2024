'use client'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaFacebook, FaPhone } from 'react-icons/fa';
import { GiMailbox } from 'react-icons/gi';
import { BiMailSend } from 'react-icons/bi';
import { motion } from 'framer-motion';
import { GrResume } from 'react-icons/gr';
import { RxResume } from 'react-icons/rx';

export default function About() {
  return (
    <motion.div 
      id='about' 
      className="md:flex space-y-4 md:space-y-0 items-center justify-around"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}>
      <div
      // whileHover={{ scale: 1.15, rotate: -10}}
      // transition={{ duration: 0.25 }}
      >
        <Image
          src="/about-img.png"
          alt="About image"
          width={400}
          height={400}
          className="w-64 h-64 lg:min-w-96 lg:min-h-96 md:min-w-72 md:min-h-72 rounded-full hover:translate-y-1 transition transform duration-500 m-auto shadow-lg"
        />
      </div>

      <div className="flex gap-4">
        <div className="pt-2">
          <Link href="https://github.com/namanh2310">
            <FaGithub className="mb-4 text-slate-500 hover:text-white transition-color duration-500 cursor-pointer" size={24} />
          </Link>
          <Link href="https://www.linkedin.com/in/noahdang/">
            <FaLinkedin className="mb-4 text-slate-500 hover:text-white transition-color duration-500 cursor-pointer" size={24} />
          </Link>
          <Link href="https://www.facebook.com/profile.php?id=100016974122598">
            <FaFacebook className="mb-4 text-slate-500 hover:text-white transition-color duration-500 cursor-pointer" size={24} />
          </Link>
        
        </div>

        <div className="md:block flex flex-col items-center space-y-2">
          <div className="text-center md:text-left">
            <span className="font-bold text-highlight text-2xl lg:text-6xl md:text-4xl">NAM ANH</span>
          </div>
          <div className="text-center md:text-left">
            <span className="font-bold text-sky-500 text-2xl lg:text-6xl md:text-4xl">WEB DEVELOPER</span>
          </div>
          <div className="text-center md:text-left">
            <span className="font-bold text-sky-500 text-2xl lg:text-6xl md:text-4xl">MOBILE DEVELOPER</span>
          </div>
          <div className="text-center md:text-left w-full md:w-96 pt-2">
            <span className='text-white'>Hi there! I&apos;m a full-stack developer from Ho Chi Minh City, Vietnam. Passionate about building both frontend and backend solutions. Let&apos;s create something awesome together!</span>
            <span className='text-white flex gap-2 items-center justify-center md:justify-start'><FaPhone/>0765047739</span>
            <span className='text-white flex gap-2 items-center justify-center md:justify-start'><BiMailSend/>dangnguyennamanh206@gmail.com</span>
            <Link href={"https://drive.google.com/file/d/1Fhw5PnOUbqjzRk6SBY75nweDfdwvvYVD/view?usp=sharing"} className='text-2xl font-bold text-white flex gap-2 items-center justify-center md:justify-start hover:text-highlight trasition-all duration-300'><GrResume/>Resume</Link>
          </div>
          <Link href="mailto:dangnguyennamanh206@gmail.com" className="w-fit inline-block group">
            <div className="text-white text-center font-bold text-3xl group-hover:text-sky-500 transition-color duration-300">Contact Me 📭</div>
            <div className="w-full h-2 bg-highlight rounded-lg"></div>
            <div className="w-full h-2 bg-sky-500 translate-x-3 rounded-lg"></div>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
