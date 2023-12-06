import { Outlet } from "react-router-dom";

import Footer from "../components/Global/Footer";
import MobileMenu from "../components/Global/MobileMenu";
import Navbar from "../components/Global/Navbar";

export default function PublicLayout() {
  return (
    <>
      <Navbar />
      <MobileMenu />
      <Outlet />
      <Footer />
    </>
  );
}
