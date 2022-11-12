import React from 'react'
import KeyCarousel from '../../carouselcomponents/Keycarousel';

const MensKey = () => {
    const slides = [
        {
            img: "https://assets.ajio.com/cms/AJIO/WEB/04112022-D-MHP-sponsorbrands-theindiangarage-min60.jpg",
        },
        {
            img: "https://assets.ajio.com/cms/AJIO/WEB/04112022-D-MHP-sponsorbrands-levis-flat50extra10.jpg",
        },
        {
            img: "https://assets.ajio.com/cms/AJIO/WEB/04112022-D-MHP-sponsorbrands-campus-upto60.jpg",
        },
        {
            img: "https://assets.ajio.com/cms/AJIO/WEB/04112022-D-MHP-sponsorbrands-campus-upto60.jpg",
        },
        {
            img: "https://assets.ajio.com/cms/AJIO/WEB/04112022-D-MHP-sponsorbrands-campus-upto60.jpg",
        },
        {
            img: "https://assets.ajio.com/cms/AJIO/WEB/04112022-D-MHP-sponsorbrands-campus-upto60.jpg",
        },

    ];
    return (
        <>
            <KeyCarousel slides={slides} />
        </>
    )
}

export default MensKey
