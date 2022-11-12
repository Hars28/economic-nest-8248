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
    <Text onClick={(e)=>handlesignout(e)}>
        logout
    </Text>
  )
}

export default Logout