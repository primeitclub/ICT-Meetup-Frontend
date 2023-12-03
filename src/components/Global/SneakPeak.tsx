import { Box, Container } from '@chakra-ui/layout';

import HomePageTitle from '../reusables/HomePageTitle';

export default function SneakPeak() {
  return (
    <>
      <Container
        paddingY={{
          base: '40px',
          lg: '80px',
        }}
      >
        <HomePageTitle pageTitle='Trailer' />

        <Box>
          <video width='100%' height='auto'>
            <source src='https://www.w3schools.com/html/mov_bbb.mp4' type='video/mp4' />
            Your browser does not support the video tag.
          </video>
        </Box>
      </Container>
    </>
  );
}
