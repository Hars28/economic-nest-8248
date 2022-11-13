import {  Text } from '@chakra-ui/react'
import { signOut } from 'next-auth/react'
import React from 'react'

const Logout = ({setauth}) => {
const handlesignout=(e)=>{
  e.preventDefault()
  signOut()
  // setauth(false)
}
  return (
    <Text px={3} py ={3}  fontWeight={"bold"} letterSpacing={"0.5px"} cursor={"pointer"} _hover={{
      color : "red",
      transition : "0.5s",
     
    }} onClick={(e)=>handlesignout(e)}>
        logout
    </Text>
  )
}

export default Logout