import { Box, Container, Image } from "@chakra-ui/react";

import AboutBg from "../../assets/AboutUs/aboutBg.png";
import LogoPng from "../../assets/AboutUs/logo.svg";
import PageTitle from "../../components/Global/PageTitle";
import AboutUsSection from "./Component/AboutUsSection";
import FramerAnimation from "../../components/animation/FramerAnimation";

interface ObjectDataType {
  name: string;
  text: string;
  image: string;
}

// const aboutUs: ObjectDataType = jsondata;
const data: ObjectDataType[] = [
  {
    name: "announcement",
    text: "Exciting News: ICT Meetup V7.0 is here! Join us for a two-day event packed with engaging seminars, competitive spirit through competitions, and inspiring project demonstrations. We've added a fresh twist to ensure enjoyment for all, plus after-meetup recreational activities in the evenings for a truly memorable experience.",
    image: "/assets/AboutUs/mascot.png",
  },
  {
    name: "prime IT Club",
    text: "Prime IT Club at Prime College, led by tech-savvy students, focuses on enhancing members' IT skills to meet current job market demands. Their mission is to foster creative knowledge sharing and skill development.",
    image: "/assets/AboutUs/image1.png",
  },
  {
    name: "prime college",
    text: "Prime IT Club at Prime College, led by tech-savvy students, focuses on enhancing members' IT skills to meet current job market demands. Their mission is to foster creative knowledge sharing and skill development.",
    image: "/assets/AboutUs/image2.png",
  },
  {
    name: "theme of ICT Meetup",
    text: "For ICT V7.0, our theme is 'AI Innovation: Sculpting a Smarter Tomorrow.' AI's broad-reaching impact on sectors through automation and analytics prompted its selection. It represents a paradigm shift, transforming problem-solving, work, and tech interaction. AI holds the potential to boost efficiency, personalization, creativity, scientific discovery, and more, with ICT being its birthplace and driving force.",
    image: "/assets/AboutUs/image3.png",
  },
  {
    name: "purpose",
    text: "Prime IT Club at Prime College, led by tech-savvy students, focuses on enhancing members' IT skills to meet current job market demands. Their mission is to foster creative knowledge sharing and skill development.",
    image: "/assets/AboutUs/image1.png",
  },
];

export default function AboutUs() {
  return (
    <>
      <PageTitle
        pageTitle="About"
        pageDescription="What is ICT MEETUP v7.0"
      ></PageTitle>
      <Box
        backgroundImage={`url(${AboutBg})`}
        width={"100%"}
        height={{md:"605px",sm:"300px"}}
        backgroundRepeat={"no-repeat"}
        backgroundSize="cover"
        backgroundBlendMode={"color-dodge"}
        backgroundColor={"lightgray 50%"}
        position={"relative"}
      >
        <Box position={"absolute"} top={"25%"}  right={{xl:"25%",lg:"",md:"10%",sm:"0%"}} >
         <FramerAnimation>
         <Image src={LogoPng} width={{md:"800px",sm:"100%"}}></Image>
         </FramerAnimation>
        </Box>
      </Box>
      <Container
        maxW={{
          xl: "1240px",
          "2xl": "1440px",
        }}
        paddingX={{
          base: "32px",
          md: "64px",
          xl: "0px",
        }}
        margin={"auto"}
      >
        <Box padding={"5rem 0"}>
          {data.map((item, index) => {
            const dir = index % 2 === 0 ? "left" : "right";
            return (
              <AboutUsSection
                key={index}
                imageLink={item.image}
                heading={item.name}
                paragraph={item.text}
                direction={dir}
              />
            );
          })}
          ;
        </Box>
      </Container>
    </>
  );
}
