import SingleImage from '../../../assets/susit.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Grid, Pagination, Navigation } from 'swiper/modules';
import { Box } from '@chakra-ui/layout';
import { Image, Flex } from '@chakra-ui/react';
import { DataTypeTeam } from '../DataSchema/Data';

import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';

interface TeamProps {
 TeamData: DataTypeTeam[];
}

function SliderGroup({ TeamData }: TeamProps) {
 return (
  <>
   <Swiper
    grid={{
     rows: 2
    }}
    autoplay={{
     delay: 2000,
     disableOnInteraction: false
    }}
    navigation={true}
    breakpoints={{
     300: {
      slidesPerView: 2
     },
     640: {
      slidesPerView: 2
     },
     1100: {
      slidesPerView: 3
     },
     1300: {
      slidesPerView: 5
     }
    }}
    spaceBetween={30}
    pagination={{
     clickable: true
    }}
    modules={[Autoplay, Grid, Pagination]}
    className="mySwiper">
    {TeamData?.map((item) => (
     <SwiperSlide>
      <Flex h={'100%'} direction={'column'} className="single_team">
       <Box className="image_wraper" h={'85%'}>
        <Image
         borderTopLeftRadius={'8px'}
         borderTopRightRadius={'8px'}
         h={'100%'}
         w={'100%'}
         objectFit={'cover'}
         src={item.image}
        />
       </Box>
       <Box
        borderBottomLeftRadius={'8px'}
        borderBottomRightRadius={'8px'}
        display={'flex'}
        alignItems={'center'}
        justifyContent={'center'}
        color={'white'}
        h={'15%'}
        bg={'#061532'}
        fontFamily={'Syncopate'}
        fontWeight={700}
        className="single_team_name"
        letterSpacing={'.2px'}>
        {item.name}
       </Box>
      </Flex>
     </SwiperSlide>
    ))}
   </Swiper>
  </>
 );
}

export default SliderGroup;
