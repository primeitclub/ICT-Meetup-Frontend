import { Image, Text, Box, Flex } from '@chakra-ui/react';

const AboutUsSection = (props: any) => {
 const { imageLink, heading, paragraph, direction } = props;
 return (
  <Flex
   //    key={index}
   direction={direction === 'left' ? ['column', 'row'] : ['column', 'row-reverse']}
   mb={'24'}
   gap={'10'}
   //    direction={['column', 'row']}
   justifyContent={'center'}
   alignItems={'center'}
   color={'#fff'}>
   <Box width={['', '50%']}>
    <Image src={imageLink} alt="Image" />
   </Box>
   <Box width={['', '50%']}>
    <Text
     variant={'section-header'}
     fontSize={'32px'}
     fontWeight={'700'}
     letterSpacing={'0.64px'}
     textTransform={'uppercase'}
     lineHeight={''}
     fontFamily={'heading'}>
     {heading}
    </Text>
    <Text mt={'24px'} fontSize={'20px'} fontWeight={'500'}>
     {paragraph}
    </Text>
   </Box>
  </Flex>
 );
};

export default AboutUsSection;
