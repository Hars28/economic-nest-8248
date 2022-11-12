import React from 'react'
import AutoCarousel from '../../carouselcomponents/Autocarousel';

const MenAuto = () => {
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
            img: "https://assets.ajio.com/cms/AJIO/WEB/10112022-D-MHP-maincarousel-p6-travelbags&luggage-brands-upto80.jpg",
        },

    ];

    return (
        <>
            <AutoCarousel slides={slides} />
        </>
    )
}

export default MenAuto
