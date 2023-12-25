import { BsArrowRight } from "react-icons/bs";
import FramerAnimation from "../animation/FramerAnimation";

import { Box, Button, Flex, Text } from "@chakra-ui/react";

import Robot from "../../assets/Robot.png";
import { Link } from "react-router-dom";

export default function Hero() {
    return (
        <>
            <Box
                zIndex={0}
                // height={"90vh"}
                paddingY={{
                    base: "80px",
                    lg: "180px",
                }}
                // width={'90%'}
                margin={"auto"}
                position={"relative"}
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
                flexDirection={{
                    base: "column-reverse",
                    lg: "row",
                }}
            >
                <Flex
                    width={{
                        base: "100%",
                        lg: "50%",
                    }}
                    direction={"column"}
                    gap={"26px"}
                >
                    <Flex direction={"column"} fontFamily={"heading"}>
                        <Flex justifyContent={"space-between"} width={"70%"}>
                            <Text className="ict-header">ICT</Text>
                            <Text className="version-text">V 7.0</Text>
                        </Flex>
                        <h1 className="meetup-header">MEETUP</h1>
                    </Flex>
                    <Text
                        color={"white"}
                        fontWeight={"500"}
                        fontSize={{ sm: "22px", base: "20px", lg: "32px" }}
                    >
                        Join us for two days of cutting-edge technology, inspiring
                        workshops, exciting competitions and more!
                    </Text>

                    <Link to="/events">
                        <Button
                            background={
                                "linear-gradient(92deg, #2C6DEC 0.11%, #003CD5 103.68%)"
                            }
                            color={"white"}
                            borderRadius={"4px"}
                            padding={"12px 32px"}
                            width={{
                                base: "100%",
                                md: "fit-content",
                            }}
                            fontSize={"20px"}
                            fontWeight={"700"}
                            rounded={"full"}
                            gap={"2"}
                        >
                            <span>Register Now</span>
                            <BsArrowRight />
                        </Button>
                    </Link>
                </Flex>

                <Flex
                    paddingBottom={{
                        base: "20",
                        lg: "0",
                    }}
                >
                    <FramerAnimation>
                        <img src={Robot} alt="gradient" />
                    </FramerAnimation>

                </Flex>
            </Box>
        </>
    );
}
