import { Box, Button, Checkbox, Flex, Image, Input, Link, Select, Text } from "@chakra-ui/react"
import { useEffect, useState } from "react";
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router';
import axios from "axios"
import { useSession } from "next-auth/react";


export default function Cart(){
    const [cart,setCart] = useState("")
    const router = useRouter()
    const [localData, setLocalData] = useState("")
    const  sessdata  = useSession() ;

    function proceedToShip(){
        router.push('/shipping')
    }

    async function getDatas(val){

       let data=await axios.get(`http://localhost:3000/api/products/category?findbyid=${val._id}`)
       console.log(data)
         setCart(data.data.data)
      }
      

    useEffect(() => {
        let val=""
        if (localStorage) {
            const tokendata = localStorage.getItem("token");
            val = JSON.parse(tokendata)
            setLocalData(val)
           }
           getDatas(val)
      }, []);


    return(
        <Box>
            <Flex w="80%" m="auto" h="40%">
                <Image cursor="pointer" onClick={()=>router.push('/')} w="20%" h="40%" src="/shopeeasy-logo.png" />
                <Image ml="30" w="45%" src="/bagImg.png"/>
            </Flex>
          
        
        <Box w="80%" m="auto">
            <Image src="https://assets.ajio.com/cms/AJIO/WEB/28032021-D-cartpagebanner-relianceones.jpg" />
            <Button mt="5" colorScheme='blue' onClick={()=>router.replace("/product")}> {"<-  "}Go Back</Button>
            <Flex justifyContent="space-evenly" mt="10">
                <Box w="80%">
                   
                        {cart&&
                            <Flex p="3" boxShadow= "rgba(149, 157, 165, 0.2) 0px 8px 24px" justifyContent="space-evenly">
                                <Image src={cart.image} w="15%" />
                                 <Text fontSize="16" pt="10">{cart.name}</Text>
                                 <Flex pt="30" justifyContent="space-evenly">
                                    <Select placeholder='size'>
                                       <option value='option3'>S</option>
                                        <option value='option1'>M</option>
                                        <option value='option2'>L</option>
                                        
                                    </Select>
                                    <Select placeholder='qty' ml="2">
                                       <option value='option3'>1</option>
                                        <option value='option1'>2</option>
                                        <option value='option2'>3</option>
                                        <option value='option3'>4</option>
                                        <option value='option1'>5</option>
                                        <option value='option2'>6</option>
                                    </Select>
                                 </Flex>
                                 <Box pt="5">
                                    <Box>Savings: 200</Box>
                                    <Flex>
                                        <Box textDecoration="line-through">{cart.price}</Box>
                                         <Box px="4" py="1" bgColor="teal.100" borderLeft="6px solid teal" fontWeight="600" fontSize="18" ml="3">{cart.discount_price}</Box>
                                    </Flex>
                                    <Button className={styles.singleProductAddtoCart} mt="6" ml="20" color="blue.400">DELETE</Button>
                                   </Box>
                            </Flex>
                       }
                      
                      
                </Box>
                <Box w="25%" p="23">
                 <Text fontWeight="700" my="5">Order Details</Text>
                 <Flex justifyContent="space-between">
                    <Text>Bag total</Text>
                    <Text>₹ {cart.discount_price}</Text>
                 </Flex>
                 <Flex justifyContent="space-between">
                    <Text>Bag discount</Text>
                    <Text>₹ {cart.price}</Text>
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
                    <Text fontWeight="700">₹{cart.discount_price}.00</Text>
                 </Flex>
                 <Button onClick={proceedToShip}  className={styles.singleProductAddtoCart} w="full" mt="5" bgColor="orange.400" color="white">Proceed to Shipping</Button>
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
        <Image src="/footerImg.png"/>
        <hr />
        <Image src="/secondFooter.png" />
        </Box>
    )
} 