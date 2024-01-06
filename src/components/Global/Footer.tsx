import PrimeItClub from "/assets/it_club_logo.png";
import PrimeCollege from "/assets/prime_college.png";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";

import {
  Button,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Input,
  Text,
} from "@chakra-ui/react";

import Logo from "../../assets/mainlogo.png";

export default function Footer() {
  return (
    <>
      <Container
        paddingTop={"80px"}
        paddingX={{
          base: "32px",
          md: "64px",
          xl: "0px",
        }}
        maxW={{
          xl: "1100px",
          "2xl": "1440px",
        }}
        margin={"auto"}
      >
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            md: "repeat(3, 1fr)",
          }}
          gap={"80px"}
        >
          <GridItem>
            <Flex direction={"column"} gap={"2"} fontSize={"18px"}>
              <Image src={Logo} alt={"Logo"} h="80px" w="280px" />
              <Heading
                as={"p"}
                fontSize={"24px"}
                color={"white"}
                fontWeight={"600"}
              >
                Prime College, Nayabazaar
              </Heading>
              <Heading
                as={"p"}
                fontSize={"24px"}
                color={"white"}
                fontWeight={"500"}
              >
                Kathmandu, Nepal
              </Heading>
              <Flex
                gap={"10px"}
                direction={{
                  sm: "column",
                  lg: "row",
                }}
              >
                <Image src={PrimeItClub} alt={"Logo"} h="70px" w="170px" />

                <Image src={PrimeCollege} alt={"Logo"} h="70px" w="170px" />
              </Flex>
            </Flex>
          </GridItem>

          <GridItem>
            <Flex direction={"column"} gap={"4"}>
              <Heading variant={"h5"} fontFamily={"heading"}>
                SUBSCRIBE
              </Heading>
              <Text variant={"body"} color={"white"} fontSize={"22px"}>
                Join our newsletter to stay up to date on features and releases.
              </Text>
              <Flex align={"center"} gap={"8px"}>
                <Input
                  padding={"12px"}
                  flex={"1"}
                  borderRadius={"13px"}
                  border={"1px solid var(--blue-gradient, #2C48D8)"}
                  background={"rgba(13, 13, 13, 0.20)"}
                  placeholder={"Enter your email"}
                />

                <Button
                  color={"white"}
                  padding={"12px 24px"}
                  borderRadius={"13px"}
                  border={"1px solid var(--blue-gradient, #2C48D8)"}
                >
                  Subscribe
                </Button>
              </Flex>

              <Text variant={"body"} color={"white"} fontSize={"20px"}>
                By subscribing you agree to with our Privacy Policy and provide
                consent to receive updates from our company.
              </Text>
            </Flex>
          </GridItem>

          <GridItem>
            <Flex
              align={{
                base: "flex-start",
                md: "flex-end",
              }}
              direction={"column"}
              gap={"4"}
            >
              <Heading variant={"h5"}>Follow Us</Heading>
              <Flex gap={"20px"} direction={"column"} fontSize={"18px"}>
                <Link
                  to={"https://www.facebook.com/primeitclub"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Flex gap={"4"}>
                    <FaFacebook size={24} color={"white"} />
                    <Text color={"white"} fontWeight={"600"}>
                      Facebook
                    </Text>
                  </Flex>
                </Link>

                {/* LinkedIn */}
                <Link
                  to={"https://www.linkedin.com/company/prime-it-club/"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Flex gap={"4"}>
                    <FaLinkedinIn size={24} color={"white"} />
                    <Text color={"white"} fontWeight={"600"}>
                      LinkedIn
                    </Text>
                  </Flex>
                </Link>

                {/* Twitter */}
                <Link
                  to={"https://twitter.com/primeitclub"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Flex gap={"4"}>
                    <FaTwitter size={24} color={"white"} />
                    <Text color={"white"} fontWeight={"600"}>
                      Twitter
                    </Text>
                  </Flex>
                </Link>

                {/* Instagram */}
                <Link
                  to={"https://instagram.com/primeitclub"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Flex gap={"4"}>
                    <FaInstagram size={24} color={"white"} />
                    <Text color={"white"} fontWeight={"600"}>
                      Instagram
                    </Text>
                  </Flex>
                </Link>

                {/* YouTube */}
                <Link
                  to={"https://www.youtube.com/@primeitclub"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Flex gap={"4"}>
                    <FaYoutube size={24} color={"white"} />
                    <Text color={"white"} fontWeight={"600"}>
                      YouTube
                    </Text>
                  </Flex>
                </Link>
              </Flex>
            </Flex>
          </GridItem>
        </Grid>

        <Flex
          justifyContent={"center"}
          alignItems={"center"}
          marginY={"80px"}
          borderTop={"1px solid white"}
        >
          <Text variant={"body"} color={"white"} fontSize={"24px"} mt={"20px"}>
            © Prime IT Club. All rights reserved.
          </Text>
        </Flex>
      </Container>
    </>
  );
}
