import React, { useEffect, useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
  useDisclosure,
  Text,
  Link,
  Box,
  Divider,
  Spacer,
  RadioGroup,
  Stack,
  Radio,
  HStack,
  Checkbox,
  Center,
} from "@chakra-ui/react";
import { signIn, useSession } from "next-auth/react";
import { ArrowBackIcon } from "@chakra-ui/icons";

const LoginPg = ({ children, providers, session,setauth }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const [phone, setPhone] = useState(0);
  const [show, setShow] = useState(false);
  const [userinfo, setUserinfo] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    inviteCode: "",
    gender: "",
    istermsaggreed: "",
  });

// api to set data into backend

const seassion = useSession()

  const handlesavedata = (e) => {
    const { checked, value, name, type } = e.target;
    setUserinfo({
      ...userinfo,
      [name]: value,
      phone: phone,
    });
  };
  const handleboolean = (e) => {
    const { checked, value, name, type } = e.target;
    setUserinfo({
      ...userinfo,
      [name]: checked,
      phone: phone,
    });
  };

  const handlegender = (e) => {
    setUserinfo({
      ...userinfo,
      gender: e,
    });
  };

  const mobilenoentered = (e) => {
    // setPhone(e.target.value)
    const value = e.target.value;
    if (value.length == "10") {
      let number = parseInt(value);
      setPhone(number);
    }
  };

  const handlenumbersumbit = (e) => {
    if (typeof phone == "number" && phone.toString().length == "10") {
      setShow(!show);
    } else {
      alert("Invalid arguments");
    }
  };


  return (
    <>
      <Text cursor="pointer" onClick={onOpen}>{children}</Text>
      <Modal
        mt={20}
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent
        p="1rem"
        mt="7rem"
          
            border= "1px solid black"
            width= "380px"
          
        >
          {show?<ArrowBackIcon cursor="pointer" onClick={()=>setShow(!show)}/>:""}
          <ModalHeader
          textAlign="center"
            sx={{
              fontSize: "26px",
              color: "#333333",
              fontWeight: 400,
            }}
          >
            Welcome to SHOPEASY
          </ModalHeader>
          
          <ModalCloseButton />
          <ModalBody
         
            sx={{
              display: "flex",
              flexDir: "column",

            }}
          >
            <FormControl
              sx={{
                display: "flex",
                flexDir: "column",
                gap: "5px",
              }}
            >

              {!show && (
                <>
                  <Box display={"flex"} justifyContent={"space-evenly"}>
                    <Button
                      colorScheme={"facebook"}
                      onClick={()=>signIn("facebook")}
                    >
                      Facebook
                    </Button>
                    <Button
                      colorScheme={"red"}
                      onClick={()=>signIn("google")}
                    >
                      Google
                    </Button>
                  </Box>
                  
                  <Divider orientation="horizontal" my={"15px"} />
                  <FormLabel textAlign="center">Enter Mobile Number / Email </FormLabel>

                </>
              )}

              {/*  */}

              {show ? (
                <>
                
                  <Box p={1} >
                    <Box>
                      <Text
                      bg="black"
                      color="white"
                      textAlign="center"
                        sx={{
                          fontSize: "20px",
                          // color: "#454545",
                          fontWeight: 600,
                        }}
                      >
                        Please set up your account
                      </Text>

                      <Box
                        sx={{
                          fontSize: "16px",
                          color: "#454545",
                          fontWeight: 400,
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <Text fontSize="20px"> {phone} </Text>
                        <Text
                        
                          m="4px 0 0 12px"
                          onClick={() => setShow(false)}
                          sx={{
                            color: "blue",
                          }}
                        >
                          Edit
                        </Text>
                      </Box>
                      <Text
                        sx={{
                          mt:"10px",
                          fontSize: "14px",
                          fontWeight: 500,
                        }}
                      >
                        OTP will be sent to your number for verification.
                      </Text>
                    </Box>
                    {/* form here */}
                    <Box>
                      <Box
                        sx={{
                          fontSize:"20px", 
                          fontWeight: 600,
                          display: "flex",
                          alignItems:"center",
                          gap: "20px",
                          paddingY: "10px",
                        }}
                      >
                        Gender{" "}
                        <RadioGroup
                          onChange={(e) => handlegender(e)}
                          name={"gender"}
                        >
                          <HStack direction="row">
                            <Radio value="Female">Female</Radio>
                            <Radio value="Male">Male</Radio>
                          </HStack>
                        </RadioGroup>
                      </Box>
                      <Box
                        sx={{
                          fontSize: "14px",
                          color: "#454545",
                          fontWeight: 400,
                          gap: "10px",
                          display: "flex",
                          flexDir: "column",
                        }}
                      >
                        <Input
                        textAlign={"center"}
                          fontSize="18px"
                          variant="flushed"
                          type={"text"}
                          placeholder={"Name"}
                          onChange={(e) => handlesavedata(e)}
                          name={"name"}
                        />
                        <Input
                        textAlign={"center"}
                          onChange={(e) => handlesavedata(e)}
                          fontSize="18px"
                          variant="flushed"
                          type={"text"}
                          placeholder={"Email"}
                          name={"email"}
                        />
                        <Input
                        textAlign={"center"}
                          onChange={(e) => handlesavedata(e)}
                          fontSize="18px"
                          variant="flushed"
                          type={"password"}
                          placeholder={"Password"}
                          name={"password"}
                        />
                        <Input
                        textAlign={"center"}
                          onChange={(e) => handlesavedata(e)}
                          fontSize="18px"
                          variant="flushed"
                          type={"text"}
                          placeholder={"Invite Code(optional)"}
                          name={"inviteCode"}
                        />
                      </Box>
                      <Box>
                        <Checkbox
                          onChange={(e) => handleboolean(e)}
                          name={"istermsaggreed"}
                          sx={{
                            fontSize: "14px",
                            color: "#454545",
                            fontWeight: 400,
                            my: "10px",
                          }}
                          size="lg"
                        >
                          By Signing In, I agree to
                          <Link color="blue" href="https://www.ajio.com/help/termsAndCondition">
                            Terms and Conditions.
                          </Link>
                        </Checkbox>
                       
                      </Box>
                      
                    </Box>
                    <Center>
                    <Button colorScheme={"blue"}  size="sm">
                          SEND OTP
                        </Button>
                        </Center>
                  </Box>
                </>
              ) : (
                <>
                  <Input
                    onChange={(e) => mobilenoentered(e)}
                    mb={"10px"}
                    outline={"none"}
                    ref={initialRef}
                  />
                  <Button
                    
                    w={"fit-content"}
                    onClick={(e) => handlenumbersumbit(e)}
                    colorScheme="blue"
                    m="auto"
                  >
                    CONTINUE
                  </Button>
                  <Text textAlign="center">
                    By Signing In, I agree to
                    <Link color="blue" href="https://www.ajio.com/help/termsAndCondition">
                      Terms and Conditions.
                    </Link>
                  </Text>
                </>
              )}

              {/*  */}
            </FormControl>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default LoginPg;



// LoginPg.getInitialProps = async (context) => {
//   return {
//     context
//   }
// }