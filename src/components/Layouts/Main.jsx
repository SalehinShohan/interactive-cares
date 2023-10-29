import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import FooterPage from "../FooterPage/FooterPage";

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="min-h-[calc(100vh-137px)]">
        <Outlet></Outlet>
      </div>
      <FooterPage></FooterPage>
    </div>
  );
};

export default Main;
