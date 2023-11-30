import AdminAllList from "../../reusables/AdminAllList";
import SpeakerRow from "./components/SpeakerRow";
import dataJson from  "../Data/allSpeakerData.json"
interface SpeakerData {
      speakerName : string,
      speakerEvent: string
}
const tableHeaderForSpeakers = ['Name', 'Event'];

function AdminAllSpeaker(){
      const allSpeakerData : SpeakerData [] = dataJson;
     return <AdminAllList dataList={allSpeakerData} title="All Speakers" addLink={'/'} tableHeaders={tableHeaderForSpeakers} RowComponent={SpeakerRow}></AdminAllList>
}
export default AdminAllSpeaker