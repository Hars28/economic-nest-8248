import {
    Flex,
    Circle,
    Box,
    Image,
    Badge,
    Icon,
    chakra,
    Tooltip,
    HStack,
    VStack,
    Text,
    GridItem,
    Grid,
    Button,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { FiShoppingCart } from "react-icons/fi";

function ProductAddToCart({ grid, products }) {


    const setToLocal = (el) => {
        localStorage.setItem("token", JSON.stringify(el))
    }
    useEffect(() => {
        if (localStorage) {
            const getLocalState = localStorage.getItem("token");
            console.log("token: ", getLocalState)
        }
    }, []);

    return (
        <Grid
            templateColumns={{
                base: "repeat(1, 1fr)",
                md: "repeat(2, 1fr)",
                lg: `repeat(${grid},1fr)`,
            }}
            gap={2}
        >
            {products.map((el) => (
                <>
                    <Flex key={el.id} w="full" alignItems="center" justifyContent="center">
                        <GridItem w="100%">
                            <Box
                                cursor="pointer"
                                key={el.id}
                                maxW="sm"
                                borderWidth="1px"
                                rounded="lg"
                                shadow="lg"
                                position="relative"
                            >
                                {el.name && (
                                    <Circle
                                        size="10px"
                                        position="absolute"
                                        top={2}
                                        right={2}
                                        bg="red.200"
                                    />
                                )}

                                <Image
                                    src={
                                        el.image
                                            ? el.image
                                            : "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/10968502/2020/2/18/54c26fb8-d8c6-42b0-a3d6-eea009aaba161582020847616-Roadster-Women-Tshirts-2671582020846188-1.jpg"
                                    }
                                    alt={`Picture of ${el.name}`}
                                    roundedTop="lg"
                                    boxSize="xs"
                                    onClick={() => setToLocal(el)}
                                />

                                <Box p="4">
                                    <HStack justifyContent="space-between">
                                        <Box>
                                            {el.name && (
                                                <Badge
                                                    rounded="full"
                                                    px="2"
                                                    fontSize="0.8em"
                                                    colorScheme="red"
                                                >
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
                                                    <Icon
                                                        as={FiShoppingCart}
                                                        h={7}
                                                        w={7}
                                                        alignSelf={"center"}
                                                    />
                                                </chakra.a>
                                            </Tooltip>
                                        </Box>
                                    </HStack>

                                    <VStack spacing={1} align="center">
                                        <Text
                                            color="#B19975"
                                            fontWeight="bold"
                                            fontSize="1rem"
                                            textAlign="center"
                                        >
                                            {el.brand}
                                        </Text>

                                        <Text fontFamily="lora" color="#333333" textAlign="center">
                                            {el.name}
                                        </Text>

                                        <Text
                                            fontFamily="SourceSansPro"
                                            fontWeight="700"
                                            fontSize="1rem"
                                            textAlign="center"
                                        >
                                            ₹ {el.price ? el.price : "Rs. 2299"}
                                        </Text>

                                        <Text
                                            fontFamily="SourceSansPro"
                                            fontWeight="600"
                                            color="#3AB649"
                                            textAlign="center"
                                        >
                                            Offer price : {el.discount_price ? el.discount_price : "Rs. 209"}
                                        </Text>
                                    </VStack>
                                </Box>
                            </Box>
                        </GridItem>
                    </Flex>
                </>
            ))}
        </Grid>
    );
}

export default ProductAddToCart;
