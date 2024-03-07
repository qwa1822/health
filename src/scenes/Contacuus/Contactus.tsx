import { SelectedPage } from '@/shared/types'
import React from 'react'
import {motion} from 'framer-motion';
import { useForm } from 'react-hook-form';

import ContactUsPageGraphic from '@/assets/ContactUsPageGraphic.png'
import HTEXT from '@/shared/HTEXT';
type Props = {
  setSelectedPage:(value:SelectedPage)=>void
}

export default function Contactus({setSelectedPage}: Props) {


  const inputStyle=`      w-full  rounded-lg bg-primary-300 px-7 py-7 mt-5 placeholder-white`

  const {
    register,
    trigger,formState:{errors}
  }=useForm()
  const onSubmit=async(e:any)=>{
    const isValid=await trigger()
    if(!isValid){
      e.preventDefault()
    }
  }
  return (
   <section id="contactus" className='mx-auto w-5/6 pt-24 pb-32'>
    <motion.div onViewportEnter={()=>setSelectedPage(SelectedPage.ContactUs)}>
      {/* Header */}
      <motion.div className='md:w-3/5' initial="hidden" whileInView="visible" viewport={{once:true, amount:0.5}} transition={{duration:0.5}} variants={{
        hidden:{opacity:0,x:-50},
        visible:{opacity:1,x:0}
      }}>
          <HTEXT>
            <span className='text-primary-500'>Join Now</span> TO GEt In SHAPE
          </HTEXT>
          <p className='mt-5'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum amet sed provident iusto sequi distinctio quibusdam dolores maiores cum expedita. Facere quidem excepturi ea sapiente molestiae, ipsam numquam consectetur! Sint!
          </p>


        {/* Form */}
        <div className='mt-10 justify-between gap-8 md:flex '>
          <motion.div className='mt-10 basis-3/5 md:mt-0' initial="hidden" whileInView="visible" viewport={{
            once:true,amount:0.5
          }} transition={{duration:0.5}} variants={{
            visible:{opacity:1,y:0},
            hidden:{opacity:0,y:50}
          }}>

            <form method="POST" action="https://formsubmit.co/el/cuguho" target='_blank' onSubmit={onSubmit}>

              <input type="text" {...register('name',{
                required:true,
                maxLength:100,
              })}  className={inputStyle} 
              placeholder='name'/>
              {errors.name &&(
                <p className='mt-1 text-primary-500'>
                    {errors.name.type==='required' && 'This field is required'}
                    {errors.name.type==='maxLength' && 'Max Length is 100 char'}
                </p>
              )}

<input type="email" {...register('email',{
                required:true,
                pattern:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i

              })}  className={inputStyle} 
              placeholder='Email'/>
              {errors.email &&(
                <p className='mt-1 text-primary-500'>
                    {errors.email.type==='required' && 'This field is required'}
                    {errors.email.type==='pattern' && 'email is not valid'}
                </p>
              )}


      <textarea rows={4} cols={50} {...register('message',{
                required:true,
                maxLength:2000,
              })}  className={inputStyle} 
              placeholder='Message'/>
              {errors.message &&(
                <p className='mt-1 text-primary-500'>
                    {errors.message.type==='required' && 'This field is required'}
                    {errors.message.type==='maxLength' && 'Max Length is 2000 char'}
                </p>
              )}

<button type="submit" className='mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 ' >
  SUBMIT
</button>

            </form>

          </motion.div>

          <motion.div className='relative mt-16 basis-2/5 md:mt-0' initial="hidden" whileInView="visible" viewport={{once:true,amount:0.5}} transition={{duration:0.5,delay:0.2}} variants={{
            visible:{opacity:1,y:0},
            hidden:{opacity:0,y:50},
          }}>
            {/* <div className='md:before:content-evolvetext  w-full  before:absolute before:-bottom-20 before:-right-10 before:-z-[-1]'> */}
              <img src={ContactUsPageGraphic} className='w-full' alt="Contact-us-page-graphic" />
              {/* </div> */}


          </motion.div>
        </div>
      </motion.div>
    </motion.div>

   </section>
  )
}