import { Box, Button, Collapse, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Flex, Heading, HStack, Image, Input, Link, List, ListIcon, ListItem, SimpleGrid, SliderThumb, Tab, TabList, TabPanel, TabPanels, Tabs, Text, Tooltip, UnorderedList, useDisclosure, useToast } from '@chakra-ui/react';
import { useEffect, useRef, useState, } from 'react';
import { RiShoppingBagLine  } from 'react-icons/ri';
import { MdCheckCircle  } from 'react-icons/md';
import { AiOutlineStar } from 'react-icons/ai';
import { MdOutlineVerified } from 'react-icons/md';
import { RiExchangeFundsLine } from 'react-icons/ri';
import styles from '../../styles/Home.module.css';
import Navbar from "../../components/Navbar"
import { useRouter } from 'next/router';
import axios from "axios";
import  App  from './App/App';
import { useSession } from 'next-auth/react';


export default function SingleProduct() {
    const router = useRouter()
    const [resdata, setresData]= useState([])
    const [localData, setLocalData] = useState("")
   const [img, setImg] = useState("")
    const [data,setdata] = useState("");
    const [cart,setCart] = useState([])
    const [ isDelivery, setDelivery ] = useState(false);
    const [ pincode, setPincode ] = useState("");
    const [size1, setSize1] = useState(false);
    const [size2, setSize2] = useState(false);
    const [size3, setSize3] = useState(false);
    const [size4, setSize4] = useState(false);
    const [size5, setSize5] = useState(false);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = useRef();
    const  sessdata  = useSession() ;
    const toast = useToast()

    async function addToCart(){
    
    if(!(size1||size2||size3||size4||size5)){
      toast({
        title: 'Please select any size',
        status: 'success',
        duration: 9000,
        status: "error",
        isClosable: true,
      })
      
    }
    else{

      const id = sessdata.data.user.objId;

      console.log("objId : -", id, " prodId : -", localData._id)

      await axios.post(`http://localhost:3000/api/cart`, {
          userId: id,
          productid: localData._id,
          quantity: 1
      }).then((res)=>getDatas(res.data))
      
      onOpen()
    }
    }
    async function getDatas(res){
      // console.log(res,"Hello")
      // let id = res.e.productid;
      await axios.get(`http://localhost:3000/api/products/category?findbyid=${localData._id}`)
      .then((res)=>setCart([...cart,res.data.data]))
    }
  console.log(cart)
    async function getCart(){
  
        const id = sessdata.data.user.objId;
  
        console.log("objId : -", id, " prodId : -", localData._id)
  
        let cartData = await axios.get(`http://localhost:3000/api/cart`, {
            userId: id,
        })
        setCart(cartData.data)
        // console.log(cartData)

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
    function pincodeChange(e){
      setPincode(e.target.value);

    }
    function showDelivery(){
      if(pincode.length==6){
        setDelivery(!isDelivery);
        setPincode("")
      }
      else{
        alert("Enter valid pincode")
      }
    }

    const arrowStyles = {
      cursor: "pointer",
      pos: "absolute",
      top: "50%",
      w: "auto",
      mt: "-22px",
      p: "16px",
      color: "white",
      fontWeight: "bold",
      fontSize: "18px",
      transition: "0.6s ease",
      borderRadius: "0 3px 3px 0",
      userSelect: "none",
      _hover: {
        opacity: 0.8,
        bg: "black",
      },
    };
    const slides = [
      {
        img: img
      },
      {
        img:"http://localhost:3000/shopeeasy-logo.png"
      }
    ];
    const [currentSlide, setCurrentSlide] = useState(0);
    const slidesCount = slides.length;
  
    const prevSlide = () => {
      setCurrentSlide((s) => (s === 0 ? slidesCount - 1 : s - 1));
    };
  
    const nextSlide = () => {
      setCurrentSlide((s) => (s === slidesCount - 1 ? 0 : s + 1));
    };
  
    const setSlide = (slide) => {
      setCurrentSlide(slide);
    };
  
    const carouselStyle = {
      transition: "all .5s",
      ml: `-${currentSlide * 100}%`,
    };

    const getData = async()=>{
      let res = await axios.get("http://localhost:3000/api/products/category");
      setresData(res.data.data)
      // console.log(res.data)
      // console.log(resdata)
  }
   useEffect(() => {
    getData()
    if (localStorage) {
        const tokendata = localStorage.getItem("token");
        const val = JSON.parse(tokendata)
        setLocalData(val)
       setImg(val.image)
       }
  }, []);

    return (
    <>
    
    <Navbar />
    <Button ml="100" mt="10" colorScheme='blue' onClick={()=>router.replace("/products")}> {"<-  "}Go to products</Button>
     <Flex m="auto" width={['100%','70%']} mt="20" >
          <Box w="50%">
          <Box>
             <Flex
            w="full"
            bg="#edf3f8"
            _dark={{
              bg: "#3e3e3e",
            }}
           
            alignItems="center"
            justifyContent="center"
          >
            <Flex w="full" overflow="hidden" pos="relative">
              <Flex h="620px" w="full" {...carouselStyle}>
                {slides.map((slide, sid) => (
                  <Box key={`slide-${sid}`} boxSize="full" shadow="md" flex="none">
                    <Image className={styles.singleProductImage}
                      src={slide.img}
                      alt="carousel image"
                      boxSize="full"
                      backgroundSize="cover"
                      boxShadow ="rgba(0, 0, 0, 0.35) 0px 5px 15px"
                    />
                  </Box>
                ))}
            </Flex>
              <Text {...arrowStyles} left="0" onClick={prevSlide}>
                &#10094;
              </Text>
              <Text {...arrowStyles} right="0" onClick={nextSlide}>
                &#10095;
              </Text>
              <HStack justify="center" pos="absolute" bottom="8px" w="full">
                {Array.from({
                  length: slidesCount,
                }).map((_, slide) => (
                  <Box
                    key={`dots-${slide}`}
                    cursor="pointer"
                    boxSize={["7px", null, "15px"]}
                    m="0 2px"
                    bg={currentSlide === slide ? "blackAlpha.800" : "blackAlpha.500"}
                    rounded="50%"
                    display="inline-block"
                    transition="background-color 0.6s ease"
                    _hover={{
                      bg: "blackAlpha.800",
                    }}
                    onClick={() => setSlide(slide)}
                  ></Box>
                ))}
              </HStack>
            </Flex>
          </Flex>
          </Box>
          <Tabs  mt="40" variant='soft-rounded' colorScheme='green'>
              <TabList>
                <Tab border="1px solid gray">RETURNS</Tab>
                <Tab border="1px solid gray">OUR PROMISE</Tab>
              </TabList>
              <TabPanels>
                <TabPanel  border="1px solid gray">
                <Text>Easy 15 days return and exchange. Return Policies may vary based on products and promotions. For full details on our Returns Policies․</Text>
                <Link color="blue" target="blank" href='https://www.ajio.com/return-refund-policy'>click here</Link>
                </TabPanel>
                <TabPanel  border="1px solid gray">
                 <Text>We assure the authenticity and quality of our products</Text> 
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Box>

          <Box boxShadow = "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px" textAlign="center" w="50%" ml="30px">
            <Text fontSize="3xl" color="orange">{localData.brand}</Text>
            <Text fontWeight="500" color="gray">{localData.name}</Text>
            <Button ml="2" colorScheme='green' h="7">{localData.ratings} <AiOutlineStar /></Button>
            <Text fontSize="2xl">₹ {localData.discount_price}</Text>
            <Flex m="auto" w="26%">
                <Text textDecoration='line-through' color="orange.300">₹ {localData.price} </Text>
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
           <Tooltip hasArrow label='Shoulder- 15.5"  |  Chest- 38"' bg='red.600'>
              <Button ml="1" onClick={selectSizefunc1} bgColor={size1?"teal":""} borderRadius="50%">XS</Button>
           </Tooltip>
           <Tooltip hasArrow label='Shoulder- 16.5"  |  Chest- 40"' bg='red.600'>
              <Button ml="1" onClick={selectSizefunc2} bgColor={size2?"teal":""} borderRadius="50%">S</Button>
           </Tooltip>
           <Tooltip hasArrow label='Shoulder- ml="1" 17.5"  |  Chest- 42"' bg='red.600'>
              <Button ml="1" onClick={selectSizefunc3} bgColor={size3?"teal":""} borderRadius="50%">M</Button>
           </Tooltip>
           <Tooltip hasArrow label='Shoulder- 18.5"  |  Chest- 44"' bg='red.600'>
              <Button ml="1" onClick={selectSizefunc4} bgColor={size4?"teal":""} borderRadius="50%">L</Button>
          </Tooltip>
           <Tooltip hasArrow label='Shoulder- 19.5"  |  Chest- 46"' bg='red.600'>
             <Button ml="1" onClick={selectSizefunc5} bgColor={size5?"teal":""} borderRadius="50%">XL</Button>
           </Tooltip>
           </Box>
           <Link color="blue">Check size chart</Link>
           <Text fontSize="2xs">Compare {localData.brand} size with other brand sizes</Text>
         
          <Box>
          <Flex w="60%" m="auto" mt="5">
            <Input w="55%" type="text" placeholder="Pincode" value={pincode} onChange={pincodeChange} />
            <Button onClick={showDelivery}>Delivery details</Button>
          </Flex>
          
        {
          isDelivery&&(
            <Box 
              p='20px'
             
              m='6'
              bg='teal.100'
              rounded='md'
              shadow='md'
            >
              <UnorderedList textAlign="start">
                <ListItem>Expected Delivery: 19 Nov</ListItem>
                <ListItem>COD available</ListItem>
              </UnorderedList>
              <Text color="gray" mt="5">The final delivery date will depend on the items in your bag</Text>
            </Box>
           )
        } 
          </Box> 
           
           <Box bgColor="orange.100" w="80%" m="auto" mt="10" p="1">
            <Text> Select your size to know your estimated delivery date.</Text>
          </Box>
          <Box>
          <Button ref={btnRef} onClick={()=>addToCart(data)} className={styles.singleProductAddtoCart} boxShadow ="rgba(0, 0, 0, 0.35) 0px 5px 15px" mt="5" w="70%" color="white" bgColor="orange.300"> <RiShoppingBagLine /> <Text ml="2">Add to Bag</Text> </Button>
                <Drawer
                  isOpen={isOpen}
                  placement='right'
                  onClose={onClose}
                  finalFocusRef={btnRef}
                >
                  <DrawerOverlay />
                  <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader mt="100" >My cart items</DrawerHeader>

                    <DrawerBody>
                      <Box>
                      {
                        cart.map((item) => (
                      
                          <Flex key={item.image} mb="7" justifyContent="space-evenly">
                            <Image w="40%" src={item.image} />
                            <Box>
                              <Text ml="10%">{item.name}</Text>
                              <Text fontSize="20" color="red.500" ml="10%" mt="2">{item.discount_price}</Text>
                              <Text textDecoration="line-through" color="gray" ml="10%">{item.price}</Text>
                              <Button bgColor="red.200" ml="2" color="red">Delete</Button>
                            </Box>
                          </Flex>
                         
                        ))
                      }
                      <Flex>
                        <Text fontSize="2xl" fontWeight="500">
                        Total Price : 
                      </Text>
                      <Text ml="2" color="teal" fontSize="2xl" fontWeight="500">₹ {localData.discount_price}</Text>
                      </Flex>
                      
                      </Box>
                    </DrawerBody>

                    <DrawerFooter>
                      <Button variant='outline' mr={3} onClick={onClose}>
                        Cancel
                      </Button>
                      <Button onClick={()=> router.push('/cart') } colorScheme='blue'>Go to Cart</Button>
                    </DrawerFooter>
                  </DrawerContent>
                </Drawer>
          </Box>

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
     <Text fontSize="2xl" textAlign="center" mt="20" fontWeight="500">About the Company</Text>
     <Box w="80%" m="auto" mt="8" color="gray">
      Explore exclusive athleisure clothing for men and women on AJIO, an in-house brand of Reliance Trends. From shift dresses and high-neck sweatshirts for women to striped polo t-shirts and cotton cargo shorts for men, sporty casuals get a boost of style. +

      Shirts & tops for women
      Add funkiness to basics with the unique designs . Look smart in stripes, wearing a top with mesh sleeves. To stand out in a crowd, pick a bolder style such as a hooded top with drop sleeves or a typographic print top with raglan sleeves. Keep up with the trends in a cold-shoulder top with panelled sleeves or a graphic print top with bell sleeves.
  <Box>
     Coordinate your look with chic outerwear such as sweaters and sweatshirts . This company has some smart options, including colourblock sweaters with ribbed hem, all-over print sweatshirts, speckled crew-neck pullovers and more.
  </Box>
      Tshirts for men
      Every man has a unique sense of style. That’s why the brand has a versatile collection of men’s T-shirts . For a modern twist to a classic style, you can choose polo T-shirts with stripes and patterned weave. Add fun to your casual wardrobe with graphic print Teamspirit Tshirts in a variety of styles. You can choose from crew neck, cut & sew, heathered, Ombre-dyed and more.
     </Box>
     <Box m="auto" width={['100%','80%']} mt="20">
       <Text textAlign="center" fontSize="3xl" fontWeight="700">Shop More</Text>
     </Box>
     <Flex  justifyContent="space-evenly" alignItems='center' m="auto" width={['100%','80%']} mt="10" mb="20" >
      <Box cursor="pointer" _hover={{color:"red"}} fontSize="2xl" color="green" bgColor="gray.100" p="10"> All Tshirts → </Box>
      <Box cursor="pointer" _hover={{color:"red"}} fontSize="2xl" fontWeight="600" boxShadow= "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px" color="green" bgColor="gray.100" p="10"> Styles → </Box>
      <Box cursor="pointer" _hover={{color:"red"}} fontSize="2xl" fontWeight="600" boxShadow= "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px" color="green" bgColor="gray.100" p="10"> Brands → </Box>
     </Flex>
     <Box>
      <App />
     </Box>
     <Image src="/secondFooter.png" mt="30" />
        </>
  );
}
