import AboutImage from "../../assets/About.png";
import {
  Button,
  Flex,
  Heading,
  Image,
  Box,
  VStack,
  Text,
  HStack,
} from "@chakra-ui/react";
import { LuBox } from "react-icons/lu";
import SectionHeader from "../reusables/SectionHeader";

const data = [
  "Data Science",
  "Web 3",
  "NEural Networks",
  "Git and Github",
  "Computer Vision",
];

export default function Events() {
  return (
    <>
      <Box paddingY={"100px"} position={"relative"}>
        {/* for home page this is a reusable component pass props direction for flex direction and top left for absolute positioning */}
        <SectionHeader title={"Events"} direction="end" top="0" left="0" />

        <Flex
          direction={{
            base: "column",
            xl: "row",
          }}
          gap={{
            base: "100px",
            xl: "200px",
          }}
          justify={"space-between"}
        >
          <Image src={AboutImage} alt="About" />
          <Flex align={"center"}>
            <Flex
              direction={"column"}
              gap={"48px"}
              align={"center"}
              width={"full"}
            >
              <Heading
                as="h1"
                fontSize={"3xl"}
                fontFamily="heading"
                fontWeight={"bold"}
                autoCapitalize="true"
                color={"white"}
              >
                WORKSHOPS
              </Heading>

              <VStack spacing={"16px"} fontSize={"24px"} align={"start"}>
                {data.map((item, i) => (
                  <HStack key={i} color={"white"} spacing={"10px"}>
                    <LuBox />
                    <Text>{item}</Text>
                  </HStack>
                ))}
              </VStack>
            </Flex>
          </Flex>

          <Flex
            direction={"column"}
            gap={"48px"}
            justifyContent={"space-between"}
            height={"full"}
          >
            <Heading
              as="h1"
              fontSize={"3xl"}
              fontFamily="heading"
              fontWeight={"bold"}
              autoCapitalize="true"
              color={"white"}
            >
              01
            </Heading>
          </Flex>
        </Flex>
        <Button
          marginTop={10}
          paddingY={5}
          variant="outlined-button"
          width={"full"}
        >
          <Text
            fontFamily="heading"
            fontWeight="bold"
            fontSize="18px"
            color="white"
          >
            REGISTER AT OUR EVENTS PAGE
          </Text>
        </Button>
      </Box>
    </>
  );
}
