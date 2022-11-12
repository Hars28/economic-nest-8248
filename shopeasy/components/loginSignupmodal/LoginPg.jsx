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
} from "@chakra-ui/react";
import { signIn, useSession } from "next-auth/react";

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
console.log(seassion)
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
      <Text onClick={onOpen}>{children}</Text>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent
          sx={{
            border: "1px solid black",
            height: "80vh",
            width: "360px",
          }}
        >
          <ModalHeader
            sx={{
              fontSize: "26px",
              color: "#333333",
              fontWeight: 400,
            }}
          >
            Welcome to AJIO
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
                  <FormLabel>Enter Mobile Number / Email* </FormLabel>
                  <Box display={"flex"} justifyContent={"space-evenly"}>
                    <Button
                      variant={"outline"}
                      color={"blue"}
                      colorScheme={"blue"}
                      onClick={()=>signIn("")}
                    >
                      Facebook
                    </Button>
                    <Button
                      variant={"outline"}
                      color={"red"}
                      colorScheme={"red"}
                      onClick={()=>signIn("google")}
                    >
                      Google
                    </Button>
                  </Box>
                  <Divider orientation="horizontal" my={"15px"} />
                </>
              )}

              {/*  */}

              {show ? (
                <>
                  <Box p={6}>
                    <Box>
                      <Text
                        sx={{
                          fontSize: "14px",
                          color: "#454545",
                          fontWeight: 400,
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
                          justifyContent: "space-between",
                          marginTop: "10px",
                        }}
                      >
                        <Text> {phone} </Text>
                        <Text
                          onClick={() => setShow(false)}
                          sx={{
                            color: "blue",
                            textDecoration: "underline",
                          }}
                        >
                          Edit
                        </Text>
                      </Box>
                      <Text
                        sx={{
                          fontSize: "10px",
                          color: "#454545",
                          fontWeight: 400,
                        }}
                      >
                        OTP will be sent to your number for verification.
                      </Text>
                    </Box>
                    {/* form here */}
                    <Box>
                      <Box
                        sx={{
                          // border : "1px solid red",
                          fontSize: "14px",
                          color: "#454545",
                          fontWeight: 400,
                          display: "flex",
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
                          size={"sm"}
                          variant="flushed"
                          type={"text"}
                          placeholder={"Name"}
                          onChange={(e) => handlesavedata(e)}
                          name={"name"}
                        />
                        <Input
                          onChange={(e) => handlesavedata(e)}
                          size={"sm"}
                          variant="flushed"
                          type={"text"}
                          placeholder={"Email"}
                          name={"email"}
                        />
                        <Input
                          onChange={(e) => handlesavedata(e)}
                          size={"sm"}
                          variant="flushed"
                          type={"password"}
                          placeholder={"Password"}
                          name={"password"}
                        />
                        <Input
                          onChange={(e) => handlesavedata(e)}
                          size={"sm"}
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
                          size="sm"
                        >
                          By Signing In, I agree to
                          <Link href="https://www.ajio.com/help/termsAndCondition">
                            Terms and Conditions.
                          </Link>
                        </Checkbox>
                        <Button colorScheme={"yellow"} size="sm">
                          SEND OTP
                        </Button>
                      </Box>
                    </Box>
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
                    mr={3}
                  >
                    CONTINUE
                  </Button>
                  <Text>
                    By Signing In, I agree to
                    <Link href="https://www.ajio.com/help/termsAndCondition">
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