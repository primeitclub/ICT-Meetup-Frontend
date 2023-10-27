import {
  Box,
  Image,
  Stack,
  Button,
  Heading,
  Text,
  Flex,
 } from '@chakra-ui/react';
 import {useState} from 'react'

 interface EventData {

 }


function SingleEvent() {

  const [clickTrig, setClickTrig] = useState< {lg:string,md:string,sm:string,base:string} >( { lg: '20%', md: '30%', sm: '40%', base: '100%' } );


  // event click handel

  const EventClickHandel = ()=> {
    
    setClickTrig( { lg:'30%', md: '30%', sm: '40%', base: '100%' } )

  }


    return ( <>

    
        <Box        
        onClick={ EventClickHandel }
         p={{ base: '15px', sm: '24px' }}
         sx={ {
          border:'2px solid #383838',
          background:'#030303',
            '&:hover':{
                border:'2px solid #0055D5',
                transition:'0.2s ease-in',
                cursor:'pointer'
            }
         } }
         className="single_program">
         <Flex flexDirection={{ sm: 'row', base: 'column' }} gap={7}>
          <Box
          // here
           w={{  md: '30%', sm: '40%', base: '100%' }}
          //  change in here
           h={{ base: '150px', sm: '175px' }}
           className="event_image">
           <Image
            src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
            h={'100%'}
            w={'100%'}
            objectFit={'cover'}
           />
          </Box>

          <Box w={{  md: '70%', sm: '60%', base: '100%' }} className="event_detail">
           <Flex w={'100%'} justifyContent={'space-between'} className="Headings">
            <Stack>
             <Heading
              fontWeight={600}
              fontSize={{ lg: '24px', sm: '20px', base: '20px' }}
              as={'h4'}>
              AI-Enabled newsroom
             </Heading>
             <Heading
              as={'h5'}
              color={'#26A0F9'}
              fontSize={{ lg: '20px', sm: '18px', base: '16px' }}
              fontWeight={400}
              lineHeight={'140%'}
              letterSpacing={'0.4px'}>
              8:00 - 9:00 AM
             </Heading>
            </Stack>
            <Box>
             <Text borderRadius={'4px'} h={'fit-content'} bg={'#A40A0A'} p={'5px 12px'}>
              Event
             </Text>
            </Box>
           </Flex>
           <Flex gap={ { md:10 ,sm:5,base:5 } } mt={10} >

            {/* change in here */}
           <Button
                 sx={{
                  '&:hover': {
                   background: 'linear-gradient(93deg, #2C84EC 12.34%, #000AE9 84.22%)'
                  }
                 }}
                 variant={'primary-button'}
                 p={{ md: '10px 5px', base: '10px 20px' }}
                 w={'50%'}
                 fontSize={{ lg: '20px', sm: '18px', base: '16px' }}>
                 Register Now
                </Button>
                <Button
                 w={'50%'}
                 variant={'outlined-button'}
                 border={'3px solid blue'}
                 fontSize={{ lg: '20px', sm: '18px', base: '16px' }}
                 p={{ md: '10px 5px', base: '10px 20px' }}
                 color={'white'}>
                 Read More
                </Button>

           </Flex>
          </Box>
         </Flex>
        </Box>

        <Box        
        onClick={ EventClickHandel }
         p={{ base: '15px', sm: '24px' }}
         sx={ {
          border:'2px solid #383838',
          background:'#030303',
            '&:hover':{
                border:'2px solid #0055D5',
                transition:'0.2s ease-in',
                cursor:'pointer'
            }
         } }
         className="single_program">
         <Flex flexDirection={{ sm: 'row', base: 'column' }} gap={7}>
          <Box
          // here
           w={clickTrig}
          //  change in here
           h={{ base: '150px', sm: '125px' }}
           className="event_image">
           <Image
            src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
            h={'100%'}
            w={'100%'}
            objectFit={'cover'}
           />
          </Box>

          <Box w={{ lg: '80%', md: '70%', sm: '60%', base: '100%' }} className="event_detail">
           <Flex w={'100%'} justifyContent={'space-between'} className="Headings">
            <Stack>
             <Heading
              fontWeight={600}
              fontSize={{ lg: '24px', sm: '20px', base: '20px' }}
              as={'h4'}>
              AI-Enabled newsroom
             </Heading>
             <Heading
              as={'h5'}
              color={'#26A0F9'}
              fontSize={{ lg: '20px', sm: '18px', base: '16px' }}
              fontWeight={400}
              lineHeight={'140%'}
              letterSpacing={'0.4px'}>
              8:00 - 9:00 AM
             </Heading>
            </Stack>
            <Box>
             <Text borderRadius={'4px'} h={'fit-content'} bg={'#A40A0A'} p={'5px 12px'}>
              Event
             </Text>
            </Box>
           </Flex>
           {/* change in here  */}
           <Text
            mt={5}
            fontSize={{ lg: '18px', sm: '16px', base: '16px' }}
            fontWeight={400}
            lineHeight={'155%'}
            letterSpacing={'0.36px'}>
            Robert Wilson
           </Text>
          </Box>
         </Flex>
        </Box>


  </> );
}

export default SingleEvent;