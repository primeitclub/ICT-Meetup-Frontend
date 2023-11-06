import Logo from "../../assets/mainlogo.png";
import { Image, Flex, Button, HStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const data = [
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
  {
    label: "FAQ",
    link: "/faq",
  },
];

export default function Navbar() {
  return (
    <header>
      <Flex
        w="100%"
        py="5"
        align="center"
        justify="space-between"
        textColor={"white"}
        fontFamily={"body"}
        fontSize={"24px"}
      >
        <Image src={Logo} h="50px" />
        <HStack
          as="nav"
          spacing="8"
          display={{
            base: "none",
            lg: "flex",
          }}
        >
          {data.map((item, i) => (
            <Link key={i} to={item.link}>
              <Button> {item.label} </Button>
            </Link>
          ))}
        </HStack>
        <HStack spacing={5}>
          <Button>
            <Link to="/login">Login</Link>
          </Button>
          <Button>
            <Link to="/register">Register</Link>
          </Button>
        </HStack>
      </Flex>
    </header>
  );
}
