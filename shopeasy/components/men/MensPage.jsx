import React from 'react'
import MenDiscount from './MenDiscount'
import Men2nd from './mensauto/Men2nd'
import MenAuto from './mensauto/MenAuto'
import MenAuto1 from './mensauto/MensAuto1'
import MenAuto2 from './mensauto/MensAuto2'
import MenAuto3 from './mensauto/MensAuto3'
import MensGridBox from './menskey/MensGridBox'
import MensKey from './menskey/MensKey'
import MensKey1 from './menskey/MensKey1'
import MensKey2 from './menskey/MensKey2'
import Small1 from './singleimages/Small1'
import Small2 from './singleimages/Small2'
import Small3 from './singleimages/Small3'
import Small4 from './singleimages/Small4'
import Small5 from './singleimages/Small5'
import Small6 from './singleimages/Small6'


const MensPage = () => {
    return (
        <>
            <MenAuto />
            <Men2nd />
            <Small1 />
            <MenAuto1 />
            <Small2 />
            <MensKey />
            <Small3 />
            <MenAuto2 />
            <MensKey1 />
            <Small4 />
            <MensKey2 />
            <Small5 />
            <MensGridBox />
            <MenDiscount />
            <MenAuto3 />
            <Small6 />
        </>
    )
}

export default MensPage
