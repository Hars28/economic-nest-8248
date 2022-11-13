import {
  Box,
  Heading,
  Table,
  TableContainer,
  Tbody,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import TableBody from "./TableBody";

export default function AllUsersBox() {
  return (
    <Box padding="2rem" width="100%">
      <Heading>Users</Heading>
      <TableContainer mt="5rem">
        <Table variant="striped" colorScheme="teal">
          <Thead>
            <Tr>
              <Th>S. no.</Th>
              <Th>Image</Th>
              <Th>Product Name</Th>
              <Th>Price</Th>
            </Tr>
          </Thead>
          <Tbody>Users</Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
}
