import ss1 from "../../assets/images/Our Success/image 184.png";
import ss2 from "../../assets/images/Our Success/img (1).png";
import ss3 from "../../assets/images/Our Success/img (2).png";
import ss4 from "../../assets/images/Our Success/img (3).png";
import ss5 from "../../assets/images/Our Success/img (4).png";
import "aos/dist/aos.css";

const OurSuccess = () => {
  return (
    <div className="bg-[#ACCBC7] mb-20">
      <h1 className="text-center font-bold text-2xl text-[#4C696D] pt-5">
        Our Success
      </h1>
      <p className="text-center text-xs">Journey of our success.</p>
      <div
        data-aos="fade-down"
        data-aos-duration="3000"
        className="grid grid-cols-1 md:grid-clos-5 lg:grid-cols-5"
      >
        <div className="mx-auto">
          <div className="avatar mx-auto mt-8">
            <div className="w-44 bg-white rounded-full">
              <div className="mt-16 w-32 h-10 mx-auto">
                <img src={ss1} />
              </div>
            </div>
          </div>
          <h1 className="text-xs w-36 mx-auto mb-8">
            Received awards from ImagesBazaar on leading creative industry
          </h1>
        </div>
        <div className="mx-auto">
          <div className="avatar mx-auto mt-8">
            <div className="w-44 bg-white rounded-full">
              <div className="mt-16 w-32 h-10 mx-auto">
                <img src={ss2} />
              </div>
            </div>
          </div>
          <h1 className="text-xs w-36 mx-auto mb-8">
            Interactive Cares got featured on Yourstory. Click here
          </h1>
        </div>
        <div className="mx-auto">
          <div className="avatar mx-auto mt-8">
            <div className="w-44 bg-white rounded-full">
              <div className="mt-16 w-32 h-10 mx-auto">
                <img src={ss3} />
              </div>
            </div>
          </div>
          <h1 className="text-xs w-36 mx-auto mb-8">
            Back in 2019, Interactive Cares recognize as a startup with DPIT in
            Startup Bangladesh.
          </h1>
        </div>
        <div className="mx-auto">
          <div className="avatar mx-auto mt-8">
            <div className="w-44 bg-white rounded-full">
              <div className="mt-16 w-32 h-10 mx-auto">
                <img src={ss4} />
              </div>
            </div>
          </div>
          <h1 className="text-xs w-36 mx-auto mb-8">
            Top ten in Intuit Circle Codeathon, 2020
          </h1>
        </div>
        <div className="mx-auto">
          <div className="avatar mx-auto mt-8">
            <div className="w-44 bg-white rounded-full">
              <div className="mt-16 w-32 h-10 mx-auto">
                <img src={ss5} />
              </div>
            </div>
          </div>
          <h1 className="text-xs w-36 mx-auto mb-8">
            Appreciation from Startup Bengal for our creative startup community
          </h1>
        </div>
      </div>
    </div>
  );
};

export default OurSuccess;
