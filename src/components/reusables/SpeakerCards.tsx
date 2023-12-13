import {
  Box,
  Flex,
  Image,
  Text,
  chakra,
  shouldForwardProp,
} from "@chakra-ui/react";
import { Transition, isValidMotionProp, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function SpeakerCards({
  image,
} // name,
// speakerSpeciality,
: {
  image: string;
  name: string;
  speakerSpeciality: string;
}) {
  // speaker hover state

  const [hover, setHover] = useState<Boolean>(false);

  const speakrRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    speakrRef.current?.addEventListener("mouseenter", () => {
      setHover(true);
    });

    speakrRef.current?.addEventListener("mouseleave", () => {
      setHover(false);
    });
  }, []);

  // framer component
  const MotionBox = chakra(motion.div, {
    shouldForwardProp: (prop) =>
      isValidMotionProp(prop) || shouldForwardProp(prop),
  });

  // transition props
  const trantionsSuprise: Transition = {
    duration:0.2,
    ease:"Linear",
    type:"spring",
    stiffness:200,
    damping:30
  }

  return (
    <>
      <Flex h={"100%"} direction={"column"}>
      <Flex h={"100%"} direction={"column"}>
        <Box
          ref={speakrRef}
          className="speaker_image_wrapper"
          maxH={"500px"}
          maxW={{
            xl: "440px",
            xl: "440px",
          }}
          borderRadius={"16px"}
          position={"relative"}
          transition={"all .3s ease-in-out"}
          borderRadius={"16px"}
          position={"relative"}
          transition={"all .3s ease-in-out"}
        >
          <Image
            className="speaker-image"
            h={"100%"}
            w={"100%"}
            objectFit={"cover"}
            className="speaker-image"
            h={"100%"}
            w={"100%"}
            objectFit={"cover"}
            src={image}
            borderRadius={"16px"}
            border={hover ? "9px solid #fff" : "2px solid #fff"}
            transition={"all .3s ease-in-out"}
            background={
              " linear-gradient(135deg, rgba(56, 137, 213, 0.20) 4.25%, rgba(36, 79, 233, 0.20) 100.05%), linear-gradient(0deg, rgba(6, 21, 50, 0.40) 11%, rgba(0, 0, 0, 0.00) 25.1%), url(<path-to-image>), lightgray -41.571px -59.707px / 116.628% 125.141% no-repeat"
              " linear-gradient(135deg, rgba(56, 137, 213, 0.20) 4.25%, rgba(36, 79, 233, 0.20) 100.05%), linear-gradient(0deg, rgba(6, 21, 50, 0.40) 11%, rgba(0, 0, 0, 0.00) 25.1%), url(<path-to-image>), lightgray -41.571px -59.707px / 116.628% 125.141% no-repeat"
            }
            backgroundBlendMode={"color, normal, normal"}
            backgroundBlendMode={"color, normal, normal"}
          />

          <Box
            position={"absolute"}
            top={0}
            left={0}
            height={"100%"}
            w={"100%"}
            bg={
              "linear-gradient(0deg, rgba(6, 21, 50, 0.80) 11.92%, rgba(0, 0, 0, 0.00) 25.1%)"
            }
            className="overlay"
          ></Box>
          <Box
            position={"absolute"}
            bottom={0}
            width={"full"}
            display={"flex"}
            alignItems={"center"}
            flexDirection={"column"}
            justifyContent={"center"}
            color={"white"}
            h={"20%"}
            width={"full"}
            display={"flex"}
            alignItems={"center"}
            flexDirection={"column"}
            justifyContent={"center"}
            color={"white"}
            h={"20%"}
            fontWeight={700}
            fontSize={"32px"}
            className="speaker_name"
            backgroundBlendMode={"plus-darker"}
            letterSpacing={".2px"}
          >
           <MotionBox initial={{y:0}}  animate={{y:-5}} >
           <Text transition={"all 0.3s ease-in-out"} lineHeight={"0.9"}>{name}</Text>
           </MotionBox>

            {hover ? (
              <MotionBox 
              transition={trantionsSuprise}
              fontSize={"20px"}
              animate={{  y: 0 }}
              initial={{  y: 100 }}
               >
                <Text transition={"0.3s ease-in"} fontSize={"20px"}>
                  {speakerSpeciality}
                </Text>
              </MotionBox>
            ) : (
              <></>
            )}
          </Box>
        </Box>
      </Flex>
    </>
  );
}
