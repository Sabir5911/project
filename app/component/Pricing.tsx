import {Text, Button,Flex,Box,Heading,HStack,StackProps ,Icon, Stack, ListItem } from '@chakra-ui/react'
import React from 'react'
import { icon } from '../icons/icon'


export const Listitem=(props:StackProps)=>{

   const {children,...rest}=props
   return<>
   <HStack as='li' spacing={'20px'}{ ...rest}>
   <Icon as={icon} w='22px' h='22px' />
   <Text >{children}</Text>
</HStack>
   </>

}

export  function Pricing() {
  return (
   <Box mx='2'>
       <Box  maxW={'994px'} margin='auto' mt={"-200px"} borderRadius='8px' overflow={'hidden'}   boxShadow="0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04);">
     <Flex  direction={['column',"column",'row']}>
     <Box   bg='#F0EAFB' p='43px'  textAlign={'center'}  >

        <Text fontWeight='750' fontSize='24px' >Premium PRO</Text>

        <Heading as='h2' fontSize={'60px'} mt='4'>$329</Heading>

        <Text fontSize={'22px'} fontWeight='=800' mt='2' >billed just once</Text>

        <Button  borderColor={'#805AD5'} bg='#805AD5' borderRadius={'8px'} fontWeight={'700'} w='300px' height={'39px'} mt='6'> 
        <Text 
        fontSize={'20px'}
        fontFamily='sans-serif'
        color='#F7FAFC'
      >Get Started</Text></Button>
      
      </Box>
      <Box
                    maxW="994px" height={['425px', '350px', '300px']}
                    p='60px' fontSize="16px" bg="white" >
                    <Text>
                        Access these features when you get this pricing package for your business.
                    </Text>
                    <Stack as="ul" spacing='20px' pt='24px'>
                        <Listitem>International calling and messaging API</Listitem>
                        <Listitem>Additional phone numbers</Listitem>
                        <Listitem>Automated messages via Zapier</Listitem>
                        <Listitem>24/7 support and consulting</Listitem>
                    </Stack>
                </Box>

     </Flex>

           </Box>

         //  </Box>
         
  )
}
