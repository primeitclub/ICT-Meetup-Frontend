import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box,
    Container,
    Flex,
    Heading,
    Text,
} from "@chakra-ui/react";

import HomePageTitle from "../reusables/HomePageTitle";
import OutlinedButton from "../ui/OutlinedButton";
import { Link } from "react-router-dom";

interface IFAQData {
    question: string;
    answer: string;
}


const faqData: IFAQData[] = [
    {
        question: "What is ICT V7?",
        answer:
            "ICT V7 is the 7th edition of an annual event organized by Prime IT Club, focused on showcasing the latest developments and innovations in the field of Information and Communication Technology (ICT)",
    },
    {
        question: "When and where is ICT V7 taking place?",
        answer:
            "The event is scheduled for January 8-9, 2024, and it will be hosted at Prime College",
    },
    {
        question: "How can I register for the event?",
        answer:
            "Registration details will be made available closer to the event date. Keep an eye on our official website and social media channels for updates",
    },
    {
        question: "Is there parking available at the event venue?",
        answer:
            "Details about parking facilities will be provided in the event guide, which will be shared closer to the event date.",
    },
    {
        question: "What can I expect at ICT V7",
        answer:
            " ICT V7 will feature keynote speakers, workshops, panel discussions, and exhibitions highlighting the latest trends in ICT. It's a great opportunity to network with professionals and enthusiasts in the field",
    },
];

export default function FAQAccordion() {
    return (
        <>
            <Container
                paddingY={{
                    base: "40px",
                    lg: "80px",
                }}
            >
                <HomePageTitle pageTitle={"FAQS"} />
                <Heading
                    as={"h2"}
                    color={"white"}
                    fontSize={"28px"}
                    fontWeight={"500"}
                    textAlign={"center"}
                >
                    Find the answers to common questions about the event, registration and
                    attendance.
                </Heading>
                <Flex justifyContent={"center"} paddingY={"16"}>
                    <Accordion
                        allowToggle
                        w={"full"}
                        maxW={"4xl"}
                        borderTop={"1px solid white"}
                    >
                        {faqData.map((faq, index: number) => (
                            <AccordionItem
                                key={index}
                                paddingY={"20px"}
                                borderBottom={"1px solid white"}
                            >
                                <Heading variant={"h5"}>
                                    <AccordionButton>
                                        <Box
                                            as="span"
                                            flex="1"
                                            fontSize={"24px"}
                                            textAlign="left"
                                            fontWeight={"500"}
                                        >
                                            {faq.question}
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                </Heading>
                                <AccordionPanel py={4}>
                                    <Heading
                                        variant={"h5"}
                                        as={"p"}
                                        fontWeight={"400"}
                                        textAlign={"left"}
                                        fontSize={"20px"}
                                    >
                                        {faq.answer}
                                    </Heading>
                                </AccordionPanel>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </Flex>

                <Flex
                    justifyContent={"center"}
                    direction={"column"}
                    alignItems={"center"}
                >
                    <Heading
                        variant={"h3"}
                        as={"h2"}
                        fontSize={"34px"}
                        textAlign={"center"}
                        fontFamily={"heading"}
                    >
                        STILL HAVE A QUESTION?
                    </Heading>
                    <Text
                        textAlign={"center"}
                        paddingY={4}
                        color={"white"}
                        fontSize={"28px"}
                        fontWeight={"500"}
                    >
                        Contact for more info : <Link
                            to="https://www.facebook.com/supriya.bhujel.319"
                            rel="noopener noreferrer">
                            <Text as='span'
                                color="#7af8ff"
                                fontWeight={'600'}
                            >
                                Supriya Thapa Bhujel
                            </Text>
                        </Link> or  <Link
                            to="https://www.facebook.com/sinnnez"
                            target="_blank"
                            rel="noopener noreferrer">
                            <Text as='span'
                                color='#7af8ff'
                                fontWeight={'600'}
                            >
                                Jenish Maharjan
                            </Text>
                        </Link>
                    </Text>
                    <Box paddingY={"10"}>
                        <OutlinedButton buttonText={"Contact Us"} />
                    </Box>
                </Flex>
            </Container>
        </>
    );
}
