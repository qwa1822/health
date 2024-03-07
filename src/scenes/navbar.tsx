import { useEffect, useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";

import Logo from "@/assets/Logo.png";
import Link from './Link';
import { SelectedPage } from '@/shared/types';
import useMediaQuery from '@/hooks/useMediaQuery';
import ActionButton from '@/shared/ActionButton';

interface Props{
  selectedPage:SelectedPage;
  setSelectedPage:(value:SelectedPage)=>void
  isTop:boolean
}
export default function Navbar({selectedPage,setSelectedPage,isTop}: Props) {
  const flexBetween = "flex items-center justify-between";
  const [isMenutoggle,setIsMenutoggle]=useState<boolean>(false)


 
  
  let navbarBackground = isTop ? "" : "bg-primary-100 drop-shadow";
  
  
  
  
  const isAboveMediumScreens=useMediaQuery("(min-width:1060px)")
  return (
    <nav>
      <div className={`  ${navbarBackground} fixed top-0 z-30  w-full py-6  `}>
        {/* 전체에서 5/6크기로 줄음 */}
        <div className={`mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-10`}>
            {/* Left Side */}
            <img src={Logo} alt="logo" />

            {/* Right Side */}

        
           
           

          {/* 1060이하가 아닐시 */}
           {isAboveMediumScreens ? (<div className={`${flexBetween} w-full `}>
              <div className={`${flexBetween} gap-8 test-sm`}>
                <Link page="Home" selectedPage={selectedPage}  setSelectedPage={setSelectedPage}/>
                <Link page="Benefit" selectedPage={selectedPage}  setSelectedPage={setSelectedPage} />
                <Link page="Our Classes"selectedPage={selectedPage}  setSelectedPage={setSelectedPage}/>
                <Link page="Contact" selectedPage={selectedPage}  setSelectedPage={setSelectedPage}/>
              </div>
              <div className={`${flexBetween} gap-8`}>
                <p>Sign iin</p>
                <ActionButton setSelectedPage={setSelectedPage}>Become a Member</ActionButton>
              </div>
         

            </div>
           ):(
            // 맞으면 버튼으로변환
             <button onClick={()=>setIsMenutoggle((prev)=>!prev)} className="rounded-full bg-secondary-500 p-2">
              <Bars3Icon className='h-6 w-6 text-white'/>
             </button>
           )}
                      
          
          </div>
        </div>
      </div>


{/* Mobile Menu Modal */}
{/* 버튼을클릭했거나 1060이하일떄 */}
{!isAboveMediumScreens && isMenutoggle&& (
  <div className='fixed right-0 w-[300px] bg-red-200 h-full py-2 z-40'>
    {/* {Close Icon} */}
    <div className='flex justify-end p-12'>
      <button onClick={()=>setIsMenutoggle(prev=>!prev)}><XMarkIcon className='h-6 w-6 text-gray-400'/>
      </button>
    </div>


    {/* Menu Items */}
    <div className="ml-[33%] flex flex-col  gap-10 text-2xl">
                <Link page="Home" selectedPage={selectedPage}  setSelectedPage={setSelectedPage}/>
                <Link page="Benefit" selectedPage={selectedPage}  setSelectedPage={setSelectedPage} />
                <Link page="Our Classes"selectedPage={selectedPage}  setSelectedPage={setSelectedPage}/>
                <Link page="Contact" selectedPage={selectedPage}  setSelectedPage={setSelectedPage}/>
              </div>

  </div>
)}

    </nav>
  );
}
