
import useMediaQuery from '@/hooks/useMediaQuery'
import ActionButton from '@/shared/ActionButton'
import { SelectedPage } from '@/shared/types'
import React from 'react';


import HomePageText from '@/assets/HomePageText.png'
import HomePageGraphic from '@/assets/HomePageGraphic.png'
import SponsoreRedBull from '@/assets/SponsorRedBull.png'
import SponsoreForbes from '@/assets/SponsorForbes.png'
import SponsroreFortune from '@/assets/SponsorFortune.png'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { motion } from 'framer-motion';

type Props = {
  setSelectedPage:(value:SelectedPage)=>void
}

export default function Home({setSelectedPage}: Props) {

  const isAoboveMediumScreens=useMediaQuery('(min-width:1024px)')



  return (
    <section id="home" className='gap-16 bg-gray-20 md:h-full md:pb-0 py-10'>

{/* Image ANd Main Header */}
      <motion.div  onViewportEnter={()=>setSelectedPage(SelectedPage.Home)} className='md:flex mx-auto  w-5/6 items-center justify-center md:h-5/6'>
        {/* Main Header */}
        <div className='z-10 mt-32 md:basis-3/5'>
          {/* Headings */}
          <motion.div  
           whileInView="visible" initial="hidden" viewport={{once:true, amount:0.5}} transition={{duration:2.0}} variants={{
            hidden:{opacity:0,x:100},
            visible:{opacity:1,x:0}
           }}  className='md:-mt-20'>
            <div className='relative'>
              <div className='before:absolute before:-top-20 md:before:content-evolvetext  before:-left-20 before:z-[-1]'>
              <img src={HomePageText} alt="home-page-text" />
            
            
              </div>
              
              </div>
              <p className='mt-8 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa dolorum praesentium, dolores atque dolorem maxime consectetur deleniti omnis reprehenderit est rem soluta veritatis, aperiam excepturi labore sequi sed laboriosam eum!</p>
          </motion.div>
          {/* Actions */}
          <motion.div initial="hidden" whileInView="visible" viewport={{once:true,amount:0.5}} transition={{delay:0.2,duration:0.5}}  className='mt-8 flex items-center gap-8 md:justify-center'>
            <ActionButton setSelectedPage={setSelectedPage}>
              Join now
            </ActionButton>
            <AnchorLink href={`#${SelectedPage.ContactUs}`} onClick={()=>setSelectedPage(SelectedPage.ContactUs)} className='text-sm font-bold text-primary-500 underline'>

              <p>Learn More</p>
            </AnchorLink>
          </motion.div>
        </div>

        {/* image */}
      <div className='flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-center  '>
        <img src={HomePageGraphic} alt="" />
      </div>
        </motion.div>


{/* SponSors */}
    {isAoboveMediumScreens && (
      <div className='h-[150px] w-full bg-primary-100 py-10'>
        <div className="w-5/6 mx-auto">
          <div className='flex w-3/5 gap-8 items-center justify-between'>
            <img src={SponsoreRedBull} alt="" />
            <img src={SponsroreFortune} alt="" />
            <img src={SponsoreForbes} alt="" />
          </div>
        </div>
      </div>
    )}
    </section>
  )
}