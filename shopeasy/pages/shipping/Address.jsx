import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    Box,
    FormLabel,
    Input,
    Select,
    Stack,
    InputGroup,
    InputLeftAddon,
    Textarea,
    InputRightAddon,
    FormControl,
    Text,
    Flex,
  } from '@chakra-ui/react';
  import { useDisclosure } from '@chakra-ui/react'

import { useRef, useState } from 'react';




export default function Address() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [showAddress, setShowAddress] = useState(false)
    const [formstate, setFormstate] = useState({name: "",mobile: "",flat: "", area:"", pincode:"",district:"",state:""} );
 
    const handleChange = (e) => {
        const { name, value } = e.target;    
        setFormstate({
          ...formstate,
          [name]: value
        });
      };
    function show(){
       console.log(formstate)
       onClose()
       setShowAddress(true)
}
  
    return (
      <>
        <Button colorScheme='teal' onClick={onOpen} mt="10" mb="20" color="white">
        Add new address +
        </Button>
        {
          showAddress&&<Flex bgColor="gray.100" justifyContent="space-between">
             <Box p="5">
          <Text color="orange" fontSize="18" fontWeight="500">{formstate.name}</Text>
          <Text>{formstate.flat} , {formstate.area} , {formstate.district}</Text>
          <Text>{formstate.pincode} , {formstate.state}</Text>
          <Flex>
            <Text>Phone : </Text>
            <Text fontWeight="500"> {formstate.mobile}</Text>
          </Flex>
          <Text cursor="pointer" color="blue.600" onClick={onOpen} textDecoration="underline">Edit</Text>
          </Box>
          <Box mr="10" mt="6" h="80%" p="5" border="1px dashed gray">
            <Text fontWeight="500" color="green">Cash on delivery available</Text>
            <Text >Est Delivery 29 Nov</Text>
          </Box>
       
          </Flex>
         
        }
        <Drawer size="md" p="4"
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader borderBottomWidth='1px' color="teal">
             Add new address
            </DrawerHeader>
  
            <DrawerBody>
              <Stack spacing='24px'>
                <Box>
                <FormControl>
                <FormLabel >Name</FormLabel>
                  <Input py={2} px={2} variant='unstyled'  type="text"  name="name" mb="3" borderTop="none" borderBottom="2px solid orange" value={formstate.name}
                    onChange={handleChange}
                    placeholder='Please enter user name'
                  />
                  <FormLabel >Mobile</FormLabel>
                   <Input py={2} px={2}  variant='unstyled' name="mobile" type="text" mb="3" borderTop="none" borderBottom="2px solid orange" value={formstate.mobile}
                    onChange={handleChange}
                    placeholder='Enter number'
                  />
                  <FormLabel >Flat no</FormLabel>
                   <Input py={2} px={2} variant="unstyled" name="flat" type="flat" mb="3" borderTop="none" borderBottom="2px solid orange" value={formstate.flat}
                    onChange={handleChange}
                    placeholder='Enter flat no'
                  />
                 
                  <FormLabel >Locality/Area/Street</FormLabel>
                   <Input py={2} px={2}  name="area" variant="unstyled" type="text" mb="3" borderTop="none" borderBottom="2px solid orange" value={formstate.area}
                    onChange={handleChange}
                    placeholder='Enter Locality'
                  />
                   <FormLabel >Pincode</FormLabel>
                   <Input py={2} px={2}  name="pincode" variant="unstyled" type="text" mb="3" borderTop="none" borderBottom="2px solid orange" value={formstate.pincode}
                    onChange={handleChange}
                    placeholder='Enter pincode'
                  />
                  <FormLabel >District</FormLabel>
                   <Input py={2} px={2}  name="district" variant="unstyled" type="text" mb="3" borderTop="none" borderBottom="2px solid orange" onChange={handleChange} value={formstate.district}
                    placeholder='Enter district'
                  />
                  <FormLabel >State</FormLabel>
                   <Input py={2} px={2}  name="state" variant="unstyled" type="text" mb="3" borderTop="none" borderBottom="2px solid orange"  value={formstate.state} onChange={handleChange}
                    placeholder='Enter state'
                  />
                </FormControl>
                 
                  
                </Box>
  
               <Box>
                  <FormLabel htmlFor='desc'>Description for address</FormLabel>
                  <Textarea id='desc' />
                </Box>

              </Stack>
            </DrawerBody>
  
            <DrawerFooter borderTopWidth='1px'>
              <Button variant='outline' mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button onClick={show} colorScheme='blue'>Save Address</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    )
  }