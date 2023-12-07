import { useState } from "react";

import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

import { Box, Button, Flex, Heading, Input, Text } from "@chakra-ui/react";

import { verifyOtp } from "../../../api/auth";
import { getLocalStorage } from "../../../helpers/localStorage";

export default function OTPlogin() {
  const navigate = useNavigate();
  const [otpValues, setOtpValues] = useState(["", "", "", ""]);
  const [error, setError] = useState("");

  const handleInputChange = (index: number, value: any) => {
    const updatedOtpValues = [...otpValues];
    updatedOtpValues[index] = value;
    setOtpValues(updatedOtpValues);
  };

  const onSubmit = async (e: any) => {
    e.preventDefault();

    // Check if all digits are entered
    if (otpValues.some((value) => value === "")) {
      setError("Please enter all digits of the OTP.");
      return;
    }

    setError(""); // Clear previous errors

    try {
      // Send OTP values to the backend
      const response = await verifyOtp({
        id: getLocalStorage("id"),
        otp: otpValues.join(""),
      });

      // Handle response from the backend (you can add more specific logic)
      if (response.success) {
        toast.success("OTP verified successfully!");
        toast.success("You can now login.");
        navigate("/login");
      } else {
        console.log(response);
        toast.error("OTP verification failed!");
      }
    } catch (error) {
      setError(
        "An error occurred while verifying OTP. Please try again later."
      );
      console.error(error);
    }
  };

  return (
    <>
      <Flex minHeight={"100vh"} alignItems={"center"} justifyContent={"center"}>
        <Box
          marginTop={"64px"}
          borderRadius={"24px"}
          backdropFilter={"blur(20px)"}
          maxW={{ base: "350px", md: "500px", lg: "800px", xl: "800px" }}
          width={"100%"}
          padding={"64px 64px 103px 64px"}
          backgroundColor={"var(--form-background)"}
          boxShadow={"0px 0px 150px -10px #061847;"}
        >
          <Heading
            as="h3"
            fontSize={{ base: "18px", sm: "24px", md: "32px" }}
            fontFamily="heading"
            fontWeight={700}
            color={"white"}
          >
            OTP VERIFICATION
          </Heading>

          <Text
            color={"#D6D6D6"}
            fontFamily="body"
            marginTop={"20px"}
            marginBottom={"40px"}
            fontSize={"18px"}
            fontWeight={500}
          >
            Enter the verification code we just sent on your email address.
          </Text>
          <form onSubmit={onSubmit}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              {otpValues.map((value, index) => (
                <Input
                  key={index}
                  type="text"
                  maxLength={1}
                  textAlign="center"
                  mx={1}
                  width={{ base: "35px", md: "45px", lg: "55px", xl: "55px" }}
                  height={{ base: "35px", md: "45px", lg: "55px", xl: "55px" }}
                  fontSize="lg"
                  borderRadius="8px"
                  background={"transparent"}
                  color={"white"}
                  border="1px solid rgba(255, 255, 255, 0.38)"
                  borderWidth={2}
                  margin={"10px"}
                  value={value}
                  onChange={(e) => handleInputChange(index, e.target.value)}
                />
              ))}
            </div>

            <Button
              type="submit"
              variant={"primary-button"}
              width={"full"}
              marginTop={"40px"}
              borderRadius={0}
            >
              Send Code
            </Button>

            {error && (
              <Text
                fontFamily="body"
                color={"#FF4D4F"}
                textAlign={"center"}
                marginTop={"10px"}
                fontSize={"22px"}
                fontWeight={500}
              >
                {error}
              </Text>
            )}

            <Text
              fontFamily="body"
              color={"#D6D6D6"}
              textAlign={"center"}
              marginTop={"10px"}
              fontSize={"18px"}
              fontWeight={500}
            >
              Didn't receive code? Resend
            </Text>
          </form>
        </Box>
      </Flex>
    </>
  );
}
