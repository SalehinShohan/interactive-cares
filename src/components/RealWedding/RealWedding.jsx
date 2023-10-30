import { HiArrowRight } from "react-icons/hi";
import wed1 from "../../assets/images/RealWedding/image 59.png";
import wed2 from "../../assets/images/RealWedding/image 59 (1).png";
import wed3 from "../../assets/images/RealWedding/image 59 (2).png";
import wed4 from "../../assets/images/RealWedding/image 59 (3).png";
import weds1 from "../../assets/images/RealWedding/image 56.png";
import weds2 from "../../assets/images/RealWedding/image 57.png";
import weds3 from "../../assets/images/RealWedding/image 90.png";
import AnimationPage from "../AnimationPage/AnimationPage";

const RealWedding = () => {
  return (
    <AnimationPage>
      <div className="p-4 md:p-8">
        <h1 className="text-[#4C696D] font-bold text-2xl">Real Wedding</h1>
        <p className="mb-5">List your wedding and browse portfolio</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {renderWeddingCard(
            wed1,
            weds1,
            weds2,
            weds3,
            "Danielle & Ronnie",
            "38 photos. Kittery, Polland",
            "#DDF8F3"
          )}
          {renderWeddingCard(
            wed2,
            weds1,
            weds2,
            weds3,
            "Danielle & Ronnie",
            "38 photos. Kittery, Polland",
            "#FBDADA"
          )}
          {renderWeddingCard(
            wed3,
            weds1,
            weds2,
            weds3,
            "Danielle & Ronnie",
            "38 photos. Kittery, Polland",
            "#FFF9D9"
          )}
          {renderWeddingCard(
            wed4,
            weds1,
            weds2,
            weds3,
            "Danielle & Ronnie",
            "38 photos. Kittery, Polland",
            "#DDE4FF"
          )}
        </div>
        <div className="mt-5">
          <button className="flex items-center justify-center bg-[#DDF9FF] px-4 py-3 mx-auto rounded-md shadow-sm">
            View more weddings
            <span className="mt-1 ml-1">
              <HiArrowRight />
            </span>
          </button>
        </div>
        <div className="divider my-5"></div>
      </div>
    </AnimationPage>
  );
};

const renderWeddingCard = (
  imageSrc,
  img1,
  img2,
  img3,
  title,
  description,
  bgColor
) => {
  return (
    <AnimationPage>
      <div className={`card w-full md:w-1/2 lg:w-72 shadow-2xl bg-${bgColor}`}>
        <figure className="relative">
          <img
            src={imageSrc}
            alt=""
            className="w-full h-72 object-cover object-center"
          />
          <div className="grid grid-cols-1 lg:grid-cols-3">
            <div>
              <img src={img1} alt="" />
            </div>
            <div>
              <img src={img2} alt="" />
            </div>
            <div>
              <img src={img3} alt="" />
            </div>
          </div>
        </figure>
        <div className="px-4 lg:px-8 mb-5">
          <h2 className="card-title">{title}</h2>
          <p className="text-xs">{description}</p>
        </div>
      </div>
    </AnimationPage>
  );
};

export default RealWedding;
