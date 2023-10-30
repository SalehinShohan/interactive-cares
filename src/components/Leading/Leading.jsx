import led1 from "../../assets/images/Leading/12953573_Data_security_05.jpg";
import led2 from "../../assets/images/Leading/19245722_6101668.jpg";
import led3 from "../../assets/images/Leading/3d-render-secure-login-password-illustration.jpg";
import led4 from "../../assets/images/Leading/19245722_6101668.jpg";
import Marquee from "react-fast-marquee";

const Leading = () => {
  return (
    <div>
      <div className="text-center mt-5">
        <h1 className="text-4xl font-serif">Our Leading Creative Platform</h1>
        <Marquee className="text-zinc-500 mt-2 font-mono">
          Experience hassle free bookings. Trusted by 2500+ Customers
        </Marquee>
        <div className="flex justify-center items-center mt-6">
          <div>
            <input
              className="border border-black rounded-xl p-2 h-8 w-[300px] md:w-[450px]"
              type="text"
              placeholder="Search service, blog and many more…"
            />
          </div>
          <div className="absolute right-[0] md:right-[600px] lg:right-[650px]">
            <button className="bg-black text-white px-10 py-1 rounded-xl">
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 mt-10">
        <div className="flex items-center justify-center">
          <div className="">
            <img
              style={{ borderRadius: "200px 0px 0px 200px" }}
              className="w-28"
              src={led1}
              alt=""
            />
          </div>
          <div>
            <h1 className="text-black font-semibold text-lg">
              Verified Reviews
            </h1>
            <p className="text-sm">For verified reviewers</p>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="">
            <img
              style={{ borderRadius: "200px 0px 0px 200px" }}
              className="w-28"
              src={led2}
              alt=""
            />
          </div>
          <div>
            <h1 className="text-black font-semibold text-lg">Top Articles</h1>
            <p className="text-sm">Helps you decide</p>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="">
            <img
              style={{ borderRadius: "200px 0px 0px 200px" }}
              className="w-28"
              src={led3}
              alt=""
            />
          </div>
          <div>
            <h1 className="text-black font-semibold text-lg">
              Write Share Win Contest
            </h1>
            <p className="text-sm">Earn cash for reviews</p>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="">
            <img
              style={{ borderRadius: "200px 0px 0px 200px" }}
              className="w-28"
              src={led4}
              alt=""
            />
          </div>
          <div>
            <h1 className="text-black font-semibold text-lg">
              MouthShut for Brands
            </h1>
            <p className="text-sm">Request a Demo</p>
          </div>
        </div>
      </div>
      <div className="divider"></div>
    </div>
  );
};

export default Leading;
