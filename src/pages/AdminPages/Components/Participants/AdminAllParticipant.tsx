import AdminAllList from '../reusables/AdminAllList';
import dataJson from './Data/allParticipantData.json'
import ParticipantRow from './components/ParticipantRow';
interface ParticipantData{
  participantName : string
  participantEmail :string
  participantEvent : string
  participantPhone : string
  participantCollege : string
}
const tableHeadersForParticipants = ['Name', 'Email', 'Event Name', 'Phone', 'College Name'];

function AdminAllParticipant() {
  const allParticipantData: ParticipantData[] = dataJson
 return <AdminAllList dataList={allParticipantData} title= "All Participants" addLink={'/'} tableHeaders={tableHeadersForParticipants} RowComponent={ParticipantRow}/>;
}
export default AdminAllParticipant;
