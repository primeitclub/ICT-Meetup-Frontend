import { useEffect } from 'react';

import { Link } from 'react-router-dom';

import { Button, Flex, HStack, Image } from '@chakra-ui/react';

import Logo from '../../assets/mainlogo.png';
import { useUserStore } from '../../store/auth/authStore';

const data = [
  {
    label: 'About',
    link: '/about',
  },
  {
    label: 'Events',
    link: '/events',
  },
  {
    label: 'Schedule',
    link: '/schedule',
  },
  {
    label: 'Teams',
    link: '/teams',
  },
  {
    label: 'Gallery',
    link: '/gallery',
  },
];

export default function Navbar() {
  const { getUser } = useUserStore((state) => state);
  useEffect(() => {
    getUser();
  }, []);
  return (
    <header className='navbar'>
      <Flex
        display={{
          base: 'none',
          lg: 'flex',
        }}
        paddingX={{
          base: '32px',
          md: '64px',
        }}
        margin={'auto'}
        w='100%'
        py='5'
        align='center'
        justify='space-between'
        textColor={'white'}
        fontFamily={'body'}
        fontSize={'24px'}
      >
        <Image src={Logo} h='50px' />
        <HStack
          as='nav'
          spacing='8'
          display={{
            base: 'none',
            lg: 'flex',
          }}
        >
          {data.map((item, i) => (
            <Link key={i} to={item.link}>
              <Button> {item.label} </Button>
            </Link>
          ))}
        </HStack>
        <HStack spacing={5}>
          <Button>
            <Link to='/login'>Login</Link>
          </Button>
          <Button>
            <Link to='/register'>Register</Link>
          </Button>
        </HStack>
      </Flex>
    </header>
  );
}
