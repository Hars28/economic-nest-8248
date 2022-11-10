import { UnlockIcon } from "@chakra-ui/icons";
import { Box, Divider, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <Flex direction="column" p="10px" width="100%" bg="#2c4152">
      <Flex direction="column" >
          <SimpleGrid columns={[1,2,2,4]} spacingX='40px' spacingY='20px'>
            <Box >
              <Text color="#c0c5be">Ajio</Text>
              <Flex direction="column" mt="10px">
                <Text color="#c0c5be">Who We Are</Text>
                <Text color="#c0c5be">Join Our Team</Text>
                <Text color="#c0c5be">Terms & Conditions</Text>
                <Text color="#c0c5be">We Respect Your Privacy</Text>
                <Text color="#c0c5be">Fees & Payments</Text>
                <Text color="#c0c5be">Returns & Refunds Policy</Text>
                <Text color="#c0c5be">Promotions Terms & Conditions</Text>
              </Flex>
            </Box>
            <Box>
              <Text color="#c0c5be">Help</Text>
              <Flex direction="column" mt="10px">
                <Text color="#c0c5be">Track Your Order</Text>
                <Text color="#c0c5be">Frequently Asked Questions</Text>
                <Text color="#c0c5be">Returns</Text>
                <Text color="#c0c5be">Cancellations</Text>
                <Text color="#c0c5be">Fees & Payments</Text>
                <Text color="#c0c5be">Payments</Text>
                <Text color="#c0c5be">Customer Care</Text>
              </Flex>
            </Box>
            <Box>
              <Text color="#c0c5be">Shop by</Text>
              <Flex direction="column" mt="10px">
                <Text color="#c0c5be">Men</Text>
                <Text color="#c0c5be">Women</Text>
                <Text color="#c0c5be">Kids</Text>
                <Text color="#c0c5be">Indie</Text>
                <Text color="#c0c5be">Stores</Text>
                <Text color="#c0c5be">New Arrivals</Text>
                <Text color="#c0c5be">Brand Directory</Text>
                <Text color="#c0c5be">Home</Text>
                <Text color="#c0c5be">Collections</Text>
              </Flex>
            </Box>
            <Box>
              <Text color="#c0c5be">Follow us</Text>
              <Flex direction="column" mt="10px">
                <Text color="#c0c5be">Facebook</Text>
                <Text color="#c0c5be">Instagram-AJIOlife</Text>
                <Text color="#c0c5be">Instagram-AJIO LUXE</Text>
                <Text color="#c0c5be">Twitter</Text>
                <Text color="#c0c5be">Pinterest</Text>
              </Flex>
            </Box>
          </SimpleGrid>
      </Flex>
      <Divider orientation="horizontal"/>
      <Flex direction="column">
        <Flex direction="row" justify="space-between">
        <Text color='#c0c5be'>Payment methods</Text>
        <Text color='#c0c5be'>Secure systems</Text>
        </Flex>
        <Flex direction="row" justify="space-between">
            <SimpleGrid columns={[2,2,4,5]} spacingX="20px" spacingY="10px">
            <Text color='#c0c5be'>Net Banking</Text>
            <Text color='#c0c5be'>Verified by VISA</Text>
            <Text color='#c0c5be'>MasterCard</Text>
            <Text color='#c0c5be'>CASH ON DELIVERY</Text>
            <Text color='#c0c5be'>Jio Money</Text>
            </SimpleGrid>
            <Flex direction="row">
                <Text color='#c0c5be'><UnlockIcon/>256 BIT</Text>
            </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Footer;
