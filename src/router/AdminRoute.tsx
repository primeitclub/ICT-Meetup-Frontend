import { Route, Routes } from 'react-router-dom';
import MainAdmin from '../pages/AdminPages/MainAdmin';
import TeamAdmin from '../pages/AdminPages/Components/Members/AdminTeam';
import GalleryAdmin from '../pages/AdminPages/Components/Gallery/AdminGallery';
import EventAdmin from '../pages/AdminPages/Components/Events/AdminEvent';
import Dashboard from '../pages/AdminPages/Components/DashboardAdmin';
import AdminAdddEvent from '../pages/AdminPages/Components/Events/AdminAddEvent';
import AdminAllEvent from '../pages/AdminPages/Components/Events/AdminAllEvent';
import AdminAdddSpeaker from '../pages/AdminPages/Components/Events/AdminAddSpeaker';
import AdminAddMember from '../pages/AdminPages/Components/Members/AdminAddMember';
import AdminAllMember from '../pages/AdminPages/Components/Members/AdminAllMember';
import Participants from '../pages/AdminPages/Components/Participants/Participants';
import Speaker from '../pages/AdminPages/Components/Events/Speaker';

const AdminRoute = () => {
 return (
  <>
   <Routes>
    <Route path="/admin" element={<MainAdmin />}>
     <Route path="dashboard" element={<Dashboard />} />

     <Route path="events">
      <Route path="all-event" element={<AdminAllEvent />} />
      <Route path="add-event" element={<AdminAdddEvent />} />
      <Route path="speaker" element={<Speaker />} />
      <Route path='speaker/add-speaker' element={<AdminAdddSpeaker/>} />
     </Route>

     <Route path="members" >
          <Route path='all-member' element={<AdminAllMember/>} />
          <Route path='add-member' element={<AdminAddMember/>} />
     </Route>

     <Route path="gallery" element={<GalleryAdmin />} />

     <Route path='participants' element={<Participants/>} />

    </Route>
   </Routes>
  </>
 );
};

export default AdminRoute;
