import { Button, Flex, Heading } from '@chakra-ui/react';

const LoginPage = () => {
  return (
    <Flex direction={"column"} alignItems={"center"}>
      <Heading
        as="h1"
        fontSize={"4xl"}
        fontFamily="heading"
        fontWeight={"bold"}
        autoCapitalize="true"
        color={"white"}
      >
        Login
      </Heading>
      <Button variant={"primary-button"} w="40vw">
        Button
      </Button>
    </Flex>
  );
};

export default LoginPage;
