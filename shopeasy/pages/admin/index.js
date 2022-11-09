import { Flex } from "@chakra-ui/react";
import Sidebar from "../../components/admin-components/Sidebar";

export default function Admin() {
  return (
    <>
      <Flex gap="2rem">
        <Sidebar />
        <h1>Admin Page</h1>
      </Flex>
    </>
  );
}
