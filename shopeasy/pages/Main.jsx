import { Box, Flex, Image } from "@chakra-ui/react";
import React from 'react'
import ClickCarousel from "../components/ClickCarousel";

const Main = () => {
  const sponsoredBrandData=[
    {
        src:"https://assets.ajio.com/cms/AJIO/WEB/D-SponsorBrands-p1-levis.jpg",
        to:"/"
    },
    {
        src:"https://assets.ajio.com/cms/AJIO/WEB/D-SponsorBrands-p2-adidas.jpg",
        to:"/"
    },
    {
        src:"https://assets.ajio.com/cms/AJIO/WEB/D-SponsorBrands-p3-campus.jpg",
        to:"/"
    },
    {
      src:"https://assets.ajio.com/cms/AJIO/WEB/D-SponsorBrands-p4-puma.jpg",
      to:"/"
    },
    {
        src:"https://assets.ajio.com/cms/AJIO/WEB/D-SponsorBrands-p5-spykar.jpg",
        to:"/"
    },
    {
        src:"https://assets.ajio.com/cms/AJIO/WEB/D-SponsorBrands-p6-uspa.jpg",
        to:"/"
    },
    {
        src:"https://assets.ajio.com/cms/AJIO/WEB/D-SponsorBrands-p7-crocs.jpg",
        to:"/"
    }
    
  ]
  const exclusiveData=[
    {
        src:"https://assets.ajio.com/cms/AJIO/WEB/D-ExclusivelyAJIO-p1-Exclusiverange-REVISED%20(1).jpg",
        to:"/"
    },
    {
        src:"https://assets.ajio.com/cms/AJIO/WEB/D-ExclusivelyonAJIO-p2-ProduktbyJ&J.jpg",
        to:"/"
    },
    {
        src:"https://assets.ajio.com/cms/AJIO/WEB/D-ExclusivelyonAJIO-p3-Avaasa.jpg",
        to:"/"
    },
    {
        src:"https://assets.ajio.com/cms/AJIO/WEB/D-ExclusivelyonAJIO-p4-Gas.jpg",
        to:"/"
    },
    {
        src:"https://assets.ajio.com/cms/AJIO/WEB/D-ExclusivelyonAJIO-p5-DNMX.jpg",
        to:"/"
    },
    {
        src:"https://assets.ajio.com/cms/AJIO/WEB/D-ExclusivelyonAJIO-p6-Karigari.jpg",
        to:"/"
    },
    {
        src:"https://assets.ajio.com/cms/AJIO/WEB/D-ExclusivelyonAJIO-p7-Netplay.jpg",
        to:"/"
    },
    {
        src:"https://assets.ajio.com/cms/AJIO/WEB/D-ExclusivelyonAJIO-p8-JP.jpg",
        to:"/"
    },
    {
        src:"https://assets.ajio.com/cms/AJIO/WEB/D-ExclusivelyonAJIO-p9-Walkstyleac.jpg",
        to:"/"
    },
    {
        src:"https://assets.ajio.com/cms/AJIO/WEB/D-ExclusivelyonAJIO-p9-superdry.jpg",
        to:"/"
    }
  ]
  const  westernwearData=[
    {
        src:"https://assets.ajio.com/cms/AJIO/WEB/D-westernwear-p1-starting499.jpg",
        to:"/"
    },
    {
        src:"https://assets.ajio.com/cms/AJIO/WEB/D-westernwear-p2-starting599.jpg",
        to:"/"
    },
    {
        src:"https://assets.ajio.com/cms/AJIO/WEB/D-westernwear-p3-starting999.jpg",
        to:"/"
    },
    {
        src:"https://assets.ajio.com/cms/AJIO/WEB/D-westernwear-p5-min50.jpg",
        to:"/"
    },
    {
        src:"https://assets.ajio.com/cms/AJIO/WEB/D-ExclusivelyonAJIO-p5-DNMX.jpg",
        to:"/"
    },
    {
        src:"https://assets.ajio.com/cms/AJIO/WEB/D-westernwear-p6-starting399.jpg",
        to:"/"
    }
  ]
  const  ethnicData=[
    {
        src:"https://assets.ajio.com/cms/AJIO/WEB/D-ethnicwear-kurtas-edited.jpg",
        to:"/"
    },
    {
        src:"https://assets.ajio.com/cms/AJIO/WEB/D-Gothnic-p1-starting499.jpg",
        to:"/"
    },
    {
        src:"https://assets.ajio.com/cms/AJIO/WEB/D-Gothnic-p3-starting499.jpg",
        to:"/"
    },
    {
        src:"https://assets.ajio.com/cms/AJIO/WEB/D-Gothnic-p4-upto80.jpg",
        to:"/"
    },
    {
        src:"https://assets.ajio.com/cms/AJIO/WEB/D-ethnicwear-footwear-edited.jpg",
        to:"/"
    },
    {
        src:"https://assets.ajio.com/cms/AJIO/WEB/D-Gothnic-p6-starting499.jpg",
        to:"/"
    }
  ]
  const  hiddenGemsData=[
    {
        src:"https://assets.ajio.com/cms/AJIO/WEB/D-UHP-hiddengems-trendyol.jpg",
        to:"/"
    },
    {
        src:"https://assets.ajio.com/cms/AJIO/WEB/D-UHP-hiddengems-koton.jpg",
        to:"/"
    },
    {
        src:"https://assets.ajio.com/cms/AJIO/WEB/D-UHP-hiddengems-nakd.jpg",
        to:"/"
    },
    {
        src:"https://assets.ajio.com/cms/AJIO/WEB/D-UHP-hiddengems-wknd.jpg",
        to:"/"
    },
    {
        src:"https://assets.ajio.com/cms/AJIO/WEB/D-UHP-hiddengems-frenchconnection.jpg",
        to:"/"
    },
    {
        src:"https://assets.ajio.com/cms/AJIO/WEB/D-UHP-hiddengems-lcwaikiki.jpg",
        to:"/"
    },
    {
        src:"https://assets.ajio.com/cms/AJIO/WEB/D-UHP-hiddengems-grimelange.jpg",
        to:"/"
    },
    {
        src:"https://assets.ajio.com/cms/AJIO/WEB/D-UHP-hiddengems-barrelsandoil.jpg",
        to:"/"
    },
    {
        src:"https://assets.ajio.com/cms/AJIO/WEB/D-UHP-hiddengems-kennethcole.jpg",
        to:"/"
    }
  ]
  const  amazingaddonsData=[
    {
        src:"https://assets.ajio.com/cms/AJIO/WEB/D-Footwear-p1-sports&casualshoes.jpg",
        to:"/"
    },
    {
        src:"https://assets.ajio.com/cms/AJIO/WEB/D-Footwear-p2-flipflops,sandals.jpg",
        to:"/"
    },
    {
        src:"https://assets.ajio.com/cms/AJIO/WEB/D-Footwear-p3-sneakers.jpg",
        to:"/"
    },
    {
        src:"https://assets.ajio.com/cms/AJIO/WEB/D-Footwear-p4-watches.jpg",
        to:"/"
    },
    {
        src:"https://assets.ajio.com/cms/AJIO/WEB/D-Footwear-p5-sunglasses.jpg",
        to:"/"
    },
    {
        src:"https://assets.ajio.com/cms/AJIO/WEB/D-Footwear-p7-formalshoes.jpg",
        to:"/"
    }
  ]
  const  starData=[
    {
        src:"https://assets.ajio.com/cms/AJIO/WEB/D-Celeb-p1-Levis.jpg",
        to:"/"
    },
    {
        src:"https://assets.ajio.com/cms/AJIO/WEB/D-Celeb-p2-puma.jpg",
        to:"/"
    },
    {
        src:"https://assets.ajio.com/cms/AJIO/WEB/D-Celeb-p3-adidas.jpg",
        to:"/"
    },
    {
        src:"https://assets.ajio.com/cms/AJIO/WEB/D-Celeb-p4-uspa.jpg",
        to:"/"
    },
    {
        src:"https://assets.ajio.com/cms/AJIO/WEB/D-Celeb-p5-fossil.jpg",
        to:"/"
    },
    {
        src:"https://assets.ajio.com/cms/AJIO/WEB/D-Celeb-p7-casio.jpg",
        to:"/"
    },
    {
        src:"https://assets.ajio.com/cms/AJIO/WEB/D-Celeb-p6-boat.jpg",
        to:"/"
    },
    {
        src:"https://assets.ajio.com/cms/AJIO/WEB/D-Celeb-p8-melorra.jpg",
        to:"/"
    },
    {
        src:"https://assets.ajio.com/cms/AJIO/WEB/D-Celeb-p9-Caprese.jpg",
        to:"/"
    },
    {
        src:"https://assets.ajio.com/cms/AJIO/WEB/D-Celeb-p10-beinghuman.jpg",
        to:"/"
    },
    {
        src:"https://assets.ajio.com/cms/AJIO/WEB/D-Celeb-p11-aurelia.jpg",
        to:"/"
    },
    {
        src:"https://assets.ajio.com/cms/AJIO/WEB/D-Celeb-p12-lee.jpg",
        to:"/"
    },
  ]
  const  lilchampsData=[
    {
        src:"https://assets.ajio.com/cms/AJIO/WEB/D-kidswear-p1-3060.jpg",
        to:"/"
    },
    {
        src:"https://assets.ajio.com/cms/AJIO/WEB/D-kidswear-p2-starting559ac.jpg",
        to:"/"
    },
    {
        src:"https://assets.ajio.com/cms/AJIO/WEB/D-kidswear-p3-min40.jpg",
        to:"/"
    },
    {
        src:"https://assets.ajio.com/cms/AJIO/WEB/D-kidswear-p4-upto70.jpg",
        to:"/"
    },
    {
        src:"https://assets.ajio.com/cms/AJIO/WEB/D-kidswear-p5-starting179.jpg",
        to:"/"
    },
    {
        src:"https://assets.ajio.com/cms/AJIO/WEB/D-kidswear-p6-min40.jpg",
        to:"/"
    },
    {
        src:"https://assets.ajio.com/cms/AJIO/WEB/D-kidswear-p7-starting199.jpg",
        to:"/"
    },
  ]
  const  brandbandsData=[
    {
        src:"https://assets.ajio.com/cms/AJIO/WEB/D-BandofBrands-p1-uspa.jpg",
        to:"/"
    },
    {
        src:"https://assets.ajio.com/cms/AJIO/WEB/D-BandofBrands-p2-M&S.jpg",
        to:"/"
    },
    {
        src:"https://assets.ajio.com/cms/AJIO/WEB/D-BandofBrands-p3-nike.jpg",
        to:"/"
    },
    {
        src:"https://assets.ajio.com/cms/AJIO/WEB/D-BandofBrands-p4-ax.jpg",
        to:"/"
    },
    {
        src:"https://assets.ajio.com/cms/AJIO/WEB/D-BandofBrands-p5-superdry.jpg",
        to:"/"
    },
    {
        src:"https://assets.ajio.com/cms/AJIO/WEB/D-BandofBrands-p6-tommy.jpg",
        to:"/"
    },
    {
        src:"https://assets.ajio.com/cms/AJIO/WEB/D-BandofBrands-p7-smadden.jpg",
        to:"/"
    },
  ]
  const  kitchenhomeData=[
    {
        src:"https://assets.ajio.com/cms/AJIO/WEB/D-Home&Kitchen-p1-bedsheets,Blants&comforters.jpg",
        to:"/"
    },
    {
        src:"https://assets.ajio.com/cms/AJIO/WEB/D-Home&Kitchen-p2-decor.jpg",
        to:"/"
    },
    {
        src:"https://assets.ajio.com/cms/AJIO/WEB/D-Home&Kitchen-p3-kitchen.jpg",
        to:"/"
    },
    {
        src:"https://assets.ajio.com/cms/AJIO/WEB/D-Home&Kitchen-p4-showpieces.jpg",
        to:"/"
    },
    {
        src:"https://assets.ajio.com/cms/AJIO/WEB/D-UHP-home-homeexpressions-upto70.jpg",
        to:"/"
    },
    {
        src:"https://assets.ajio.com/cms/AJIO/WEB/D-Home&Kitchen-p6-upto80.jpg",
        to:"/"
    },
    {
        src:"https://assets.ajio.com/cms/AJIO/WEB/D-Home&Kitchen-p7-upto80.jpg",
        to:"/"
    },
  ]
  const  discovermoreData=[
    {
        src:"https://assets.ajio.com/cms/AJIO/WEB/50.1.jpg",
        to:"/"
    },
    {
        src:"https://assets.ajio.com/cms/AJIO/WEB/50.2.jpg",
        to:"/"
    },
    {
        src:"https://assets.ajio.com/cms/AJIO/WEB/50.3.jpg",
        to:"/"
    },
    {
        src:"https://assets.ajio.com/cms/AJIO/WEB/50.4.jpg",
        to:"/"
    },
    {
        src:"https://assets.ajio.com/cms/AJIO/WEB/50.5.jpg",
        to:"/"
    },
    {
        src:"https://assets.ajio.com/cms/AJIO/WEB/50.6.jpg",
        to:"/"
    },
    
  ]
  return (
    <>
    <Image
        width="100%"
        src="https://assets.ajio.com/cms/AJIO/WEB/D-Topbanner-header.jpg"
        alt="label-img"
      />
      <Image
        width="100%"
        src="https://assets.ajio.com/cms/AJIO/WEB/D-Rewards-header.jpg"
        alt="Img-Label"
      />
      <Flex direction="row" justify="space-evenly" bg="#bc4950" maxW="100%">
        <Box width="33%">
          <Image
            src="https://assets.ajio.com/cms/AJIO/WEB/D-Rewards-shop&earn.jpg"
            alt="" width="100%"
          ></Image>
        </Box>
        <Box width="33%">
          <Image
            src="https://assets.ajio.com/cms/AJIO/WEB/D-Rewards-relianceone.jpg"
            alt="" width="100%"
          ></Image>
        </Box>
        <Box width="33%">
          <Image
            src="https://assets.ajio.com/cms/AJIO/WEB/D-Rewards-inviteyourfriends.jpg"
            alt="" width="100%"
          ></Image>
        </Box>
      </Flex>
      <Image width="100%" src="https://assets.ajio.com/cms/AJIO/WEB/D-SponsorBrands-Header.jpg" alt="Img-label"/>
      <Box  width="97%" m="auto">
      <ClickCarousel data={sponsoredBrandData}/>
      </Box>
      <Image width="100%" src="https://assets.ajio.com/cms/AJIO/WEB/D-Bestsellers-Header.jpg" alt="Img-label"/>
      <Image width="100%" src="https://assets.ajio.com/cms/AJIO/WEB/D-ExclusivelyonAJIO-Header.jpg" alt="Img-label"/>
      <Box  width="97%" m="auto">
        <ClickCarousel data={exclusiveData}/>
      </Box>
      <Image width="100%" src="https://assets.ajio.com/cms/AJIO/WEB/D-AJioservice-header.jpg" alt="Img-label"/>
      <Image width="100%" src="https://assets.ajio.com/cms/AJIO/WEB/D-AJioservice-Nextday.jpg" alt="Img-label"/>
      <Image width="100%" src="https://assets.ajio.com/cms/AJIO/WEB/D-Latestlaunches-Header.jpg" alt="Img-label"/>
      <Image width="100%" src="https://assets.ajio.com/cms/AJIO/WEB/D-JIT-Header.jpg" alt="Img-label"/>
      <Image width="100%" src="https://assets.ajio.com/cms/AJIO/WEB/D-Latestlaunches-GAPBanner.jpg" alt="Img-label"/>
      <Flex direction="row">
        <Box width="50%">
        <Image width="100%" src="https://assets.ajio.com/cms/AJIO/WEB/D-brandlaunch-acai-RESIZED.jpg" alt="Img-label"/>
        </Box>
        <Box width="50%">
        <Image width="100%" src="https://assets.ajio.com/cms/AJIO/WEB/D-brandlaunch-fyrerose-RESIZED.jpg"/>
        </Box>
      </Flex>
      <Image width="100%" src="https://assets.ajio.com/cms/AJIO/WEB/D-westernwear-Header.jpg" alt="Img-label"/>
      <Box  width="97%" m="auto">
        <ClickCarousel data={westernwearData}/>
      </Box>
      <Image width="100%" src="https://assets.ajio.com/cms/AJIO/WEB/D-UHPmen-Header.jpg" alt="Img-label"/>
      <Image width="100%" src="https://assets.ajio.com/cms/AJIO/WEB/D-UHPWomen-Header.jpg" alt="Img-label"/>
      <Image width="100%" src="https://assets.ajio.com/cms/AJIO/WEB/D-Gothnic-Header.jpg" alt="Img-label"/> 
      <Box width="97%" m="auto">
        <ClickCarousel data={ethnicData}/>
      </Box>  
      <Image width="100%" src="https://assets.ajio.com/cms/AJIO/WEB/D-Trends-Header.jpg" alt="Img-label"/>
      <Image width="100%" src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-hiddengems-header.jpg" alt="Img-label"/>
      <Box width="97%" m="auto">
        <ClickCarousel data={hiddenGemsData}/>
      </Box>  
      <Image width="100%" src="https://assets.ajio.com/cms/AJIO/WEB/D-Footwear-Header.jpg" alt="Img-label"/>
      <Box width="97%" m="auto">
        <ClickCarousel data={amazingaddonsData}/>
      </Box>  
      <Image width="100%" src="https://assets.ajio.com/cms/AJIO/WEB/D-Celeb-Header.jpg" alt="Img-label"/>
      <Box width="97%" m="auto">
        <ClickCarousel data={starData}/>
      </Box>  
      <Image width="100%" src="https://assets.ajio.com/cms/AJIO/WEB/D-kidswear-header.jpg" alt="Img-label"/>
      <Box width="97%" m="auto">
        <ClickCarousel data={lilchampsData}/>
      </Box>  
      <Image width="100%" src="https://assets.ajio.com/cms/AJIO/WEB/D-BandofBrands-Header.jpg" alt="Img-label"/>
      <Box width="97%" m="auto">
        <ClickCarousel data={brandbandsData}/>
      </Box>  
      <Image width="100%" src="https://assets.ajio.com/cms/AJIO/WEB/D-Home&Kitchen-Header.jpg" alt="Img-label"/>
      <Box width="97%" m="auto">
        <ClickCarousel data={kitchenhomeData}/>
      </Box>  
      <Image width="100%" src="https://assets.ajio.com/cms/AJIO/WEB/D-DiscOnlineStores-Header.jpg" alt="Img-label"/>
      <Image width="100%" src="https://assets.ajio.com/cms/AJIO/WEB/D-Ajioexp-header.jpg" alt="Img-label"/>
      <Image width="100%" src="https://assets.ajio.com/cms/AJIO/WEB/50.0.jpg" alt="Img-label"/>
      <Box width="97%" m="auto">
        <ClickCarousel data={discovermoreData}/>
      </Box>  
      <Image width="100%" src="https://assets.ajio.com/cms/AJIO/WEB/08032022-D-unisex-ajiocares-strip%20new%20d.jpg" alt="Img-label"/>

    </>
  )
}

export default Main