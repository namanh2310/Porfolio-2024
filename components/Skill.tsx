'use client';
import React, { useState } from 'react';
import { BiLogoPostgresql } from 'react-icons/bi';
import { FaCss3, FaFigma, FaHtml5, FaNodeJs, FaPython, FaReact, FaRobot } from 'react-icons/fa';
import { IoCodeSlash, IoCodeSharp } from 'react-icons/io5';
import { RiNextjsFill, RiTailwindCssFill } from 'react-icons/ri';
import { SiFirebase, SiFlask, SiMongodb, SiRedux, SiSmartthings } from 'react-icons/si';
import { TbBrandReactNative } from 'react-icons/tb';
import { motion } from 'framer-motion';
import { GiArtificialIntelligence } from 'react-icons/gi';
import { FaC } from 'react-icons/fa6';
import { skills1, skills2 } from '@/reuse/skillData';

const fadeLeft = {
  initial: {
      opacity: 0,
      y: 100,
      x: 100,
      scale: 0.5, // Thêm thuộc tính scale
      // rotate: -45, // Thêm thuộc tính rotate
  },
  animate: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1, // Thay đổi scale từ 0.5 thành 1 khi hiển thị hoàn toàn
      // rotate: 0, // Thay đổi rotate từ -45 về 0
      transition: {
          delay: 0.05,
      }
  }
}



export default function Skill() {
  const [isActive, setIsActive] = useState('main');
  const handleItemClick = (item:string) => {
    setIsActive(item);
  };
  return (
    <motion.div id="skill"
    variants={fadeLeft}
    initial="initial"
    whileInView="animate"
    viewport={{
        once: true
    }}
    >
     <div className="w-fit m-auto mb-16">
        <div className="flex gap-2 items-center">
          <IoCodeSharp size={36} />
          <h1 className="text-4xl font-bold">Skills</h1>
          <IoCodeSlash size={36} />
        </div>
        <div className="w-full h-2 bg-highlight rounded-lg"></div>
        <div className="w-full h-2 bg-sky-500 translate-x-3 rounded-lg"></div>
      </div>

      <div className="block md:grid md:grid-cols-12 gap-8">
        <ul className="pb-8 md:block md:col-span-2 space-y-8">
          <motion.li
            onClick={() => handleItemClick('main')}
            className={`px-2 py-1 text-md cursor-pointer ${
              isActive === 'main' ? 'border-b-4 border-sky-500 bg-sky-500/[.1]' : ''
            }`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Web/App development
          </motion.li>
          <motion.li
            onClick={() => handleItemClick('submain')}
            className={`px-2 py-1 text-md cursor-pointer ${
              isActive === 'submain' ? 'border-b-4 border-sky-500 bg-sky-500/[.1]' : ''
            }`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Other skills
          </motion.li>
        </ul>

        <div className="col-span-10 grid grid-cols-2 md:grid-cols-4 gap-16">
          {isActive === 'main' ? 
            skills1.map((skill, key) => (
              <div
                key={key}
                className="flex flex-col justify-center items-center h-36 transform transition duration-300 ease-in-out hover:scale-110 cursor-pointer rounded-lg bg-cardbg gap-4 border-2 border-transparent hover:border-highlight"
              >
                {skill.icon}
                <p className="font-bold text-sm md:text-lg">{skill.skillName}</p>
              </div>
            ))
          :
            skills2.map((skill, key) => (
              <div
                key={key}
                className="flex flex-col justify-center items-center h-36 transform transition duration-300 ease-in-out hover:scale-110 cursor-pointer rounded-lg bg-cardbg gap-4 border-2 border-transparent hover:border-highlight"
              >
                {skill.icon}
                <p className="font-bold text-sm md:text-lg">{skill.skillName}</p>
              </div>
            )) 
          }
        </div>
      </div>
    </motion.div>
  );
}
