import React from 'react'
import Logo from '@/assets/Logo.png'
type Props = {}

export default function Footer({}: Props) {
  return (
   
    <footer className='w-full bg-primary-100 py-16'>


      <div className='justify-content mx-auto w-5/6 gap-16 md:flex'>


        {/* 가장왼쪽 */}
        <div className='mt-16 basis-1/2 md:mt-0'>
          <img src={Logo} alt="" />
          <p className='my-5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum nostrum eos dolor temporibus laborum delectus, soluta iste excepturi porro ad tenetur fuga, dolore, deleniti voluptate. Quos, veritatis. Optio, ea error.</p>
          <p>@ Eyogom All RIghts</p>
        </div>


    {/* 중간 */}
        <div className='mt-16 basis-1/4 md:mt-0'>
        <h4 className='font-bold'>Links</h4>
        <p className='my-5'>Massa Orci senectus</p>
        <p className='my-5'>Et gravida id et etiam</p>
        <p>Ullamcorper vivamus</p>
        </div>




    {/* 오른쪽 */}
        <div className='mt-16 basis-1/4 md:mt-0'>
        <h4 className='font-bold'>Contact</h4>
        <p className='my-5'>Tempus metus mattis risus volutnpat egaes</p>
        <p>(010)3179-7004</p>
        
        
        </div>
        <div>

        </div>
      </div>
    </footer>
  )
}