import { Container } from '@chakra-ui/react';
import About from '../../components/Global/About';
import Events from '../../components/Global/Events';
import FAQAccordion from '../../components/Global/FaqAccordion';
import Hero from '../../components/Global/Hero';
import HomePageGlimpses from '../../components/Global/HomePageGlimpses';
import SneakPeak from '../../components/Global/SneakPeak';
import Speakers from '../../components/Global/Speakers';
import Sponsors from '../../components/Global/Sponsors';
import JoinUs from '../../components/Global/JoinUs';

const Home = () => {
 return (
  <>
   <Container
    maxW={{
     xl: '1100px',
     '2xl': '1440px'
    }}
    paddingX={{
     base: '32px',
     md: '64px',
     xl: '0px'
    }}
    margin={'auto'}>
    <Hero />
    <About />
    <Events />
    <Speakers />
   </Container>
   <SneakPeak />
   <Container
    maxW={{
     xl: '1100px',
     '2xl': '1440px'
    }}
    paddingX={{
     base: '32px',
     md: '64px',
     xl: '0px'
    }}
    margin={'auto'}>
    <Sponsors />
    <HomePageGlimpses />
    <FAQAccordion />
   </Container>
   <JoinUs />
  </>
 );
};

export default Home;
