import Glimpse2 from "/assets/Glimpses/glimpse2.webp";
import Glimpse3 from "/assets/Glimpses/glimpse3.webp";
import Glimpse4 from "/assets/Glimpses/glimpse4.webp";
import Glimpse1 from "/assets/Glimpses/glimpses1.jpg";

import { Container, Flex, Grid, GridItem, Heading } from "@chakra-ui/react";

import FramerAnimation from "../animation/FramerAnimation";
import HomePageTitle from "../reusables/HomePageTitle";
import OutlinedButton from "../ui/OutlinedButton";

interface IHomePageGlimpsesData {
  images: {
    src: string;
    alt: string;
  }[];
}

const homePageGlimpsesData: IHomePageGlimpsesData = {
  images: [
    {
      src: Glimpse2,
      alt: "Image 1",
    },
    {
      src: Glimpse1,
      alt: "Image 2",
    },
    {
      src: Glimpse4,
      alt: "Image 3",
    },
    {
      src: Glimpse3,
      alt: "Image 4",
    },
  ],
};

export default function HomePageGlimpses() {
  return (
    <>
      <Container
        paddingY={{
          base: "40px",
          lg: "112px",
        }}
      >
        <HomePageTitle pageTitle={"Glimpses of the past"} />
        <Heading variant={"h5"} textAlign={"center"}>
          Experience the past editions of the conference
        </Heading>
        <FramerAnimation>
          <Grid
            gap={4}
            templateRows={{
              base: "repeat(3, 1fr)",
              lg: "repeat(2, 1fr)",
            }}
            templateColumns={{
              base: "repeat(2, 1fr)",
              lg: "repeat(3, 1fr)",
            }}
            paddingY={"48px"}
          >
            {homePageGlimpsesData.images.map((image, index) => (
              <GridItem
                key={index}
                rowSpan={index === 0 || index === 2 ? 2 : 1}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  style={
                    index === 0 || index === 2
                      ? { height: "100%", objectFit: "cover" }
                      : { width: "100%", objectFit: "cover" }
                  }
                />
              </GridItem>
            ))}
          </Grid>
        </FramerAnimation>
        <Flex justifyContent={"center"}>
          <OutlinedButton buttonText={"View Gallery"} />
        </Flex>
      </Container>
    </>
  );
}
