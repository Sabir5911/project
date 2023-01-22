"use client"
import React from 'react'

import {Header} from '../app/component/Header'
import { Box } from '@chakra-ui/react'
import  {Pricing}  from './component/Pricing'
import { Features } from './component/Features'
export default function page() {
  return (
   <>  
   
   <Header />
      <Pricing />
      <Features />
  
    
   </>

 
  )
}
