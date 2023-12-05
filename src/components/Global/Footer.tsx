import { Link } from 'react-router-dom';

import {
  Button,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Input,
  Text,
} from '@chakra-ui/react';

import Logo from '../../assets/mainlogo.png';

export default function Footer() {
  return (
    <>
      <Container
        paddingY={'80px'}
        paddingX={{
          base: '32px',
          md: '64px',
          xl: '0px',
        }}
        maxW={{
          xl: '1100px',
          '2xl': '1440px',
        }}
        margin={'auto'}
      >
        <Grid
          templateColumns={{
            base: 'repeat(1, 1fr)',
            md: 'repeat(3, 1fr)',
          }}
          gap={'80px'}
        >
          <GridItem>
            <Flex direction={'column'} gap={'2'} fontSize={'18px'}>
              <Image src={Logo} alt={'Logo'} h='80px' w='280px' />
              <Heading as={'p'} fontSize={'24px'} color={'white'} fontWeight={'600'}>
                Prime College, Nayabazaar
              </Heading>
              <Heading as={'p'} fontSize={'24px'} color={'white'} fontWeight={'500'}>
                Kathmandu, Nepal
              </Heading>
            </Flex>
          </GridItem>

          <GridItem>
            <Flex direction={'column'} gap={'4'}>
              <Heading variant={'h5'} fontFamily={'heading'}>
                SUBSCRIBE
              </Heading>
              <Text variant={'body'} color={'white'} fontSize={'22px'}>
                Join our newsletter to stay up to date on features and releases.
              </Text>
              <Flex align={'center'} gap={'8px'}>
                <Input
                  padding={'12px'}
                  flex={'1'}
                  borderRadius={'13px'}
                  border={'1px solid var(--blue-gradient, #2C48D8)'}
                  background={'rgba(13, 13, 13, 0.20)'}
                  placeholder={'Enter your email'}
                />

                <Button
                  color={'white'}
                  padding={'12px 24px'}
                  borderRadius={'13px'}
                  border={'1px solid var(--blue-gradient, #2C48D8)'}
                >
                  Subscribe
                </Button>
              </Flex>

              <Text variant={'body'} color={'white'} fontSize={'20px'}>
                By subscribing you agree to with our Privacy Policy and provide consent to receive
                updates from our company.
              </Text>
            </Flex>
          </GridItem>

          <GridItem>
            <Flex
              align={{
                base: 'flex-start',
                md: 'flex-end',
              }}
              direction={'column'}
              gap={'4'}
            >
              <Heading variant={'h5'}>Follow Us</Heading>
              <Flex gap={'20px'} direction={'column'} fontSize={'18px'}>
                <Flex gap={'4'}>
                  <Link to={'/facebook'}>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                      fill='none'
                    >
                      <path
                        d='M22 12.3033C22 6.7467 17.5229 2.24219 12 2.24219C6.47715 2.24219 2 6.7467 2 12.3033C2 17.325 5.65684 21.4874 10.4375 22.2422V15.2116H7.89844V12.3033H10.4375V10.0867C10.4375 7.56515 11.9305 6.17231 14.2146 6.17231C15.3088 6.17231 16.4531 6.36882 16.4531 6.36882V8.8448H15.1922C13.95 8.8448 13.5625 9.62041 13.5625 10.4161V12.3033H16.3359L15.8926 15.2116H13.5625V22.2422C18.3432 21.4874 22 17.3252 22 12.3033Z'
                        fill='white'
                      />
                    </svg>
                  </Link>
                  <Text color={'white'} fontWeight={'600'}>
                    Facebook
                  </Text>
                </Flex>

                <Flex gap={'4'}>
                  <Link to={'/facebook'}>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                      fill='none'
                    >
                      <path
                        d='M22 12.3033C22 6.7467 17.5229 2.24219 12 2.24219C6.47715 2.24219 2 6.7467 2 12.3033C2 17.325 5.65684 21.4874 10.4375 22.2422V15.2116H7.89844V12.3033H10.4375V10.0867C10.4375 7.56515 11.9305 6.17231 14.2146 6.17231C15.3088 6.17231 16.4531 6.36882 16.4531 6.36882V8.8448H15.1922C13.95 8.8448 13.5625 9.62041 13.5625 10.4161V12.3033H16.3359L15.8926 15.2116H13.5625V22.2422C18.3432 21.4874 22 17.3252 22 12.3033Z'
                        fill='white'
                      />
                    </svg>
                  </Link>
                  <Text color={'white'} fontWeight={'600'}>
                    Facebook
                  </Text>
                </Flex>

                <Flex gap={'4'}>
                  <Link to={'/facebook'}>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                      fill='none'
                    >
                      <path
                        d='M22 12.3033C22 6.7467 17.5229 2.24219 12 2.24219C6.47715 2.24219 2 6.7467 2 12.3033C2 17.325 5.65684 21.4874 10.4375 22.2422V15.2116H7.89844V12.3033H10.4375V10.0867C10.4375 7.56515 11.9305 6.17231 14.2146 6.17231C15.3088 6.17231 16.4531 6.36882 16.4531 6.36882V8.8448H15.1922C13.95 8.8448 13.5625 9.62041 13.5625 10.4161V12.3033H16.3359L15.8926 15.2116H13.5625V22.2422C18.3432 21.4874 22 17.3252 22 12.3033Z'
                        fill='white'
                      />
                    </svg>
                  </Link>
                  <Text color={'white'} fontWeight={'600'}>
                    Facebook
                  </Text>
                </Flex>

                <Flex gap={'4'}>
                  <Link to={'/facebook'}>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                      fill='none'
                    >
                      <path
                        d='M22 12.3033C22 6.7467 17.5229 2.24219 12 2.24219C6.47715 2.24219 2 6.7467 2 12.3033C2 17.325 5.65684 21.4874 10.4375 22.2422V15.2116H7.89844V12.3033H10.4375V10.0867C10.4375 7.56515 11.9305 6.17231 14.2146 6.17231C15.3088 6.17231 16.4531 6.36882 16.4531 6.36882V8.8448H15.1922C13.95 8.8448 13.5625 9.62041 13.5625 10.4161V12.3033H16.3359L15.8926 15.2116H13.5625V22.2422C18.3432 21.4874 22 17.3252 22 12.3033Z'
                        fill='white'
                      />
                    </svg>
                  </Link>
                  <Text color={'white'} fontWeight={'600'}>
                    Facebook
                  </Text>
                </Flex>

                <Flex gap={'4'}>
                  <Link to={'/facebook'}>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                      fill='none'
                    >
                      <path
                        d='M22 12.3033C22 6.7467 17.5229 2.24219 12 2.24219C6.47715 2.24219 2 6.7467 2 12.3033C2 17.325 5.65684 21.4874 10.4375 22.2422V15.2116H7.89844V12.3033H10.4375V10.0867C10.4375 7.56515 11.9305 6.17231 14.2146 6.17231C15.3088 6.17231 16.4531 6.36882 16.4531 6.36882V8.8448H15.1922C13.95 8.8448 13.5625 9.62041 13.5625 10.4161V12.3033H16.3359L15.8926 15.2116H13.5625V22.2422C18.3432 21.4874 22 17.3252 22 12.3033Z'
                        fill='white'
                      />
                    </svg>
                  </Link>
                  <Text color={'white'} fontWeight={'600'}>
                    Facebook
                  </Text>
                </Flex>
              </Flex>
            </Flex>
          </GridItem>
        </Grid>

        <Flex
          justifyContent={'center'}
          alignItems={'center'}
          marginY={'80px'}
          borderTop={'1px solid white'}
        >
          <Text variant={'body'} color={'white'} fontSize={'24px'} mt={'20px'}>
            © Prime IT Club. All rights reserved.
          </Text>
        </Flex>
      </Container>
    </>
  );
}
