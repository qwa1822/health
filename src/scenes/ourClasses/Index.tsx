import { SelectedPage, classType } from '@/shared/types'
import React from 'react'

import image1 from '@/assets/image1.png'
import image2 from '@/assets/image2.png'
import image3 from '@/assets/image3.png'
import image4 from '@/assets/image4.png'
import image5 from '@/assets/image5.png'
import image6 from '@/assets/image6.png'
import {motion} from 'framer-motion'
import HTEXT from '@/shared/HTEXT'
import Class from './Class'
type Props = {
  setSelectedPage:(value:SelectedPage)=>void
}

const Ourclasses:Array<classType>=[
  {
    name:'Weight Trainging classes',
    description:'화이팅 해봅시다들',
    image:image1,
  },

  {
    name:'근육증가반',
    description:'다들 열심히 ㅎ화이팅 입니다.',
    image:image2,
  },
  {
    name:'근력형성반',
    description:'화이팅 해봅시다들',
    image:image3,
  },
  {
    name:'체지방 감량반',
    description:'화이팅 해봅시다들',
    image:image4,
  },
  {
    name:'Fitness Club',
    description:'화이팅 해봅시다들',
    image:image5,
  },
  {
    name:'Running Family',
    description:'Running Time',
    image:image6,
  }
]

export default function OutClasses({setSelectedPage}: Props) {
  return (
   <section className='w-full bg-primary-100 py-40'>
    <motion.div onViewportEnter={()=>setSelectedPage(SelectedPage.Home)}>

    <motion.div className='mx-auto w-5/6' initial="hidden" whileInView="visible" viewport={{once:true,amount:0.5}}
    transition={{duration:0.5}} variants={{
      hidden:{opacity:0,x:-50},
      visible:{opacity:1,x:0}
    }} >
      <div className='md:w-3/5'>
        <HTEXT>OUR CLASSES</HTEXT>
        <p className='py-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione, eius amet distinctio magnam incidunt deserunt aliquam voluptates aut ab deleniti vel esse itaque excepturi consequuntur voluptatem officiis ea. Quidem, inventore!</p>
      </div>
    </motion.div>


{/* 이미지 슬라이더 */}
    <div className='mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden'>
      <ul className='w-[2800px] whitespace-nowrap'>
        {Ourclasses.map((item,idx)=>(
          <Class key={item.name} {...item} />
        ))}
      </ul>
    </div>
    </motion.div>
   </section>
  )
}