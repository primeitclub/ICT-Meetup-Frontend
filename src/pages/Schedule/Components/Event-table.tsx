import * as React from "react";

import { Box, Container, Table, Tbody, Td, Tr } from "@chakra-ui/react";

const ScheduleTable: React.FC = () => {
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
        <Table>
          <Tbody>
            {/* Row for 9-10 AM */}
            <Tr fontWeight={"700"}>
              <Td rowSpan={9}>Day 1</Td>
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
                Inauguration
              </Td>
              <Td
                colSpan={2}
                style={{
                  backgroundColor: "#0F4C81",
                }}
              >
                Panel Discussion
              </Td>
              <Td></Td>
              <Td
                colSpan={2}
                style={{
                  backgroundColor: "#34aC81",
                }}
              >
                Workshop 2(Prompt Engineering)
              </Td>
              <Td></Td>
              <Td></Td>
            </Tr>
            <Tr>
              <Td></Td>
              <Td></Td>
              <Td></Td>
              <Td></Td>
              <Td
                colSpan={4}
                style={{
                  backgroundColor: "#7262af",
                }}
              >
                Workshop 1(Computer Vision)
              </Td>
            </Tr>

            <Tr>
              <Td></Td>
              <Td></Td>
              <Td></Td>
              <Td
                style={{
                  backgroundColor: "#0F4C81",
                }}
              >
                Session 1 (Research Paper Reading)
              </Td>
              <Td></Td>
              <Td></Td>
              <Td></Td>
              <Td></Td>
            </Tr>

            <Tr>
              <Td></Td>
              <Td
                colSpan={4}
                style={{
                  backgroundColor: "#34aC81",
                }}
              >
                Project Demo
              </Td>
            </Tr>

            <Tr>
              <Td></Td>
              <Td></Td>
              <Td
                colSpan={2}
                style={{
                  backgroundColor: "#7262af",
                }}
              >
                Project Demo
              </Td>
            </Tr>
            <Tr>
              <Td></Td>
              <Td
                colSpan={6}
                style={{
                  backgroundColor: "#34aC81",
                }}
              >
                Esports
              </Td>
              <Td></Td>
            </Tr>
          </Tbody>
        </Table>
      </Box>
    </Container>
  );
};

export default ScheduleTable;
