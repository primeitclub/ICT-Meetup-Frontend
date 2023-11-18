import { Route, Routes } from 'react-router-dom';
import MainAdmin from '../pages/AdminPages/MainAdmin';
import AdminTeam from '../pages/AdminPages/Components/AdminTeam';
import { Text } from '@chakra-ui/react';

const AdminRoute = () => {
 return (
  <>
  <Text bg={'red.400'} >
     THSIIS TEXT
  </Text>
   <Routes>
        <Route path="/admin" element= {<MainAdmin/> } >

        <Route path='dashboard' element={<AdminTeam/>} />

        </Route>
   </Routes>
  </>
 );
};

export default AdminRoute;
