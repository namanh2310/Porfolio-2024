import Image from 'next/image'
import React from 'react'
import { FaGift, FaMedal } from 'react-icons/fa'

export default function Reward () {
  return (
    <div id='reward'>
    <div className="w-fit m-auto mb-16">
        <div className="flex gap-2 items-center">
          <FaMedal size={36} />
          <h1 className="text-4xl font-bold">Rewards</h1>
          <FaGift size={36} />
        </div>
        <div className="w-full h-2 bg-highlight rounded-lg"></div>
        <div className="w-full h-2 bg-sky-500 translate-x-3 rounded-lg"></div>
    </div>

    <div className='space-y-12'>
        <h1 className='font-bold text-center md:text-left text-2xl underline underline-offset-8 decoration-highlight decoration-4'>Competitions</h1>
        <div className='text-left flex flex-col md:flex-row items-center gap-4'>
            <Image
                src="/pic1.png"
                alt="About image"
                width={320}
                height={240}
                className=" rounded-xl shadow-xl"
            />
            <div className='group cursor-pointer'>
                <p>May 2023</p>
                <p className='group-hover:font-bold group-hover:text-highlight transition-all'>First Prize in The conference on the digital transformation capacity for Vietnamese Youth 2023</p>
                <p>In 2023, I had opportunity to join in a scientific conference for students. My article &quot;AiMA - An AI-Based Mobile System to Assist College Students with Math-Related Issue&quot; won the first prize among 50+ research teams. </p>
            </div>
        </div>



        <div className='text-right flex flex-col-reverse md:flex-row items-center gap-4'>
            <div className='group cursor-pointer'>
                <p>Oct 2023</p>
                <p className='group-hover:font-bold group-hover:text-sky-500 transition-all'>Top 3 best research paper at The 7th International Student Science Forum 2023 (ISSF 2023)</p>
                <p>I am one of 40 delegates participating in the international science student forum in 2023. With my scientific research, I was selected as one of the 3 best reports among the 100 participating teams.</p>
            </div>
            <Image
                src="/pic3.jpg"
                alt="About image"
                width={360}
                height={240}
                className="rounded-xl shadow-xl"
            />
            <Image
                src="/pic2.png"
                alt="About image"
                width={240}
                height={240}
                className="rounded-xl shadow-xl"
            />
        </div>



        <div className='text-left flex flex-col md:flex-row items-center gap-4'>
            <Image
                src="/pic4.png"
                alt="About image"
                width={280}
                height={240}
                className="rounded-xl shadow-xl"
            />
            <Image
                src="/pic5.png"
                alt="About image"
                width={240}
                height={320}
                className="rounded-xl shadow-xl"
            />
            <div className='group cursor-pointer'>
                <p>March 2024</p>
                <p className='group-hover:font-bold group-hover:text-highlight transition-all'>Top 4 in the southern region of GDSC Hackathon 2024</p>
                <p>Our team won fourth prize in the coding GDSC Hackathon competition in the Southern region this year with the project &quot;Air quality monitor applying artificial intelligence&quot;.</p>
            </div>
        </div>

        
        <div className='text-right flex flex-col-reverse md:flex-row items-center gap-4'>
            <div className='group cursor-pointer'>
                <p>March 2024</p>
                <p className='group-hover:font-bold group-hover:text-sky-500 transition-all'>Achieved 96 points in graduation thesis defense</p>
                <p>During the last project defense period, I achieved 96 points, which is also the highest score in the semester&apos;s defense committee.</p>
            </div>
            <Image
                src="/pic6.png"
                alt="About image"
                width={280}
                height={240}
                className="rounded-xl shadow-xl"
            />
            <Image
                src="/pic7.png"
                alt="About image"
                width={380}
                height={300}
                className="rounded-xl shadow-xl"
            />
        </div>
    </div>

    <div className='mt-12'>
        <h1 className='font-bold text-center md:text-left text-2xl underline underline-offset-8 decoration-sky-500 decoration-4'>Scholarships & Activity</h1>
        <div className='mt-12 grid gird-cols-1 md:grid-cols-3 gap-4'>
            <div className='py-4 h-auto bg-cardbg flex flex-col justify-center items-center rounded-xl shadow-lg gap-4'>
                <Image
                    src="/Logo-HCMIU.png"
                    alt="About image"
                    width={72}
                    height={72}
                />
                <p>Academic Encouragement Scholarship 2022-2023</p>
                <p>International University - VNU</p>
            </div>

            <div className='py-4 h-auto bg-cardbg flex flex-col justify-center items-center rounded-xl shadow-lg gap-4'>
                <Image
                    src="/Toshiba-Logo.jpg"
                    alt="About image"
                    width={72}
                    height={72}
                />
                <p>Toshiba Scholarship 2023-2024</p>
                <p>for VNU students</p>
            </div>

            <div className='py-4 h-auto bg-cardbg flex flex-col justify-center items-center rounded-xl shadow-lg gap-4'>
                <Image
                    src="/Logo-HCMIU.png"
                    alt="About image"
                    width={72}
                    height={72}
                />
                <p>Member of</p>
                <p>&quot;IU Student Recruitment Campaign&quot; - IU 2020 - 2021</p>
            </div>
        </div>
    </div>
    </div>
  )
}
