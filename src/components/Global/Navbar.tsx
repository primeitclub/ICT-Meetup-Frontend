import {
  useEffect,
  useRef,
} from 'react';

import { Link } from 'react-router-dom';

import {
  Button,
  Flex,
  HStack,
  Image,
  Text,
} from '@chakra-ui/react';

import Logo from '../../assets/mainlogo.png';
import { useAuthStore } from '../../store/auth/authStore';

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
  const { user, getUser } = useAuthStore((state) => state);
  const shouldFetch = useRef(true);
  console.log(user);
  useEffect(() => {
    if (shouldFetch.current) {
      getUser();
      shouldFetch.current = false;
    }
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
          '2xl': '0px',
        }}
        maxW={{
          '2xl': '1440px',
        }}
        margin={'auto'}
        w='100%'
        py='5'
        align='center'
        justify='space-between'
        textColor={'white'}
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
              <Text fontSize={'24px'} fontWeight={'500'}>
                {item.label}
              </Text>
            </Link>
          ))}
        </HStack>
        <HStack spacing={5}>
          {
            // if user is logged in then show user profile and logout button
            user ? (
              <>
                <Link to='/profile'>
                  <Button>{user.username}</Button>
                </Link>
                <Link to='/logout'>
                  <Button>Logout</Button>
                </Link>
              </>
            ) : (
              // else show login and register button
              <>
                <Link to='/login'>
                  <Text fontSize={'24px'} fontWeight={'500'}>
                    Login
                  </Text>
                </Link>
                {' | '}
                <Link to='/register'>
                  <Text fontSize={'24px'} fontWeight={'500'}>
                    Register
                  </Text>
                </Link>
              </>
            )
          }
        </HStack>
      </Flex>
    </header>
  );
}
