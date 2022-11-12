import {
    Box,
    Center,
    Flex,
    Grid,
    GridItem,
    Select,
    Text,
} from "@chakra-ui/react";

import ProductAddToCart from "./SingleProduct";
import { useState } from "react";
import AccordionPage from "./accordion/AccordionPage";

const ar = [1, 2, 3, 4, 5];

const LeftBox = () => {
    const [grid, setGrid] = useState(3);

    const SidebarContent = (props) => (
        <Box pos="relative">
            <Box
                as="nav"
                pos="absolute"
                top="0"
                left="0"
                h="full"
                pb="10"
                overflowX="hidden"
                overflowY="auto"
                bg="white"
                _dark={{
                    bg: "gray.800",
                }}
                color="inherit"
                border="1px solid #e5e3e3"
                w="60"
                {...props}
            >
                <AccordionPage />
            </Box>
        </Box>
    );

    return (
        <Box
            w="80%"
            margin="auto"
            p={1}
            as="section"
            _dark={{
                bg: "gray.700",
            }}
            minH="100vh"
        >
            <SidebarContent
                h="1xl"
                display={{
                    base: "none",
                    md: "unset",
                }}
            />
            <Box
                ml={{
                    base: 0,
                    md: 60,
                }}
                transition=".3s ease"
            >
                <Box fontFamily="lora">
                    <Center fontSize={{ base: "1.5rem", md: "2.5rem" }} color="#333333">
                        FOOTWEAR
                    </Center>
                </Box>
                <Flex
                    as="header"
                    align="center"
                    justify="space-between"
                    w="97%"
                    m="auto"
                    px="4"
                    _dark={{
                        bg: "gray.800",
                    }}
                    borderTop="1.5px solid #e5e3e3"
                    borderBottom="1.5px solid #e5e3e3"
                    color="inherit"
                    h="14"
                    mt="0.5rem"
                    backgroundColor="#F9F9F9"
                >
                    <Text color="gray" fontWeight="500">
                        Hello
                    </Text>
                    <Box display={{ base: "none", md: "flex" }} gap={1}>
                        <Text color="gray" fontWeight="500">
                            GRID
                        </Text>
                        <Grid
                            cursor={grid === 3 ? "initial" : "pointer"}
                            templateColumns="repeat(3, 1fr)"
                            gap={1}
                            border="1px solid gray"
                            p="2px"
                            onClick={() => setGrid(3)}
                        >
                            <GridItem
                                px="1px"
                                py={2}
                                bg={grid == 3 ? "gray" : "rgba(0,0,0,0.2)"}
                            />
                            <GridItem
                                p={1}
                                py={2}
                                bg={grid == 3 ? "gray" : "rgba(0,0,0,0.2)"}
                            />
                            <GridItem p={1} bg={grid == 3 ? "gray" : "rgba(0,0,0,0.2)"} />
                        </Grid>
                        <Grid
                            cursor={grid === 4 ? "initial" : "pointer"}
                            templateColumns="repeat(4, 1fr)"
                            gap="2px"
                            border={grid == 4 ? "1px solid gray" : "1.5px solid gray"}
                            p="1px"
                            onClick={() => setGrid(4)}
                        >
                            <GridItem
                                px="1px"
                                py={2}
                                bg={grid === 4 ? "gray" : "rgba(0,0,0,0.2)"}
                            />
                            <GridItem p={1} bg={grid === 4 ? "gray" : "rgba(0,0,0,0.2)"} />
                            <GridItem p={1} bg={grid === 4 ? "gray" : "rgba(0,0,0,0.2)"} />
                            <GridItem p={1} bg={grid === 4 ? "gray" : "rgba(0,0,0,0.2)"} />
                        </Grid>
                    </Box>
                    <Box display="flex" gap={2} alignItems="center">
                        <Text
                            color="gray"
                            fontWeight={{ base: "200", md: "500" }}
                            fontSize={{ base: "0.7rem", lg: "1rem" }}
                            display={{ base: "none", md: "block" }}
                        >
                            SORT BY
                        </Text>

                        <Box>
                            <Select
                                placeholder="Select to sort"
                                size={{ base: "xs", md: "sm" }}
                            >
                                <option value="htl">
                                    <Text color="gray" fontWeight="500">
                                        Price (highest first)
                                    </Text>
                                </option>
                                <option value="Discount">Discount</option>
                                <option value="Relavance">Relavance</option>
                                <option value="lth">Price (lowest first)</option>
                            </Select>
                        </Box>
                    </Box>
                </Flex>

                <Box as="main" p="1">
                    <Box p={2}>
                        <Grid
                            templateColumns={{
                                base: "repeat(1, 1fr)",
                                md: "repeat(2, 1fr)",
                                lg: `repeat(${grid},1fr)`,
                            }}
                            gap={2}
                        >
                            {ar.map((el) => (
                                <>
                                    <GridItem w="100%">
                                        <ProductAddToCart />
                                    </GridItem>
                                </>
                            ))}
                        </Grid>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default LeftBox;
