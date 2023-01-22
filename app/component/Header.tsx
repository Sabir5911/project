
"use client"

import React from 'react'

import {Text,Box,Heading} from '@chakra-ui/react'
export  function Header() {
  return (
   
  <Box  fontFamily='sans-serif' color='#F7FAFC' bgColor={'#6B46C1'} textAlign={["left","left",'center']}px='32px' pt='85px' pb='240px' margin={'-8px'}
  >
         <Heading fontWeight={'extrabold'} fontSize={['3xl','3xl', '5xl' ]} >Simple pricing for your business</Heading>
         <Text fontWeight={'medium'} fontSize={['lg','lg','2xl']} pt='4'>Plans that are carefully crafted to suit your business.</Text>
</Box>

  )
}
