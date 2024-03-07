

import { SelectedPage, benefitType } from '@/shared/types'
import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

import {motion} from 'framer-motion'


const childVariant={
  hidden:{opacity:0,scale:0.9,y:-100},
  visible:{opacity:1,scale:1,y:0},
}
export default function Benefit({icon,title,description,setSelectedPage}: benefitType) {
  return (
    
    

    
    <motion.div variants={childVariant} className='my-5 py-16 px-5 rounded-md border-2'>
      <div className='flex justify-center  mb-4'>
        <div className=' mb-4 rounded-full border-3 drop-shadow-md bg-red-100 '>
          {icon}
        </div>
      </div>
      <div className='text-center'>
      <h4 className='font-bold'>
          {title}
      </h4>
      <p className='my-3'>{description}</p>
      </div>
      <AnchorLink onClick={()=>setSelectedPage(SelectedPage.Home)} href={`#${SelectedPage.ContactUs}`} className='text-sm text-primary-300 flex justify-center mt-5 hover:text-secondary-500'>
      <p>Learn More</p>
      </AnchorLink>
     

    </motion.div>
  )
}