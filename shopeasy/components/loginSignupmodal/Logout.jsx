import { Button } from '@chakra-ui/react'
import { signOut } from 'next-auth/react'
import React from 'react'

const Logout = () => {

  return (
    <Button onClick={()=>signOut()}>
        logout
    </Button>
  )
}

export default Logout