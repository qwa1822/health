

import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { SelectedPage } from './types'



export default function ActionButton({children,setSelectedPage
}:{children:React.ReactNode,setSelectedPage:(value:SelectedPage)=>void}) {
  return (
    <AnchorLink
    href={`#${SelectedPage.ContactUs}`}
    onClick={()=>setSelectedPage(SelectedPage.ContactUs)}
    className='rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white'>
      {children}


    </AnchorLink>
  )
}