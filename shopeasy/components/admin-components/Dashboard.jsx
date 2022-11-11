import { Box, Heading } from "@chakra-ui/react";
import ProductBox from "./ProductBox";
import styles from "./ProductBox.module.css";

export default function Dashboard() {
  return (
    <>
      <Box padding="2rem 0" w="100%">
        <Heading>Dashboard</Heading>
        <Box sx={{ mt: "3rem", padding: "0 3rem" }}>
          <table>
            <thead>
              <tr>
                <th>Sr.</th>
                <th>Image</th>
                <th>Product Name</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              <ProductBox />
            </tbody>
          </table>
        </Box>
      </Box>
    </>
  );
}
