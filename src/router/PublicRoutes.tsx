import { Route, Routes } from "react-router-dom";

import IdeathonForm from "../components/forms/ideathon-form";
import PublicLayout from "../layout/PublicLayout";
import RedirectLayout from "../layout/RedirectLayout";
import AboutUs from "../pages/AboutUs/AboutUs";
import LoginPage from "../pages/Auth/Login";
import RegisterPage from "../pages/Auth/Register";
import EventPage from "../pages/Event/Event";
import SingleGallery from "../pages/Gallery/components/SingleGallery";
import Gallery from "../pages/Gallery/Gallery";
import Home from "../pages/Home/Home";
import InsideEvents from "../pages/InsideEvents/InsideEvents";
import Schedule from "../pages/Schedule/Schedule";
import Team from "../pages/Team/Team";
import Valorant from "../pages/Valorant/valorant";

const PublicRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<PublicLayout />}>
          <Route index element={<Home />} />
          <Route element={<RedirectLayout />}>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Route>

          <Route path="/valorant" element={<Valorant />} />
          <Route path="/insideevents" element={<InsideEvents />} />
          <Route path="/events" element={<EventPage />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/teams" element={<Team />} />
          <Route path="/gallery" element={<Gallery />}></Route>
          <Route path="/gallery/:eventName" element={<SingleGallery />} />
          <Route path="/about" element={<AboutUs />}></Route>
          <Route path="/val-reg" element={<IdeathonForm />}></Route>
        </Route>
      </Routes>
    </>
  );
};

export default PublicRoutes;
