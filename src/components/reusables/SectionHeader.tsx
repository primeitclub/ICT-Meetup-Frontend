import { Heading, Flex } from "@chakra-ui/react";

type HeaderProps = {
  title: string;
};

export default function SectionHeader(props: HeaderProps) {
  return (
    <>
      <Flex align={"center"}>
        <div
          style={{
            width: "234px",
            height: "2px",
            background: "white",
            marginRight: "20px",
          }}
        ></div>
        <Heading variant={"section-header"} fontFamily={"heading"}>
          {props.title}
          <span
            style={{
              color: "#E76028",
            }}
          >
            .
          </span>
        </Heading>
      </Flex>
    </>
  );
}
