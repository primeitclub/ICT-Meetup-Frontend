import { useEffect, useState } from "react";

import Ideathon from "/assets/ideathon.png";
import { isValidMotionProp, motion, Transition } from "framer-motion";
import { FaRegClock } from "react-icons/fa6";
// tab contens
import { MdLocationOn, MdOutlineDateRange } from "react-icons/md";
import { Link } from "react-router-dom";

import {
    Box,
    Button,
    Card,
    CardBody,
    CardFooter,
    chakra,
    Flex,
    Heading,
    Image,
    Portal,
    shouldForwardProp,
    Stack,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
    Text,
} from "@chakra-ui/react";

import mic from "../../assets/mic.svg";
import PageTitle from "../../components/Global/PageTitle";
import jsondata from "../../data/dataEvent.json";
import jsonInsertdata from "../../data/datainsertEvent.json";
import TabLists from "./Components/TabLists";
import CommingSoon from "../../components/ui/CommingSoon";
import { GetRequest } from "../../services/httpRequest";
import { EventApiProps } from "../AdminPages/Components/Events/AdminAddEvent/AdminAllEvent";

import SingleCardEvent from "./Components/SingleCard";
import { getEvents, getEventsGroupedByEventType } from "../../services/firebaseRequest";

interface EventDataProps {
    [key: string]: EventApiProps[];
}

function EventPage() {
    // const [profile, setProfile] = useState<EventDataProps | null>(jsondata);
    const [profile, setProfile] = useState<any>(jsondata);

    const [_activeTab, setActiveTab] = useState(0);




    //  framer motion

    const MotionBox = chakra(motion.div, {
        shouldForwardProp: (prop) =>
            isValidMotionProp(prop) || shouldForwardProp(prop),
    });

    // for transition data , since typescript wont allow using it

    // declaring variable as transition type

    const customeTranstion: Transition = {
        duration: "0.3",
        ease: "easeOut",
        type: "spring",
        stiffness: 200,
        damping: 15,
    };

    // function retrive data from api

    let esportArrayData;
    let workshopArrayData;
    let competitionArrayData;
    const retriveData = async () => {
        try {
            // const profileData = await GetRequest("events")
            // const profileData = await getEvents();
            const profileData = await getEventsGroupedByEventType();
            setProfile(profileData);


        } catch (err) {
            console.log(err);
        }
    };
    useEffect(() => {
        retriveData();
    }, []);
    if (profile) {
        esportArrayData = profile.esports;
        workshopArrayData = profile.workshop;
        competitionArrayData = profile.competition;
    }

    return (
        <>
            <Box
                width={{ md: "100%", sm: "90%", base: "90%" }}
                margin={"auto"}
                height={"100%"}
                color={"white"}
            >
                <PageTitle
                    pageTitle="Event"
                    pageDescription="Find out what’s happening when"
                />

                {/* tab content begins */}

                <Box
                    width={{ base: "100%", xl: "80%" }}
                    margin={"auto"}
                    className="tabWraper"
                >
                    <Tabs onChange={(index) => setActiveTab(index)}>
                        <TabList
                            className="event_list"
                            whiteSpace={"nowrap"}
                            display={"flex"}
                            //  flexWrap={'nowrap'}
                            overflow={{ md: "scroll", sm: "scroll", base: "scroll" }}
                            justifyContent={{
                                md: "space-around",
                                sm: "start",
                                base: "start",
                            }}
                            gap={{ md: "40px", sm: "20px", base: "28px" }}
                            sx={{
                                "&::-webkit-scrollbar": {
                                    display: "none",
                                },
                                scrollbarWidth: "none",
                                msOverflowStyle: "none",
                            }}
                        >
                            <TabLists />
                        </TabList>

                        <TabPanels overflowY={"visible"} mt={"69px"}>
                            {/* workshop */}
                            <MotionBox
                                initial={{ y: 100 }}
                                animate={{ y: 0 }}
                                transition={customeTranstion}
                            >
                                <TabPanel>
                                    {profile?.workshop?.map((item: EventApiProps) => (
                                        <SingleCardEvent dataApi={item} key={1} />
                                    ))}
                                    {profile?.workshop || <CommingSoon />}

                                </TabPanel>
                            </MotionBox>
                            {/* workshop ends */}
                            {/* sessions */}
                            <MotionBox
                                initial={{ y: 100 }}
                                animate={{ y: 0 }}
                                transition={customeTranstion}
                            >
                                <TabPanel>
                                    <Box py={10}>
                                        {profile?.sessions?.map((item: EventApiProps, index: number) => (
                                            <SingleCardEvent dataApi={item} key={index} />
                                        ))}
                                    </Box>
                                </TabPanel>
                            </MotionBox>
                            {/* sessions ends */}
                            {/* competitoion */}
                            <MotionBox
                                initial={{ y: 100 }}
                                animate={{ y: 0 }}
                                transition={customeTranstion}
                            >
                                <TabPanel>
                                    {competitionArrayData &&
                                        competitionArrayData.map((item: EventApiProps, index) => (
                                            <SingleCardEvent dataApi={item} key={index} />
                                        ))}
                                </TabPanel>
                            </MotionBox>
                            {/* competition ends */}
                            {/* panel */}
                            <MotionBox
                                initial={{ y: 100 }}
                                animate={{ y: 0 }}
                                transition={customeTranstion}
                            >
                                <TabPanel>
                                    <Box py={10}>
                                        {profile?.panel || <CommingSoon />}
                                        {profile?.panel?.map((item: EventApiProps) => (
                                            <SingleCardEvent dataApi={item} />
                                        ))}
                                    </Box>
                                </TabPanel>
                            </MotionBox>
                            {/* panels ends */}
                            {/* esport  */}
                            <MotionBox
                                initial={{ y: 100 }}
                                animate={{ y: 0 }}
                                transition={customeTranstion}
                            >
                                <TabPanel>
                                    {esportArrayData &&
                                        esportArrayData.map((item: any, index) => (
                                            <SingleCardEvent dataApi={item} key={index} />
                                        ))}
                                </TabPanel>
                            </MotionBox>
                            {/* esport ends */}
                        </TabPanels>

                        {/* <TabPanels overflowY={"visible"} mt={"69px"}>
              { profile &&  Object.keys(profile).map((dataIndex) => {
                const DataVariable:EventApiProps[] = profile[dataIndex];

                return (
                  <MotionBox
                    key={dataIndex}
                    initial={{ y: 100 }}
                    animate={{ y: 0 }}
                    transition={customeTranstion}
                  >
                    <TabPanel>
                      {DataVariable.map((items) => {
                        return (
                          <Box
                          key={items.id}
                            className="single_event_card"
                            sx={FontCard}
                            pb={10}
                          >
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
                              <Box
                                h={{ md: "266px", sm: "auto", base: "auto" }}
                              >
                                <Image
                                  borderRadius={"10px"}
                                  objectFit={"cover"}
                                  maxW={{ base: "100%", md: "315px" }}
                                  h={"100%"}
                                  src={items.eventThumbnail}
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
                                      {items.title}
                                    </Heading>
                                    <Flex alignItems={"center"} gap={3}>
                                      <Box
                                        mt={2}
                                        className="img_mic"
                                        width={"17px"}
                                        height={"17px"}
                                      >
                                        <Image
                                          src={mic}
                                          height={"100%"}
                                          width={"100%"}
                                        />
                                      </Box>
                                      <Text
                                        pt={{ base: "10px", sm: "" }}
                                        fontSize={{
                                          lg: "20px",
                                          sm: "18px",
                                          base: "18px",
                                        }}
                                        fontWeight={500}
                                      >
                                        TBD
                                      </Text>
                                    </Flex>
                                  </Box>

                                  <Flex
                                    direction={"column"}
                                    gap={3}
                                    fontWeight={400}
                                    lineHeight={{ md: "24px", base: "18px" }}
                                    py={3}
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
                                        {items.location}
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
                                        {items.eventDate}
                                      </Text>
                                    </Flex>

                                    <Flex alignItems={"center"} gap={5}>
                                      <FaRegClock
                                        fill="white"
                                        style={{ color: "white", fontSize: 20 }}
                                      />
                                      <Text
                                        fontWeight={500}
                                        fontSize={{
                                          lg: "20px",
                                          sm: "18px",
                                          base: "18px",
                                        }}
                                      >
                                        {items.startTime} - {items.endTime}
                                      </Text>
                                    </Flex>
                                  </Flex>
                                </CardBody>
                                <CardFooter
                                  mt={{ md: "", sm: "8px", base: "8px" }}
                                  gap={{ md: 10, sm: 5, base: "5px" }}
                                  w={"100%"}
                                >
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
                                    w={{ md: "50%", sm: "100%" }}
                                    fontSize={{
                                      lg: "24px",
                                      sm: "18px",
                                      base: "16px",
                                    }}
                                  >
                                    Register Now
                                  </Button>
                                  <Button
                                    borderRadius={"full"}
                                    w={{ md: "50%", sm: "100%" }}
                                    variant={"outlined-button"}
                                    fontWeight={500}
                                    border={"3px solid blue"}
                                    fontSize={{
                                      lg: "24px",
                                      sm: "18px",
                                      base: "16px",
                                    }}
                                    p={{ md: "12px 24px", base: "10px 20px" }}
                                    color={"white"}
                                  >
                                    Read More
                                  </Button>
                                </CardFooter>
                              </Stack>
                            </Card>
                          </Box>
                        );
                      })}
                    </TabPanel>
                  </MotionBox>
                );
              })}
            </TabPanels> */}
                    </Tabs>
                </Box>
            </Box>
        </>
    );
}

export default EventPage;
