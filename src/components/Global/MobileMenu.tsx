import { useEffect, useState } from "react";

import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";

import { Box, Button, CloseButton, Flex, Image, Text } from "@chakra-ui/react";

import Logo from "../../assets/mainlogo.png";

const Navlinks = [
  {
    label: "About",
    link: "/about",
  },
  {
    label: "Events",
    link: "/events",
  },
  {
    label: "Schedule",
    link: "/schedule",
  },
  {
    label: "Teams",
    link: "/teams",
  },
  {
    label: "Gallery",
    link: "/gallery",
  },
];

export default function MobileMenu() {
  const [nav, setNav] = useState<Boolean>(false);
  //close nav when the route changes

  const handleNav = (): void => {
    setNav(true);
  };

  const closeNav = (): void => {
    setNav(false);
  };

  useEffect(() => {
    if (nav) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [nav]);

  return (
    <>
      <Box
        className="navbar"
        display={{ base: "block", lg: "none" }}
        width={"full"}
        paddingX={{
          base: "32px",
          md: "64px",
        }}
        paddingY={"5"}
      >
        <Flex align="center" justifyContent={"space-between"} width={"100%"}>
          <Box>
            <Link to="/">
              <Image src={Logo} alt="logo" boxSize="12" width={"150px"} />
            </Link>
          </Box>

          <Box>
            <Button className="navbar-open" onClick={handleNav}>
              <RxHamburgerMenu
                color="white"
                style={{
                  fontSize: "28px",
                }}
              />
            </Button>
          </Box>
        </Flex>
      </Box>

      <Box
        top={"0"}
        bottom={"0"}
        right={"0"}
        zIndex={nav ? "101" : "-100"}
        height={"100vh"}
        position={"fixed"}
        left={nav ? "0" : "100%"}
        backgroundColor={
          "var(--bg, radial-gradient(132.21% 68.86% at 43.76% 52.23%, #040E2C 0.47%, #000 100%));"
        }
        paddingX={{
          base: "32px",
          md: "64px",
        }}
        color={"white"}
        paddingY={"5"}
        transition={"all 0.5s ease-in-out"}
      >
        <Flex justifyContent={"space-between"} alignItems={"center"}>
          <Box>
            <Link to="/">
              <Image src={Logo} alt="logo" boxSize="12" width={"150px"} />
            </Link>
          </Box>

          <Box>
            <Button className="navbar-close" onClick={closeNav}>
              <CloseButton color="white" />
            </Button>
          </Box>
        </Flex>

        <Flex
          width={"full"}
          direction={"column"}
          align={"end"}
          height={"full"}
          marginTop={"30%"}
          borderTop={"2px solid #14134C;"}
        >
          {Navlinks.map((item, i) => (
            <Box
              key={i}
              paddingY={"16px"}
              borderBottom={"2px solid #14134C"}
              width={"full"}
              textAlign={"right"}
            >
              <Link to={item.link} onClick={closeNav}>
                <Text color={"white"} fontSize={"24px"} fontWeight={"500"}>
                  {item.label}
                </Text>
              </Link>
            </Box>
          ))}
        </Flex>
      </Box>
    </>
  );
}
