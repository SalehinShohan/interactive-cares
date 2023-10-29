import award1 from "../../assets/images/Awards/Rectangle 208.png";
import award2 from "../../assets/images/Awards/Rectangle 209.png";
import head1 from "../../assets/images/Awards/image 149.png";
import head2 from "../../assets/images/Awards/image 151.png";
import head3 from "../../assets/images/Awards/image 152.png";
import head4 from "../../assets/images/Awards/image 154.png";
import head5 from "../../assets/images/Awards/image-removebg-preview - 2022-07-23T185243 1.png";
import head6 from "../../assets/images/Awards/image-removebg-preview - 2022-07-23T185023 1.png";

const Awards = () => {
  return (
    <div className="bg-[#DDF8F3] h-[301px] p-14 mb-16">
      <div className="flex">
        <div className="grid grid-cols-1 md:grid-cols-2 bg-[#4E99A4] md:w-[550px] gap-5 p-10">
          <div className="">
            <img className="md:w-96" src={award1} alt="" />
          </div>
          <div className="">
            <img className="md:w-96" src={award2} alt="" />
          </div>
        </div>
        <div className="flex items-start ml-10 mt-2">
          <div>
            <div className="bg-white pr-14 rounded-md">
              <img
                className="bg-white rounded-md shadow-2xl w-40 h-14"
                src={head1}
                alt=""
              />
              <p className="absolute md:top-[4265px] md:right-[645px] lg:top-[4640px] lg:right-[735px]">
                4.9/5
              </p>
            </div>
            <div className="bg-white pr-14 rounded-md mt-2 mb-2">
              <img
                className="bg-white rounded-md shadow-2xl w-40 h-14"
                src={head2}
                alt=""
              />
              <p className="absolute md:top-[4332px] md:right-[645px] lg:top-[4700px] lg:right-[735px]">
                4.9/5
              </p>
            </div>
            <div className="bg-white pr-14 rounded-md">
              <img
                className="bg-white rounded-md shadow-2xl w-40 h-14"
                src={head3}
                alt=""
              />
              <p className="absolute md:top-[4395px] md:right-[645px] lg:top-[4767px] lg:right-[735px]">
                5.0/5
              </p>
            </div>
          </div>
          <div className="ml-16 gird grid-cols-1">
            <div className="bg-white pr-14 rounded-md">
              <img
                className="bg-white rounded-md shadow-2xl w-40 h-14"
                src={head4}
                alt=""
              />
              <p className="absolute md:top-[4265px] md:right-[365px] lg:top-[4637px] lg:right-[455px]">
                4.9/5
              </p>
            </div>
            <div className="bg-white pr-14 rounded-md mt-2 mb-2">
              <img
                className="bg-white rounded-md shadow-2xl w-40 h-14"
                src={head5}
                alt=""
              />
              <p className="absolute md:top-[4332px] md:right-[365px] lg:top-[4700px] lg:right-[455px]">
                4.9/5
              </p>
            </div>
            <div className="bg-white pr-14 rounded-md">
              <img
                className="bg-white rounded-md shadow-2xl w-40 h-14"
                src={head6}
                alt=""
              />
              <p className="absolute md:top-[4395px] md:right-[365px] lg:top-[4767px] lg:right-[455px]">
                4.9/5
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Awards;
