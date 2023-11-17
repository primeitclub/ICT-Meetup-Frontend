import { Container, Flex, Grid, GridItem, Heading, Image, Text } from '@chakra-ui/react';
import Logo from '../../assets/mainlogo.png';
export default function Footer() {
 return (
  <>
   <Container paddingY={'80px'} paddingX={'64px'}>
    <Grid templateColumns={'repeat(1, 1fr)'} gap={'80px'} justifyContent={'space-between'}>
     <GridItem>
      <Flex direction={'column'} gap={'4'}>
       <Image src={Logo} alt={'Logo'} h="80px" w="280px" />
       <Text variant={'body'}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptate.
       </Text>
      </Flex>
     </GridItem>

     <GridItem>
      <Flex direction={'column'} gap={'4'}>
       <Heading variant={'h5'}>SUBSCRIBE</Heading>
       <Text variant={'body'}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptate.
       </Text>
      </Flex>
     </GridItem>

     <GridItem>
      <Flex direction={'column'} gap={'4'}>
       <Heading variant={'h5'}>Follow Us</Heading>
       <Text variant={'body'}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptate.
       </Text>
      </Flex>
     </GridItem>
    </Grid>
   </Container>
  </>
 );
}
