import React from 'react'
import KeyCarousel from '../../carouselcomponents/Keycarousel'

const MensKey2 = () => {
    const slides = [
        {
            img: "https://assets.ajio.com/cms/AJIO/WEB/04112022-D-MHP-wowwinterstyles-brands-3050.jpg",
        },
        {
            img: "https://assets.ajio.com/cms/AJIO/WEB/04112022-D-MHP-wowwinterstyles-brands-startingat499.jpg",
        },
        {
            img: "https://assets.ajio.com/cms/AJIO/WEB/04112022-D-MHP-wowwinterstyles-brands-min40.jpg",
        },
        {
            img: "https://assets.ajio.com/cms/AJIO/WEB/04112022-D-MHP-wowwinterstyles-brands-upto50.jpg",
        },
        {
            img: "https://assets.ajio.com/cms/AJIO/WEB/04112022-D-MHP-wowwinterstyles-brands--min40.jpg",
        },
        {
            img: "https://assets.ajio.com/cms/AJIO/WEB/04112022-D-MHP-wowwinterstyles-brands--upto50.jpg",
        },

    ];
    return (
        <>
            <KeyCarousel slides={slides} />
        </>
    )
}

export default MensKey2
