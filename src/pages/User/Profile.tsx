import { Container } from "chakra-paginator";

import { Box, Flex, Image } from "@chakra-ui/react";

import PageTitle from "../../components/Global/PageTitle";
import TabContent from "../Schedule/Components/TabContent";

const styleAlbum = {
  clipPath:
    "polygon(10% 0, 100% 0, 100% 89%, 89% 100%, 27% 100%, 0 100%, 0 10%)",
  height: { lg: "316px", sm: "300px", base: "300px" },
  width: { lg: "280px", md: "260px", sm: "100%", base: "100%" },
  background: "white",
};

const cardAlbum = {
  border: "3px solid #162b74",
  padding: { lg: 4, sm: 3, base: 2 },
  backgroundBlendMode: "lighten",
  position: "relative",
  transition: "0.3s ease-in",
  "&:hover": {
    border: "3px solid #2C84EC",
    cursor: "pointer",
    transition: "0.1s ease-in",
    background: "rgba(8, 26, 78, 0.6)",
  },
};

export default function Profile() {
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
            <Flex direction={"row"} gap={5}>
              <Box sx={styleAlbum} className="single_album_image">
                <Image
                  height={"100%"}
                  width={"100%"}
                  objectFit={"cover"}
                  // src={ArrayImages[0].imagePath}
                />
              </Box>
              <Box sx={styleAlbum} className="single_album_image"></Box>
            </Flex>
          </Box>
        </Container>
        <PageTitle
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
        </Box>
      </Box>
    </>
  );
}
