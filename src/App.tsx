import { Box } from '@chakra-ui/react';
import MainRoute from './router/MainRoute';
import Navbar from './components/Global/Navbar';
import AdminRoute from './router/AdminRoute';

function App() {
 return (
  <>
   <AdminRoute />

   <MainRoute />
  </>
 );
}

export default App;
