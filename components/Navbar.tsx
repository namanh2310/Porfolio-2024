'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaMedal, FaPhone, FaUser } from 'react-icons/fa';
import { FaComputer } from 'react-icons/fa6';
import Link from 'next/link';


export default function Navbar() {  
    const [hash, setHash] = useState<string>("");
    const [scrollPosition, setScrollPosition] = useState<number>(0);

    useEffect(() => {
        const handleHashChange = () => {
            const hashString = window.location.hash;
            const convertedString = hashString.substring(1);
            const finalString = convertedString.charAt(0).toUpperCase() + convertedString.slice(1);
            setHash(finalString);
        };

        handleHashChange();

        window.addEventListener("hashchange", handleHashChange);

        return () => {
            window.removeEventListener("hashchange", handleHashChange);
        };
    }, []);
    const [focus, setFocus] = useState<string>();

    useEffect(() => {
        if (hash !== "") {
            setFocus(hash);
        } else {
            setFocus('About')
        }
    }, [hash]);

    useEffect(() => {
        const handleScroll = () => {
            const position = window.scrollY;
            setScrollPosition(position);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleItemClick = (item: string) => {
        setFocus(item);
    };

    const navbarOpacity = Math.min(1, scrollPosition / 200);

    return (
        <>
        <nav className={`p-6 rounded-b-3xl sticky top-0 hidden md:flex justify-between max-w-7xl m-auto z-10 ${scrollPosition > 0 ? 'bg-navbg' : ''}`} style={{ backgroundColor: `rgba(52, 53, 59, ${navbarOpacity})` }}>
            <div className='w-1/2'>
                <h1 className='w-fit text-2xl font-bold underline underline-offset-8 decoration-sky-500 decoration-4 -rotate-2 transform transition duration-300 ease-in-out hover:-rotate-0 hover:scale-110 cursor-pointer'>Noah Dang 👨‍💻</h1>
            </div>

            <div className='w-1/2 hidden sm:flex justify-between'>
            {['About', 'Skill', 'Project', 'Reward'].map((item) => (
                <motion.a
                    key={item}
                    className={`text-lg font-bold ${focus === item ? 'text-white' : 'text-unfocus'}`}
                    href={`#${item.toLowerCase()}`}
                    onClick={() => handleItemClick(item)}
                    animate={{ opacity: focus === item ? 1 : 0.7}}
                    whileHover={{ opacity: 1 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.1 }}
                >
                    {item}
                </motion.a>
            ))}
            </div>
        </nav>
        <nav className={`md:hidden sm:flex bg-navbg fixed bottom-4 z-10 w-full p-6 rounded-full flex items-center justify-between`} >
            <div className='w-2/5'>
                <h1 className='w-fit text-xl font-bold underline underline-offset-8 decoration-sky-500 decoration-4 -rotate-2 transform transition duration-300 ease-in-out hover:-rotate-0 hover:scale-110 cursor-pointer'>Noah Dang 👨‍💻</h1>
            </div>
            <div className='flex w-2/5 justify-around items-center'>
                <Link onClick={() => handleItemClick('About')} className={`text-lg font-bold ${focus === 'About' ? 'text-white' : 'text-unfocus'}`} href='#about'><FaUser/></Link>
                <Link onClick={() => handleItemClick('Skill')} className={`text-lg font-bold ${focus === 'Skill' ? 'text-white' : 'text-unfocus'}`} href='#skill'><FaCode/></Link>
                <Link onClick={() => handleItemClick('Project')} className={`text-lg font-bold ${focus === 'Project' ? 'text-white' : 'text-unfocus'}`} href='#project'><FaComputer/></Link>
                <Link onClick={() => handleItemClick('Reward')} className={`text-lg font-bold ${focus === 'Reward' ? 'text-white' : 'text-unfocus'}`} href='#reward'><FaMedal/></Link>
       
            </div>

        </nav>
        </>
    );
}
