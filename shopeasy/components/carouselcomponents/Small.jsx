import { Box, Image } from '@chakra-ui/react'
import React from 'react'

const Small = ({ img }) => {
    return (
        <Box>
            <Image
                src={img}
                alt="carousel image"
                boxSize="full"
                backgroundSize="cover"
                _hover={{
                    transform: "scale(1.04)",
                    transition: "1s",
                    cursor: "pointer",
                }}
            />
        </Box>
    )
}

export default Small
