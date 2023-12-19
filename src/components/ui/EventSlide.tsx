import { Flex, Heading, HStack, Text } from "@chakra-ui/react";

const data = [

    "Sessions",
    " Workshops",
    " Ideathon",
    " Panel Discussion",
    "Project Demonstration",
    "Competitions",
    "ICT Musical Night",
    "Valorant",
    "Stalls"
];

export default function EventSlide() {
  return (
    <>
      <Flex
        align={"center"}
        width={"full"}
        paddingX={{
          base: "0",
          md: "97px",
        }}
      >
        <Flex direction={"column"} gap={"48px"} align={"start"} width={"full"}>
        <Heading
            as="h1"
            fontSize={{
              base: "24px",
              md: "32px",
              lg: "57px",
            }}
            fontFamily="heading"
            fontWeight={"bold"}
            autoCapitalize="true"
            color={"black"}
            background={"white"}
            backgroundClip={"text"}
            position={"relative"}   
          >
            01
          </Heading>
          <Heading
            as="h1"
            fontSize={{
              base: "24px",
              md: "32px",
              lg: "36px",
            }}
            fontFamily="heading"
            fontWeight={"bold"}
            autoCapitalize="true"
            color={"white"}
          >
            WORKSHOPS
          </Heading>

                    <Flex
                        fontWeight={"500"}
                        direction={"column"}
                        gap={"16px"}
                        fontSize={{
                            base: "24px",
                            md: "28px",
                        }}
                        align={"start"}
                    >
                        {data.map((item, i) => (
                            <HStack key={i} color={"white"} spacing={"10px"}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                >
                                    <path
                                        d="M8.14706 6.92068C8.00144 6.77512 7.88593 6.6023 7.80712 6.41208C7.72831 6.22186 7.68774 6.01799 7.68774 5.81209C7.68774 5.6062 7.72831 5.40232 7.80712 5.2121C7.88593 5.02189 8.00144 4.84906 8.14706 4.7035L10.8911 1.9585C11.1855 1.66481 11.5844 1.49988 12.0002 1.49988C12.416 1.49988 12.8149 1.66481 13.1092 1.9585L15.8533 4.7035C15.9989 4.84906 16.1144 5.02189 16.1932 5.2121C16.2721 5.40232 16.3126 5.6062 16.3126 5.81209C16.3126 6.01799 16.2721 6.22186 16.1932 6.41208C16.1144 6.6023 15.9989 6.77512 15.8533 6.92068L13.1092 9.66568C12.8149 9.95937 12.416 10.1243 12.0002 10.1243C11.5844 10.1243 11.1855 9.95937 10.8911 9.66568L8.14706 6.92068ZM22.0417 10.891L19.2967 8.146C19.0025 7.85237 18.6038 7.68746 18.1882 7.68746C17.7725 7.68746 17.3738 7.85237 17.0796 8.146L14.3346 10.891C14.0409 11.1854 13.8759 11.5842 13.8759 12.0001C13.8759 12.4159 14.0409 12.8147 14.3346 13.1091L17.0796 15.8541C17.3738 16.1477 17.7725 16.3127 18.1882 16.3127C18.6038 16.3127 19.0025 16.1477 19.2967 15.8541L22.0417 13.1091C22.3354 12.8147 22.5004 12.4159 22.5004 12.0001C22.5004 11.5842 22.3354 11.1854 22.0417 10.891ZM9.66674 10.891L6.92081 8.146C6.62658 7.85237 6.22789 7.68746 5.81221 7.68746C5.39654 7.68746 4.99784 7.85237 4.70362 8.146L1.95862 10.891C1.66493 11.1854 1.5 11.5842 1.5 12.0001C1.5 12.4159 1.66493 12.8147 1.95862 13.1091L4.70362 15.8541C4.99784 16.1477 5.39654 16.3127 5.81221 16.3127C6.22789 16.3127 6.62658 16.1477 6.92081 15.8541L9.66581 13.1091C9.95949 12.8147 10.1244 12.4159 10.1244 12.0001C10.1244 11.5842 9.95949 11.1854 9.66581 10.891H9.66674ZM13.1102 14.3344C12.8158 14.0407 12.4169 13.8758 12.0011 13.8758C11.5853 13.8758 11.1864 14.0407 10.8921 14.3344L8.14706 17.0794C8.00144 17.225 7.88593 17.3978 7.80712 17.588C7.72831 17.7783 7.68774 17.9821 7.68774 18.188C7.68774 18.3939 7.72831 18.5978 7.80712 18.788C7.88593 18.9782 8.00144 19.1511 8.14706 19.2966L10.8911 22.0416C11.1855 22.3353 11.5844 22.5002 12.0002 22.5002C12.416 22.5002 12.8149 22.3353 13.1092 22.0416L15.8533 19.2966C15.9989 19.1511 16.1144 18.9782 16.1932 18.788C16.2721 18.5978 16.3126 18.3939 16.3126 18.188C16.3126 17.9821 16.2721 17.7783 16.1932 17.588C16.1144 17.3978 15.9989 17.225 15.8533 17.0794L13.1102 14.3344Z"
                                        fill="white"
                                    />
                                </svg>
                                <Text>{item}</Text>
                            </HStack>
                        ))}
                    </Flex>
                </Flex>
            </Flex>
        </>
    );
}
