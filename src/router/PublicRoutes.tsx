import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/Home';
import LoginPage from '../pages/Auth/Login';
import RegisterPage from '../pages/Auth/Register';
import InsideEvents from '../pages/InsideEvents/InsideEvents';
import EventPage from '../pages/Event/Event';
import Valorant from '../pages/Valorant/valorant';
import Schedule from '../pages/Schedule/Schedule';
import Team from '../pages/Team/Team';
import Gallery from '../pages/Gallery/Gallery';
import SingleGallery from '../pages/Gallery/components/SingleGallery';

import AboutUs from '../pages/AboutUs/AboutUs';
import ValorantRegistrationForm from '../components/forms/valorant-form';
import LoginFormHoookForm from '../pages/Auth/_components/Login';

const PublicRoutes = () => {
 return (
  <>
   <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<LoginPage />} />
    <Route path="/valorant" element={<Valorant />} />
    <Route path="/register" element={<RegisterPage />} />
    <Route path="/insideevents" element={<InsideEvents />} />
    <Route path="/events" element={<EventPage />} />
    <Route path="/schedule" element={<Schedule />} />
    <Route path="/teams" element={<Team />} />
    <Route path="/gallery" element={<Gallery />}></Route>
    <Route path="/gallery/:eventName" element={<SingleGallery />} />
    <Route path="/about" element={<AboutUs />}></Route>
    <Route path="/val-reg" element={<ValorantRegistrationForm />}></Route>
    <Route path="/testlogin" element={<LoginFormHoookForm />}></Route>
   </Routes>
  </>
 );
};

export default PublicRoutes;
