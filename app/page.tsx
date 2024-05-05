import About from '@/components/About'
import Navbar from '@/components/Navbar'
import Project from '@/components/Project'
import Reward from '@/components/Reward'
import Skill from '@/components/Skill'
import React from 'react'

export default function page() {
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
    </div>
  )
}
