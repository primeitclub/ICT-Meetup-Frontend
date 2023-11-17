import { Button, Flex } from '@chakra-ui/react';
import Robot from '../../assets/Robot.png';
import { Box, Text } from '@chakra-ui/react';
import { BsArrowRight } from 'react-icons/bs';
export default function Hero() {
 return (
  <>
   <Box
    // height={"90vh"}
    paddingY={{
     base: '100px',
     lg: '200px'
    }}
    // width={'90%'}
    margin={'auto'}
    position={'relative'}
    display={'flex'}
    justifyContent={'space-between'}
    alignItems={'center'}
    flexDirection={{
     base: 'column-reverse',
     lg: 'row'
    }}>
    <Flex
     width={{
      base: '100%',
      lg: '50%'
     }}
     direction={'column'}
     gap={'26px'}>
     <Flex direction={'column'} fontFamily={'heading'}>
      <Flex justifyContent={'space-between'} width={'70%'}>
       <Text className="ict-header">ICT</Text>
       <Text className="version-text">V 7.0</Text>
      </Flex>
      <h1 className="meetup-header">MEETUP</h1>
     </Flex>
     <Text color={'white'} fontSize={{ sm: '20px', base: '18px' }}>
      Join us for three days of cutting-edge technology, inspiring workshops, exciting competitions
      and more!
     </Text>

     <Button
      variant={'primary-button'}
      padding={'12px 24px'}
      width={{
       base: '100%',
       md: 'fit-content'
      }}
      rounded={'0'}
      gap={'2'}>
      <span>Register Now</span>
      <BsArrowRight />
     </Button>
    </Flex>

    <Flex
     paddingY={{
      base: '20',
      lg: '0'
     }}>
     <img src={Robot} alt="gradient" />
    </Flex>
   </Box>
  </>
 );
}
