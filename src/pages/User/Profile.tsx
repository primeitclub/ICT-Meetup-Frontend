import { Container } from "chakra-paginator";

import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

import PageTitle from "../../components/Global/PageTitle";
import TabContent from "../Schedule/Components/TabContent";
import { useEffect, useRef, useState } from "react";
import { GetRequest } from "../../services/httpRequest";

const styleAlbum = {
  clipPath:
    "polygon(10% 0, 100% 0, 100% 89%, 89% 100%, 27% 100%, 0 100%, 0 10%)",
  height: { lg: "360px", sm: "300px", base: "300px" },
  width: { lg: "300px", md: "260px", sm: "100%", base: "100%" },
  background: "rgba(8, 26, 78, 0.6)",
};

const styleText = {
  clipPath:
    "polygon(10% 0, 100% 0, 100% 89%, 89% 100%, 27% 100%, 0 100%, 0 10%)",
  height: { lg: "360px", sm: "300px", base: "300px" },
  width: { lg: "300px", md: "260px", sm: "100%", base: "100%" },
  filter: "drop-shadow(0px 3.464px 10.392px rgba(0, 0, 0, 0.15))",
};

const cardAlbum = {
  border: "3px solid #162b74",
  padding: { lg: 4, sm: 3, base: 2 },
  backgroundBlendMode: "lighten",
  position: "relative",
  width: { md: "fit-content", sm: "90%", base: "90%" },
  transition: "0.3s ease-in",
  "&:hover": {
    border: "3px solid #2C84EC",
    cursor: "pointer",
    transition: "0.1s ease-in",
    background: "rgba(8, 26, 78, 0.6)",
  },
};

interface User {
  id: number;
  username: string;
  email: string;
  phone: string;
  address: string;
  college_name?: string;
}

export default function Profile() {
  const [profile, setProfile] = useState<User | null>(null);
  const [letters, setLetters] = useState<Array<string>>([]);

  let lettersPush: Array<string> = [];

  useEffect(() => {
    const retriveData = async () => {
      try {
        const profileData = await GetRequest("user/profile");
        setProfile(profileData.data.user);

        let lettersPush: Array<string> = [];

        const userNameSplit = profileData.data.user.username;
        console.log(userNameSplit);

        userNameSplit.split(" ").map((item: any) => {
          console.log(item.charAt(0));
          lettersPush.push(item.charAt(0));
        });

        if (lettersPush.length > 0) {
          setLetters(lettersPush);
        }
      } catch (err) {
        console.log(err);
      }
    };

    retriveData();
  }, []);



  console.log(letters);


  return (
    <>
      <Box marginTop={"150px"}>
        <PageTitle
          pageTitle="My Profile"
          pageDescription="A page just for you!"
        />
        <Container
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          marginY={"64px"}
        >
          <Box
            sx={cardAlbum}
            className="single_card_album"
            width={"fit-content"}
          >
            <Flex direction={{ md: "row", base: "column" }} gap={5}>
              <Box
                sx={styleAlbum}
                display={"flex"}
                className="single_album_image"
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Text textTransform={"uppercase"} color={"white"} fontSize={"7rem"} fontWeight={"600"}>

                {letters?.map( (item)=>{
                  return item;
                } )}        

                </Text>
                
              </Box>
              <Box
                bg={"rgba(8, 26, 78, 0.6)"}
                display={"flex"}
                sx={styleText}
                className="single_album_image"
              >
                <Flex
                  direction={"column"}
                  gap={4}
                  height={"80%"}
                  paddingTop={"10px"}
                  width={"80%"}
                  margin={"auto"}
                >
                  <Heading
                    fontSize={{ lg: "38px", md: "30px" }}
                    fontWeight={700}
                    color={"#2C90EC "}
                  >
                    Personal Data.
                  </Heading>

                  <Flex
                    gap={2}
                    direction={"column"}
                    justifyContent={"space-between"}
                  >
                    <Text
                      fontSize={{ lg: "22px", md: "18px", base: "20px" }}
                      fontWeight={500}
                      color={"white"}
                      textTransform={"capitalize"}
                    >
                      {profile?.username}
                    </Text>
                    <Text
                      fontSize={{ lg: "22px", md: "18px", base: "20px" }}
                      fontWeight={500}
                      color={"white"}
                    >
                      {profile?.email}
                    </Text>
                    <Text
                      fontSize={{ lg: "22px", md: "18px", base: "20px" }}
                      fontWeight={500}
                      color={"white"}
                      textTransform={"capitalize"}
                    >
                      {profile?.college_name}
                    </Text>
                    <Text
                      fontSize={{ lg: "22px", md: "18px", base: "20px" }}
                      fontWeight={500}
                      color={"white"}
                    >
                      {profile?.email}
                    </Text>
                    <Text
                      fontSize={{ lg: "22px", md: "18px", base: "20px" }}
                      fontWeight={500}
                      color={"white"}
                    >
                      {profile?.phone}
                    </Text>
                  </Flex>
                </Flex>
              </Box>
            </Flex>
          </Box>
        </Container>
        {/* <PageTitle
          pageTitle="My Schedule"
          pageDescription="A timeline of your events"
        />

        <Box
          pb={30}
          className="Tab_wraper"
          color={"white"}
          width={{ base: "100%", md: "90%", lg: "80%", xl: "60%" }}
          m={"auto"}
        >
          <TabContent />
        </Box> */}
      </Box>
    </>
  );
}
