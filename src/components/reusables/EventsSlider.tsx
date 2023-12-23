import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { Box, Button, Flex, Text } from "@chakra-ui/react";

import EventSlide from "../ui/EventSlide";

// demo data 
import eventdata from "../ui/eventSlideData.json";

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
          <Swiper
            modules={[Pagination, Navigation]}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            slidesPerView={1}
          >
            { eventdata.map( (item:any,index:number)=>(
              <SwiperSlide key={index} >
              <EventSlide eventData ={item} number={index} />
            </SwiperSlide>
            ) ) }
        

            <Box className="swiper-button-next" mr={{md:10,base:0}} color={"white"}></Box>
            <Box className="swiper-button-prev" display={{md:"block",base:"none"}} color={"white"}></Box>
          </Swiper>

          <Box
            margin={"auto"}
            maxW={{
              base: "80%",
            }}
          >
            <Button
              display={{
                base: "none",
                md: "block",
              }}
              marginTop={10}
              paddingY={5}
              variant="outlined-button"
              width={"fit-"}
              rounded={"full"}
            >
              <Text fontWeight="bold" fontSize="18px" color="white">
                REGISTER AT OUR EVENTS PAGE
              </Text>
            </Button>
          </Box>
        </Box>
      </Flex>
    </>
  );
}
