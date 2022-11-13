import {
    Box,
    Center,
    Flex,
    Grid,
    GridItem,
    Select,
    Text,
    VStack,
} from "@chakra-ui/react";

import ProductAddToCart from "./SingleProduct";
import { useEffect, useState } from "react";
import AccordionPage from "./accordion/AccordionPage";
import axios from "axios";

const LeftBox = () => {
    const [grid, setGrid] = useState(3);
    const [products, setProducts] = useState([]);

    // Fetching all the data and displaying
    const getData = async () => {
        await axios
            .get("http://localhost:3000/api/products/category")
            .then((res) => {
                setProducts(res.data.data);
            });
    };

    // filterData by brand
    const brandFilterData = async (brandName) => {
        await axios
            .get(`http://localhost:3000/api/products/category?brand=${brandName}`)
            .then((res) => {
                setProducts(res.data.data);
            });
    };

    //According to price range
    const filterByPrice = async (el) => {
        let price = Number(el.trim().split("-")[1])
        await axios
            .get(`http://localhost:3000/api/products/category?price=${price}`)
            .then((res) => {
                console.log(res.data)
                setProducts(res.data);
            });
    };

    //According to type - mens ,womens ,beauty
    const filterByType = async (type) => {

        await axios
            .get(`http://localhost:3000/api/products/category?type=${type}`)
            .then((res) => {
                console.log(res.data)
                setProducts(res.data.data);
            });
    };

    // According to range of price - lte,lt,gte,gt
    const filterByPriceRange = async (cmd) => {
        if (cmd == "gt") {
            let price = 8000;
            await axios
                .get(`http://localhost:3000/api/products/category?price=${price}&cmd=${cmd}`)
                .then((res) => {
                    setProducts(res.data);
                });
        }
        else if (cmd == 'lt') {
            let price = 10000;
            await axios
                .get(`http://localhost:3000/api/products/category?price=${price}&cmd=${cmd}`)
                .then((res) => {
                    setProducts(res.data);
                });
        }

        else if (cmd == "gte") {
            await axios
                .get(`http://localhost:3000/api/products/category?price=8000&cmd=${cmd}`)
                .then((res) => {
                    res.data.sort((a, b) => (a.price < b.price ? 1 : -1))
                    setProducts(res.data)
                });
        }
        else await axios
            .get(`http://localhost:3000/api/products/category?price=5000&cmd=${cmd}`)
            .then((res) => {
                setProducts(res.data)
            });
    };


    useEffect(() => {
        getData();
    }, []);

    const SidebarContent = (props) => (

        <VStack
            pos="fixed"
            top="7.5rem"
            left="10rem"
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
            h="1xl"
            display={{
                base: "none",
                md: "unset",
            }}
        >
            <AccordionPage
                brandFilterData={brandFilterData}
                filterByPrice={filterByPrice}
                filterByType={filterByType}
            />
        </VStack>

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
                        {products.length && products[2].brand
                            ? products[2].brand
                            : "Search More"}
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
                        ({products.length}) Items Found
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
                                onChange={(e) => {
                                    filterByPriceRange(e.target.value)
                                }}
                            >
                                <option value="lte">Price (lowest to high)</option>
                                <option value="gt">Relavance</option>
                                <option value="lt">Discount</option>
                                <option value="gte">
                                    Price (high to low)
                                </option>
                            </Select>
                        </Box>
                    </Box>
                </Flex>

                <Box as="main" p="1">
                    <Box p={2}>
                        <ProductAddToCart grid={grid} products={products} />
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default LeftBox;
