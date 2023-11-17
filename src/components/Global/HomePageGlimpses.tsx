import { Grid, Image, GridItem, Heading, Button, Flex, Container } from '@chakra-ui/react';
import HomePageTitle from '../reusables/HomePageTitle';

interface IHomePageGlimpsesData {
 images: {
  src: string;
  alt: string;
 }[];
}

const homePageGlimpsesData: IHomePageGlimpsesData = {
 images: [
  {
   src: 'https://placehold.co/300x200',
   alt: 'Image 1'
  },
  {
   src: 'https://placehold.co/300x200',
   alt: 'Image 2'
  },
  {
   src: 'https://placehold.co/300x200',
   alt: 'Image 3'
  },
  {
   src: 'https://placehold.co/300x200',
   alt: 'Image 4'
  }
 ]
};

export default function HomePageGlimpses() {
 return (
  <>
   <Container paddingY={'112px'}>
    <HomePageTitle pageTitle={'Glimpses of the past'} />
    <Heading variant={'h5'} textAlign={'center'}>
     Experience the past editions of the conference
    </Heading>
    <Grid
     gap={4}
     templateRows={'repeat(3, 1fr)'}
     templateColumns={'repeat(2, 1fr)'}
     paddingY={'80px'}>
     {homePageGlimpsesData.images.map((image, index) => (
      <GridItem key={index} rowSpan={index === 0 || index === 2 ? 2 : 1}>
       <Image
        src={image.src}
        alt={image.alt}
        objectFit={'cover'}
        style={index === 0 || index === 2 ? { height: '100%' } : { width: '100%' }}
       />
      </GridItem>
     ))}
    </Grid>
    <Flex justifyContent={'center'}>
     <Button
      paddingX={'24px'}
      width={{
       base: '100%',
       sm: '321px'
      }}
      paddingY={'12px'}
      variant={'outlined-button'}>
      View Gallery
     </Button>
    </Flex>
   </Container>
  </>
 );
}
