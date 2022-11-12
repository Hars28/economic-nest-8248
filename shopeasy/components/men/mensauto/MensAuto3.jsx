import React from 'react'
import AutoCarousel from '../../carouselcomponents/Autocarousel';

const MenAuto3 = () => {
    const slides = [
        {
            img: "https://assets.ajio.com/cms/AJIO/WEB/04112022-D-MHP-exclusivebrands-tshirts-brands-startingat199.jpg",
        },
        {
            img: "https://assets.ajio.com/cms/AJIO/WEB/04112022-D-MHP-exclusivebrands-bottomwear-brands-3070.jpg",
        },
        {
            img: "https://assets.ajio.com/cms/AJIO/WEB/04112022-D-MHP-exclusivebrands-activewear-performax-upto70.jpg",
        },
        {
            img: "https://assets.ajio.com/cms/AJIO/WEB/04112022-D-MHP-exclusivebrands-brands-flat70.jpg",
        },
        {
            img: "https://assets.ajio.com/cms/AJIO/WEB/04112022-D-MHP-exclusivebrands-brands-upto70.jpg",
        },

    ];

    return (
        <>
            <AutoCarousel slides={slides} />
        </>
    )
}

export default MenAuto3
