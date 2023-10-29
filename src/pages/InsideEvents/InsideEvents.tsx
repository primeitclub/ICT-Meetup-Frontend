
import { Flex, Box, Text, VStack, Button, Image ,HStack,Link, Spacer, Container} from '@chakra-ui/react';
import { CiLocationOn } from 'react-icons/ci';
import { AiOutlineCalendar } from 'react-icons/ai';
import insideevents from '../../assets/insideevents.jpeg';
import { FaFacebook, FaLinkedin ,FaTwitter} from 'react-icons/fa'; 
import speakerImage from '../../assets/speakerImage.jpeg'
const data = [
  {
    title: 'Research Paper Reading',
    location: 'Seminar Hall, 3rd Floor',
    date: 'Dec 25, 2023',
    time: '10:00 AM - 11:00 AM',
  },
];

const speakerData = {
  name: 'Susit Ratna Tuladharr',
  role: 'Guest Speaker',
  description: 'Mr. Guest Speaker is a veteran UI/UX designer with 2+ years of experience. He has created numerous designs and published his designs.',
  image: speakerImage,
  facebook:'https://www.facebook.com/susitratnatuladharr',
  twitter:'https://www.facebook.com/susitratnatuladharr',
  linkedin:'https://www.facebook.com/susitratnatuladharr'
};

const InsideEvents = () => {
  return (
    <>
     <Box
          backgroundImage={`url(${insideevents})`}
          backgroundSize="cover"
          backgroundRepeat="no-repeat"
          width="100%"
          height="50vh"
        ></Box>
      <Flex flexDirection="column" justifyContent="center" alignItems={'center'} >
        <Flex paddingY={'64px'} justifyContent="center">
          {data.map((event, index) => (
            <Flex key={index} alignItems="center" justifyContent="space-between">
              <VStack alignItems="start" color={'white'} fontSize={'20px'}>
                <Text variant={'section-header'}>{event.title}</Text>
                <Flex alignItems="center" gap={'10px'} paddingTop={'32px'} >
                  <CiLocationOn />
                  <Text >{event.location}</Text>
                </Flex>
                <Flex alignItems="center" gap={'10px'} paddingTop={'16px'} >
                  <AiOutlineCalendar />
                  <Text>{event.date}</Text>
                </Flex>
                <Text> {event.time}</Text>
              </VStack>
              
              <Button
                variant="primary-button"
                padding={{
                  base: '10px 30px',
                  lg: '10px 50px',
                }}
                width="fit-content"
                rounded="0"
                gap={2}
              >
                <span>Register Now</span>
              </Button>
            </Flex>
          ))}
        </Flex>
        <Box
        className='speaker-card'>
      <Image
        src={speakerData.image}
        alt={speakerData.name}
        borderRadius="50%"
        height={"150px"}
        width={"300px"}
        objectFit={'cover'}
        // boxSize="150px"
        mr="8"
      />

      <VStack align="start" spacing="1">
        <Text fontSize={'24px'} fontWeight={'600'} >{speakerData.name}</Text>
        <Text fontSize={'14px'} fontWeight={'400'} fontStyle={'italic'}>{speakerData.role}</Text>
        <Spacer/>
        <Text fontSize={'18px'} fontWeight={'400'}>{speakerData.description}</Text>
      </VStack>

      <HStack ml="auto" spacing="2" fontSize={'20px'}>
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
      </HStack>
    </Box>
    <Container marginTop={'64px'} maxWidth={'853px'}>
    <VStack spacing={'64px'} align="start" color={'#FFF'} fontSize={'18px'}>
        <Box >
          <Text className='inside-events-header' fontSize={'32px'}>
            Introduction
          </Text>
          <Text mt={'15px'} >
            Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat mollis at volutpat lectus velit, sed auctor.
            Porttitor fames arcu quis fusce augue enim. Quis at habitant diam at. Suscipit tristique risus, at donec. In
            turpis vel et quam imperdiet. Ipsum molestie aliquet sodales id est ac volutpat.
          </Text>
          <Text mt={'15px'}>
            Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat mollis at volutpat lectus velit, sed auctor.
            Porttitor fames arcu quis fusce augue enim. Quis at habitant diam at. Suscipit tristique risus, at donec. In
            turpis vel et quam imperdiet. Ipsum molestie aliquet sodales id est ac volutpat.
          </Text>
        </Box>

        <Box>
          <Text className='inside-events-header' fontSize={'32px'}>
            Conclusion
          </Text>
          <Text mt={'15px'}>
            Morbi sed imperdiet in ipsum, adipiscing elit dui lectus. Tellus id scelerisque est ultricies ultricies. Duis
            est sit sed leo nisl, blandit elit sagittis. Quisque tristique consequat quam sed. Nisl at scelerisque amet
            nulla purus.
          </Text>
          <Text mt={'15px'}>
            Morbi sed imperdiet in ipsum, adipiscing elit dui lectus. Tellus id scelerisque est ultricies ultricies. Duis
            est sit sed leo nisl, blandit elit sagittis. Quisque tristique consequat quam sed. Nisl at scelerisque amet
            nulla purus.
          </Text>
        </Box>
      </VStack>
      </Container>

      </Flex>
    </>
  );
};

export default InsideEvents;
