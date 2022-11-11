import { Grid, GridItem, Image } from "@chakra-ui/react";
import React from "react";

const GridSingle = ({ slides }) => {
    return (
        <>
            <Grid w="full" templateColumns="repeat(3, 2fr)" gap={0.2}>
                {slides.map((el) => (
                    <>
                        <GridItem h="150px">
                            <Image
                                _hover={{
                                    transform: "scale(1.04)",
                                    transition: "1s",
                                    cursor: "pointer",
                                }}
                                boxSize="full"
                                src="https://assets.ajio.com/cms/AJIO/WEB/04112022-D-MHP-bestofbrands-pepejeans-4070.jpg"
                                alt="img"
                            />
                        </GridItem>
                    </>
                ))}
            </Grid>
        </>
    );
};

export default GridSingle;
