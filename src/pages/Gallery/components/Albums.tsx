import {
 Box,
 Image,
 Flex,
 Text,
 chakra,
 shouldForwardProp
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import ImafeDmo from '../../../assets/susit.png';
import { motion, isValidMotionProp, Transition } from 'framer-motion';


export enum ictVerson {

    ictV4 = "ICT MEETUP V4",
    ictV5 = "ICT MEETUP V5", 
    ictV6 = "ICT MEETUP V6", 

}


function Albums() {
 const styleAlbum = {
  clipPath: 'polygon(10% 0, 100% 0, 100% 89%, 89% 100%, 27% 100%, 0 100%, 0 10%)',
  height: { lg:'316px' ,sm:'300px',base:'300px' },
  width: { lg:'280px' ,md:'260px',sm:'100%',base:'100%' },
  background: 'white'
 };

 const textAlbum = {
  textAlign: 'center',
  fontFamily: 'Syncopate',
  fontSize: { lg:'18px',md:'16px',base:'16px' },
  fontStyle: 'normal',
  fontWeight: '700',
  lineHeight: '28px',
  letterSpacing: '0.72px,',
  textTransform: 'uppercase',
  color: '#189EFF '
 };

 const cardAlbum = {
  border: '3px solid #162b74',
  padding: { lg:4,sm:3,base:2 },
  backgroundBlendMode: 'lighten',
  position: 'relative',
  transition: '0.3s ease-in',
  '&:hover': {
   border: '3px solid #2C84EC',
   cursor: 'pointer',
   transition: '0.1s ease-in',
   background: 'rgba(8, 26, 78, 0.6)'
  }
 };

 //  framer motion
 const MotionBox = chakra(motion.div, {
  shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop)
 });

 const customeTranstion: Transition = {
  duration: '0.1',
  ease: 'easein',
  type: 'spring',
  stiffness: 100,
  damping: 15
 };


 const hoverTranstion :Transition  = {
    duration: '0.2',
  ease: 'easein',
  type: 'spring',
  stiffness: 240,
 }
 

 

 return (
  <>
   <Box width={{ lg: '80%',sm:'90%',base:'90%' }} margin={'auto'} py={8}>
    <MotionBox initial={{ y: 100 }} animate={{ y: 0 }} transition={customeTranstion}>
     <Flex
         wrap={'wrap'}
      justifyContent={'space-around'}
      direction={{ md: 'row', sm: 'row', base: 'column' }}
      gap={10}
      className="all_albums">

      <motion.div
      whileHover={ { y:-30,transition:hoverTranstion } }
      whileTap={{ scale: 0.5 }}
      >
      <Link to={'ictV4'}>
       <Box sx={cardAlbum} className="single_card_album">
        <Flex direction={'column'} gap={5}>
         <Box sx={styleAlbum} className="single_album_image">
          <Image height={'100%'} width={'100%'} objectFit={'cover'} src={ImafeDmo} />
         </Box>
         <Box className="single_album_text">
          <Text sx={textAlbum}>ICT MEETUP V4</Text>
         </Box>
        </Flex>
       </Box>
      </Link>
      </motion.div>

      <motion.div
      whileHover={ { y:-30,transition:hoverTranstion } }
      whileTap={{ scale: 0.5 }}
      >
      <Link to={'ictV5'}>
       <Box sx={cardAlbum} className="single_card_album">
        <Flex direction={'column'} gap={5}>
         <Box sx={styleAlbum} className="single_album_image">
          <Image height={'100%'} width={'100%'} objectFit={'cover'} src={ImafeDmo} />
         </Box>
         <Box className="single_album_text">
          <Text sx={textAlbum}>ICT MEETUP V4</Text>
         </Box>
        </Flex>
       </Box>
      </Link>
      </motion.div>

      <motion.div
      whileHover={ { y:-30,transition:hoverTranstion } }
      whileTap={{ scale: 0.5 }}
      >
      <Link to={'ictV6'}>
       <Box sx={cardAlbum} className="single_card_album">
        <Flex direction={'column'} gap={5}>
         <Box sx={styleAlbum} className="single_album_image">
          <Image height={'100%'} width={'100%'} objectFit={'cover'} src={ImafeDmo} />
         </Box>
         <Box className="single_album_text">
          <Text sx={textAlbum}>ICT MEETUP V4</Text>
         </Box>
        </Flex>
       </Box>
      </Link>
      </motion.div>

     </Flex>
    </MotionBox>
   </Box>
  </>
 );
}

export default Albums;

