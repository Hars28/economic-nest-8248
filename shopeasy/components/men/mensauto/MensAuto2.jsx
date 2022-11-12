import React from 'react'
import AutoCarousel from '../../carouselcomponents/Autocarousel';

const MenAuto2 = () => {
    const slides = [
        {
            img: "https://assets.ajio.com/cms/AJIO/WEB/Azorte-D-MHP.jpg",
        },
        {
            img: "https://assets.ajio.com/cms/AJIO/WEB/17062022-D-MHP-GAP-AllNewForYou.jpg",
        }

    ];

    return (
        <>
            <AutoCarousel slides={slides} />
        </>
    )
}

export default MenAuto2
