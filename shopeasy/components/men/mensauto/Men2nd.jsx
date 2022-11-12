import React from 'react'
import AutoCarousel from '../../carouselcomponents/Autocarousel'

const Men2nd = () => {
    const slides = [
        {
            img: "https://assets.ajio.com/cms/AJIO/WEB/1440x128%202.jpg",
        },
        {
            img: "https://assets.ajio.com/cms/AJIO/WEB/D-RelianceOne-Bankoffer.jpg",
        },
        {
            img: "https://assets.ajio.com/cms/AJIO/WEB/Paytm-1440x128.jpg",
        },
        {
            img: "https://assets.ajio.com/cms/AJIO/WEB/1440x128-mob%20500.jpg",
        },
        {
            img: "https://assets.ajio.com/cms/AJIO/WEB/D-RelianceOne-Bankoffer.jpg",
        },

    ];

    return (
        <>
            <AutoCarousel slides={slides} />
        </>
    )
}

export default Men2nd
