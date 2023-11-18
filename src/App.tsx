import MainRoute from './router/MainRoute';
import AdminRoute from './router/AdminRoute';
import { useState } from "react";

function App() {

    const [isAdmin, setAdmin] = useState(true);
    
 return (
  <>

  {  isAdmin ? ( <AdminRoute /> ) : ( <MainRoute /> )   } 

   
  </>
 );
}

export default App;
