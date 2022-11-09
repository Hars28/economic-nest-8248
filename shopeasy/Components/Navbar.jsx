import { Button, Flex, Input, InputGroup, InputRightElement, Text, Box } from '@chakra-ui/react'
import React from 'react'

const Navbar = () => {
  return (
    <Flex direction="row" justify="space-between">
        <Text>AJIO</Text>
        <Flex direction="column">
        <Flex direction="row" justify="flex-end">
            <Text>Sign in / Join AJIO</Text>
            <Text>Customer Care</Text>
            <Button bg="black" color="white">Visit AJIOLUXE</Button>
        </Flex>
        <Flex direction="row" gap="10px" border="2px solid">
            <Text>MEN</Text>
            <Text>WOMEN</Text>
            <Text>KIDS</Text>
            <Text>INDIE</Text>
            <Text>HOME AND KITCHEN</Text>
            <InputGroup>
            <Input placeholder='Search Ajio'/>
            <InputRightElement>Icon</InputRightElement>
            </InputGroup>
            <Box>Like Icon</Box>
            <Box>Cart Icon</Box>
        </Flex>
        </Flex>
    </Flex>
  )
}

export default Navbar