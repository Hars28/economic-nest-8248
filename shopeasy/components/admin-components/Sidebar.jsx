import { Box, Flex, Heading, Icon } from "@chakra-ui/react";
import Link from "next/link";
import { MdDashboard, MdProductionQuantityLimits } from "react-icons/md";
import { AiOutlineUser } from "react-icons/ai";

export default function Sidebar() {
  return (
    <>
      <Flex
        sx={{
          padding: "2rem",
          fontSize: "1.6rem",
          flexDir: "column",
          height: "100vh",
          minW: "15rem",
          maxW: "20rem",
          borderRight: "1px solid grey",
        }}
      >
        <Heading>Shopify</Heading>
        <Box
          sx={{
            mt: "5rem",
          }}
        >
          <Flex
            onClick={() => {
              // setLinkTarget("dashboard");
            }}
            mb="2rem"
            gap="5px"
            alignItems="center"
          >
            <Icon as={MdDashboard} />
            <h2>Dashboard</h2>
          </Flex>
          <Flex
            // onClick={() => {
            //   changeLinkTarget("products");
            // }}
            mb="2rem"
            gap="5px"
            alignItems="center"
          >
            <Icon as={MdProductionQuantityLimits} />
            <h2>Products</h2>
          </Flex>
        </Box>
        <Box
          sx={{
            mt: "auto",
          }}
        >
          <Flex mb="2rem" gap="5px" alignItems="center">
            <Icon as={AiOutlineUser} />
            <h2>User</h2>
          </Flex>
        </Box>
      </Flex>
    </>
  );
}
