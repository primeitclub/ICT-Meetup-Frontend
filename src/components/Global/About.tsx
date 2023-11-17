import AboutImage from '../../assets/About.png';
import { Button, Flex, Heading, Image, VStack, Text, HStack } from '@chakra-ui/react';
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
    alignItems={{
     base: 'center',
     xl: 'end'
    }}
    justify={'space-between'}
    position={'relative'}
    paddingY={'100px'}>
    <Image src={AboutImage} alt="About" />
    <Flex
     direction={'column'}
     gap={'48px'}
     paddingX={{
      md: '97px'
     }}>
     <SectionHeader title={'About'} top="0" right="0" />
     <Heading
      as="h1"
      fontSize={'32px'}
      fontFamily="heading"
      fontWeight={'700'}
      textTransform={'uppercase'}
      color={'white'}>
      AI Innovation:
      <br /> Sculpting a<br /> Brighter Future.
     </Heading>

     <Text
      fontSize={'18px'}
      color={'white'}
      lineHeight={'28px'}
      letterSpacing={'0.36px'}
      fontWeight={'500'}
      fontStyle={'normal'}>
      ICT Meetup v7.0 is an AI-themed event that will change the way you
      <br />
      think about AI. Through our events you can easily explore a wide range
      <br /> of workshops, sessions, competitions, E-sports games, and a thrilling
      <br /> musical night near the end. Join us fior an unforgettable experience.
     </Text>

     <VStack gap={'16px'} align={'start'}>
      {data.map((item, i) => (
       <HStack key={i} color={'white'} spacing={'10px'}>
        <svg
         xmlns="http://www.w3.org/2000/svg"
         width="24"
         height="24"
         viewBox="0 0 24 24"
         fill="none">
         <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M20.73 7.12L20.59 6.87C20.4094 6.56769 20.1547 6.31643 19.85 6.14L13.14 2.27C12.8362 2.09375 12.4913 2.00062 12.14 2H11.85C11.4987 2.00062 11.1538 2.09375 10.85 2.27L4.14 6.15C3.83697 6.32526 3.58526 6.57697 3.41 6.88L3.27 7.13C3.09375 7.43384 3.00062 7.77874 3 8.13V15.88C3.00062 16.2313 3.09375 16.5762 3.27 16.88L3.41 17.13C3.58979 17.4295 3.84049 17.6802 4.14 17.86L10.86 21.73C11.1623 21.9099 11.5082 22.0033 11.86 22H12.14C12.4913 21.9994 12.8362 21.9063 13.14 21.73L19.85 17.85C20.156 17.6787 20.4087 17.426 20.58 17.12L20.73 16.87C20.9041 16.5653 20.9971 16.221 21 15.87V8.12C20.9994 7.76874 20.9063 7.42384 20.73 7.12ZM11.85 4H12.14L18 7.38L12 10.84L6 7.38L11.85 4ZM13 19.5L18.85 16.12L19 15.87V9.11L13 12.58V19.5Z"
          fill="white"
         />
        </svg>
        <Text fontSize={'18px'}>{item}</Text>
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
