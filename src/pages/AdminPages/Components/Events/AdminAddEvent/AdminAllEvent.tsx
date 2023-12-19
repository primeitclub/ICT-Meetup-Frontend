import dataJson from "../Data/allEventData.json";
import AdminAllList from "../../reusables/AdminAllList";
import EventRow from "./components/EventRow";
import { useEffect, useState } from "react";
import { GetRequest } from "../../../../../services/httpRequest";
interface EventData {
  eventTitle: string;
  eventCategory: string;
  eventSpeaker: string;
  eventDate: string;
  eventTime: string;
  eventSeat: string;
  eventStatus: string;
}

const tableHeadersForEvents = [
  "Title",
  "Category",
  "Speakers",
  "Date",
  "Time",
  "Seats",
  "Actions",
];


// interface event data 
export interface EventApiProps {
    id?: number;
    title: string;
    eventType?: string;
    slug: string;
    location?: string;
    totalSeats?: number;
    eventDate: any;
    eventThumbnail?: string;
    startTime: string;
    endTime: string;
  }

function AdminAllEvent() {
  const [events, setEvents] = useState<EventApiProps[] | null>(null);
  const allEventData: EventData[] = dataJson;


  useEffect(() => {

    const getEvents = async () => {
      try {
        const response = await GetRequest("events")
        setEvents(response.data.events);
      } catch (error) {
        console.log(error);
      }
    };

  console.log(events);


    getEvents();

  }, []);



  return (
    <AdminAllList
      dataList={events ? events : []}
      title="All Events"
      addLink="/add-event"
      tableHeaders={tableHeadersForEvents}
      RowComponent={EventRow}
    />
  );
}

export default AdminAllEvent;
