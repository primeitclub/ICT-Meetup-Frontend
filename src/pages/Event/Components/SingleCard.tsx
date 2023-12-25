import { Box, Card, Image, Stack, Heading, Flex, Text, Button, CardBody, CardFooter } from '@chakra-ui/react';
import { MdLocationOn, MdOutlineDateRange } from 'react-icons/md';
import { FaRegClock } from 'react-icons/fa';
import mic from "../../../assets/mic.svg";
import { Link } from 'react-router-dom';

function SingleCardEvent({ dataApi }) {

    const { title, eventThumbnail, startTime, slug, endTime, eventDate, location, event_speaker, link } = dataApi;

    const FontCard = {

        color: "#FFF",
        fontStyle: "normal",
    };

    return (<>

        <Box className="single_event_card" sx={FontCard} pb={10}>
            <Card
                direction={{ base: "column", md: "row" }}
                border={"2px solid #3A3A3A;"}
                p={{
                    xl: "24px",
                    lg: "24px",
                    md: "24px",
                    base: "28px 24px",
                }}
                borderRadius={16}
                gap={{ lg: "48px", md: "30px", base: "24px" }}
                background={"rgba(3, 3, 3, 0.20)"}
                backdropFilter={"blur(20px)"}
                sx={{
                    "&:hover": {
                        background:
                            "linear-gradient(97deg, rgba(11, 41, 120, 0.38) -1.24%, rgba(7, 26, 74, 0.38) 49.38%, rgba(9, 37, 107, 0.33) 100%)",
                        border: "2px solid #2172EB;",
                        boxShadow: "0px 0px 150px -10px #061847",
                        backdropFilter: "blur(20px)",
                        cursor: "pointer",
                        "&_button": {
                            background: "red.300 ",
                            color: "black",
                        },
                    },
                }}
            >
                <Box h={{ md: "266px", sm: "auto", base: "auto" }}>
                    <Image
                        borderRadius={"10px"}
                        objectFit={"cover"}
                        maxW={{ base: "100%", md: "315px" }}
                        h={"100%"}
                        // src={ import.meta.env.VITE_EXPRESS_BACKEND_URL + eventThumbnail}
                        src={eventThumbnail}
                    />
                </Box>

                <Stack className="card_body" w={"100%"}>
                    <CardBody>
                        <Box mb={2}>
                            <Heading
                                fontSize={{
                                    lg: "32px",
                                    sm: "24px",
                                    base: "22px",
                                }}
                                fontWeight={600}
                                lineHeight={{
                                    lg: "36px",
                                    md: "34px",
                                    base: "30px",
                                }}
                            >
                                {title}
                            </Heading>
                            <Flex alignItems={"center"} gap={5}>
                                <Box mt={2} className="img_mic" width={"17px"} height={"17px"}>
                                    <Image src={mic} height={"100%"} width={"100%"} />
                                </Box>
                                <Text
                                    pt={{ base: "5px", sm: "" }}
                                    fontSize={{
                                        lg: "20px",
                                        sm: "18px",
                                        base: "18px",
                                    }}
                                    fontWeight={500}
                                >
                                    {event_speaker}
                                </Text>
                            </Flex>
                        </Box>

                        <Flex
                            direction={"column"}
                            gap={3}
                            fontWeight={400}
                            lineHeight={{ md: "24px", base: "18px" }}
                        // py={3}
                        >
                            <Flex alignItems={"center"} gap={5}>
                                <MdLocationOn
                                    fill="white"
                                    style={{ color: "white", fontSize: 21 }}
                                />
                                <Text
                                    fontWeight={500}
                                    fontSize={{
                                        lg: "20px",
                                        sm: "18px",
                                        base: "18px",
                                    }}
                                >
                                    {location}
                                </Text>
                            </Flex>

                            <Flex alignItems={"center"} gap={5}>
                                <MdOutlineDateRange
                                    fill="white"
                                    style={{ color: "white", fontSize: 21 }}
                                />
                                <Text
                                    fontWeight={500}
                                    fontSize={{
                                        lg: "20px",
                                        sm: "18px",
                                        base: "18px",
                                    }}
                                >
                                    {eventDate}
                                </Text>
                            </Flex>

                            <Flex alignItems={"center"} gap={5}>
                                <FaRegClock fill="white" style={{ color: "white", fontSize: 20 }} />
                                <Text
                                    fontWeight={500}
                                    fontSize={{ lg: "20px", sm: "18px", base: "18px" }}
                                >
                                    {startTime} onwards
                                </Text>
                            </Flex>
                        </Flex>
                    </CardBody>
                    <CardFooter
                        mt={{ md: "", sm: "8px", base: "8px" }}
                        gap={{ md: 10, sm: 5, base: "5px" }}
                        w={"100%"}
                    >

                        <Link to={link} rel="noreferrer" target={'_blank'} style={{ width: '100%' }}>
                            <Button
                                sx={{
                                    "&:hover": {
                                        background:
                                            "linear-gradient(92deg, #2C6DEC 0.11%, #003CD5 103.68%)",
                                    },
                                }}
                                variant={"primary-button"}
                                p={{ md: "12px 24px", base: "10px 20px" }}
                                fontWeight={500}
                                w={{ md: "100%", sm: "100%" }}
                                fontSize={{ lg: "24px", sm: "18px", base: "16px" }}

                            >
                                Register Now
                            </Button>
                        </Link>

                        {/* <Button
          borderRadius={"full"}
          w={{ md: "50%", sm: "100%" }}
          variant={"outlined-button"}
          fontWeight={500}
          border={"3px solid blue"}
          fontSize={{ lg: "24px", sm: "18px", base: "16px" }}
          p={{ md: "12px 24px", base: "10px 20px" }}
          color={"white"}
        >
          <Link to={slug} >
          Read More
          </Link>

        </Button> */}
                    </CardFooter>
                </Stack>
            </Card>
        </Box>


    </>)
}

export default SingleCardEvent;
