//make api calls here

import { GetRequest } from '../services/httpRequest';
import { useTestStore } from '../store/testStore';

export const GetTest = async () => {
 try {
  const response = await GetRequest('https://ictv7demo.primeitclub.com/api/ict');
  if (response) {
   useTestStore.getState().setTest(response.data.data);
  }
 } catch (error) {
  throw error;
 }
};
