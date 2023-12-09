import { Box, Flex, Image, Text, chakra, shouldForwardProp } from "@chakra-ui/react";
import { ScaleUpanimation } from "../../../components/animation/FramerAnimation";
import { isValidMotionProp } from "framer-motion";
import { useEffect , useRef } from "react";
import { motion } from "framer-motion";

const AboutUsSection = (props: any) => {
  const { imageLink, heading, paragraph, direction } = props;
  const flexDirection = direction === "left" ? "row" : "row-reverse";

  const heightAbout = useRef<HTMLDivElement | null>(null);

  const scrollByViewPort = () => {
    const viewportHeight = window.innerHeight;
    heightAbout.current?.scrollBy(0, 100); // Scroll the window
  }

  useEffect( ()=>{

    const scrollHandler = () => scrollByViewPort();
    window.addEventListener( "scroll",scrollHandler );

    return ()=>{
      window.removeEventListener("scroll",scrollHandler);
    }

  } ,[])

  // compo
  const MotionBox = chakra( motion.div , {
    shouldForwardProp:( prop ) => isValidMotionProp( prop ) || shouldForwardProp( prop )
  });

  return (
      <Flex
      //    key={index}
      ref={heightAbout}
      direction={{
        base: "column",
        lg: flexDirection,
      }}
      mb={"24"}
      gap={"10"}
      //    direction={['column', 'row']}
      justifyContent={"center"}
      alignItems={"center"}
      color={"#fff"}
      height={{md:"90vh",sm:"90vh"}}
    >
      <Box
        width={{
          base: "100%",
          lg: "50%",
        }}
      >
       <ScaleUpanimation>
       <Image src={imageLink} alt="Image" />
       </ScaleUpanimation>
      </Box>
      <Box
        width={{
          base: "100%",
          lg: "50%",
        }}
      >
        <Text
          variant={"section-header"}
          fontSize={"32px"}
          fontWeight={"700"}
          letterSpacing={"0.64px"}
          textTransform={"uppercase"}
          lineHeight={""}
          fontFamily={"heading"}
        >
          {heading}
        </Text>
        <Text mt={"24px"} fontSize={"20px"} fontWeight={"500"}>
          {paragraph}
        </Text>
      </Box>
    </Flex>
  );
};

export default AboutUsSection;