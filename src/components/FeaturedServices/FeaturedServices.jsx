import ferd1 from "../../assets/images/Featured Services/image 64.png";
import ferd2 from "../../assets/images/Featured Services/image 64 (1).png";
import ferd3 from "../../assets/images/Featured Services/image 64 (2).png";
import ferd4 from "../../assets/images/Featured Services/image 64 (3).png";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const FeaturedServices = () => {
  return (
    <div>
      <div>
        <h1 className="text-[#4C696D] text-4xl">Our Featured Services </h1>
        <p className="text-[#0C0C0C]">
          Discover the range of services provided by Interactive Cares
        </p>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="3000"
        className="grid grid-cols-1 lg:grid-cols-4 mt-10 mb-10"
      >
        <div className="card card-compact w-72 h-80 bg-base-100 shadow-2xl ml-8">
          <figure>
            <img src={ferd1} alt="" />
          </figure>
          <div className="text-center">
            <h2 className="font-bold mb-2">Pre Wedding Photoshoot</h2>
            <div className="w-52 mx-auto border">
              <hr />
            </div>
            <p className="text-[#4C696D] text-xs mt-2">
              Starting at <span>25,000 (One Day)</span>{" "}
            </p>
          </div>
          <div className="text-center mt-3">
            <button className="bg-[#4E99A4] px-8 hover:bg-cyan-500 text-white btn btn-xs mb-2 rounded-lg">
              Know more
            </button>
          </div>
        </div>
        <div className="card card-compact w-72 h-80 bg-base-100 shadow-2xl ml-8">
          <figure>
            <img src={ferd3} alt="" />
          </figure>
          <div className="text-center">
            <h2 className="font-bold mb-2">Pre Wedding Photoshoot</h2>
            <div className="w-52 mx-auto border">
              <hr />
            </div>
            <p className="text-[#4C696D] text-xs mt-2">
              Starting at <span>25,000 (One Day)</span>{" "}
            </p>
          </div>
          <div className="text-center mt-3">
            <button className="bg-[#4E99A4] hover:bg-cyan-500 px-8 text-white btn btn-xs mb-2 rounded-lg">
              Know more
            </button>
          </div>
        </div>
        <div className="card card-compact w-72 h-80 bg-base-100 shadow-2xl ml-8">
          <figure>
            <img src={ferd2} alt="" />
          </figure>
          <div className="text-center">
            <h2 className="font-bold mb-2">Pre Wedding Photoshoot</h2>
            <div className="w-52 mx-auto border">
              <hr />
            </div>
            <p className="text-[#4C696D] text-xs mt-2">
              Starting at <span>25,000 (One Day)</span>{" "}
            </p>
          </div>
          <div className="text-center mt-3">
            <button className="bg-[#4E99A4] hover:bg-cyan-500 px-8 text-white btn btn-xs mb-2 rounded-lg">
              Know more
            </button>
          </div>
        </div>
        <div className="card card-compact w-72 h-80 bg-base-100 shadow-2xl ml-8">
          <figure>
            <img src={ferd4} alt="" />
          </figure>
          <div className="text-center">
            <h2 className="font-bold mb-2">Pre Wedding Photoshoot</h2>
            <div className="w-52 mx-auto border">
              <hr />
            </div>
            <p className="text-[#4C696D] text-xs mt-2">
              Starting at <span>25,000 (One Day)</span>{" "}
            </p>
          </div>
          <div className="text-center mt-3">
            <button className="bg-[#4E99A4] hover:bg-cyan-500 px-8 text-white btn btn-xs mb-2 rounded-lg">
              Know more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedServices;
