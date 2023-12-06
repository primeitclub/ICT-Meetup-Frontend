import { useEffect, useRef } from "react";

import { Toaster } from "sonner";

import ScrollToTop from "./hoc/ScrollToTop";
import MainRoute from "./router/MainRoute";
import { useAuthStore } from "./store/auth/authStore";

function App() {
  const { getUser } = useAuthStore((state) => state);
  const shouldFetch = useRef(true);
  useEffect(() => {
    if (shouldFetch.current) {
      getUser();
      shouldFetch.current = false;
    }
  }, []);
  return (
    <>
      <ScrollToTop />
      <Toaster
        position="top-right"
        richColors
        closeButton
        theme="dark"
        visibleToasts={3}
        expand
      />
      <MainRoute />
    </>
  );
}

export default App;
