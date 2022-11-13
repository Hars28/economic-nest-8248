import { Box, Button, Flex, HStack, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";
import GettingStarted from "./GettingStarted";

const PaymentPage = () => {
    return (
        <>
            <Flex w="80%" m="auto" border="1px solid red">
                <Flex w="100%" m="auto" gap={4} mt={0} border="1px solid red">
                    <HStack border="1.5px dashed gray" borderColor="#D4A048">
                        <Box p={3} borderRight="1.5px dashed gray" borderColor="#D4A048">
                            <Flex gap={3}>
                                <Image
                                    rounded={50}
                                    width="10%"
                                    src="/shopeasy.png"
                                    alt="name"
                                />
                                <Text fontSize={13}>
                                    Get 10% Instant Discount of up to Rs 1000 on a minimum
                                    transaction value of Rs 2999 using CITIBANK Credit & Debit
                                    Cards T&C
                                </Text>
                            </Flex>
                        </Box>
                        <Box p={3}>
                            <Flex gap={3}>
                                <Image
                                    rounded={50}
                                    width="10%"
                                    src="/shopeasy.png"
                                    alt="name"
                                />
                                <Text fontSize={13}>
                                    Earn up to 10% AJIO Points and pay up to 5% using AJIO Points
                                    on orders for 1990 or above T&C
                                </Text>
                            </Flex>
                        </Box>
                    </HStack>
                </Flex>

                <Box w="30%" border="1px dashed gray" px="5" py="2">
                    <Text fontWeight="700" my="2">
                        Order Details
                    </Text>
                    <Flex justifyContent="space-between">
                        <Text>Bag total</Text>
                        <Text>₹8,785.00</Text>
                    </Flex>
                    <Flex justifyContent="space-between">
                        <Text>Bag discount</Text>
                        <Text>-₹3,411.00</Text>
                    </Flex>

                    <Flex justifyContent="space-between" my="3">
                        <Box color="gray">Delivery Fee</Box>
                        <Flex>
                            <Box>Free</Box>
                            <Box textDecoration="line-through">₹99</Box>
                        </Flex>
                    </Flex>
                    <Flex justifyContent="space-between">
                        <Text fontWeight="600">Total Amount</Text>
                        <Text fontWeight="600">₹3,411.00</Text>
                    </Flex>
                </Box>

            </Flex>
            <VStack w="80%" border="1px solid red" m="auto">
                <Box w="77%" m="auto" ml={0}>
                    <Flex gap={4} border="1px solid red" justifyContent="space-between" p={2} align="center">
                        <Text cursor="pointer" fontWeight="600">Select Redeem Option</Text>
                        <Text fontWeight="600" cursor="pointer">Verify OTP to use redemption options</Text>
                        <Button color="white" _hover={{
                            backgroundColor: "#d4ba48"
                        }} borderRadius="0" backgroundColor="#D4A048">Verify With OTP</Button>
                    </Flex>
                </Box>
                <GettingStarted />
            </VStack>

        </>
    );
};

export default PaymentPage;
