import Navbar from "@/scenes/navbar";
import {useState,useEffect} from 'react'
import { SelectedPage } from './shared/types';
import Home from './scenes/home';
import Benefits from './scenes/benefits';
import OutClasses from './scenes/ourClasses/Index';
import Contactus from './scenes/Contacuus/Contactus';
import Footer from './scenes/Footer/Index';






function App() {

  const [selectedPage,setSelectedPage]=useState<SelectedPage>(SelectedPage.Home)

  const [isTopOfPage,setIsTopOfPage]=useState<boolean>(false)

  console.log(isTopOfPage);
  
  useEffect(()=>{

    const handleScroll=()=>{
      if(window.scrollY===0){
        setIsTopOfPage(true)
        setSelectedPage(SelectedPage.Home)

      }
      if(window.scrollY!==0)  setIsTopOfPage(false)

      
    }
      window.addEventListener('scroll',handleScroll)
      return ()=>window.removeEventListener('scroll',handleScroll)
  },[])
  return (
    <>
      <div className="app bg-gray-20 ">
        <Navbar isTop={isTopOfPage} selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      <Home setSelectedPage={setSelectedPage}/>
      <Benefits setSelectedPage={setSelectedPage}/>
      <OutClasses setSelectedPage={setSelectedPage} />
      <Contactus setSelectedPage={setSelectedPage}/>
      <Footer/>
      </div>
    </>
  );
}

export default App;
