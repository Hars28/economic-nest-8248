import { Box, Flex, Heading, Icon, SimpleGrid, Text } from "@chakra-ui/react";
import DashboardCards from "./DashboardCards";
import { FiUsers } from "react-icons/fi";
import { FaBox } from "react-icons/fa";
import styles from "./ProductBox.module.css";
import { MdOutlineMonetizationOn } from "react-icons/md";
import { AiOutlineUser } from "react-icons/ai";
import { BsBox } from "react-icons/bs";

export default function Dashboard({ changeLinkTarget }) {
  return (
    <>
      <Box padding="2rem 3rem" w="100%">
        <Heading>Dashboard</Heading>
        <Flex mt="5rem" justifyContent="space-around" fontSize="1.8rem">
          <Box
            onClick={() => changeLinkTarget("users")}
            sx={{
              backgroundColor: "green.400",
              color: "yellow.100",
              padding: "2rem 3rem",
              borderRadius: "1rem",
              transition: "0.3s all ease-in-out",
              _hover: {
                textDecor: "underline",
                backgroundColor: "green.600",
                transform: "scale(0.9)",
                cursor: "pointer",
              },
            }}
          >
            <Flex alignItems="center">
              <Icon as={AiOutlineUser} />
              <Text>View Users</Text>
            </Flex>
          </Box>
          <Box
            onClick={() => changeLinkTarget("products")}
            sx={{
              backgroundColor: "green.400",
              color: "yellow.100",
              padding: "2rem 3rem",
              borderRadius: "1rem",
              transition: "0.3s all ease-in-out",
              _hover: {
                textDecor: "underline",
                backgroundColor: "green.600",
                transform: "scale(0.9)",
                cursor: "pointer",
              },
            }}
          >
            <Flex alignItems="center" gap="10px">
              <Icon as={BsBox} />
              <Text>View Products</Text>
            </Flex>
          </Box>
        </Flex>
        {/* // cards for stats */}
        <Box sx={{ mt: "5rem" }}>
          <SimpleGrid
            columns={{ base: 1, xl: 3, lg: 2, md: 2, sm: 1 }}
            gap="4rem"
          >
            <DashboardCards
              title="Total Users"
              titleBrief={`${100} users`}
              icon={FiUsers}
            />
            <DashboardCards
              title="Total Products"
              titleBrief={`${850} items`}
              icon={FaBox}
            />
            <DashboardCards
              title="Total Revenue"
              titleBrief={`${112} users`}
              icon={MdOutlineMonetizationOn}
            />
          </SimpleGrid>
        </Box>
      </Box>
    </>
  );
}
