import { useState } from "react";

import { isValidMotionProp, motion, Transition } from "framer-motion";

import {
  Box,
  chakra,
  shouldForwardProp,
  Tab,
  TabList,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";

import ScheduleTable from "./Event-table";
import ScheduleTableDayTwo from "./Event-table-2";

function TabContent() {
  //@ts-ignore
  const [activeTab, setActiveTab] = useState(0);

  //  framer motion

  const BoxSchedule = chakra(motion.div, {
    shouldForwardProp: (prop) =>
      isValidMotionProp(prop) || shouldForwardProp(prop),
  });

  const customeTranstion: Transition = {
    duration: "0.3",
    ease: "easeOut",
    type: "spring",
    stiffness: 200,
    damping: 15,
  };

  //  store object array

  return (
    <>
      <Tabs onChange={(index) => setActiveTab(index)}>
        <Box
          pb={"48px"}
          className="tab_list_wrpa"
          width={"fit-content"}
          margin={"auto"}
        >
          <TabList
            gap={2}
            fontSize={{ lg: "24px", sm: "20px", base: "20px" }}
            fontWeight={600}
            color={"white"}
            lineHeight={"150%"}
          >
            <Tab
              p={"16px 20px"}
              border={"2px solid transparent"}
              _selected={{ border: "2px solid #0055D5", fontWeight: 600 }}
            >
              Jan 8
            </Tab>

            <Tab
              p={"16px 20px"}
              border={"2px solid transparent"}
              _selected={{ border: "2px solid #0055D5", fontWeight: 600 }}
            >
              Jan 9
            </Tab>
          </TabList>
        </Box>

        <TabPanels
          className="tab_custome"
          maxW={{
            base: "90%",
            lg: "100%",
          }}
          margin={"auto"}
          overflow={"hidden"}
        >
          <BoxSchedule
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={customeTranstion}
          >
            {activeTab === 0 ? <ScheduleTable /> : <ScheduleTableDayTwo />}
          </BoxSchedule>
        </TabPanels>
      </Tabs>
    </>
  );
}

export default TabContent;
