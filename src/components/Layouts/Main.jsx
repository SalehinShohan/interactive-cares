import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import FooterPage from "../FooterPage/FooterPage";
import GoToTop from "../GoToTop/GoToTop";

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="min-h-[calc(100vh-137px)]">
        <Outlet></Outlet>
      </div>
      <FooterPage></FooterPage>
      <GoToTop></GoToTop>
    </div>
  );
};

export default Main;
