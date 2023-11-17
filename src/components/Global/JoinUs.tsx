import { Box, Container, Flex, Heading, Text, Image } from '@chakra-ui/react';
import Cubes from '../../assets/cubes.jpg';
import OutlinedButton from '../ui/OutlinedButton';

export default function JoinUs() {
 return (
  <>
   <Container position={'relative'}>
    <Image
     src={Cubes}
     position={'absolute'}
     alt={'Cubes'}
     width={'full'}
     objectFit={'cover'}
     height={'full'}
    />
    <Flex paddingY={'112px'} paddingX={'64px'} gap={'24px'} direction={'column'}>
     <Box zIndex={2}>
      <Heading variant={'h5'} fontFamily={'heading'}>
       WHAT ARE YOU WAITING FOR?
      </Heading>
      <Heading variant={'h1'} fontFamily={'heading'}>
       JOIN US!
      </Heading>
     </Box>

     <Text color={'white'} fontFamily={'body'} zIndex={2}>
      Join us for the most awaited event of the year!
     </Text>

     <Flex gap={4}>
      <OutlinedButton buttonText={'Register Now'} />
      <OutlinedButton buttonText={'All Events'} />
     </Flex>
    </Flex>
   </Container>
  </>
 );
}
