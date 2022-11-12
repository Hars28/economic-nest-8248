import { Box, Button, Flex, Image, SimpleGrid, Text } from "@chakra-ui/react";
import styles from "../../styles/Home.module.css";
import { GoLocation } from 'react-icons/go';
import { BsBoxSeam } from 'react-icons/bs';
import Address from "../../components/cart/shippingAddressModal";
import { useState } from "react";
// import footerImg from "../../data/footerImg.png"


export default function Shipping(){
  const [cart,setCart] = useState([{"image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/1376577/2022/6/3/ea10ab6c-883e-437a-8780-ed87484393f81654235830793-Roadster-Men-Black--Grey-Checked-Casual-Sustainable-Shirt-42-1.jpg","brand": "Roadster","name": "Men Pure Cotton Casual Shirt","discount_price": "Rs. 524","price": "Rs. 1499","id": 1},{"image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/1376577/2022/6/3/ea10ab6c-883e-437a-8780-ed87484393f81654235830793-Roadster-Men-Black--Grey-Checked-Casual-Sustainable-Shirt-42-1.jpg","brand": "Roadster","name": "Men Pure Cotton Casual Shirt","discount_price": "Rs. 524","price": "Rs. 1499","id": 2},{"image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/1376577/2022/6/3/ea10ab6c-883e-437a-8780-ed87484393f81654235830793-Roadster-Men-Black--Grey-Checked-Casual-Sustainable-Shirt-42-1.jpg","brand": "Roadster","name": "Men Pure Cotton Casual Shirt","discount_price": "Rs. 524","price": "Rs. 1499","id": 3}])

    return (
      <Box>
         <Flex h="40%" w="80%" m="auto">
                <Image w="20%" h="40%" src="/shopeeasy-logo.png" />
                <Image ml="30" w="45%" src="/deliveryImg.png"/>
            </Flex>
        <Flex justifyContent="space-evenly" w="80%" m="auto" mb="20" mt="20">
            <hr p="10" />
           <Box w="65%">
             <Flex>
              <GoLocation fontSize="30" />
              <Box>
                <Text p="1" fontWeight="650" fontSize="20">Delivery Address</Text>
                <Text>We will deliver your order to this address</Text>
              </Box>
            </Flex>
            <Address />
           </Box>
           <Box w="25%" border="1px dashed gray" px="5" py="2">
                 <Text fontWeight="700" my="2">Order Details</Text>
                 <Flex justifyContent="space-between">
                    <Text>Bag total</Text>
                    <Text>₹8,785.00</Text>
                 </Flex>
                 <Flex justifyContent="space-between">
                    <Text>Bag discount</Text>
                    <Text>-₹3,411.00</Text>
                 </Flex>
               
                <Flex justifyContent="space-between" my="3" >
                    <Box color="gray">Delivery Fee</Box>
                    <Flex>
                    <Box>Free</Box>
                    <Box textDecoration="line-through">₹99.00</Box>
                    </Flex>
                </Flex> 
                <Flex justifyContent="space-between">
                    <Text fontWeight="700">Total Amount</Text>
                    <Text fontWeight="700">₹3,411.00</Text>
                 </Flex>
                 <Button className={styles.singleProductAddtoCart} w="full" mt="5" bgColor="orange.400" color="white">Proceed to Payment</Button>
                 </Box>
        </Flex>
        <hr />
        <Box w="50%" ml="60" mt="10">
          <Flex>
            <Text fontSize="33" mt="1" mr="5">
              <BsBoxSeam />
            </Text>
            <Text fontSize="25" mb="10">  Your items</Text>
          </Flex>
          
        <SimpleGrid columns={2} spacing={10}>
          {cart.map((item)=>(
            <Flex>
              <Image w="24" src={item.image} />
              <Box>
                <Text ml="3" fontSize="17">{item.name} </Text>
                <Text color="orange" ml="3">{item.brand} </Text>
                <Text ml="3">Delivery expected 29 Nov</Text>
              </Box>
              
            </Flex>
          ))}
          </SimpleGrid>
        </Box>
        <Image mt="20" src="/footerImg.png" alt="footerImg"/>
        </Box>
    )
}