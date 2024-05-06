'use client'
import Link from 'next/link'
import React, {useState} from 'react'
import { DiFirebase, DiPostgresql, DiPython } from 'react-icons/di'
import { FaCss3, FaHtml5, FaNode, FaNodeJs, FaPython, FaReact } from 'react-icons/fa'
import { FaC, FaComputer, FaComputerMouse } from 'react-icons/fa6'
import { GrMysql } from 'react-icons/gr'
import { IoHardwareChip, IoLogoJavascript } from 'react-icons/io5'
import { SiArduino, SiFlask, SiFlutter, SiRedux, SiReduxsaga } from 'react-icons/si'
import { TbBrandReactNative } from 'react-icons/tb'
import { motion } from 'framer-motion';

const fadeUp = {
    initial: {
        opacity: 0,
        y: 100,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.5,
        }
    }
}

export default function Project() {
  const [isActive, setIsActive] = useState('1');
  const handleItemClick = (item:string) => {
    setIsActive(item);
  };
  return (
    <motion.div id='project'
    variants={fadeUp}
    initial="initial"
    whileInView="animate"
    viewport={{
        once: true
    }}
    >
    
    <div className="w-fit m-auto mb-16">
        <div className="flex gap-2 items-center">
          <FaComputer size={36} />
          <h1 className="text-white text-4xl font-bold">Projects</h1>
          <FaComputerMouse size={36} />
        </div>
        <div className="w-full h-2 bg-highlight rounded-lg"></div>
        <div className="w-full h-2 bg-sky-500 translate-x-3 rounded-lg"></div>
    </div>

    <div className="block md:grid md:grid-cols-12 gap-8 mb-8">
        <ul className="pb-8 md:block md:col-span-2 space-y-8">
          <motion.li
            onClick={() => handleItemClick('1')}
            className={`text-white px-2 py-1 text-md cursor-pointer ${
              isActive === '1' ? 'border-b-4 border-sky-500 bg-sky-500/[.1]' : ''
            }`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            AIoT Lab VietNam - HCMIU - VNU
          </motion.li>
          <motion.li
            onClick={() => handleItemClick('2')}
            className={`text-white px-2 py-1 text-md cursor-pointer ${
              isActive === '2' ? 'border-b-4 border-sky-500 bg-sky-500/[.1]' : ''
            }`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            IMT Solutions
          </motion.li>
        </ul>

        <div className="col-span-10">
         {isActive === '1' ? (
            <>
                <strong>Member</strong>
                <p className='text-white italic'>AIoT Lab Vietnam (Aug 2023 - Now)</p>
                <span className='text-white content-between'>Collaborating with team members, I contribute to the successful implementation of AI and IoT projects. Through diligent research in relevant fields, I prepare to engage in conferences, journals, and scientific competitions, ensuring our work remains at the forefront of innovation.</span>
            </>
         )
        : (
            <>
                <strong className='text-white'>Internship</strong>
                <p className='text-white italic'>IMT Solutions (June 2022 - Oct 2022)</p>
                <ul>
                    <li className='text-white'>
                    • Monitoring mobile applications using React Native framework. 
                    </li>
                    <li className='text-white'>
                    • Building UI based on the Figma file provided by the client. 
                    </li>
                </ul>
            </>
        )
        }
      </div>
    </div>

    <div className='grid grid-cols-1 lg:grid-cols-4 sm:grid-cols-2 gap-16'>
        <div 
            className="relative  h-64 bg-gray-200 hover:bg-gray-300 dark:bg-gray-400 rounded-lg border-4 border-transparent overflow-hidden" 
            style={{ backgroundImage: 'url(/shopee.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <Link href={"https://github.com/namanh2310/WEB-Project-Shopee-Phake-FullStack"} className="absolute inset-0 flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition-opacity bg-black/[.6]">
                    <span className="text-lg font-bold text-white">Shopee Clone</span>
                    <span className="text-sm text-white text-center">An e-commerce web application inspired by Shopee - a popular e-commerce site in Vietnam</span>
                    <div className='mt-4 w-full flex justify-evenly'>
                        <FaNodeJs size={24}/>
                        <FaHtml5 size={24}/>
                        <FaCss3 size={24}/>
                        <IoLogoJavascript size={24}/>
                        <GrMysql size={24}/>
                    </div>
                </Link>
        </div>

        <div 
            className="relative  h-64 bg-gray-200 hover:bg-gray-300 dark:bg-gray-400 rounded-lg border-4 border-transparent overflow-hidden" 
            style={{ backgroundImage: 'url(/math.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <Link href={"https://github.com/namanh2310/Nam-Anh-Thesis-Submission"} className="absolute inset-0 flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition-opacity bg-black/[.6]">
                    <span className="text-lg font-bold text-white">AiMA-Math App</span>
                    <span className="text-sm text-white text-center"> AiMA: AI-based mobile system aiding college students with calculus, offering specialized math solutions for enhanced learning.</span>
                    <div className='mt-4 w-full flex justify-evenly'>
                        <SiFlask size={24}/>
                        <TbBrandReactNative size={24}/>
                        <SiRedux size={24}/>
                        <FaPython size={24}/>
                        <DiPostgresql size={24}/>
                    </div>
                </Link>
        </div>

        <div 
            className="relative  h-64 bg-gray-200 hover:bg-gray-300 dark:bg-gray-400 rounded-lg border-4 border-transparent overflow-hidden" 
            style={{ backgroundImage: 'url(/air.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <Link href={"https://github.com/Nguyenle23/AIAir-Quality-System"} className="absolute inset-0 flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition-opacity bg-black/[.6]">
                    <span className="text-lg font-bold text-white">AiAIR - Air Monitoring</span>
                    <span className="text-sm text-white text-center"> The project involves air quality monitoring by integrating sensors and machine learning models.</span>
                    <div className='mt-4 w-full flex justify-evenly'>
                        <FaReact size={24}/>
                        <SiFlutter size={24}/>
                        <SiFlask size={24}/>
                        <FaPython size={24}/>
                        <SiArduino size={24}/>
                        <DiFirebase size={24}/>
                    </div>
                </Link>
        </div>

        <div 
            className="relative  h-64 bg-gray-200 hover:bg-gray-300 dark:bg-gray-400 rounded-lg border-4 border-transparent overflow-hidden" 
            style={{ backgroundImage: 'url(/parking.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <Link href={"https://github.com/namanh2310/IoT_Project"} className="absolute inset-0 flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition-opacity bg-black/[.6]">
                    <span className="text-lg font-bold text-white">iSP - Smart Parking</span>
                    <span className="text-sm text-white text-center">A software-based solution that helps manage and optimize parking in a designated area. The system includes IoT and deep learning techniques.</span>
                    <div className='mt-4 w-full flex justify-evenly'>
                        <FaReact size={24}/>
                        <SiFlutter size={24}/>
                        <SiFlask size={24}/>
                        <FaPython size={24}/>
                        <DiFirebase size={24}/>
                    </div>
                </Link>
        </div>

        <div 
            className="relative  h-64 bg-gray-200 hover:bg-gray-300 dark:bg-gray-400 rounded-lg border-4 border-transparent overflow-hidden" 
            style={{ backgroundImage: 'url(/bin.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <Link href={""} className="absolute inset-0 flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition-opacity bg-black/[.6]">
                    <span className="text-lg font-bold text-white">SBSR – Smart Bin</span>
                    <span className="text-sm text-white text-center">An intelligent waste bin activated by hand gestures, equipped with advanced waste sorting capabilities.</span>
                    <div className='mt-4 w-full flex justify-evenly'>
                        <SiFlask size={24}/>
                        <FaPython size={24}/>
                        <FaC size={24}/>
                    </div>
                </Link>
        </div>

        <div 
            className="relative  h-64 bg-gray-200 hover:bg-gray-300 dark:bg-gray-400 rounded-lg border-4 border-transparent overflow-hidden" 
            style={{ backgroundImage: 'url(/movie.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <Link href={"https://github.com/namanh2310/Movie-App"} className="absolute inset-0 flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition-opacity bg-black/[.6]">
                    <span className="text-lg font-bold text-white">MovieApp</span>
                    <span className="text-sm text-white text-center">A movie/series website with authentication and trailer list.</span>
                    <div className='mt-4 w-full flex justify-evenly'>
                        <FaReact size={24}/>
                        <SiRedux size={24}/>
                    </div>
                </Link>
        </div>

        <div 
            className="relative  h-64 bg-gray-200 hover:bg-gray-300 dark:bg-gray-400 rounded-lg border-4 border-transparent overflow-hidden" 
            style={{ backgroundImage: 'url(/traffic.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <Link href={"https://github.com/namanh2310/Movie-App"} className="absolute inset-0 flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition-opacity bg-black/[.6]">
                    <span className="text-lg font-bold text-white">Traffic Light</span>
                    <span className="text-sm text-white text-center">This project focuses on implementing peripherals on ATMega32 to control a vehicle autonomously based on traffic light observations.</span>
                    <div className='mt-4 w-full flex justify-evenly'>
                        <FaC size={24}/>
                        <IoHardwareChip size={24}/>
                    </div>
                </Link>
        </div>

        <div 
            className="relative  h-64 bg-gray-200 hover:bg-gray-300 dark:bg-gray-400 rounded-lg border-4 border-transparent overflow-hidden" 
            style={{ backgroundImage: 'url(/light.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <Link href={"https://github.com/namanh2310/Movie-App"} className="absolute inset-0 flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition-opacity bg-black/[.6]">
                    <span className="text-lg font-bold text-white">Smart Light</span>
                    <span className="text-sm text-white text-center">Manipulating leds by gestures and verbal interaction</span>
                    <div className='mt-4 w-full flex justify-evenly'>
                        <FaPython size={24}/>
                        <FaC size={24}/>
                        <SiArduino size={24}/>
                    </div>
                </Link>
        </div>


       
    </div>
    </motion.div>
  )
}
