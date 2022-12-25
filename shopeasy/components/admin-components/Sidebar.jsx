import { Box, Flex, Heading, Icon, Image } from "@chakra-ui/react";
import Link from "next/link";
import { MdDashboard, MdProductionQuantityLimits } from "react-icons/md";
import { AiOutlineUser } from "react-icons/ai";
import SidebarLinkComp from "./SidebarLinkComp";
import { FiUsers } from "react-icons/fi";

export default function Sidebar({ changeLinkTarget }) {
  return (
    <>
      <Box position="relative">
        <Flex
          sx={{
            position: "sticky",
            top: "0",
            padding: "2rem",
            fontSize: "1.6rem",
            flexDir: "column",
            minHeight: "100vh",
            minW: "15rem",
            maxW: "20rem",
            borderRight: "1px solid grey",
          }}
        >
          <Box cursor="pointer">
            <Image src="/shopeeasy-logo.png" />
            {/* <Heading>Shopify</Heading> */}
          </Box>
          <Box
            sx={{
              mt: "5rem",
            }}
          >
            <SidebarLinkComp
              title="Dashboard"
              changeLinkTarget={changeLinkTarget}
              icon={MdDashboard}
            />
            <SidebarLinkComp
              title="Products"
              changeLinkTarget={changeLinkTarget}
              icon={MdProductionQuantityLimits}
            />
            <SidebarLinkComp
              title="Users"
              changeLinkTarget={changeLinkTarget}
              icon={FiUsers}
            />
          </Box>
          <Box
            sx={{
              mt: "auto",
            }}
          >
            <Flex
              cursor="pointer"
              mb="2rem"
              gap="5px"
              alignItems="center"
              transition="0.2s ease-in-out"
              _hover={{
                backgroundColor: "rgba(0 0 0 /  0.2)",
                transform: "scale(1.1)",
                borderRadius: "10px",
                padding: "1rem",
              }}
            >
              <Icon as={AiOutlineUser} />
              <h2>Logout</h2>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </>
  );
}
