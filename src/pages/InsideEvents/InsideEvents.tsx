import { Flex, Box, Text, Button, Image, Link, Container } from '@chakra-ui/react';
import { CiLocationOn } from 'react-icons/ci';
import { AiOutlineCalendar } from 'react-icons/ai';
import insideevents from '../../assets/insideevents.jpeg';
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';
import speakerImage from '../../assets/speakerImage.jpeg';
import speakerMic from '../../assets/speaker-card-mic.svg';
import { useParams } from 'react-router-dom';
const data = [
 {
  title: 'Research Paper Reading',
  location: 'Seminar Hall, 3rd Floor',
  date: 'Dec 25, 2023',
  time: '10:00 AM - 11:00 AM'
 }
];

const speakerData = {
 name: 'Susit Ratna Tuladharr',
 role: 'Guest Speaker',
 description:
  'Mr. Guest Speaker is a veteran UI/UX designer with 2+ years of experience. He has created numerous designs and published his designs.',
 image: speakerImage,
 facebook: 'https://www.facebook.com/susitratnatuladharr',
 twitter: 'https://www.facebook.com/susitratnatuladharr',
 linkedin: 'https://www.facebook.com/susitratnatuladharr'
};

const InsideEvents = () => {

    const {slug} = useParams<{slug:string}>();

    console.log(slug);

 return (
  <Container display={'flex'} alignItems={'center'} flexDirection={'column'}>
   <Box
    backgroundImage={`url(${insideevents})`}
    backgroundSize="cover"
    backgroundRepeat="no-repeat"
    width="100%"
    height="50vh"></Box>

   {data.map((event, index) => (
    <Container
     maxW={{ base: 'container.sm', lg: 'container.lg' }}
     paddingY={{ base: '32px', lg: '64px' }}>
     <Flex justifyContent={'center'} key={index}>
      <Text
       mb={'32px'}
       variant={'section-header'}
       color={'#2C84EC'}
       fontFamily={'heading'}
       fontSize={{ base: '24px', lg: '48px' }}
       fontStyle={'normal'}
       fontWeight={'700'}
       letterSpacing={'0.96px'}
       textTransform={'uppercase'}>
       {event.title}
      </Text>
     </Flex>
     <Flex
      gap={'24px'}
      color={'#FFF'}
      paddingBottom={'16px'}
      fontSize={{ base: '18px', lg: '24px' }}
      fontWeight={'400'}
      lineHeight={'1.5rem'}>
      <CiLocationOn size={'32px'} />
      <Text>{event.location}</Text>
     </Flex>
     <Flex
      justifyContent={'space-between'}
      color={'#FFF'}
      fontSize={{ base: '18px', lg: '24px' }}
      fontWeight={'400'}
      direction={['column', 'row']}>
      <Flex gap={'24px'}>
       <AiOutlineCalendar size={'32px'} />
       <Flex direction={'column'}>
        <Text gap="" lineHeight={'1.5rem'}>
         {event.date}
        </Text>
        <Text>{event.time}</Text>
       </Flex>
      </Flex>
      <Button
       variant="primary-button"
       padding={{
        base: '10px 30px',
        lg: '10px 50px'
       }}
       width={['95%', 'fit-content']}
       rounded="0"
       marginX={'5px'}
       marginY={['10px', '0']}
       marginTop={'14px'}
       gap={2}>
       Register Now
      </Button>
     </Flex>

     <Box
      marginTop={'4rem'}
      borderRadius="24px"
      bg="var(--radial, radial-gradient(148.96% 84.61% at 14.83% 40.07%, #040E2C 0%, rgba(0, 0, 0, 0.80) 29.04%, rgba(4, 14, 44, 0.80) 69.88%, rgba(0, 0, 0, 0.80) 100%))"
      boxShadow="0px 8px 10px 0px rgba(255, 255, 255, 0.04), 0px 6px 30px 0px rgba(255, 255, 255, 0.02), 0px 16px 24px 0px rgba(255, 255, 255, 0.03)"
      color="#FFF"
      padding="16px"
      maxWidth={'container.lg'}
      borderBottom="10px solid rgb(18, 96, 168)"
      backgroundImage={speakerMic}
      backgroundRepeat="no-repeat"
      backgroundPosition="right">
      <Flex
       justifyContent={'space-between'}
       width={'100%'}
       direction={['column', 'row']}
       gap={['25px', '0']}
       paddingBottom={['20px', '0']}
       paddingX={['5px', '0']}>
       <Image
        src={speakerData.image}
        alt={speakerData.name}
        borderRadius="full"
        boxSize={'150px'}
        objectFit={'cover'}
        mr="8"
       />

       <Box>
        <Text fontSize={'24px'} fontWeight={'600'}>
         {speakerData.name}
        </Text>
        <Text
         fontSize={['16px', '18px']}
         fontWeight={'400'}
         fontStyle={'italic'}
         padding={'5px 0px 12px'}>
         {speakerData.role}
        </Text>
        <Text fontSize={'18px'} fontWeight={'400'}>
         {speakerData.description}
        </Text>
       </Box>
       <Box display={'flex'} fontSize={'24px'} gap={'3'}>
        {speakerData.facebook && (
         <Link href={speakerData.facebook} isExternal>
          <FaFacebook /> {/* Facebook icon */}
         </Link>
        )}
        {speakerData.linkedin && (
         <Link href={speakerData.linkedin} isExternal>
          <FaLinkedin /> {/* LinkedIn icon */}
         </Link>
        )}
        {speakerData.twitter && (
         <Link href={speakerData.twitter} isExternal>
          <FaTwitter /> {/* Twitter icon */}
         </Link>
        )}
       </Box>
      </Flex>
     </Box>
     <Box marginTop={'64px'}>
      <Text
       fontFamily={'heading'}
       fontSize={['24px', '32px']}
       textShadow={'0px 4px 4px rgba(0, 0, 0, 0.25)'}
       letterSpacing={'0.64px'}
       fontWeight={'700'}
       lineHeight={'40px'}
       textTransform={'uppercase'}
       background={
        'var(--blue-gradient, linear-gradient(93deg, #2C48D8 1.3%, #2C84EC 52.07%, #2C51D4 96.13%))'
       }
       backgroundClip={'text'}>
       Introduction
      </Text>
      <Text mt={'15px'} color={'#FFF'} fontSize={'18px'}>
       Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat mollis at volutpat lectus
       velit, sed auctor. Porttitor fames arcu quis fusce augue enim. Quis at habitant diam at.
       Suscipit tristique risus, at donec. In turpis vel et quam imperdiet. Ipsum molestie aliquet
       sodales id est ac volutpat.
      </Text>
      <Text mt={'15px'} color={'#FFF'} fontSize={'18px'}>
       Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat mollis at volutpat lectus
       velit, sed auctor. Porttitor fames arcu quis fusce augue enim. Quis at habitant diam at.
       Suscipit tristique risus, at donec. In turpis vel et quam imperdiet. Ipsum molestie aliquet
       sodales id est ac volutpat.
      </Text>
     </Box>
     <Box marginTop={'64px'}>
      <Text
       fontFamily={'heading'}
       fontSize={'32px'}
       textShadow={'0px 4px 4px rgba(0, 0, 0, 0.25)'}
       letterSpacing={'0.64px'}
       fontWeight={'700'}
       lineHeight={'40px'}
       textTransform={'uppercase'}
       background={
        'var(--blue-gradient, linear-gradient(93deg, #2C48D8 1.3%, #2C84EC 52.07%, #2C51D4 96.13%))'
       }
       backgroundClip={'text'}>
       Conclusion
      </Text>
      <Text mt={'15px'} color={'#FFF'} fontSize={'18px'}>
       Morbi sed imperdiet in ipsum, adipiscing elit dui lectus. Tellus id scelerisque est ultricies
       ultricies. Duis est sit sed leo nisl, blandit elit sagittis. Quisque tristique consequat quam
       sed. Nisl at scelerisque amet nulla purus.
      </Text>
      <Text mt={'15px'} color={'#FFF'} fontSize={'18px'}>
       Morbi sed imperdiet in ipsum, adipiscing elit dui lectus. Tellus id scelerisque est ultricies
       ultricies. Duis est sit sed leo nisl, blandit elit sagittis. Quisque tristique consequat quam
       sed. Nisl at scelerisque amet nulla purus.
      </Text>
     </Box>
    </Container>
   ))}
  </Container>
 );
};

export default InsideEvents;
