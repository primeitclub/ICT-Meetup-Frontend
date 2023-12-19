import { AiOutlineEdit } from "react-icons/ai";
import { MdDeleteOutline } from "react-icons/md";
import { Link } from "react-router-dom";


import { Flex, Td, Text, Tr } from "@chakra-ui/react";
import { EventApiProps } from "../AdminAllEvent";



const EventRow = ({ item }: { item: EventApiProps }) => {
  return (
    <Tr
      borderBottom={"1px solid #f2f2f2"}
      color={"gray.600"}
      fontSize={"0.99rem"}
    >
      <Td p={4} borderStyle={"solid"}>
        {item.title}
      </Td>
      <Td p={4}>
        <Text fontWeight={"bold"}>{item.eventType}</Text>
      </Td>
      <Td p={4}>JHON DOE</Td>
      <Td p={4}>{item.eventDate}</Td>
      <Td p={4}>{item.startTime}</Td>
      <Td p={4}>{item.totalSeats}</Td>
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
