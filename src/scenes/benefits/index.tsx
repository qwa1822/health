


import HTEXT from '@/shared/HTEXT';
import { SelectedPage, benefitType } from '@/shared/types'
import { HomeModernIcon,UserGroupIcon,AcademicCapIcon, } from '@heroicons/react/16/solid'
import {motion} from 'framer-motion';
import Benefit from './Benefit';
import ActionButton from '@/shared/ActionButton';
import BenefitPageGraphic from '@/assets/BenefitsPageGraphic.png'
type Props = {

  setSelectedPage:(value:SelectedPage)=>void
}

const benefits:Array<benefitType>=[
  {
    icon:<HomeModernIcon className='h-6 w-6'/>,
    title:'State of the Art Facilties',
    description:"반갑습니다 헬창여러분",
  },
  {
    icon:<UserGroupIcon className='h-6 w-6'/>,
    title:'100% 헬창만 입장가능 합니다',
    description:"열심히하면 성과가 좋겠죠 ㅋㅋ",
  },
  {
    icon:<AcademicCapIcon className='h-6 w-6'/>,
    title:'State of the Art Facilties',
    description:"열심히들 해봅시다",
  },
]

const container={
  hidden:{},
  visible:{
    transition:{staggerChildren:0.2}
  }
}

const TwoContainer={
  hidden:{opacity:0,x:100},
  visible:{opacity:1,x:0}
}

export default function Benefits({setSelectedPage}: Props) {
  return (
    <section id="benefits" className='mx-auto min-h-full w-5/6 py-20'>
      <motion.div onViewportEnter={()=>setSelectedPage(SelectedPage.Home)}>
 {/* Header */}
        <motion.div initial="hidden" whileInView="visible" viewport={{once:true, amount:0.5}} transition={{duration:2.0}} variants={TwoContainer}   className='md:my-5 md:w-3/5'>
          <HTEXT>More Trhan Just Gym.</HTEXT>
          <p className='my-5 text-sm'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum maiores eveniet, in quod itaque dolores delectus dolorem autem eum nisi commodi asperiores soluta quo numquam, tenetur nihil cumque voluptate aliquam.
          </p>
        </motion.div >


        {/* Benefits */}
        <motion.div initial="hidden" whileInView="visible" viewport={{once:true,amount:'some'}} variants={container}  className='md:flex items-center justify-between gap-8 mt-5 '>
          {benefits.map((benefit:benefitType)=>(
            <Benefit setSelectedPage={setSelectedPage} key={benefit.title} {...benefit}/>
          ))}
        </motion.div>

        {/* Graphic and Description */}
        <div className='mt-16 items-center justify-between gap-20 md:mt-28 md:flex'>
          {/* Graphic */}
          {/* (1) */}
          <img src={BenefitPageGraphic} className='mx-auto' alt="benefit-page-graphic" />

          {/* description */}
          <div>
              {/* TItle */}
              <div className='relative'>
                <div className='before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves'>
                    <motion.div initial="hidden" whileInView="visible" viewport={{once:true,amount:0.5}} transition={{duration:0.5}} variants={{
                      hidden:{opacity:0,x:50},
                      visible:{opacity:1,x:0}
                    }}>
                      <HTEXT>
                        MILLIONS OF HAPPY MEMBERS GETTING{" "}
                        <span className='text-primary-500'>FIT</span>
                      </HTEXT>
                    </motion.div>
                </div>
              </div>


              {/* Description */}
              <div>
                <p className='my-5'>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat ducimus inventore doloribus vel, reiciendis ex, nam molestias delectus architecto exercitationem maxime blanditiis ab earum. Ullam temporibus esse blanditiis modi cupiditate.
                </p>
                <p className='mb-5'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis vel, laborum maiores pariatur exercitationem natus expedita reprehenderit assumenda quae omnis numquam perspiciatis! Ratione, deserunt? Laudantium pariatur velit sit debitis ex.
                </p>
              </div>

            {/* Button  */}
            <div className='relative mt-16'>
              <div className='before:absolute before:-bottom-20 before:right-40 before:z-[1] before:content-sparkles'></div>

            <ActionButton setSelectedPage={setSelectedPage}>
              Join Now
            </ActionButton>
            </div>

          </div>
        </div>
      </motion.div>
    </section>
  )
}