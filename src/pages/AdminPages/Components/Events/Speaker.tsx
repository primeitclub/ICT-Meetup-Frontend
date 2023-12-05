import { Box, Button, Flex } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export default function Speaker() {
 return (
  <>
   <Box className="speaker">

    <Flex justifyContent={'space-between'}>
     <Box
      className="Form_heaing"
      sx={{
       fontSize: '22px',
       textTransform: 'uppercase',
       fontWeight: 600,
       marginBottom: 8,
       paddingLeft: 5
      }}>
      Add Event
     </Box>

     <Box>
      <Button
       sx={{
        fontSize: '16px',
        bg:'#3889D5',
        p:'5px 20px',
        color:'white',
        borderRadius:'10px',
        transition:'0.1s ease-out',
        _hover:{
          bg:'blue.900'
        }
       }}
       
       >
       <Link to={'add-speaker'}>Add Speaker</Link>
      </Button>
     </Box>
    </Flex>



        {/* table contnet  */}
        <Box>
{/* table here  */}
        </Box>


   </Box>
  </>
 );
}
