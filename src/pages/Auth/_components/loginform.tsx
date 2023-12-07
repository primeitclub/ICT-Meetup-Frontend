import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { toast } from "sonner";

import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";

import { loginUser, setRefreshToken, setToken } from "../../../api/auth";
import InputField from "../../../components/ui/InputField";
import { loginSchema, LoginSchemaType } from "../../../schema/loginSchema";

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchemaType>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (loginData: LoginSchemaType) => {
    const response = await loginUser(loginData);

    if (response.success === true) {
      setToken(response.data.accessToken);
      setRefreshToken(response.data.refreshToken);
      toast.success("Logged in Successfully!");
      window.location.replace("/");
    } else {
      //    console.log(response.message);
      toast.error("Login Failed! Please try again");
      response.error.detail.forEach((error: any) => {
        toast.warning(error);
      });
    }
  };

  // const oAuthLogin = async () => {
  //   window.location.href = "http://localhost:6969/auth/login-with-google";
  //   // if (response.success === true) {
  //   //   console.log(response);
  //   //   setToken(response.data.accessToken);
  //   //   setRefreshToken(response.data.refreshToken);
  //   //   toast.success("Logged in Successfully!");
  //   //   // navigate('/');
  //   // } else {
  //   //   console.log(response);
  //   //   toast.error("Login Failed! Please try again");
  //   //   response.error.detail.forEach((error: any) => {
  //   //     toast.warning(error);
  //   //   });
  //   // }
  // };

  return (
    <>
      <Box
        p={{ base: "60px", md: "70px", lg: "50px" }}
        w={{ base: "100%", md: "700px", lg: "600px" }}
        borderRadius="24px"
        background="rgba(9, 13, 27, 0.50)"
        boxShadow={"0px 0px 150px -10px #061847"}
        my={10}
        backdropFilter="blur(20px)"
      >
        <Flex direction={"column"}>
          <Heading
            as="h3"
            fontSize={{ base: "24px", md: "32px" }}
            fontFamily="heading"
            fontWeight={700}
            color={"white"}
          >
            LOGIN<span style={{ color: "#E76028" }}>.</span>
          </Heading>

          <Text
            color={"#D6D6D6"}
            fontSize={"18px"}
            fontWeight={400}
            fontFamily="body"
          >
            Log in to your account
          </Text>

          <Box
            paddingY={"36px"}
            display="inline-flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            gap="36px"
            fontSize={"18px"}
          >
            <Stack spacing={10} alignSelf="stretch">
              <form
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                }}
              >
                <InputField
                  errors={errors.email}
                  field={register("email")}
                  placeholder="Email"
                  type="text"
                />

                <InputField
                  errors={errors.password}
                  field={register("password")}
                  placeholder="Password"
                  type="password"
                />
              </form>
            </Stack>

            <Flex
              direction={{ base: "column", md: "row" }}
              justifyContent={{ base: "flex-start", md: "space-between" }}
              alignItems={"center"}
              w="100%"
              gap={{ base: "8px", md: "12px" }}
            >
              {/* <FormControl display="flex" alignItems="center">
        <Box display="flex" alignItems="center" border="1px solid white" p="2" mr="2">
         <Checkbox color="white" defaultChecked />
        </Box>
        <FormLabel color="white">Remember me</FormLabel>
       </FormControl> */}
              <Checkbox colorScheme="white" defaultChecked color="#D6D6D6">
                Remember me
              </Checkbox>

              <Text fontFamily="body" color={"#D6D6D6"}>
                Forgot your password?
              </Text>
            </Flex>
            <Box
              display="inline-flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              gap={"18px"}
            >
              <Button
                onClick={handleSubmit(onSubmit)}
                variant={"primary-button"}
                w={{ base: "100%", md: "27vw" }}
                minW="27vw"
                borderRadius={"none"}
              >
                Login
              </Button>
              <Text fontFamily="body" color={"#D6D6D6"}>
                Dont have an account? <Link to="/register">Register Now</Link>
              </Text>
            </Box>
            {/* <Text
              fontFamily="heading"
              color={"rgba(255, 255, 255, 0.60)"}
              fontWeight={700}
              fontSize={{ base: "16px", md: "24px" }}
              lineHeight={{ base: "24px", md: "36px" }}
              textTransform="uppercase"
            >
              -OR-
            </Text> */}
            {/* <Flex
              justifyContent="space-between"
              alignItems="center"
              w="100%"
              gap="34px"
              flexDirection={{ base: "column", md: "row" }}
            >
              <Button
                onClick={oAuthLogin}
                padding={{ base: "8px", md: "8px 16px" }}
                display={"inline-flex"}
                alignItems="center"
                gap="4px"
                borderRadius="8px"
                border="1px solid rgba(255, 255, 255, 0.12)"
                background="#0D0D0D"
                width="100%"
              >
                <img src={google} alt="google" />
                <Text fontFamily="body" color={"#D6D6D6"}>
                  Sign Up with Google
                </Text>
              </Button>
            </Flex> */}
          </Box>
        </Flex>
      </Box>
    </>
  );
}
