import { Link } from "react-router-dom";

import { Box, Container, Flex, Grid, Heading, Image } from "@chakra-ui/react";

import HomePageTitle from '../reusables/HomePageTitle';
import { ScaleUpanimation } from '../animation/FramerAnimation';

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
    type: "Title Sponsor",
    sponsors: [
      {
        name: "Title Sponsor 1",
        img: "https://placehold.co/600x400",
        link: "https://www.google.com",
      },
    ],
  },
  {
    type: "Platinum Sponsors",
    sponsors: [
      {
        name: "Platinum Sponsor 1",
        img: "https://placehold.co/600x400",
        link: "https://www.google.com",
      },
      {
        name: "Platinum Sponsor 2",
        img: "https://placehold.co/600x400",
        link: "https://www.google.com",
      },
    ],
  },
  {
    type: "Gold Sponsors",
    sponsors: [
      {
        name: "Gold Sponsor 1",
        img: "https://placehold.co/600x400",
        link: "https://www.google.com",
      },
      {
        name: "Gold Sponsor 2",
        img: "https://placehold.co/600x400",
        link: "https://www.google.com",
      },
    ],
  },
  {
    type: "Silver Sponsors",
    sponsors: [
      {
        name: "Silver Sponsor 1",
        img: "https://placehold.co/600x400",
        link: "https://www.google.com",
      },
      {
        name: "Silver Sponsor 2",
        img: "https://placehold.co/600x400",
        link: "https://www.google.com",
      },
      {
        name: "Silver Sponsor 3",
        img: "https://placehold.co/600x400",
        link: "https://www.google.com",
      },
      {
        name: "Silver Sponsor 4",
        img: "https://placehold.co/600x400",
        link: "https://www.google.com",
      },
    ],
  },
  {
    type: "Supporters",
    sponsors: [
      {
        name: "Supporter 1",
        img: "https://placehold.co/600x400",
        link: "https://www.google.com",
      },
      {
        name: "Supporter 2",
        img: "https://placehold.co/600x400",
        link: "https://www.google.com",
      },
      {
        name: "Supporter 3",
        img: "https://placehold.co/600x400",
        link: "https://www.google.com",
      },
      {
        name: "Supporter 4",
        img: "https://placehold.co/600x400",
        link: "https://www.google.com",
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
                  {...(sponsor.sponsors.length > 2 && {
                    templateColumns: {
                      base: "repeat(2, 1fr)",
                      lg: "repeat(4, 1fr)",
                    },
                    autoFlow: "row",
                  })}
                >
                  {sponsor.sponsors.map((s: any, i: any) => {
                    return (
                      <ScaleUpanimation>
                        <Link key={i} to={s.link} target='_blank' rel='noopener noreferrer'>
                        <Box maxH={'335px'} maxW={'500px'} backgroundColor={'white'}>
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
