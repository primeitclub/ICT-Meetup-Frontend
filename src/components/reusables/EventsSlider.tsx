import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { Box, Flex } from "@chakra-ui/react";

import EventSlide from "../ui/EventSlide";

export default function EventSlider() {
  return (
    <>
      <Flex
        justify={"flex-end"}
        align={"end"}
        marginTop={{
          base: "32px",
          md: "0px",
        }}
        paddingX={{
          base: "32px",
          md: "0px",
        }}
        width={{
          base: "100%",
          md: "50%",
        }}
      >
        <Box
          maxW={{
            base: "100%",
            xl: "750px",
          }}
        >
          <Swiper modules={[Pagination, Navigation]} slidesPerView={1}>
            <SwiperSlide>
              <EventSlide />
            </SwiperSlide>
            <SwiperSlide>
              <EventSlide />
            </SwiperSlide>
          </Swiper>
        </Box>
      </Flex>
    </>
  );
}
