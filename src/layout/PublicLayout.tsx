import { Outlet } from "react-router-dom";

import Footer from "../components/Global/Footer";
import Navbar from "../components/Global/Navbar";

export default function PublicLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
