import { Flex } from "@chakra-ui/react";

import PageTitle from "../components/Global/PageTitle";

export default function NotFound() {
  return (
    <>
      <Flex
        paddingY={{ base: "25px", lg: "50px" }}
        paddingX={{ base: "20px", md: "25px", lg: "50px" }}
        minWidth={"screen"}
        minHeight={"80vh"}
        margin={"auto"}
        position={"relative"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        flexShrink={0}
      >
        <PageTitle
          pageDescription="The page you are looking for is missing"
          pageTitle="404 not found"
        />
      </Flex>
    </>
  );
}
