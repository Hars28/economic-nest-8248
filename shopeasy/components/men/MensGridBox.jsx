import React from 'react'
import KeyCarousel from '../carouselcomponents/Keycarousel'

const MensGridBox = () => {
    const slides = [
        {
            img: "https://assets.ajio.com/cms/AJIO/WEB/10112022-D-MHP-JItstaic-p1-homegrownbrands-upto80.jpg",
        },
        {
            img: "https://assets.ajio.com/cms/AJIO/WEB/10112022-D-MHP-JItstaic-p1-homegrownbrands-upto80.jpg",
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

export default MensGridBox
