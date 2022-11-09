import { Box, Button, Collapse, Flex, Heading, Image, Input, Link, List, ListIcon, ListItem, Text, useDisclosure } from '@chakra-ui/react';
import { useState, } from 'react';
import { RiShoppingBagLine  } from 'react-icons/ri';
import { MdCheckCircle  } from 'react-icons/md';
import styles from '../styles/Home.module.css'


export default function SingleProduct() {
    const [data,setdata] = useState( {"image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/1376577/2022/6/3/ea10ab6c-883e-437a-8780-ed87484393f81654235830793-Roadster-Men-Black--Grey-Checked-Casual-Sustainable-Shirt-42-1.jpg","brand": "Roadster","name": "Men Pure Cotton Casual Shirt","discount_price": "Rs. 524","price": "Rs. 1499","id": 1})
    const { isDelivery, onDelivery } = useDisclosure()
    const [size1, setSize1] = useState(false)
    const [size2, setSize2] = useState(false)
    const [size3, setSize3] = useState(false)
    const [size4, setSize4] = useState(false)
    const [size5, setSize5] = useState(false)
     
    function addToCart(){
    if(!(size1||size2||size3||size4||size5)){
      alert("Please select any size")
    }
    else{
      alert("Added to cart successfully")
    }
    }
    function selectSizefunc1(){
      setSize1(true);setSize2(false);setSize3(false);setSize4(false);setSize5(false);
    }
    function selectSizefunc2(){
      setSize1(false);setSize2(true);setSize3(false);setSize4(false);setSize5(false);
    }
    function selectSizefunc3(){
      setSize1(false);setSize2(false);setSize3(true);setSize4(false);setSize5(false);
    }

    function selectSizefunc4(){
      setSize1(false);setSize2(false);setSize3(false);setSize4(true);setSize5(false);
    }

    function selectSizefunc5(){
      setSize1(false);setSize2(false);setSize3(false);setSize4(false);setSize5(true);
    }
    return (
    <>
     <Flex m="auto" width={['100%','70%']} >
          <Box w="50%">
             <Image  className={styles.singleProductImage} boxShadow ="rgba(0, 0, 0, 0.35) 0px 5px 15px" src={data.image} />
          <Box mt="40" border="1px solid gray" p="5">
           <Text fontWeight="500" textDecoration="underline">RETURNS</Text> 
            <Text>Easy 15 days return and exchange. Return Policies may vary based on products and promotions. For full details on our Returns Policies․</Text>
            <Link color="blue" target="blank" href='https://www.ajio.com/return-refund-policy'>click here</Link>
          </Box>
          </Box>

          <Box boxShadow = "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px" textAlign="center" w="50%" ml="30px">
            <Text fontSize="3xl" color="orange">{data.brand}</Text>
            <Text fontWeight="500" color="gray">{data.name}</Text>
            <Text fontSize="2xl">{data.discount_price}</Text>
            <Flex m="auto" w="26%">
                <Text textDecoration='line-through' color="orange.300">{data.price} </Text>
                <Text>(51% OFF)</Text>
            </Flex>
           <Text fontSize="2xs" color="gray" >Price inclusive of all taxes</Text>
           <Text mt="20px" color="teal">Select Color</Text>
           <Box>
             <Button borderRadius="50%" bgColor="black" ml="1"></Button>
             <Button borderRadius="50%" bgColor="pink" ml="1"></Button>
             <Button borderRadius="50%" bgColor="green" ml="1"></Button>
             <Button borderRadius="50%" bgColor="gray" ml="1"></Button>
             <Button borderRadius="50%" bgColor="orange" ml="1"></Button>
           </Box>
           <Text mt="20px" color="teal">Select Size</Text>
           <Box >
             <Button onClick={selectSizefunc1} bgColor={size1?"teal":""} borderRadius="50%">XS</Button>
             <Button onClick={selectSizefunc2} bgColor={size2?"teal":""} borderRadius="50%">S</Button>
             <Button onClick={selectSizefunc3} bgColor={size3?"teal":""} borderRadius="50%">M</Button>
             <Button onClick={selectSizefunc4} bgColor={size4?"teal":""} borderRadius="50%">L</Button>
             <Button onClick={selectSizefunc5} bgColor={size5?"teal":""} borderRadius="50%">XL</Button>
           </Box>
           <Link color="blue">Check size chart</Link>
           <Text fontSize="2xs">Compare TEAM SPIRIT size with other brand sizes</Text>
          <Flex w="60%" m="auto" mt="5">
            <Input w="55%" type="text" placeholder="Pincode" />
            <Button onClick={onDelivery}>Delivery details</Button>
          </Flex>
          <Box>
              <Collapse in={isDelivery} animateOpacity>
              <Box
                p='40px'
                color='white'
                mt='4'
                bg='teal.500'
                rounded='md'
                shadow='md'
              >
                Hiiiiiiiiiiiiii
              </Box>
            </Collapse>
          </Box>
           
           <Box bgColor="orange.100" w="80%" m="auto" mt="10" p="1">
            <Text> Select your size to know your estimated delivery date.</Text>
          </Box>
          <Button onClick={()=>addToCart()} className={styles.singleProductAddtoCart} boxShadow ="rgba(0, 0, 0, 0.35) 0px 5px 15px" mt="5" w="70%" color="white" bgColor="orange.300"> <RiShoppingBagLine /> <Text ml="2">Add to Bag</Text> </Button>
         <Text mt="1" fontSize="2xs">HANDPICKED STYLES | ASSURED QUALITY</Text>

          <Button border="1px solid red" mt="5" w="70%" bgColor="white" color="orange"> <RiShoppingBagLine /> <Text ml="2">Save to Wistlist</Text> </Button>
         
          <Box textAlign="start" ml="20%" mt="40" mb="10">
            <Text color="teal" fontSize="2xl">Product Details </Text>
            <List spacing={3} mt="5">
              <ListItem>
                <ListIcon as={MdCheckCircle} color='green.500' />
                Regular Fit
              </ListItem>
              <ListItem>
                <ListIcon as={MdCheckCircle} color='green.500' />
                70% cotton, 30% polyester
              </ListItem>
              <ListItem>
                <ListIcon as={MdCheckCircle} color='green.500' />
                Machine wash cold
              </ListItem>
              <ListItem>
                <ListIcon as={MdCheckCircle} color='green.500' />
                Package contains: 1 dress
              </ListItem>
            </List>
          </Box>
         </Box> 
     </Flex>
     <Box m="auto" width={['100%','80%']} mt="20">
       <Text textAlign="center" fontSize="2xl">Shop More Tshirts</Text>
     </Box>
     <Flex justifyContent="space-evenly" alignItems='center' m="auto" width={['100%','80%']} mt="10" >
      <Box boxShadow= "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px" color="green" bgColor="teal.100" p="10"> All Tshirts → </Box>
      <Box boxShadow= "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px" color="green" bgColor="teal.100" p="10"> Styles → </Box>
      <Box boxShadow= "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px" color="green" bgColor="teal.100" p="10"> Brands → </Box>
     </Flex>
        </>
  );
}
