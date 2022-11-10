import { Box, Button, Checkbox, Flex, Image, Input, Link, Text } from "@chakra-ui/react"
import { useState } from "react"

export default function Cart(){
    const [cart,setCart] = useState([{"image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/1376577/2022/6/3/ea10ab6c-883e-437a-8780-ed87484393f81654235830793-Roadster-Men-Black--Grey-Checked-Casual-Sustainable-Shirt-42-1.jpg","brand": "Roadster","name": "Men Pure Cotton Casual Shirt","discount_price": "Rs. 524","price": "Rs. 1499","id": 1},{"image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/1376577/2022/6/3/ea10ab6c-883e-437a-8780-ed87484393f81654235830793-Roadster-Men-Black--Grey-Checked-Casual-Sustainable-Shirt-42-1.jpg","brand": "Roadster","name": "Men Pure Cotton Casual Shirt","discount_price": "Rs. 524","price": "Rs. 1499","id": 2},{"image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/1376577/2022/6/3/ea10ab6c-883e-437a-8780-ed87484393f81654235830793-Roadster-Men-Black--Grey-Checked-Casual-Sustainable-Shirt-42-1.jpg","brand": "Roadster","name": "Men Pure Cotton Casual Shirt","discount_price": "Rs. 524","price": "Rs. 1499","id": 3}])

    return(
        <Box w="80%" m="auto">
            <Image src="https://assets.ajio.com/cms/AJIO/WEB/28032021-D-cartpagebanner-relianceones.jpg" />
            <Flex justifyContent="space-evenly">
                <Box w="70%">
                      {
                        cart.map((item)=>(
                            <Flex p="3" boxShadow= "rgba(149, 157, 165, 0.2) 0px 8px 24px" justifyContent="space-evenly">
                                <Image src={item.image} w="20%" />
                                 <Text fontSize="18" pt="10">{item.name}</Text>
                                 <Flex pt="11" justifyContent="space-evenly">
                                    <Text>Size</Text>
                                 </Flex>
                                 <Box pt="10">
                                    <Box>Savings: 200</Box>
                                    <Flex>
                                        <Box textDecoration="line-through">{item.price}</Box>
                                         <Box px="4" py="1" bgColor="teal.100" borderLeft="6px solid teal" fontWeight="600" fontSize="18" ml="3">{item.discount_price}</Box>
                                    </Flex>
                                   </Box>
                            </Flex>
                            
                        ))
                      }
                </Box>
                <Box w="25%" p="23">
                 <Text fontWeight="700" my="5">Order Details</Text>
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
                 <Button w="full" mt="5" bgColor="orange.400" color="white">Proceed to Shipping</Button>
                <Box border="1px dashed gray" my="10" px="3" pb="5" pt="3" >
                    <Text fontWeight="650">Apply Coupon</Text>
                    <Flex my="5">
                        <Input type="number" placeholder="Enter code here" />
                        <Button>Apply</Button>
                    </Flex>
                    <Text>Applicable Coupons</Text>
                    <Flex my="5">
                        <Checkbox mx="5"></Checkbox>
                        <Flex>
                             <Text fontWeight="600">Savings: </Text>
                             <Text color="orange" ml="3"> ₹296.10</Text>
                        </Flex>
                    </Flex>
                    <Box ml="12">
                        <Text fontFamily="sans-serif">FIRSTBUY</Text>
                         <Text fontSize="13">
                                 Get upto Extra 40% Off on 1499 and Above. Max Discount Rs. 1200.
                         </Text>
                    </Box>

                    <Flex my="5">
                        <Checkbox mx="5"></Checkbox>
                        <Flex>
                             <Text fontWeight="600">Savings: </Text>
                             <Text color="orange" ml="3"> ₹36.10</Text>
                        </Flex>
                    </Flex>
                    <Box ml="12">
                        <Text fontFamily="sans-serif">TRENDS</Text>
                         <Text fontSize="13">
                         Get Up To Extra 25% Off On ₹1490 On Your First Purchase. Max Discount Rs. 2000.                         </Text>
                    </Box>
                    
                    
                </Box>
               
                <Box bgColor="gray.100" p="2" my="5">
                    <Text fontWeight="600" mb="4">
                      Return/Refund policy
                    </Text>
                    <Text fontSize="14">
                      In case of return, we ensure quick refunds. Full amount will be refunded excluding Convenience Fee
                    </Text>
                    <Link target="blank" href="https://www.ajio.com/return-refund-policy" color="blue">Return policy</Link>
                </Box>
                </Box>
            </Flex>
        </Box>
    )
} 