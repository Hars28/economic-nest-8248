import {
    Flex,
    Circle,
    Box,
    Image,
    Badge,
    useColorModeValue,
    Icon,
    chakra,
    Tooltip,
    HStack,
    VStack,
    Text,
} from "@chakra-ui/react";
import { FiShoppingCart } from "react-icons/fi";

const data = {
    isNew: true,
    imageURL:
        "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80",
    name: "Wayfarer Classic",
    price: 4500,
    rating: 4.2,
    numReviews: 34,
    brand: "Roadster",
};

function ProductAddToCart() {
    return (
        <Flex w="full" alignItems="center" justifyContent="center">
            <Box
                bg={useColorModeValue("white", "gray.800")}
                maxW="sm"
                borderWidth="1px"
                rounded="lg"
                shadow="lg"
                position="relative"
            >
                {data.isNew && (
                    <Circle
                        size="10px"
                        position="absolute"
                        top={2}
                        right={2}
                        bg="red.200"
                    />
                )}

                <Image
                    src={data.imageURL}
                    alt={`Picture of ${data.name}`}
                    roundedTop="lg"
                />

                <Box p="4">
                    <HStack justifyContent="space-between">
                        <Box>
                            {data.isNew && (
                                <Badge rounded="full" px="2" fontSize="0.8em" colorScheme="red">
                                    New
                                </Badge>
                            )}
                        </Box>
                        <Box>
                            <Tooltip
                                label="Add to cart"
                                bg="white"
                                placement={"top"}
                                color={"gray.800"}
                                fontSize={"1.2em"}
                            >
                                <chakra.a href={"/cart"} display={"flex"}>
                                    <Icon as={FiShoppingCart} h={7} w={7} alignSelf={"center"} />
                                </chakra.a>
                            </Tooltip>
                        </Box>
                    </HStack>

                    <VStack spacing={1} align="center">
                        <Text color="#B19975" fontWeight="bold" fontSize="1rem">
                            {data.brand.toLocaleUpperCase()}
                        </Text>

                        <Text fontFamily="lora" color="#333333">
                            {data.name}
                        </Text>

                        <Text fontFamily="SourceSansPro" fontWeight="700" fontSize="1rem">
                            ₹ {data.price}
                        </Text>

                        <Text fontFamily="SourceSansPro" fontWeight="600" color="#3AB649" textAlign="center" >
                            Offer price : Discount-Price
                        </Text>
                    </VStack>
                </Box>
            </Box>
        </Flex>
    );
}

export default ProductAddToCart;
