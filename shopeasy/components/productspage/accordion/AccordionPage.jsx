import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box,
    Button,
    Checkbox,
    Flex,
    Text,
} from "@chakra-ui/react";

const category = ["Formal", "Casual", "Sandals", "Flip Flop", "Sneakers"];
const gender = [
    ["Male", "mens"],
    ["Female", "womens"],
    ["Beauty", "beauty"],
];
const price = ["Rs.299-500", "Rs.500-1000", "Rs.1000-1500", "Rs.1500-2000"];
const brand = ["Roadster", "Puma", "Adidas", "Highlander"];
const discount = ["0-20%", "21-30%", "31-40%", "41-50%", "51-80%"];

const AccordionPage = ({ brandFilterData, filterByPrice, filterByType }) => {
    return (
        <Accordion allowMultiple>
            <AccordionItem>
                <AccordionButton>
                    <Box flex="1" textAlign="left" fontSize="18px">
                        Refine By
                    </Box>
                    <AccordionIcon />
                </AccordionButton>

                <AccordionPanel>
                    <AccordionItem>
                        <AccordionButton p={1}>
                            <AccordionIcon mr={2} />
                            Gender
                            <Box flex="1" textAlign="left" fontSize="18px"></Box>
                        </AccordionButton>

                        <AccordionPanel pb={4}>
                            <Flex
                                flexDir="column"
                                gap={3}
                                justify="center"
                                align="flex-start"
                                pl={6}
                            >
                                {gender.map((el) => (
                                    <>
                                        <Checkbox
                                            key={el + Math.random()}
                                            fontSize="15px"
                                            color="#2e2c38"
                                            onChange={() => {
                                                filterByType(el[1]);
                                            }}
                                        >
                                            {el[0]}
                                        </Checkbox>
                                    </>
                                ))}
                            </Flex>
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <AccordionButton p={1}>
                            <AccordionIcon mr={2} />
                            Price
                            <Box flex="1" textAlign="left" fontSize="18px"></Box>
                        </AccordionButton>

                        <AccordionPanel pb={4}>
                            <Flex
                                flexDir="column"
                                gap={3}
                                justify="center"
                                align="flex-start"
                                pl={6}
                            >
                                {price.map((el) => (
                                    <>
                                        <Checkbox
                                            key={el + Math.random()}
                                            fontSize="15px"
                                            color="#2e2c38"
                                            onChange={() => {
                                                filterByPrice(el);
                                            }}
                                        >
                                            {el}
                                        </Checkbox>
                                    </>
                                ))}

                                <Text cursor="pointer" color="#B19975" fontWeight="600">
                                    More
                                </Text>
                            </Flex>
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <AccordionButton p={1}>
                            <AccordionIcon mr={2} />
                            Brand
                            <Box flex="1" textAlign="left" fontSize="18px"></Box>
                        </AccordionButton>

                        <AccordionPanel pb={4}>
                            <Flex
                                flexDir="column"
                                gap={3}
                                justify="center"
                                align="flex-start"
                                pl={6}
                            >
                                {brand.map((el) => (
                                    <>
                                        <Checkbox
                                            key={el + Math.random()}
                                            fontSize="15px"
                                            color="#2e2c38"
                                            onChange={() => {
                                                brandFilterData(el);
                                            }}
                                        >
                                            {el}
                                        </Checkbox>
                                    </>
                                ))}

                                <Text cursor="pointer" color="#B19975" fontWeight="600">
                                    More
                                </Text>
                            </Flex>
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <AccordionButton p={1}>
                            <AccordionIcon mr={2} />
                            Discount
                            <Box flex="1" textAlign="left" fontSize="18px"></Box>
                        </AccordionButton>

                        <AccordionPanel pb={4}>
                            <Flex
                                flexDir="column"
                                gap={3}
                                justify="center"
                                align="flex-start"
                                pl={6}
                            >
                                {discount.map((el) => (
                                    <>
                                        <Checkbox
                                            key={el + Math.random()}
                                            fontSize="15px"
                                            color="#2e2c38"
                                        >
                                            {el}
                                        </Checkbox>
                                    </>
                                ))}

                                <Text cursor="pointer" color="#B19975" fontWeight="600">
                                    More
                                </Text>
                            </Flex>
                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionButton p={1}>
                            <AccordionIcon mr={2} />
                            Category
                            <Box flex="1" textAlign="left" fontSize="18px"></Box>
                        </AccordionButton>

                        <AccordionPanel pb={4}>
                            <Flex
                                flexDir="column"
                                gap={3}
                                justify="center"
                                align="flex-start"
                                pl={6}
                            >
                                {category.map((el) => (
                                    <>
                                        <Checkbox
                                            key={el + Math.random()}
                                            fontSize="15px"
                                            color="#2e2c38"
                                        >
                                            {el}
                                        </Checkbox>
                                    </>
                                ))}

                                <Text cursor="pointer" color="#B19975" fontWeight="600">
                                    More
                                </Text>
                            </Flex>
                        </AccordionPanel>
                    </AccordionItem>
                </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
                <AccordionButton>
                    <Box flex="1" textAlign="left" fontSize="18px">
                        More Filters
                    </Box>
                    <AccordionIcon />
                </AccordionButton>

                <AccordionPanel pb={1}>
                    <Button
                        _hover={{ border: "1px solid #176D93" }}
                        textAlign="center"
                        fontSize="14px"
                        color="#176D93"
                        borderRadius="0"
                    >
                        SELECT CATEGORY
                    </Button>
                </AccordionPanel>
            </AccordionItem>
        </Accordion>
    );
};

export default AccordionPage;
