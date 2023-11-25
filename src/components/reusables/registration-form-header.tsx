import { Container, Flex, Text } from '@chakra-ui/react';

export default function RegistrationFormHeader({
 title,
 description
}: {
 title: string;
 description: string;
}) {
 return (
  <>
   <Container
    backgroundColor={'var(--form-background)'}
    paddingTop={'72px'}
    paddingBottom={'52px'}
    paddingLeft={'64px'}
    paddingRight={'134px'}
    boxShadow={'0px 0px 150px -10px #061847;'}
    borderRadius={'24px'}>
    <Flex justify={'center'} direction={'column'} gap={'8px'} backdropFilter={'blur(20px)'}>
     <Text
      fontSize={'32px'}
      fontWeight={'700'}
      fontFamily={'heading'}
      color={'white'}
      textTransform={'uppercase'}>
      {title}
     </Text>
     <Text textColor={'var(--sub-header'} fontSize={'18px'} color={'white'} lineHeight={'28px'}>
      {description}
     </Text>
    </Flex>
   </Container>
  </>
 );
}
