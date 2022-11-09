import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
} from "@chakra-ui/react";
import { useState } from "react";
import { useRouter } from "next/router";

export default function Login() {
  const [login, setLogin] = useState(false);
  const router = useRouter();
  if (login) {
    router.push("/admin");
  }
  return (
    <>
      <Flex
        style={{
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          overflow: "hidden",
        }}
      >
        <FormControl
          style={{
            maxWidth: "30rem",
            padding: "3rem 2rem",
            fontSize: "2rem",
            boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
          }}
        >
          <Heading sx={{ textAlign: "center", mb: "2rem" }}>
            Admin Login
          </Heading>
          <Box mb="2rem">
            <FormLabel>Email</FormLabel>
            <Input type="email" placeholder="Enter Email" />
          </Box>
          <Box>
            <FormLabel>Password</FormLabel>
            <Input type="password" placeholder="Enter Password" />
          </Box>
          <Box mt="2rem">
            <Button
              onClick={() => setLogin(!login)}
              display="block"
              marginInline="auto"
            >
              Sign In
            </Button>
          </Box>
        </FormControl>
      </Flex>
    </>
  );
}
