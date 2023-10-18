import AboutImage from '../../assets/About.png';
import { Button, Flex, Heading, Image, VStack, Text, HStack } from '@chakra-ui/react';
import { LuBox } from 'react-icons/lu';
import SectionHeader from '../reusables/SectionHeader';

const data = [
 'Discover cutting-edge technology',
 'Explore Innovative Projects at the expo',
 'Compete in thrilling competitions and esports games'
];

export default function About() {
 return (
  <>
   <Flex
    direction={{
     base: 'column',
     xl: 'row'
    }}
    alignItems={'center'}
    justify={'space-between'}
    gap={'10'}
    position={'relative'}
    paddingY={'100px'}
   >
    <Image src={AboutImage} alt="About" />
    <Flex direction={'column'} gap={'48px'}>
     <SectionHeader title={'About'} top="0" right="0" />
     <Heading
      as="h1"
      fontSize={'3xl'}
      fontFamily="heading"
      fontWeight={'bold'}
      textTransform={'uppercase'}
      color={'white'}
     >
      AI Innovation : Sculpting a Brighter Future.
     </Heading>

     <Text color={'white'}>
      ICT Meetup v7.0 is an AI-themed event that will change the way you think about AI. Through our
      events you can easily explore a wide range of workshops, sessions, competitions, E-sports
      games, and a thrilling musical night near the end. Join us fior an unforgettable experience.
     </Text>

     <VStack spacing={'16px'} align={'start'}>
      {data.map((item, i) => (
       <HStack key={i} color={'white'} spacing={'10px'}>
        <LuBox />
        <Text>{item}</Text>
       </HStack>
      ))}
     </VStack>

     <Button variant="outlined-button" width={'25%'}>
      <span>Learn More</span>
     </Button>
    </Flex>
   </Flex>
  </>
 );
}
