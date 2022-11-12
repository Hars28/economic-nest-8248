import { Box, Flex, Image } from "@chakra-ui/react";

export default function ProductBox() {
  return (
    <tr>
      <td>1. </td>
      <td>
        <Image
          w="35px"
          src="https://static.fibre2fashion.com/MemberResources/LeadResources/1/2021/5/Seller/21194119/Images/21194119_0_men-s-shirts.jpg"
        />
      </td>
      <td>Product 1</td>
      <td>Rs. 3000</td>
    </tr>
    // <Box
    //   sx={{
    //     backgroundColor: "blue",
    //     padding: "1rem 2rem",
    //     width: "15rem",
    //   }}
    // >
    //   <h2>Mens</h2>
    //   <Image
    //     w="100%"
    //     src="https://static.fibre2fashion.com/MemberResources/LeadResources/1/2021/5/Seller/21194119/Images/21194119_0_men-s-shirts.jpg"
    //   />
    //   <Box>Show</Box>
    // </Box>
  );
}
