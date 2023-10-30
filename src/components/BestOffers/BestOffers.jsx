import offer1 from "../../assets/images/Best Offers/image 77 (1).png";
import offer2 from "../../assets/images/Best Offers/image 77 (2).png";
import offer3 from "../../assets/images/Best Offers/image 77.png";
import dis from "../../assets/images/Best Offers/Images50-removebg-preview 2.png";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const BestOffers = () => {
  return (
    <div>
      <div className="bg-gradient-to-r from-[#BADCDC]">
        <h1 className="text-center text-2xl font-bold text-[#4C696D]">
          Best Offers
        </h1>
        <p className="text-center mb-5">
          Discover the best offers on our services
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-4 md:ml-10 ml-20">
          <div data-aos="flip-up">
            <div className="card w-52 h-64 shadow-2xl image-full">
              <figure>
                <img className="w-44" src={offer1} alt="" />
              </figure>
              <div className="card-body">
                <h2 className="text-center font-bold">
                  Wedding <br /> Packages
                </h2>
                <hr />
                <div className="mt-8">
                  <p>Discount</p>
                  <img className="w-20" src={dis} alt="" />
                </div>
              </div>
            </div>
            <h1 className="ml-14 mt-2 text-black text-sm">BOOK NOW</h1>
          </div>
          <div data-aos="flip-down">
            <div className="card w-52 h-64 shadow-2xl image-full">
              <figure>
                <img className="w-44" src={offer2} alt="" />
              </figure>
              <div className="card-body">
                <h2 className="text-center font-bold">
                  Beach <br />
                  Photography
                </h2>
                <hr />
                <div className="mt-8">
                  <p>Discount</p>
                  <img className="w-20" src={dis} alt="" />
                </div>
              </div>
            </div>
            <h1 className="ml-14 mt-2 text-black text-sm">BOOK NOW</h1>
          </div>
          <div data-aos="flip-left">
            <div className="card w-52 h-64 shadow-2xl image-full">
              <figure>
                <img className="w-44" src={offer3} alt="" />
              </figure>
              <div className="card-body">
                <h2 className="text-center font-bold">
                  Website <br /> Design
                </h2>
                <hr />
                <div className="mt-8">
                  <p>Discount</p>
                  <img className="w-20" src={dis} alt="" />
                </div>
              </div>
            </div>
            <h1 className="ml-14 mt-2 text-black text-sm">BOOK NOW</h1>
          </div>
          <div data-aos="flip-right">
            <div className="card w-52 h-64 shadow-2xl image-full">
              <figure>
                <img className="w-44" src={offer1} alt="" />
              </figure>
              <div className="card-body">
                <h2 className="text-center font-bold">
                  Wedding <br /> Packages
                </h2>
                <hr />
                <div className="mt-8">
                  <p>Discount</p>
                  <img className="w-20" src={dis} alt="" />
                </div>
              </div>
            </div>
            <h1 className="ml-14 mt-2 text-black text-sm mb-2">BOOK NOW</h1>
          </div>
        </div>
      </div>
      <div className="divider"></div>
    </div>
  );
};

export default BestOffers;
