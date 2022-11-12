import { Box, Flex, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const AutoCarousel = ({ slides }) => {
    const router = useRouter()
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
        <VStack
            w="full"
            bg="#edf3f8"
            _dark={{
                bg: "#3e3e3e",
            }}
            p={2}
            alignItems="center"
            justifyContent="center"
        >
            <Flex w="full" overflow="hidden">
                <Flex pos="relative" w="full" {...carouselStyle}>
                    {slides.map((slide, sid) => (
                        <Box key={`slide-${sid}`} flex="none" boxSize="full" shadow="md">

                            <Image
                                src={slide.img}
                                w={{ base: "95%", md: "60%" }}
                                alt="carousel image"
                                boxSize={{ base: "full", md: "100%" }}
                                backgroundSize="cover"
                                _hover={{
                                    transform: "scale(1.04)",
                                    transition: "1s",
                                    cursor: "pointer",
                                }}
                                onClick={() => router.replace("/products")}
                            />
                        </Box>
                    ))}
                </Flex>
            </Flex>
            <Box pos="relative" w="full">
                <HStack justify="center" pos="absolute" bottom="4px" w="full">
                    {Array.from({
                        length: slidesCount,
                    }).map((_, slide) => (
                        <Box
                            key={`dots-${slide}`}
                            cursor="pointer"
                            boxSize={["7px", null, "15px"]}
                            m="0 2px"
                            bg={currentSlide === slide ? "blackAlpha.800" : "blackAlpha.500"}
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
            </Box>
        </VStack>
    );
};

export default AutoCarousel;
