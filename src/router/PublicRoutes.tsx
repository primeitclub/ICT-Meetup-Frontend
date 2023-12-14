import { Route, Routes } from "react-router-dom";

import IdeathonForm from "../components/forms/ideathon-form";
import ValorantRegistrationForm from "../components/forms/valorant-form";
import AdminLayout from "../layout/AdminLayout";
import PrivateRouteLayout from "../layout/PrivateLayout";
import PublicLayout from "../layout/PublicLayout";
import RedirectLayout from "../layout/RedirectLayout";
import AboutUs from "../pages/AboutUs/AboutUs";
import Dashboard from "../pages/AdminPages/Components/DashboardAdmin";
import AdminAdddEvent from "../pages/AdminPages/Components/Events/AddEvent";
import AdminAllEvent from "../pages/AdminPages/Components/Events/AdminAddEvent/AdminAllEvent";
import AdminAdddSpeaker from "../pages/AdminPages/Components/Events/AddSpeaker";
import Speaker from "../pages/AdminPages/Components/Events/Speaker";
import AddAlbum from "../pages/AdminPages/Components/Gallery/AddAlbum";
import GalleryAdmin from "../pages/AdminPages/Components/Gallery/AdminGallery";
import AlbumImages from "../pages/AdminPages/Components/Gallery/AlbumImages";
import AdminAddMember from "../pages/AdminPages/Components/Members/AdminAddMember";
import AdminAllMember from "../pages/AdminPages/Components/Members/AdminAllMembers/AdminAllMember";
import Participants from "../pages/AdminPages/Components/Participants/Participants";
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
import NotFound from "../pages/NotFound";
import Schedule from "../pages/Schedule/Schedule";
import Team from "../pages/Team/Team";
import Profile from "../pages/User/Profile";
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

          <Route path="/events">
            <Route index element={<EventPage />} />
          </Route>
          <Route path="/event-registration" element={<PrivateRouteLayout />}>
            <Route path="valorant" element={<ValorantRegistrationForm />} />
            <Route path="ideathon" element={<IdeathonForm />} />
          </Route>
          <Route path="/my-profile" element={<Profile />} />
          <Route path="/events" element={<EventPage />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/teams" element={<Team />} />
          <Route path="/gallery" element={<Gallery />}></Route>
          <Route path="/gallery/:eventName" element={<SingleGallery />} />
          <Route path="/about" element={<AboutUs />}></Route>
          <Route path="/forgetpassword" element={<ForgetPassword />}></Route>
          <Route path="/otp" element={<OTPlogin />}></Route>
          <Route path="/successful" element={<Successful />}></Route>
          <Route
            path="*"
            element={
              //redirect to home
              <NotFound />
            }
          />
        </Route>

        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="events">
            <Route path="all-event" element={<AdminAllEvent />} />
            <Route path="add-event" element={<AdminAdddEvent />} />
            <Route path="speaker" element={<Speaker />} />
            <Route path="speaker/add-speaker" element={<AdminAdddSpeaker />} />
          </Route>

          <Route path="members">
            <Route path="all-member" element={<AdminAllMember />} />
            <Route path="add-member" element={<AdminAddMember />} />
          </Route>

          <Route path="gallery" element={<GalleryAdmin />} />
          <Route path="gallery/add-album" element={<AddAlbum />} />
          <Route path="gallery/:id" element={<AlbumImages />} />

          <Route path="participants" element={<Participants />} />
          <Route
            path="*"
            element={
              //redirect to home
              <Dashboard />
            }
          />
        </Route>
      </Routes>
    </>
  );
};

export default PublicRoutes;
