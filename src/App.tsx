import { useState } from 'react';

import { Toaster } from 'sonner';

import ScrollToTop from './hoc/ScrollToTop';
import AdminRoute from './router/AdminRoute';
import MainRoute from './router/MainRoute';

function App() {
  const [isAdmin, setAdmin] = useState(false);

  return (
    <>
      <ScrollToTop />
      <Toaster position='top-right' richColors closeButton theme='dark' visibleToasts={3} expand />
      {isAdmin ? <AdminRoute /> : <MainRoute />}
    </>
  );
}

export default App;
