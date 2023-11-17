import PageTitle from '../../components/Global/PageTitle';
import { Box } from '@chakra-ui/react';

import TabContent from './Components/TabContent';

function Schedule() {
 const SchedualFont = {
  fontFamily: 'Nunito Sans'
 };

 return (
  <>
   <PageTitle pageTitle="Schedule" pageDescription="The schedule of the ICT MEETUP v7.0" />

   {/* Date Tabs */}

   <Box
    pb={30}
    sx={SchedualFont}
    className="Tab_wraper"
    color={'white'}
    width={{ base: '100%', md: '90%', lg: '80%', xl: '60%' }}
    m={'auto'}>
    <TabContent />
   </Box>
  </>
 );
}

export default Schedule;
