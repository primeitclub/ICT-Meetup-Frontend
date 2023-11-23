import dataJson from '../Data/allEventData.json'
import AdminAllList from '../../reusables/AdminAllList';
interface EventData {
 eventTitle: string;
 eventCategory: string;
 eventSpeaker: string;
 eventDate: string;
 eventTime: string;
 eventStatus: string;
}

const tableHeadersForEvents = ['Title', 'Category', 'Speakers', 'Date', 'Time', 'Status', 'Actions'];

function AdminAllEvent() {
 const allEventData: EventData[] = dataJson;

 console.log(allEventData);

 return <AdminAllList dataList={allEventData} title="All Events" addLink="/add-event" tableHeaders={tableHeadersForEvents} />;
}

export default AdminAllEvent;
