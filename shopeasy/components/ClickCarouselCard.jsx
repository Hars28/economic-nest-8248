import { Image } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'

const ClickCarouselCard = ({src,to}) => {
  return (
    <Link href={to}>
    <Image src={src} alt={src}/>
    </Link>
  )
}

export default ClickCarouselCard