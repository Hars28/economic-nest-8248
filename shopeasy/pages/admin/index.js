import { Flex } from "@chakra-ui/react";
import Dashboard from "../../components/admin-components/Dashboard";
import Sidebar from "../../components/admin-components/Sidebar";

export default function Admin() {
  return (
    <>
      <Flex gap="2rem">
        <Sidebar />
        <Dashboard />
      </Flex>
    </>
  );
}
