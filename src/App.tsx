import { Toaster } from "sonner";

import ScrollToTop from "./hoc/ScrollToTop";
import MainRoute from "./router/MainRoute";

function App() {
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
