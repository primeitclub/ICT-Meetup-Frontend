import AiRobot from '/assets/AboutUs/ai_robot_2.png';

import { Box, Button, Container, Flex, Image, Text } from '@chakra-ui/react';

import EventSlider from '../reusables/EventsSlider';
import HomePageTitle from '../reusables/HomePageTitle';
import FramerAnimation from '../animation/FramerAnimation';
import { Link } from 'react-router-dom';

export default function Events() {
  return (
    <>
      <Container
        paddingY={{
          base: '80px',
          lg: '112px',
        }}
      >
        <HomePageTitle pageTitle='Events' />
        <Box paddingY={{md:'82px',base:"32px"}}>
          <Flex
            direction={{
              base: 'column-reverse',
              md: 'row',
            }}
            align={'center'}
          >
           
              <EventSlider />

            <Box>
             <FramerAnimation>
             <Image
                src={AiRobot}
                borderRadius={'64px 0px 0px 64px'}
                alt='About'
                marginTop={{
                  base: '48px',
                  md: '0px',
                }}
                maxWidth={{
                  base: '100%',
                  md: '100%',
                  xl: '100%',
                }}
              />
             </FramerAnimation>
            </Box>
          </Flex>
          
        </Box>
      </Container>
    </>
  );
}
