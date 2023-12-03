import { Container, Flex, Grid, GridItem, Heading, Image } from '@chakra-ui/react';

import HomePageTitle from '../reusables/HomePageTitle';
import OutlinedButton from '../ui/OutlinedButton';

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
      alt: 'Image 1',
    },
    {
      src: 'https://placehold.co/300x200',
      alt: 'Image 2',
    },
    {
      src: 'https://placehold.co/300x200',
      alt: 'Image 3',
    },
    {
      src: 'https://placehold.co/300x200',
      alt: 'Image 4',
    },
  ],
};

export default function HomePageGlimpses() {
  return (
    <>
      <Container
        paddingY={{
          base: '40px',
          lg: '112px',
        }}
      >
        <HomePageTitle pageTitle={'Glimpses of the past'} />
        <Heading variant={'h5'} textAlign={'center'}>
          Experience the past editions of the conference
        </Heading>
        <Grid
          gap={4}
          templateRows={{
            base: 'repeat(3, 1fr)',
            lg: 'repeat(2, 1fr)',
          }}
          templateColumns={{
            base: 'repeat(2, 1fr)',
            lg: 'repeat(3, 1fr)',
          }}
          paddingY={'80px'}
        >
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
          <OutlinedButton buttonText={'View Gallery'} />
        </Flex>
      </Container>
    </>
  );
}
