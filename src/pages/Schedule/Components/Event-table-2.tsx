import * as React from "react";

import { Box, Container, Table, Tbody, Td, Tr } from "@chakra-ui/react";

const ScheduleTableDayTwo: React.FC = () => {
  return (
    <Container
      className="schedule"
      maxW={{
        xl: "1400px",
      }}
      marginX={"auto"}
      overflowX={"auto"}
      color={"white"}
      fontSize={{
        base: "18px",
        md: "28px",
      }}
    >
      <Box overflowX="auto">
        <Table colorScheme="teal">
          <Tbody>
            {/* Row for 9-10 AM */}
            <Tr fontWeight={"700"}>
              <Td rowSpan={9}>Day 2</Td>
              <Td>9-10 AM</Td>
              <Td>10-11 AM</Td>
              <Td>11-12 PM</Td>
              <Td>12-1 PM</Td>
              <Td>1-2 PM</Td>
              <Td>2-3 PM</Td>
              <Td>3-4 PM</Td>
              <Td>4-5 PM</Td>
            </Tr>

            <Tr>
              <Td
                style={{
                  backgroundColor: "#7262af",
                }}
              >
                Session 2(AI)
              </Td>
              <Td></Td>
              <Td
                colSpan={5}
                style={{
                  backgroundColor: "#34aC81",
                }}
              >
                Workshop 3(Natural Language Processing)
              </Td>
            </Tr>
            <Tr>
              <Td></Td>
              <Td></Td>
              <Td
                colSpan={2}
                style={{
                  backgroundColor: "#0f4c81",
                }}
              >
                Workshop 4(Data Science)
              </Td>
            </Tr>

            <Tr>
              <Td></Td>
              <Td></Td>
              <Td></Td>
              <Td
                colSpan={2}
                style={{
                  backgroundColor: "#0F4C81",
                }}
              >
                Project Demo (Judging round)
              </Td>
              <Td></Td>
              <Td></Td>
              <Td></Td>
            </Tr>

            <Tr>
              <Td
                colSpan={6}
                style={{
                  backgroundColor: "#7262af",
                }}
              >
                Esports
              </Td>
              <Td></Td>
              <Td></Td>
            </Tr>

            <Tr>
              <Td></Td>
              <Td
                style={{
                  backgroundColor: "#34aC81",
                }}
              >
                Session 3 (Game Dev)
              </Td>
              <Td
                colSpan={3}
                style={{
                  backgroundColor: "#7262af",
                }}
              >
                Graphic Design Competition
              </Td>
            </Tr>

            <Tr>
              <Td colSpan={6}></Td>
              <Td
                style={{
                  backgroundColor: "#34aC81",
                }}
              >
                Certificate Distribution
              </Td>
              <Td
                style={{
                  backgroundColor: "#7262af",
                }}
              >
                Musical Night
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </Box>
    </Container>
  );
};

export default ScheduleTableDayTwo;
