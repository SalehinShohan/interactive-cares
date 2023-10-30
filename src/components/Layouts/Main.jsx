import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import FooterPage from "../FooterPage/FooterPage";
import GoToTop from "../GoToTop/GoToTop";
import Popup from "../PopUp/PopUp";
import { motion, useScroll } from "framer-motion";

const Main = () => {
  const { scrollYProgress } = useScroll();
  return (
    <div>
      <motion.div style={{ scaleX: scrollYProgress }} />
      <Navbar></Navbar>
      <div className="min-h-[calc(100vh-137px)]">
        <Outlet></Outlet>
        <Popup></Popup>
      </div>
      <FooterPage></FooterPage>
      <GoToTop></GoToTop>
    </div>
  );
};

export default Main;
