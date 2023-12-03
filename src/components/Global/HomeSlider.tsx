import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';

import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import SingleImage from '../../assets/susit.png';
import SpeakerCards from '../reusables/SpeakerCards';

export default function HomeSwiper() {
  return (
    <>
      <Swiper
        modules={[Pagination, Navigation]}
        spaceBetween={50}
        slidesPerView={3}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          780: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          990: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
      >
        <SwiperSlide>
          <SpeakerCards name='Susit' image={SingleImage} speakerSpeciality='Ui Ux Designer' />
        </SwiperSlide>
        <SwiperSlide>
          <SpeakerCards name='Susit' image={SingleImage} speakerSpeciality='Ui Ux Designer' />
        </SwiperSlide>

        <SwiperSlide>
          <SpeakerCards name='Susit' image={SingleImage} speakerSpeciality='Ui Ux Designer' />
        </SwiperSlide>
        <SwiperSlide>
          <SpeakerCards name='Susit' image={SingleImage} speakerSpeciality='Ui Ux Designer' />
        </SwiperSlide>
        <SwiperSlide>
          <SpeakerCards name='Susit' image={SingleImage} speakerSpeciality='Ui Ux Designer' />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
