import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/Home';
import LoginPage from '../pages/Auth/Login';
import RegisterPage from '../pages/Auth/Register';
import InsideEvents from '../pages/InsideEvents/InsideEvents';

const PublicRoutes = () => {
 return (
  <>
   <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<LoginPage />} />
    <Route path="/register" element={<RegisterPage />} />
    <Route path="/insideevents" element={<InsideEvents/>}/>
   </Routes>
  </>
 );
};

export default PublicRoutes;
