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
// export async function getTeamsGroupedByType() {
//     const teamsCol = collection(db, 'team');
//     const q = query(teamsCol, orderBy('type'));

//     try {
//       const querySnapshot = await getDocs(q);

//       const groupedTeams = {};
//       querySnapshot.forEach((doc) => {
//         const teamType = doc.data().type;

//         if (!groupedTeams[teamType]) {
//           groupedTeams[teamType] = [];
//         }

//         groupedTeams[teamType].push(doc.data());
//       });

//       return groupedTeams;
//       console.log(groupedTeams);
//     } catch (error) {
//       console.error('Error getting team documents: ', error);
//       return null;
//     }
//   }

  export async function getTeamsGroupedByType() {
    const teamsCol = collection(db, 'team');
    const q = query(teamsCol, orderBy('type'), orderBy('order')); // Order by type and then by order

    try {
      const querySnapshot = await getDocs(q);

      // Group teams by type and order
      const groupedTeams = {};
      querySnapshot.forEach((doc) => {
        const teamType = doc.data().type;
        const teamOrder = doc.data().order;

        if (!groupedTeams[teamType]) {
          groupedTeams[teamType] = [];
        }

        groupedTeams[teamType].push({
        ...doc.data(),
        });
      });

      // Sort members within each type by the "order" field
      for (const teamType in groupedTeams) {
        if (groupedTeams.hasOwnProperty(teamType)) {
          groupedTeams[teamType].sort((a, b) => a.order - b.order);
        }
      }

      return groupedTeams;
    } catch (error) {
      console.error('Error getting team documents: ', error);
      return null;
    }
  }
 export  async function addDataFromJsonFile(jsonData: any, collectionName: string) {
    try {

      const collectionRef = collection(db, collectionName);

      // Add each document from the JSON file to Firestore
      for (const key in jsonData) {
        if (jsonData.hasOwnProperty(key)) {
          const documentData = jsonData[key];
          await addDoc(collectionRef, documentData);
          console.log(`Document added: ${key}`);
        }
      }

      console.log('Data import completed.');
    } catch (error) {
      console.error('Error importing data: ', error);
    }
  }
