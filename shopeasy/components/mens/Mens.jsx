import { Box, Flex, HStack, Image, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const Home = () => {

    const arrowStyles = {
        cursor: "pointer",
        pos: "absolute",
        top: "50%",
        w: "auto",
        mt: "-22px",
        p: "16px",
        color: "white",
        fontWeight: "bold",
        fontSize: "18px",
        transition: "0.6s ease",
        borderRadius: "0 3px 3px 0",
        userSelect: "none",
        _hover: {
            opacity: 0.8,
            bg: "black",
        },
    };

    const slides = [
        {
            img: "https://assets.ajio.com/cms/AJIO/WEB/09112022-D-MHP-topbanner-ajiomania-end13-5090.jpg",
        },
        {
            img: "https://assets.ajio.com/cms/AJIO/WEB/09112022-D-MHP-maincarousel-p4-brands-flat50.jpg",
        },
        {
            img: "https://assets.ajio.com/cms/AJIO/WEB/09112022-D-MHP-maincarousel-p2-brands-under599.jpg",
        },
        {
            img: "https://assets.ajio.com/cms/AJIO/WEB/09112022-D-MHP-maincarousel-p4-shirt-brands-flat65.jpg",
        },
        {
            img: "https://images.pexels.com/photos/3124111/pexels-photo-3124111.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        },
    ];
    const [currentSlide, setCurrentSlide] = useState(0);
    const slidesCount = slides.length;
    const carouselStyle = {
        transition: "all .8s",
        ml: `-${currentSlide * 100}%`,
    };
    const SLIDES_INTERVAL_TIME = 3500;
    const ANIMATION_DIRECTION = "right";

    const setSlide = (slide) => {
        setCurrentSlide(slide);
    };

    useEffect(() => {
        const prevSlide = () => {
            setCurrentSlide((s) => (s === 0 ? slidesCount - 1 : s - 1));
        };

        const nextSlide = () => {
            setCurrentSlide((s) => (s === slidesCount - 1 ? 0 : s + 1));
        };

        const automatedSlide = setInterval(() => {
            ANIMATION_DIRECTION.toLowerCase() === "left" ? prevSlide() : nextSlide();
        }, SLIDES_INTERVAL_TIME);
        return () => clearInterval(automatedSlide);
    }, [slidesCount]);
    return (
        <Flex
            w="full"
            bg="#edf3f8"
            _dark={{
                bg: "#3e3e3e",
            }}
            p={5}
            alignItems="center"
            justifyContent="center"
        >
            <Flex w="full" overflow="hidden">
                <Flex pos="relative" h="400px" w="full" {...carouselStyle}>
                    {slides.map((slide, sid) => (
                        <Box key={`slide-${sid}`} flex="none" boxSize="full" shadow="md">
                            {/* <Text
                                color="white"
                                fontSize="xs"
                                p="8px 12px"
                                pos="absolute"
                                top="0"
                                whiteSpace="nowrap"
                            >
                                {/* {sid + 1} / {slidesCount} */}
                            {/* </Text> * /} */}
                            < Image
                                src={slide.img}
                                alt="carousel image"
                                boxSize={{ base: "full", md: "100%" }}
                                backgroundSize="cover"
                                _hover={{
                                    transform: "scale(1.04)",
                                    transition: "1s",
                                    cursor: "pointer"
                                }}
                            />
                        </Box>
                    ))}

                </Flex>
                {/* <Text {...arrowStyles} left="0" onClick={prevSlide}>
                    &#10094;
                </Text>
                <Text {...arrowStyles} right="0" onClick={nextSlide}>
                    &#10095;
                </Text> */}
                <HStack justify="center" pos="absolute" bottom="4px" w="full" >
                    {Array.from({
                        length: slidesCount,
                    }).map((_, slide) => (
                        <Box
                            key={`dots-${slide}`}
                            cursor="pointer"
                            boxSize={["7px", null, "15px"]}
                            m="0 2px"
                            bg={currentSlide === slide ? "blackAlpha.800" : "blackAlpha.500"}
                            // rounded="14%"

                            borderRadius={3}
                            display="inline-block"
                            transition="background-color 0.6s ease"
                            _hover={{
                                bg: "blackAlpha.800",
                            }}
                            w={{ base: "50%", md: "4%" }}
                            h={{ base: "50%", md: "5px" }}
                            onClick={() => setSlide(slide)}
                        ></Box>
                    ))}
                </HStack>
            </Flex>
        </Flex >
    );
};

export default Home
