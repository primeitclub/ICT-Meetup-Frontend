import { Route, Routes } from "react-router-dom";

import IdeathonForm from "../components/forms/ideathon-form";
import PublicLayout from "../layout/PublicLayout";
import RedirectLayout from "../layout/RedirectLayout";
import AboutUs from "../pages/AboutUs/AboutUs";
import ForgetPassword from "../pages/Auth/_components/forgetPassword";
import OTPlogin from "../pages/Auth/_components/otp-verification";
import Successful from "../pages/Auth/_components/successful";
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

        <Route path="/valorant" element={<Valorant />} />
        <Route path="/insideevents" element={<InsideEvents />} />
        <Route path="/events" element={<EventPage />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/teams" element={<Team />} />
        <Route path="/gallery" element={<Gallery />}></Route>
        <Route path="/gallery/:eventName" element={<SingleGallery />} />
        <Route path="/about" element={<AboutUs />}></Route>
        <Route path="/val-reg" element={<IdeathonForm />}></Route>
        <Route path="/forgetpassword" element={<ForgetPassword />}></Route>
        <Route path="/otp" element={<OTPlogin />}></Route>
        <Route path="/successful" element={<Successful />}></Route>
      </Routes>
    </>
  );
};

export default PublicRoutes;
