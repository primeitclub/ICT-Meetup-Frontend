import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, query, orderBy, addDoc } from 'firebase/firestore/lite';
import { getAnalytics } from "firebase/analytics";
import firebaseConfig from "../config/firebase-config.json"


  const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

// Get a list of cities from your database
export async function getEvents() {
  const citiesCol = collection(db, 'events');
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map(doc => doc.data());
  return cityList;
}
export async function getEventsGroupedByEventType() {
    const eventsCol = collection(db, 'events');
    const q = query(eventsCol, orderBy('eventType')); // Order by eventType for better grouping

    try {
      const querySnapshot = await getDocs(q);

      // Group events by eventType
      const groupedEvents = {};
      querySnapshot.forEach((doc) => {
        const eventType = doc.data().eventType;

        if (!groupedEvents[eventType]) {
          groupedEvents[eventType] = [];
        }

        groupedEvents[eventType].push(doc.data());
      });

      return groupedEvents;
    } catch (error) {
      console.error('Error getting documents: ', error);
      return null;
    }
  }
