import {
  Box,
  Button,
  Heading,
  Table,
  TableContainer,
  Tbody,
  Td,
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
        <Table size="md" variant="striped" colorScheme="teal">
          <Thead>
            <Tr>
              <Th>S. no.</Th>
              <Th>User Name</Th>
              <Th>Role</Th>
              <Th>Remove</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>1</Td>
              <Td>Admin</Td>
              <Td>admin</Td>
              <Td>
                <Button disabled colorScheme="red">
                  Delete
                </Button>
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
}
