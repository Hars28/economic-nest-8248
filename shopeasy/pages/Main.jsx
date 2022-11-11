import { Box, Flex, Icon, Image, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import AutoCarousel from "../components/carouselcomponents/Autocarousel";
import KeyCarousel from "../components/carouselcomponents/Keycarousel";

const Main = () => {
  const sponsoredBrandData = [
    {
      img: "https://assets.ajio.com/cms/AJIO/WEB/D-SponsorBrands-p1-levis.jpg",
      to: "/",
    },
    {
      img: "https://assets.ajio.com/cms/AJIO/WEB/D-SponsorBrands-p2-adidas.jpg",
      to: "/",
    },
    {
      img: "https://assets.ajio.com/cms/AJIO/WEB/D-SponsorBrands-p3-campus.jpg",
      to: "/",
    },
    {
      img: "https://assets.ajio.com/cms/AJIO/WEB/D-SponsorBrands-p4-puma.jpg",
      to: "/",
    },
    {
      img: "https://assets.ajio.com/cms/AJIO/WEB/D-SponsorBrands-p5-spykar.jpg",
      to: "/",
    },
    {
      img: "https://assets.ajio.com/cms/AJIO/WEB/D-SponsorBrands-p6-uspa.jpg",
      to: "/",
    },
    {
      img: "https://assets.ajio.com/cms/AJIO/WEB/D-SponsorBrands-p7-crocs.jpg",
      to: "/",
    },
  ];
  const exclusiveData = [
    {
      img: "https://assets.ajio.com/cms/AJIO/WEB/D-ExclusivelyAJIO-p1-Exclusiverange-REVISED%20(1).jpg",
      to: "/",
    },
    {
      img: "https://assets.ajio.com/cms/AJIO/WEB/D-ExclusivelyonAJIO-p2-ProduktbyJ&J.jpg",
      to: "/",
    },
    {
      img: "https://assets.ajio.com/cms/AJIO/WEB/D-ExclusivelyonAJIO-p3-Avaasa.jpg",
      to: "/",
    },
    {
      img: "https://assets.ajio.com/cms/AJIO/WEB/D-ExclusivelyonAJIO-p4-Gas.jpg",
      to: "/",
    },
    {
      img: "https://assets.ajio.com/cms/AJIO/WEB/D-ExclusivelyonAJIO-p5-DNMX.jpg",
      to: "/",
    },
    {
      img: "https://assets.ajio.com/cms/AJIO/WEB/D-ExclusivelyonAJIO-p6-Karigari.jpg",
      to: "/",
    },
    {
      img: "https://assets.ajio.com/cms/AJIO/WEB/D-ExclusivelyonAJIO-p7-Netplay.jpg",
      to: "/",
    },
    {
      img: "https://assets.ajio.com/cms/AJIO/WEB/D-ExclusivelyonAJIO-p8-JP.jpg",
      to: "/",
    },
    {
      img: "https://assets.ajio.com/cms/AJIO/WEB/D-ExclusivelyonAJIO-p9-Walkstyleac.jpg",
      to: "/",
    },
    {
      img: "https://assets.ajio.com/cms/AJIO/WEB/D-ExclusivelyonAJIO-p9-superdry.jpg",
      to: "/",
    },
  ];
  const westernwearData = [
    {
      img: "https://assets.ajio.com/cms/AJIO/WEB/D-westernwear-p1-starting499.jpg",
      to: "/",
    },
    {
      img: "https://assets.ajio.com/cms/AJIO/WEB/D-westernwear-p2-starting599.jpg",
      to: "/",
    },
    {
      img: "https://assets.ajio.com/cms/AJIO/WEB/D-westernwear-p3-starting999.jpg",
      to: "/",
    },
    {
      img: "https://assets.ajio.com/cms/AJIO/WEB/D-westernwear-p5-min50.jpg",
      to: "/",
    },
    {
      img: "https://assets.ajio.com/cms/AJIO/WEB/D-westernwear-p4-starting899.jpg",
      to: "/",
    },
    {
      img: "https://assets.ajio.com/cms/AJIO/WEB/D-westernwear-p6-starting399.jpg",
      to: "/",
    },
  ];
  const ethnicData = [
    {
      img: "https://assets.ajio.com/cms/AJIO/WEB/D-ethnicwear-kurtas-edited.jpg",
      to: "/",
    },
    {
      img: "https://assets.ajio.com/cms/AJIO/WEB/D-Gothnic-p1-starting499.jpg",
      to: "/",
    },
    {
      img: "https://assets.ajio.com/cms/AJIO/WEB/D-Gothnic-p3-starting499.jpg",
      to: "/",
    },
    {
      img: "https://assets.ajio.com/cms/AJIO/WEB/D-Gothnic-p4-upto80.jpg",
      to: "/",
    },
    {
      img: "https://assets.ajio.com/cms/AJIO/WEB/D-ethnicwear-footwear-edited.jpg",
      to: "/",
    },
    {
      img: "https://assets.ajio.com/cms/AJIO/WEB/D-Gothnic-p6-starting499.jpg",
      to: "/",
    },
  ];
  const hiddenGemsData = [
    {
      img: "https://assets.ajio.com/cms/AJIO/WEB/D-UHP-hiddengems-trendyol.jpg",
      to: "/",
    },
    {
      img: "https://assets.ajio.com/cms/AJIO/WEB/D-UHP-hiddengems-koton.jpg",
      to: "/",
    },
    {
      img: "https://assets.ajio.com/cms/AJIO/WEB/D-UHP-hiddengems-nakd.jpg",
      to: "/",
    },
    {
      img: "https://assets.ajio.com/cms/AJIO/WEB/D-UHP-hiddengems-wknd.jpg",
      to: "/",
    },
    {
      img: "https://assets.ajio.com/cms/AJIO/WEB/D-UHP-hiddengems-frenchconnection.jpg",
      to: "/",
    },
    {
      img: "https://assets.ajio.com/cms/AJIO/WEB/D-UHP-hiddengems-lcwaikiki.jpg",
      to: "/",
    },
    {
      img: "https://assets.ajio.com/cms/AJIO/WEB/D-UHP-hiddengems-grimelange.jpg",
      to: "/",
    },
    {
      img: "https://assets.ajio.com/cms/AJIO/WEB/D-UHP-hiddengems-barrelsandoil.jpg",
      to: "/",
    },
    {
      img: "https://assets.ajio.com/cms/AJIO/WEB/D-UHP-hiddengems-kennethcole.jpg",
      to: "/",
    },
  ];
  const amazingaddonsData = [
    {
      img: "https://assets.ajio.com/cms/AJIO/WEB/D-Footwear-p1-sports&casualshoes.jpg",
      to: "/",
    },
    {
      img: "https://assets.ajio.com/cms/AJIO/WEB/D-Footwear-p2-flipflops,sandals.jpg",
      to: "/",
    },
    {
      img: "https://assets.ajio.com/cms/AJIO/WEB/D-Footwear-p3-sneakers.jpg",
      to: "/",
    },
    {
      img: "https://assets.ajio.com/cms/AJIO/WEB/D-Footwear-p4-watches.jpg",
      to: "/",
    },
    {
      img: "https://assets.ajio.com/cms/AJIO/WEB/D-Footwear-p5-sunglasses.jpg",
      to: "/",
    },
    {
      img: "https://assets.ajio.com/cms/AJIO/WEB/D-Footwear-p7-formalshoes.jpg",
      to: "/",
    },
  ];
  const starData = [
    {
      img: "https://assets.ajio.com/cms/AJIO/WEB/D-Celeb-p1-Levis.jpg",
      to: "/",
    },
    {
      img: "https://assets.ajio.com/cms/AJIO/WEB/D-Celeb-p2-puma.jpg",
      to: "/",
    },
    {
      img: "https://assets.ajio.com/cms/AJIO/WEB/D-Celeb-p3-adidas.jpg",
      to: "/",
    },
    {
      img: "https://assets.ajio.com/cms/AJIO/WEB/D-Celeb-p4-uspa.jpg",
      to: "/",
    },
    {
      img: "https://assets.ajio.com/cms/AJIO/WEB/D-Celeb-p5-fossil.jpg",
      to: "/",
    },
    {
      img: "https://assets.ajio.com/cms/AJIO/WEB/D-Celeb-p7-casio.jpg",
      to: "/",
    },
    {
      img: "https://assets.ajio.com/cms/AJIO/WEB/D-Celeb-p6-boat.jpg",
      to: "/",
    },
    {
      img: "https://assets.ajio.com/cms/AJIO/WEB/D-Celeb-p8-melorra.jpg",
      to: "/",
    },
    {
      img: "https://assets.ajio.com/cms/AJIO/WEB/D-Celeb-p9-Caprese.jpg",
      to: "/",
    },
    {
      img: "https://assets.ajio.com/cms/AJIO/WEB/D-Celeb-p10-beinghuman.jpg",
      to: "/",
    },
    {
      img: "https://assets.ajio.com/cms/AJIO/WEB/D-Celeb-p11-aurelia.jpg",
      to: "/",
    },
    {
      img: "https://assets.ajio.com/cms/AJIO/WEB/D-Celeb-p12-lee.jpg",
      to: "/",
    },
  ];
  const lilchampsData = [
    {
      img: "https://assets.ajio.com/cms/AJIO/WEB/D-kidswear-p1-3060.jpg",
      to: "/",
    },
    {
      img: "https://assets.ajio.com/cms/AJIO/WEB/D-kidswear-p2-starting559ac.jpg",
      to: "/",
    },
    {
      img: "https://assets.ajio.com/cms/AJIO/WEB/D-kidswear-p3-min40.jpg",
      to: "/",
    },
    {
      img: "https://assets.ajio.com/cms/AJIO/WEB/D-kidswear-p4-upto70.jpg",
      to: "/",
    },
    {
      img: "https://assets.ajio.com/cms/AJIO/WEB/D-kidswear-p5-starting179.jpg",
      to: "/",
    },
    {
      img: "https://assets.ajio.com/cms/AJIO/WEB/D-kidswear-p6-min40.jpg",
      to: "/",
    },
    {
      img: "https://assets.ajio.com/cms/AJIO/WEB/D-kidswear-p7-starting199.jpg",
      to: "/",
    },
  ];
  const brandbandsData = [
    {
      img: "https://assets.ajio.com/cms/AJIO/WEB/D-BandofBrands-p1-uspa.jpg",
      to: "/",
    },
    {
      img: "https://assets.ajio.com/cms/AJIO/WEB/D-BandofBrands-p2-M&S.jpg",
      to: "/",
    },
    {
      img: "https://assets.ajio.com/cms/AJIO/WEB/D-BandofBrands-p3-nike.jpg",
      to: "/",
    },
    {
      img: "https://assets.ajio.com/cms/AJIO/WEB/D-BandofBrands-p4-ax.jpg",
      to: "/",
    },
    {
      img: "https://assets.ajio.com/cms/AJIO/WEB/D-BandofBrands-p5-superdry.jpg",
      to: "/",
    },
    {
      img: "https://assets.ajio.com/cms/AJIO/WEB/D-BandofBrands-p6-tommy.jpg",
      to: "/",
    },
    {
      img: "https://assets.ajio.com/cms/AJIO/WEB/D-BandofBrands-p7-smadden.jpg",
      to: "/",
    },
  ];
  const kitchenhomeData = [
    {
      img: "https://assets.ajio.com/cms/AJIO/WEB/D-Home&Kitchen-p1-bedsheets,Blants&comforters.jpg",
      to: "/",
    },
    {
      img: "https://assets.ajio.com/cms/AJIO/WEB/D-Home&Kitchen-p2-decor.jpg",
      to: "/",
    },
    {
      img: "https://assets.ajio.com/cms/AJIO/WEB/D-Home&Kitchen-p3-kitchen.jpg",
      to: "/",
    },
    {
      img: "https://assets.ajio.com/cms/AJIO/WEB/D-Home&Kitchen-p4-showpieces.jpg",
      to: "/",
    },
    {
      img: "https://assets.ajio.com/cms/AJIO/WEB/D-UHP-home-homeexpressions-upto70.jpg",
      to: "/",
    },
    {
      img: "https://assets.ajio.com/cms/AJIO/WEB/D-Home&Kitchen-p6-upto80.jpg",
      to: "/",
    },
    {
      img: "https://assets.ajio.com/cms/AJIO/WEB/D-Home&Kitchen-p7-upto80.jpg",
      to: "/",
    },
  ];
  const discovermoreData = [
    {
      img: "https://assets.ajio.com/cms/AJIO/WEB/50.1.jpg",
      to: "/",
    },
    {
      img: "https://assets.ajio.com/cms/AJIO/WEB/50.2.jpg",
      to: "/",
    },
    {
      img: "https://assets.ajio.com/cms/AJIO/WEB/50.3.jpg",
      to: "/",
    },
    {
      img: "https://assets.ajio.com/cms/AJIO/WEB/50.4.jpg",
      to: "/",
    },
    {
      img: "https://assets.ajio.com/cms/AJIO/WEB/50.5.jpg",
      to: "/",
    },
    {
      img: "https://assets.ajio.com/cms/AJIO/WEB/50.6.jpg",
      to: "/",
    },
  ];
  const slide1 = [
    {
      img: "https://assets.ajio.com/cms/AJIO/WEB/D-UHP-topbanner-1440x470-Ends13thNov-1.jpg",
    },
    {
      img: "https://assets.ajio.com/cms/AJIO/WEB/10112022-unisex-d-main-p1-brands-4070.jpg",
    },
    {
      img: "https://assets.ajio.com/cms/AJIO/WEB/10112022-unisex-d-main-p2-brands-min40.jpg",
    },
    {
      img: "https://assets.ajio.com/cms/AJIO/WEB/10112022-unisex-d-main-p3-upto80.jpg",
    },
    {
      img: "https://assets.ajio.com/cms/AJIO/WEB/10112022-unisex-d-main-p4-brands-under599.jpg",
    },
    {
      img: "https://assets.ajio.com/cms/AJIO/WEB/10112022-unisex-d-main-p5-brands-_min40.jpg",
    },
    {
      img: "https://assets.ajio.com/cms/AJIO/WEB/10112022-unisex-d-main-p6-brands-min50.jpg",
    },
  ];
  const slide2 = [
    {
      img: "https://assets.ajio.com/cms/AJIO/WEB/Citi-1440x128.jpg",
    },
    {
      img: "https://assets.ajio.com/cms/AJIO/WEB/Paytm-1440x128.jpg",
    },
    {
      img: "https://assets.ajio.com/cms/AJIO/WEB/D-Payupto5Bankoffer.jpg",
    },
    {
      img: "https://assets.ajio.com/cms/AJIO/WEB/1440x128%202.jpg",
    },
    {
      img: "https://assets.ajio.com/cms/AJIO/WEB/1440x128-mob%20500.jpg",
    },
    {
      img: "https://assets.ajio.com/cms/AJIO/WEB/D-RelianceOne-Bankoffer.jpg",
    },
  ];
  const slide3 = [
    {
      img: "https://assets.ajio.com/cms/AJIO/WEB/10112022-unisex-d-top-p1-brands-upto80.jpg",
    },
    {
      img: "https://assets.ajio.com/cms/AJIO/WEB/10112022-unisex-d-top-p2-brands-min50.jpg",
    },
    {
      img: "https://assets.ajio.com/cms/AJIO/WEB/10112022-unisex-d-top-p3-brands-starting299.jpg",
    },
    {
      img: "https://assets.ajio.com/cms/AJIO/WEB/10112022-unisex-d-top-p5-brands-upto80.jpg",
    },
    {
      img: "https://assets.ajio.com/cms/AJIO/WEB/10112022-unisex-d-top-p4-brands-flat50.jpg",
    },
  ];
  const slide4 = [
    {
      img: "https://assets.ajio.com/cms/AJIO/WEB/D-Bestsellers-p1-bestofwinter-upto75.jpg",
    },
    {
      img: "https://assets.ajio.com/cms/AJIO/WEB/D-Bestsellers-westernwear.jpg",
    },
    {
      img: "https://assets.ajio.com/cms/AJIO/WEB/D-Bestsellers-ethnicwear.jpg",
    },
    {
      img: "https://assets.ajio.com/cms/AJIO/WEB/D-Bestsellers-footwear.jpg",
    },
    {
      img: "https://assets.ajio.com/cms/AJIO/WEB/D-Bestsellers-Kidswear.jpg",
    },
    {
      img: "https://assets.ajio.com/cms/AJIO/WEB/D-Bestsellers-Home&Kitchen.jpg",
    },
    {
      img: "https://assets.ajio.com/cms/AJIO/WEB/D-Bestsellers-Acessories.jpg",
    },
  ];
  const slide5 = [
    {
      img: "https://assets.ajio.com/cms/AJIO/WEB/10112022-unisex-jit-d-p1-brands-upto80.jpg",
    },
    {
      img: "https://assets.ajio.com/cms/AJIO/WEB/10112022-d-unisex-jit-p2-brands-5090.jpg",
    },
    {
      img: "https://assets.ajio.com/cms/AJIO/WEB/10112022-unisex-jit-d-p3-brands-starting299.jpg",
    },
    {
      img: "https://assets.ajio.com/cms/AJIO/WEB/10112022-unisex-jit-d-p4-brands-upto80.jpg",
    },
    {
      img: "https://assets.ajio.com/cms/AJIO/WEB/10112022-unisex-d-jit-p5-brands-upto60.jpg",
    },
    {
      img: "https://assets.ajio.com/cms/AJIO/WEB/10112022-unisex-jit-d-p6-brands-under199.jpg",
    },
    {
      img: "https://assets.ajio.com/cms/AJIO/WEB/10112022-unisex-jit-d-p7-brands-starting599.jpg",
    },
  ];
  const slide6 = [
    {
      img: "https://assets.ajio.com/cms/AJIO/WEB/10112022-D-UHP-men-p1-arrow-upto50.jpg",
    },
    {
      img: "https://assets.ajio.com/cms/AJIO/WEB/10112022-D-UHP-men-p2-footwear-brands-flat35.jpg",
    },
    {
      img: "https://assets.ajio.com/cms/AJIO/WEB/10112022-D-UHP-men-p3-ajiogold-brands-3050.jpg",
    },
    {
      img: "https://assets.ajio.com/cms/AJIO/WEB/10112022-D-UHP-men-p4-brands-shirts-flat65.jpg",
    },
    {
      img: "https://assets.ajio.com/cms/AJIO/WEB/10112022-D-UHP-men-p5-night&loungewear-brands-upto70.jpg",
    },
  ];
  const slide7 = [
    {
      img: "https://assets.ajio.com/cms/AJIO/WEB/10112022-UHP-D-UHPwomen-p1-puma-min40.jpg",
    },
    {
      img: "https://assets.ajio.com/cms/AJIO/WEB/10112022-UHP-D-UHPwomen-p2-inch5-everqupid-30to70.jpg",
    },
    {
      img: "https://assets.ajio.com/cms/AJIO/WEB/10112022-UHP-D-UHPwomen-p3-fcuk-esprit-30to70extra10.jpg",
    },
    {
      img: "https://assets.ajio.com/cms/AJIO/WEB/10112022-UHP-D-UHPwomen-p4-nike-puma-30to50.jpg",
    },
    {
      img: "https://assets.ajio.com/cms/AJIO/WEB/10112022-UHP-D-UHPwomen-p5-moschino-fossil-upto80.jpg",
    },
  ];
  const slide8 = [
    {
      img: "https://assets.ajio.com/cms/AJIO/WEB/D-Trends-p1-upto70.jpg",
    },
    {
      img: "https://assets.ajio.com/cms/AJIO/WEB/D-Trends-p2-min30.jpg",
    },
    {
      img: "https://assets.ajio.com/cms/AJIO/WEB/D-Trends-p4-min50.jpg",
    },
    {
      img: "https://assets.ajio.com/cms/AJIO/WEB/D-Trends-p5-upto70.jpg",
    },
    {
      img: "https://assets.ajio.com/cms/AJIO/WEB/D-Trends-p6-starting249.jpg",
    },
    {
      img: "https://assets.ajio.com/cms/AJIO/WEB/D-Trends-p7-under499.jpg",
    },
    {
      img: "https://assets.ajio.com/cms/AJIO/WEB/D-trends-p8-under999.jpg",
    },
  ];

  return (
    <Box zIndex={1}  >
      <AutoCarousel slides={slide1} />
      <AutoCarousel slides={slide2} />
      <Box>
        <Image
          _hover={{
            transform: "scale(1.04)",
            transition: "1s",
            cursor: "pointer",
          }}
          width="100%"
          src="https://assets.ajio.com/cms/AJIO/WEB/D-Topbanner-header.jpg"
          alt="label-img"
        />
        <AutoCarousel slides={slide3} />
      </Box>
      <Image
        _hover={{
          transform: "scale(1.04)",
          transition: "1s",
          cursor: "pointer",
        }}
        width="100%"
        src="https://assets.ajio.com/cms/AJIO/WEB/D-Rewards-header.jpg"
        alt="Img-Label"
      />
      <Flex
        overflow="hidden"
        direction="row"
        justify="space-evenly"
        bg="#bc4950"
        maxW="100%"
      >
        <Box width="33%">
          <Image
            _hover={{
              transform: "scale(1.04)",
              transition: "1s",
              cursor: "pointer",
            }}
            src="https://assets.ajio.com/cms/AJIO/WEB/D-Rewards-shop&earn.jpg"
            alt=""
            width="100%"
          ></Image>
        </Box>
        <Box width="33%">
          <Image
            _hover={{
              transform: "scale(1.04)",
              transition: "1s",
              cursor: "pointer",
            }}
            src="https://assets.ajio.com/cms/AJIO/WEB/D-Rewards-relianceone.jpg"
            alt=""
            width="100%"
          ></Image>
        </Box>
        <Box width="33%">
          <Image
            _hover={{
              transform: "scale(1.04)",
              transition: "1s",
              cursor: "pointer",
            }}
            src="https://assets.ajio.com/cms/AJIO/WEB/D-Rewards-inviteyourfriends.jpg"
            alt=""
            width="100%"
          ></Image>
        </Box>
      </Flex>
      <Image
        _hover={{
          transform: "scale(1.04)",
          transition: "1s",
          cursor: "pointer",
        }}
        width="100%"
        src="https://assets.ajio.com/cms/AJIO/WEB/D-SponsorBrands-Header.jpg"
        alt="Img-label"
      />
      <KeyCarousel slides={sponsoredBrandData} />
      <Image
        _hover={{
          transform: "scale(1.04)",
          transition: "1s",
          cursor: "pointer",
        }}
        width="100%"
        src="https://assets.ajio.com/cms/AJIO/WEB/D-Bestsellers-Header.jpg"
        alt="Img-label"
      />
      <AutoCarousel slides={slide4} />
      <Image
        _hover={{
          transform: "scale(1.04)",
          transition: "1s",
          cursor: "pointer",
        }}
        width="100%"
        src="https://assets.ajio.com/cms/AJIO/WEB/D-ExclusivelyonAJIO-Header.jpg"
        alt="Img-label"
      />
      <KeyCarousel slides={exclusiveData} />
      <Image
        _hover={{
          transform: "scale(1.04)",
          transition: "1s",
          cursor: "pointer",
        }}
        width="100%"
        src="https://assets.ajio.com/cms/AJIO/WEB/D-AJioservice-header.jpg"
        alt="Img-label"
      />
      <Image
        _hover={{
          transform: "scale(1.04)",
          transition: "1s",
          cursor: "pointer",
        }}
        width="100%"
        src="https://assets.ajio.com/cms/AJIO/WEB/D-AJioservice-Nextday.jpg"
        alt="Img-label"
      />
      <Image
        _hover={{
          transform: "scale(1.04)",
          transition: "1s",
          cursor: "pointer",
        }}
        width="100%"
        src="https://assets.ajio.com/cms/AJIO/WEB/D-Latestlaunches-Header.jpg"
        alt="Img-label"
      />

      <Image
        _hover={{
          transform: "scale(1.04)",
          transition: "1s",
          cursor: "pointer",
        }}
        width="100%"
        src="https://assets.ajio.com/cms/AJIO/WEB/D-Latestlaunches-GAPBanner.jpg"
        alt="Img-label"
      />
      <Flex direction="row" overflow="hidden">
        <Box width="50%">
          <Image
            _hover={{
              transform: "scale(1.04)",
              transition: "1s",
              cursor: "pointer",
            }}
            width="100%"
            src="https://assets.ajio.com/cms/AJIO/WEB/D-brandlaunch-acai-RESIZED.jpg"
            alt="Img-label"
          />
        </Box>
        <Box width="50%">
          <Image
            _hover={{
              transform: "scale(1.04)",
              transition: "1s",
              cursor: "pointer",
            }}
            width="100%"
            src="https://assets.ajio.com/cms/AJIO/WEB/D-brandlaunch-fyrerose-RESIZED.jpg"
          />
        </Box>
      </Flex>
      <Image
        _hover={{
          transform: "scale(1.04)",
          transition: "1s",
          cursor: "pointer",
        }}
        width="100%"
        src="https://assets.ajio.com/cms/AJIO/WEB/D-JIT-Header.jpg"
        alt="Img-label"
      />
      <AutoCarousel slides={slide5} />

      <Image
        _hover={{
          transform: "scale(1.04)",
          transition: "1s",
          cursor: "pointer",
        }}
        width="100%"
        src="https://assets.ajio.com/cms/AJIO/WEB/D-westernwear-Header.jpg"
        alt="Img-label"
      />

      <KeyCarousel slides={westernwearData} />
      <Image
        _hover={{
          transform: "scale(1.04)",
          transition: "1s",
          cursor: "pointer",
        }}
        width="100%"
        src="https://assets.ajio.com/cms/AJIO/WEB/D-UHPmen-Header.jpg"
        alt="Img-label"
      />
      <AutoCarousel slides={slide6} />

      <Image
        _hover={{
          transform: "scale(1.04)",
          transition: "1s",
          cursor: "pointer",
        }}
        width="100%"
        src="https://assets.ajio.com/cms/AJIO/WEB/D-UHPWomen-Header.jpg"
        alt="Img-label"
      />
      <AutoCarousel slides={slide7} />

      <Image
        _hover={{
          transform: "scale(1.04)",
          transition: "1s",
          cursor: "pointer",
        }}
        width="100%"
        src="https://assets.ajio.com/cms/AJIO/WEB/D-Gothnic-Header.jpg"
        alt="Img-label"
      />
      <KeyCarousel slides={ethnicData} />
      <Image
        _hover={{
          transform: "scale(1.04)",
          transition: "1s",
          cursor: "pointer",
        }}
        width="100%"
        src="https://assets.ajio.com/cms/AJIO/WEB/D-Trends-Header.jpg"
        alt="Img-label"
      />
      <AutoCarousel slides={slide8} />

      <Image
        _hover={{
          transform: "scale(1.04)",
          transition: "1s",
          cursor: "pointer",
        }}
        width="100%"
        src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-hiddengems-header.jpg"
        alt="Img-label"
      />
      <KeyCarousel slides={hiddenGemsData} />
      <Image
        _hover={{
          transform: "scale(1.04)",
          transition: "1s",
          cursor: "pointer",
        }}
        width="100%"
        src="https://assets.ajio.com/cms/AJIO/WEB/D-Footwear-Header.jpg"
        alt="Img-label"
      />
      <KeyCarousel slides={amazingaddonsData} />
      <Image
        _hover={{
          transform: "scale(1.04)",
          transition: "1s",
          cursor: "pointer",
        }}
        width="100%"
        src="https://assets.ajio.com/cms/AJIO/WEB/D-Celeb-Header.jpg"
        alt="Img-label"
      />
      <KeyCarousel slides={starData} />
      <Image
        _hover={{
          transform: "scale(1.04)",
          transition: "1s",
          cursor: "pointer",
        }}
        width="100%"
        src="https://assets.ajio.com/cms/AJIO/WEB/D-kidswear-header.jpg"
        alt="Img-label"
      />
      <KeyCarousel slides={lilchampsData} />
      <Image
        _hover={{
          transform: "scale(1.04)",
          transition: "1s",
          cursor: "pointer",
        }}
        width="100%"
        src="https://assets.ajio.com/cms/AJIO/WEB/D-BandofBrands-Header.jpg"
        alt="Img-label"
      />
      <KeyCarousel slides={brandbandsData} />
      <Image
        _hover={{
          transform: "scale(1.04)",
          transition: "1s",
          cursor: "pointer",
        }}
        width="100%"
        src="https://assets.ajio.com/cms/AJIO/WEB/D-Home&Kitchen-Header.jpg"
        alt="Img-label"
      />
      <KeyCarousel slides={kitchenhomeData} />
      <Image
        _hover={{
          transform: "scale(1.04)",
          transition: "1s",
          cursor: "pointer",
        }}
        width="100%"
        src="https://assets.ajio.com/cms/AJIO/WEB/D-DiscOnlineStores-Header.jpg"
        alt="Img-label"
      />
      <Image
        _hover={{
          transform: "scale(1.04)",
          transition: "1s",
          cursor: "pointer",
        }}
        width="100%"
        src="https://assets.ajio.com/cms/AJIO/WEB/D-DiscOnlineStores-ajiogoldfkjgfkg.jpg"
        alt="Img-label"
      />
      <SimpleGrid bg="#2b483a" m="auto" columns={[2, 2, 4, 4]}>
        <Box overflow="hidden">
          <Image
            _hover={{
              transform: "scale(1.04)",
              transition: "1s",
              cursor: "pointer",
            }}
            src="https://assets.ajio.com/cms/AJIO/WEB/D-DiscOnlineStores-p1-trends.jpg"
            alt="trends"
          />
        </Box>{" "}
        <Box overflow="hidden">
          <Image
            _hover={{
              transform: "scale(1.04)",
              transition: "1s",
              cursor: "pointer",
            }}
            src="https://assets.ajio.com/cms/AJIO/WEB/D-DiscOnlineStores-p2-indie.jpg"
            alt="trends"
          />
        </Box>{" "}
        <Box overflow="hidden">
          <Image
            _hover={{
              transform: "scale(1.04)",
              transition: "1s",
              cursor: "pointer",
            }}
            src="https://assets.ajio.com/cms/AJIO/WEB/D-DiscOnlineStores-p3-home.jpg"
            alt="trends"
          />
        </Box>{" "}
        <Box overflow="hidden">
          <Image
            _hover={{
              transform: "scale(1.04)",
              transition: "1s",
              cursor: "pointer",
            }}
            src="https://assets.ajio.com/cms/AJIO/WEB/D-DiscOnlineStores-p4-sneakerrhood.jpg"
            alt="trends"
          />
        </Box>{" "}
        <Box overflow="hidden">
          <Image
            _hover={{
              transform: "scale(1.04)",
              transition: "1s",
              cursor: "pointer",
            }}
            src="https://assets.ajio.com/cms/AJIO/WEB/D-DiscOnlineStores-p9-winterwear.jpg"
            alt="trends"
          />
        </Box>{" "}
        <Box overflow="hidden">
          <Image
            _hover={{
              transform: "scale(1.04)",
              transition: "1s",
              cursor: "pointer",
            }}
            src="https://assets.ajio.com/cms/AJIO/WEB/D-DiscOnlineStores-p5-aceesories.jpg"
            alt="trends"
          />
        </Box>{" "}
        <Box overflow="hidden">
          <Image
            _hover={{
              transform: "scale(1.04)",
              transition: "1s",
              cursor: "pointer",
            }}
            src="https://assets.ajio.com/cms/AJIO/WEB/D-DiscOnlineStores-p6-beauty.jpg"
            alt="trends"
          />
        </Box>{" "}
        <Box overflow="hidden">
          <Image
            _hover={{
              transform: "scale(1.04)",
              transition: "1s",
              cursor: "pointer",
            }}
            src="https://assets.ajio.com/cms/AJIO/WEB/D-DiscOnlineStores-p7-internationalbrands.jpg"
            alt="trends"
          />
        </Box>
      </SimpleGrid>
      <Image
        _hover={{
          transform: "scale(1.04)",
          transition: "1s",
          cursor: "pointer",
        }}
        width="100%"
        src="https://assets.ajio.com/cms/AJIO/WEB/Discover%20Online%20Stores%20(D)dnfkjf.jpg"
        alt="Img-label"
      />
      <Image
        _hover={{
          transform: "scale(1.04)",
          transition: "1s",
          cursor: "pointer",
        }}
        width="100%"
        src="https://assets.ajio.com/cms/AJIO/WEB/D-Ajioexp-header.jpg"
        alt="Img-label"
      />
      <SimpleGrid bg="#2b483a" columns={[2,2,4,4]}>
      <Box  overflow="hidden">
          <Image
          objectFit="cover"
            _hover={{
              transform: "scale(1.04)",
              transition: "1s",
              cursor: "pointer",
            }}
            src="https://assets.ajio.com/cms/AJIO/WEB/D-Ajioexp-p1-shipping.jpg"
            alt="trends"
          />
        </Box>
        <Box overflow="hidden">
          <Image
            objectFit="cover"
              _hover={{
              transform: "scale(1.04)",
              transition: "1s",
              cursor: "pointer",
            }}
            src="https://assets.ajio.com/cms/AJIO/WEB/Ajio-Exp-extra25-D.jpg"
            alt="trends"
          />
        </Box>
        <Box overflow="hidden">
          <Image
            objectFit="cover"
              _hover={{
              transform: "scale(1.04)",
              transition: "1s",
              cursor: "pointer",
            }}
            src="https://assets.ajio.com/cms/AJIO/WEB/D-Ajioexp-p3-inviteyourfriends.jpg"
            alt="trends"
          />
        </Box>
        <Box overflow="hidden">
          <Image
            objectFit="cover"
                  _hover={{
              transform: "scale(1.04)",
              transition: "1s",
              cursor: "pointer",
            }}
            src="https://assets.ajio.com/cms/AJIO/WEB/D-Ajioexp-p4-newonajio.jpg"
            alt="trends"
          />
        </Box>
      </SimpleGrid>
      <Image
        _hover={{
          transform: "scale(1.04)",
          transition: "1s",
          cursor: "pointer",
        }}
        width="100%"
        src="https://assets.ajio.com/cms/AJIO/WEB/50.0.jpg"
        alt="Img-label"
      />
      <KeyCarousel slides={discovermoreData} />
      <Image
        _hover={{
          transform: "scale(1.04)",
          transition: "1s",
          cursor: "pointer",
        }}
        width="100%"
        src="https://assets.ajio.com/cms/AJIO/WEB/D-Games-Header.jpg"
        alt="Img-label"
      />
      <Image
        _hover={{
          transform: "scale(1.04)",
          transition: "1s",
          cursor: "pointer",
        }}
        width="100%"
        src="https://assets.ajio.com/cms/AJIO/WEB/D-Games-Card.jpg"
        alt="Img-label"
      />
      <Image
        _hover={{
          transform: "scale(1.04)",
          transition: "1s",
          cursor: "pointer",
        }}
        width="100%"
        src="https://assets.ajio.com/cms/AJIO/WEB/08032022-D-unisex-ajiocares-strip%20new%20d.jpg"
        alt="Img-label"
      />
      
    </Box>
  );
};

export default Main;
