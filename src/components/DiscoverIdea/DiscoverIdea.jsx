import { Parallax } from "react-parallax";
import discover from "../../assets/images/Discover Idea/image 74.png";
import subdis1 from "../../assets/images/Discover Idea/Rectangle 166.png";
import subdis2 from "../../assets/images/Discover Idea/image 24.png";
import subdis3 from "../../assets/images/Discover Idea/image 32.png";
import subdis4 from "../../assets/images/Discover Idea/image 49.png";
import { FaSearch } from "react-icons/fa";

const DiscoverIdea = () => {
  return (
    <div>
      <Parallax className="h-[390px]" bgImage={discover} bgImageAlt="the menu">
        <div>
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-start text-neutral-content">
            <div className="uppercase">
              <span className="text-2xl">Discover</span>
              <h1 className="text-4xl font-bold font-serif">
                Graphic Design Ideas <br /> and services
              </h1>
              <p>From branding to marketing</p>
              <div className="flex items-start justify-start mt-6">
                <div>
                  <input
                    className="border-none text-xs rounded-xl px-6 h-8 md:w-[280px]"
                    type="text"
                    placeholder="what kind of design you are looking for?"
                  />
                </div>
                <div className="absolute right-20 md:right-[850px] lg:right-[840px]">
                  <button className="bg-black text-white px-10 py-1 rounded-xl">
                    Search
                  </button>
                </div>
                <div className="absolute md:left-[50px] p-2">
                  <FaSearch></FaSearch>
                </div>
              </div>
            </div>

            <div>
              <p>
                <img className="h-40 w-32 mt-20 ml-20" src={subdis1} alt="" />
              </p>
            </div>
            <div>
              <p>
                <img className="h-40 w-32" src={subdis2} alt="" />
              </p>
            </div>
            <div>
              <p>
                <img className="h-40 w-32 ml-10 mt-8" src={subdis3} alt="" />
              </p>
            </div>
            <div>
              <p>
                <img className="h-40 w-32 mt-16" src={subdis4} alt="" />
              </p>
            </div>
          </div>
        </div>
      </Parallax>
      <div className="text-center mb-10">
        <span className="text-2xl font-serif tracking-widest">
          Popular: Website Design Logo Design Brochure Label Design
        </span>
        <div className="divider"></div>
      </div>
    </div>
  );
};

export default DiscoverIdea;
