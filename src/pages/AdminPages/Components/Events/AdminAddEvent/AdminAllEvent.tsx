import dataJson from '../Data/allEventData.json'
import AdminAllList from '../../reusables/AdminAllList';
import EventRow from './components/EventRow';
interface EventData {
 eventTitle: string;
 eventCategory: string;
 eventSpeaker: string;
 eventDate: string;
 eventTime: string;
 eventSeat: string;
 eventStatus: string;
}

const tableHeadersForEvents = ['Title', 'Category', 'Speakers', 'Date', 'Time','Seats','Actions'];

function AdminAllEvent() {
 const allEventData: EventData[] = dataJson;

 console.log(allEventData);

 return <AdminAllList dataList={allEventData} title="All Events" addLink="/add-event" tableHeaders={tableHeadersForEvents} RowComponent={EventRow} />;
}

export default AdminAllEvent;
