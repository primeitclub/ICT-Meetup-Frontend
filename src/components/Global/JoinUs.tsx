import { Box, Container, Flex, Heading, Image, Text } from "@chakra-ui/react";

import Cubes from "../../assets/cubes.jpg";
import OutlinedButton from "../ui/OutlinedButton";
import PrimaryButton from "../ui/PrimaryButton";
import { Link } from "react-router-dom";

export default function JoinUs() {
    return (
        <>
            <Container position={"relative"}>
                <Box
                    position={"absolute"}
                    width={"full"}
                    height={"full"}
                    bg={"black"}
                    opacity={0.4}
                    zIndex={1}
                />
                <Image
                    src={Cubes}
                    position={"absolute"}
                    alt={"Cubes"}
                    width={"full"}
                    objectFit={"cover"}
                    height={"full"}
                />
                <Flex
                    maxWidth={{
                        base: "100%",
                        md: "100%",
                        xl: "1100px",
                        "2xl": "1440px",
                    }}
                    margin={"auto"}
                    paddingY={"112px"}
                    paddingX={{
                        base: "32px",
                        md: "64px",
                        xl: "0px",
                    }}
                    gap={"24px"}
                    direction={"column"}
                >
                    <Box zIndex={2}>
                        <Heading variant={"h5"} fontFamily={"heading"}>
                            WHAT ARE YOU WAITING FOR?
                        </Heading>
                        <Heading variant={"h1"} fontFamily={"heading"}>
                            JOIN US!
                        </Heading>
                    </Box>

                    <Text color={"white"} zIndex={2} fontSize={"20px"}>
                        Join us for the most awaited event of the year!
                    </Text>

                    <Flex
                        direction={{
                            base: "column",
                            md: "row",
                        }}
                        gap={4}
                        zIndex={2}
                    >
                        <Link to="/register">
                            <PrimaryButton buttonText={"Register Now"} />
                        </Link>
                        <Link to="/events">
                            <OutlinedButton buttonText={"All Events"} />
                        </Link>
                    </Flex>
                </Flex>
            </Container>
        </>
    );
}
