import { AiOutlineEdit } from "react-icons/ai";
import { MdDeleteOutline } from "react-icons/md";
import { Link } from "react-router-dom";

import { Flex, Td, Text, Tr } from "@chakra-ui/react";

const EventRow = ({ item }: { item: any }) => {
  return (
    <Tr
      borderBottom={"1px solid #f2f2f2"}
      color={"gray.600"}
      fontSize={"0.99rem"}
    >
      <Td p={4} borderStyle={"solid"}>
        {item.eventTitle}
      </Td>
      <Td p={4}>
        <Text fontWeight={"bold"}>{item.eventCategory}</Text>
      </Td>
      <Td p={4}>{item.eventSpeaker}</Td>
      <Td p={4}>{item.eventDate}</Td>
      <Td p={4}>{item.eventTime}</Td>
      <Td p={4}>{item.eventSeat}</Td>
      <Td p={4}>
        <Flex fontSize={"22px"} justifyContent={"space-around"}>
          <Link to="/">
            <AiOutlineEdit />
          </Link>
          <Link to="/">
            <MdDeleteOutline />
          </Link>
        </Flex>
      </Td>
    </Tr>
  );
};

export default EventRow;
