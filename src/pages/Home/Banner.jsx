import React from 'react'
import { motion } from "motion/react"
import { easeOut } from 'motion'
import team1 from '../../assets/images/team/team1.jpg'
import team2 from '../../assets/images/team/team2.jpg'

const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-96">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className='flex-1'>
    <motion.img
      animate={{y:[20,50,20]}}
      transition={{duration:5,repeat:Infinity}}
      src={team1}
      className="max-w-sm w-64 rounded-t-[40px] rounded-lg border-blue-500 border-l-4 border-b-4 rounded-br-[40px] shadow-2xl" />
    <motion.img
      animate={{x:[100,150,100]}}
      transition={{duration:5,delay:2.5,repeat:Infinity}}
      src={team2}
      className="max-w-sm w-64 rounded-t-[40px] rounded-lg border-blue-500 border-l-4 border-b-4 rounded-br-[40px] shadow-2xl" />
    </div>
    <div className='flex-1'>
      <motion.h1
      animate={{x:50}}
      transition={{duration:2,delay:1,ease:easeOut,repeat:Infinity}}
      className="text-5xl font-bold">Job <motion.span animate={{color:['#96ff33','#33f0ff','#de1680']}} transition={{duration:1.5,repeat:Infinity}}>Portal</motion.span> News!</motion.h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
  )
}

export default Banner
