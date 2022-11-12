import React from 'react'
import KeyCarousel from '../../carouselcomponents/Keycarousel';

const MensKey1 = () => {
    const slides = [
        {
            img: "https://assets.ajio.com/cms/AJIO/WEB/04112022-D-MHP-newbrandlaunch-beinghuman-min50.jpg",
        },
        {
            img: "https://assets.ajio.com/cms/AJIO/WEB/04112022-D-MHP-newbrandlaunch-fabindia-startingat499.jpg",
        },
        {
            img: "https://assets.ajio.com/cms/AJIO/WEB/04112022-D-MHP-newbrandlaunch-starter-startingat599.jpg",
        },
        {
            img: "https://assets.ajio.com/cms/AJIO/WEB/04112022-D-MHP-newbrandlaunch-abros-upto60.jpg",
        },
        {
            img: "https://assets.ajio.com/cms/AJIO/WEB/04112022-D-MHP-newbrandlaunch-grimelange-4070.jpg",
        },
        {
            img: "https://assets.ajio.com/cms/AJIO/WEB/04112022-D-MHP-newbrandlaunch-terralunna-upto10.jpg",
        },

    ];
    return (
        <>
            <KeyCarousel slides={slides} />
        </>
    )
}

export default MensKey1
