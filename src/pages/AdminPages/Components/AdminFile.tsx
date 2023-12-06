import { memo } from "react";

import { Box, Flex, Image, Text } from "@chakra-ui/react";

interface FormProps {
  register?: any;
  errors: any;
  label: string;
  registerName: string;
  watch?: any;
}

function FileInput(props: FormProps) {
  return (
    <>
      <Box>
        <Flex justify={"space-between"} marginY={"5"}>
          <label>
            <Text
              display={"flex"}
              color={"black"}
              fontFamily={"body"}
              fontSize={"20px"}
              fontStyle={"normal"}
              fontWeight={"700"}
              lineHeight={"150%"}
            >
              {props.label}
            </Text>
          </label>

          <Text
            display={"flex"}
            color={"black"}
            fontFamily={"body"}
            fontSize={"20px"}
            fontStyle={"normal"}
            fontWeight={"700"}
            lineHeight={"150%"}
          >
            Image Preview
          </Text>
        </Flex>
        <Flex
          direction={{
            base: "column",
            md: "row",
          }}
          gap={"5"}
        >
          <Flex
            align={"center"}
            justify={"center"}
            width={{
              base: "100%",
              md: "50%",
            }}
            direction={"column"}
          >
            <Flex
              direction={"column"}
              align={"center"}
              justify={"center"}
              position={"relative"}
              width={"full"}
              height={"200px"}
              border={"2px dashed gray"}
            >
              <Flex
                direction={"column"}
                align={"center"}
                justify={"center"}
                padding={"5"}
              >
                <svg
                  height={"40"}
                  width={"40"}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 16"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                  />
                </svg>
                <Text marginBottom={"2"} fontSize={"20px"}>
                  <>
                    {props.watch?.[props.registerName]?.[0] ? (
                      <Text textColor={"green"}>Uploaded!</Text>
                    ) : (
                      <Text fontSize={"16px"} align={"center"} color={"gray"}>
                        Drag and drop or click to upload
                      </Text>
                    )}
                  </>
                </Text>
                <Text
                  fontSize={"14px"}
                  color={"var(--input-label)"}
                  fontFamily={"body"}
                  fontStyle={"normal"}
                  fontWeight={"100"}
                  lineHeight={"150%"}
                >
                  PNG, JPG or WEBP. Max 5MB
                </Text>
              </Flex>

              <input
                {...props.register(props.registerName.toString())}
                id="dropzone-file"
                type="file"
                style={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  opacity: 0,
                  cursor: "pointer",
                  top: 0,
                }}
              />
            </Flex>
          </Flex>

          <Flex
            width={{
              base: "100%",
              md: "50%",
            }}
            border={"2px dashed var(--input-border)"}
            borderRadius={"md"}
            direction={"column"}
            height={"200px"}
          >
            <Flex
              width={"full"}
              height={"full"}
              justify={"center"}
              align={"center"}
            >
              <Image
                height={"100%"}
                width={"100%"}
                objectFit={"contain"}
                src={
                  props.watch?.length > 0
                    ? URL.createObjectURL(props.watch?.[0])
                    : "https://placehold.co/600x400"
                }
                alt={"upload a image"}
              />
            </Flex>
          </Flex>
        </Flex>
        <Text
          marginTop={"12px"}
          color={"red"}
          fontFamily={"body"}
          fontSize={"14px"}
          fontStyle={"normal"}
          fontWeight={"100"}
          lineHeight={"150%"}
        >
          {props.errors?.message}
        </Text>
      </Box>
    </>
  );
}

export default memo(FileInput);
