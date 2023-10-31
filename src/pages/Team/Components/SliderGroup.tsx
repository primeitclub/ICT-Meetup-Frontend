import SingleImage from '../../../assets/dummyBoy.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid, Pagination } from 'swiper/modules';
import { Box } from '@chakra-ui/layout';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/grid';

function SliderGroup() {



    return (   <>
       <Swiper
    //    slidesPerView={5}
        pagination= {{
            el: '.swiper-custom-pagination',
          }}
          loop ={true}
      
        grid={{
            rows: 2,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1000: {
              slidesPerView: 3
            },
            1300: {
              slidesPerView: 5
            }
          }}
          modules={[ Pagination , Grid]}
         className="mySwiper">
            
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
       
      </Swiper>
      <Box w={'fit-content'} display={'flex'} justifyContent={'center'} gap={2} pt={10}  margin={'auto'} className="swiper-custom-pagination"/>
      </>);
}

export default SliderGroup;