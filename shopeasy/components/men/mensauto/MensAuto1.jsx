import React from 'react'
import AutoCarousel from '../../carouselcomponents/Autocarousel'

const MenAuto1 = () => {
    const slides = [
        {
            img: "https://assets.ajio.com/cms/AJIO/WEB/12112022-D-MHP-topbannercarousel-p1-premiumbrands-ajiogold-min40upto35.jpg",
        },
        {
            img: "https://assets.ajio.com/cms/AJIO/WEB/12112022-D-MHP-topbannercarousel-p2-westernwear-brands-flat50.jpg",
        },
        {
            img: "https://assets.ajio.com/cms/AJIO/WEB/12112022-D-MHP-topbannercarousel-p3-brands-min40.jpg",
        },
        {
            img: "https://assets.ajio.com/cms/AJIO/WEB/12112022-D-MHP-topbannercarousel-p5-brands-min50.jpg",
        },
        {
            img: "https://assets.ajio.com/cms/AJIO/WEB/12112022-D-MHP-topbannercarousel-p3-brands-min40.jpg",
        },

    ];

    return (
        <>
            <AutoCarousel slides={slides} />
        </>
    )
}

export default MenAuto1
