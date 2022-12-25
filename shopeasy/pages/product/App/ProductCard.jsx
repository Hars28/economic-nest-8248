import {
  AspectRatio,
  Box,
  Button,
  HStack,
  Image,
  Link,
  Skeleton,
  Stack,
  Text,
  useBreakpointValue,
  useColorModeValue,
} from '@chakra-ui/react'
import * as React from 'react'
import  Rating  from './Rating'
import  FavouriteButton  from './FavouriteButton'
import  PriceTag  from './PriceTag'

export default function ProductCard(props){
  const { product, rootProps } = props
  const { name, image, price, ratings,discount_price } = product
  return (
    <Stack
      spacing={useBreakpointValue({
        base: '4',
        md: '5',
      })}
      {...rootProps}
    >
      <Box position="relative">
        <AspectRatio ratio={4 / 3}>
          <Image
            src={image}
            alt={name}
            draggable="false"
            fallback={<Skeleton />}
            borderRadius={useBreakpointValue({
              base: 'md',
              md: 'xl',
            })}
          />
        </AspectRatio>
        <FavouriteButton
          position="absolute"
          top="4"
          right="4"
          aria-label={`Add ${name} to your favourites`}
        />
      </Box>
      <Stack>
        <Stack spacing="1">
          <Text fontWeight="medium" color={useColorModeValue('gray.700', 'gray.400')}>
            {name.slice(0,25)}
          </Text>
          <PriceTag price={price} salePrice={discount_price} currency="INR" />
        </Stack>
        <HStack>
          <Rating defaultValue={ratings} size="sm" />
          <Text fontSize="sm" color={useColorModeValue('gray.600', 'gray.400')}>
            {ratings} Reviews
          </Text>
        </HStack>
      </Stack>
      <Stack align="center">
        <Button colorScheme="blue" width="full">
          Add to cart
        </Button>
        <Link
          textDecoration="underline"
          fontWeight="medium"
          color={useColorModeValue('gray.600', 'gray.400')}
        >
          Quick shop
        </Link>
      </Stack>
    </Stack>
  )
}