import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/Home';
import LoginPage from '../pages/Auth/Login';
import RegisterPage from '../pages/Auth/Register';
import EventPage from '../pages/Event/Event';
import Schedule from '../pages/Schedule/Schedule';
import Team from '../pages/Team/Team';
import Gallery from '../pages/Gallery/Gallery';
import SingleGallery from '../pages/Gallery/components/SingleGallery';


const PublicRoutes = () => {
 return (
  <>
   <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<LoginPage />} />
    <Route path="/register" element={<RegisterPage />} />
    <Route path="/events" element={<EventPage />} />
    <Route path="/schedule" element={<Schedule />} />
    <Route path="/teams" element={<Team />} />
    <Route path="/gallery" element={<Gallery />}></Route>
    <Route path='/gallery/:eventName' element={<SingleGallery/>} />
   </Routes>
  </>
 );
};

export default PublicRoutes;
