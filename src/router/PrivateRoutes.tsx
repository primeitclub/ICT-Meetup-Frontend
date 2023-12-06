import { Route, Routes } from "react-router-dom";

import AdminLayout from "../layout/AdminLayout";
import Dashboard from "../pages/AdminPages/Components/DashboardAdmin";
import AdminAdddEvent from "../pages/AdminPages/Components/Events/AdminAddEvent";
import AdminAllEvent from "../pages/AdminPages/Components/Events/AdminAddEvent/AdminAllEvent";
import AdminAdddSpeaker from "../pages/AdminPages/Components/Events/AdminAddSpeaker";
import Speaker from "../pages/AdminPages/Components/Events/Speaker";
import AddAlbum from "../pages/AdminPages/Components/Gallery/AddAlbum";
import GalleryAdmin from "../pages/AdminPages/Components/Gallery/AdminGallery";
import AlbumImages from "../pages/AdminPages/Components/Gallery/AlbumImages";
import AdminAddMember from "../pages/AdminPages/Components/Members/AdminAddMember";
import AdminAllMember from "../pages/AdminPages/Components/Members/AdminAllMembers/AdminAllMember";
import Participants from "../pages/AdminPages/Components/Participants/Participants";

const PrivateRoutes = () => {
  return (
    <>
      <Routes>
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
        </Route>
      </Routes>
    </>
  );
};

export default PrivateRoutes;
