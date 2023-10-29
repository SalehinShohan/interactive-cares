import { Parallax } from "react-parallax";
import footer from "../../assets/images/footer/Rectangle 217.png";
import subfooter from "../../assets/images/footer/image 183.png";

const Photography = () => {
  return (
    <Parallax className="h-[459px]" bgImage={footer} bgImageAlt="the menu">
      <div>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-start text-neutral-content">
          <div className="uppercase">
            <span className="md:text-2xl">
              ULTIMATE <br /> COURSE IN
            </span>
            <h1 className="md:text-6xl font-bold font-serif">PHOTOGRAPHY</h1>
          </div>

          <div>
            <p>
              <img className="md:h-36 md:mt-20 mt-6" src={subfooter} alt="" />
            </p>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Photography;
