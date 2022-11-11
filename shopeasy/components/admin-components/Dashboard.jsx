import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import DashboardCards from "./DashboardCards";
import { FiUsers } from "react-icons/fi";
import { FaBox } from "react-icons/fa";
import styles from "./ProductBox.module.css";

export default function Dashboard() {
  return (
    <>
      <Box padding="2rem 3rem" w="100%">
        <Heading>Dashboard</Heading>
        <Box sx={{ mt: "3rem" }}>
          <SimpleGrid columns={3} gap="4rem">
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
            <DashboardCards title="Total Revenue" titleBrief={`${112} users`} />
          </SimpleGrid>
        </Box>
      </Box>
    </>
  );
}
