import Auther from "/assets/Bronze/auther.jpeg";
import Chuk from "/assets/Bronze/chuk.jpg";
import GalliMap from "/assets/Supporters/galli.png";
import HamroPatro from "/assets/Supporters/hp.png";
import Programiz from "/assets/Supporters/pc_logo.svg";
import { Link } from "react-router-dom";

import { Box, Container, Flex, Grid, Heading, Image } from "@chakra-ui/react";

import { ScaleUpanimation } from "../animation/FramerAnimation";
import HomePageTitle from "../reusables/HomePageTitle";

interface ISponsorsData {
  type: string;
  sponsors: {
    name: string;
    img: string;
    link: string;
  }[];
}

const sponsorsData: ISponsorsData[] = [
  {
    type: "Bronze",
    sponsors: [
      {
        name: "Ather Energy",
        img: Auther,
        link: "https://www.atherenergy.com",
      },
      {
        name: "Chukkul",
        img: Chuk,
        link: "https://www.chukul.com",
      },
    ],
  },

  {
    type: "Supporters",
    sponsors: [
      {
        name: "GalliMaps",
        img: GalliMap,
        link: "https://www.gallimaps.com",
      },
      {
        name: "Hamro Patro",
        img: HamroPatro,
        link: "https://www.hamropatro.com",
      },
      {
        name: "Programiz",
        img: Programiz,
        link: "https://www.programiz.com",
      },
    ],
  },
];

export default function Sponsors() {
  return (
    <>
      <Container
        paddingTop={{
          base: "40px",
          md: "112px",
        }}
      >
        <HomePageTitle pageTitle={"Our Sponsors"} />
        <Flex
          direction={"column"}
          alignItems={"center"}
          gap={"10"}
          paddingY={"10"}
        >
          {sponsorsData.map((sponsor: any, index: number) => {
            return (
              <Flex
                gap={"10"}
                direction={"column"}
                key={index}
                className="container"
              >
                <Heading variant={"h3"} as={"h2"} textAlign={"center"}>
                  {sponsor.type}
                </Heading>
                <Grid
                  autoFlow={"column"}
                  className="sponsors"
                  gap={"4"}
                  {...(sponsor.sponsors.length === 2 && {
                    templateColumns: {
                      base: "repeat(2, 1fr)",
                    },
                    autoFlow: "row",
                  })}
                  {...(sponsor.sponsors.length === 3 && {
                    templateColumns: "repeat(3, 1fr)",
                  })}
                >
                  {sponsor.sponsors.map((s: any, i: any) => {
                    return (
                      <ScaleUpanimation>
                        <Link
                          key={i}
                          to={s.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Box
                            maxH={"335px"}
                            maxW={"500px"}
                            height={"100%"}
                            padding={i === 2 ? "30px" : "0px"}
                            aspectRatio={1 / 1}
                            display={"flex"}
                            justifyContent={"center"}
                            alignItems={"center"}
                            backgroundColor={"white"}
                          >
                            <Image src={s.img} alt={s.name} />
                          </Box>
                        </Link>
                      </ScaleUpanimation>
                    );
                  })}
                </Grid>
              </Flex>
            );
          })}
        </Flex>
      </Container>
    </>
  );
}
