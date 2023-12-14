import { Box, Flex, Image, Text, chakra, shouldForwardProp } from "@chakra-ui/react";
import { ScaleUpanimation } from "../../../components/animation/FramerAnimation";
import { isValidMotionProp } from "framer-motion";
import { useEffect , useRef } from "react";
import { motion } from "framer-motion";

const AboutUsSection = (props: any) => {
  const { imageLink, heading, paragraph, direction } = props;
  const flexDirection = direction === "left" ? "row" : "row-reverse";

  const heightAbout = useRef<HTMLDivElement | null>(null);


  return (
      <Flex
      //    key={index}
      ref={heightAbout}
      direction={{
        base: "column",
        lg: flexDirection,
      }}
      gap={"10"}
      justifyContent={"center"}
      alignItems={"center"}
      color={"#fff"}
      height={{md:"80vh",sm:"90vh"}}
    >

      <Box
        width={{
          base: "100%",
          lg: "60%",
        }}
        height={{md:"430px"}}
      >
       <ScaleUpanimation>
       <Image borderRadius={"10px"} height={"100%"} width={"100%"} objectFit={"cover"} src={imageLink} alt="Image" />
       </ScaleUpanimation>
      </Box>

      <Box
        width={{
          base: "100%",
          lg: "40%",
        }}
      >
        
        <Box  width={{xl:"70%",lg:"80%",base:"100%"}} mx={"auto"}>
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
     <Text  mt={"24px"} fontSize={"20px"} fontWeight={"500"}>
       {paragraph}
     </Text>
        </Box>

      </Box>

    </Flex>
  );
};

export default AboutUsSection;