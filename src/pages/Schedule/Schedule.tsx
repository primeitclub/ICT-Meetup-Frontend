import { Box } from '@chakra-ui/react';

import PageTitle from '../../components/Global/PageTitle';
import TabContent from './Components/TabContent';
import CommingSoon from '../../components/ui/CommingSoon';

function Schedule() {
    return (
        <>
            <PageTitle pageTitle='Schedule' pageDescription='The schedule of the ICT MEETUP v7.0' />

            {/* Date Tabs */}
            <CommingSoon />
            {/* <Box
        pb={30}
        className='Tab_wraper'
        color={'white'}
        width={{ base: '100%', md: '90%', lg: '80%', xl: '60%' }}
        m={'auto'}
      >
        <TabContent />
      </Box> */}
        </>
    );
}

export default Schedule;
