import React from 'react'
import KeyCarousel from '../../carouselcomponents/Keycarousel';

const MensGridBox = () => {
    const slides = [
        {
            img: "https://assets.ajio.com/cms/AJIO/WEB/10112022-D-MHP-JItstaic-p1-homegrownbrands-upto80.jpg",
        },
        {
            img: "https://assets.ajio.com/cms/AJIO/WEB/12112022-D-MHP-JItstaic-p6-brands-flat50.jpg",
        },
        {
            img: "https://assets.ajio.com/cms/AJIO/WEB/12112022-D-MHP-JITstatic-p1-brands-upto80.jpg",
        },
        {
            img: "https://assets.ajio.com/cms/AJIO/WEB/12112022-D-MHP-JITstatic-p2-brands-min50.jpg",
        },
        {
            img: "https://assets.ajio.com/cms/AJIO/WEB/12112022-D-MHP-JITstatic-p3-upto75.jpg",
        },
        {
            img: "https://assets.ajio.com/cms/AJIO/WEB/12112022-D-MHP-JITstatic-p4-louisphilippe-min40.jpg",
        },

    ];
    return (
        <>
            <KeyCarousel slides={slides} />
        </>
    )
}

export default MensGridBox
