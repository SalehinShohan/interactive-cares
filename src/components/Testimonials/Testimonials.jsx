import test1 from "../../assets/images/Testimonial/sdsds.jpg";
import test2 from "../../assets/images/Testimonial/Ellipse 1.png";
import { FaGoogle, FaFacebook, FaHeart, FaMedapps } from "react-icons/fa";

const Testimonials = () => {
  return (
    <div className="mt-8 mb-16">
      <div className="text-center">
        <h1 className="text-2xl text-[#4C696D] font-bold">Testimonials</h1>
        <p className="text-sm">Words from our clients</p>
      </div>
      <div className="tabs tabs-xs gap-2 mt-4">
        <a className="tab bg-[#4E99A4] text-gray-800 hover:text-cyan-50 rounded-lg flex items-center">
          <FaGoogle className="w-4 h-4 mr-1" />
          Google
        </a>
        <a className="tab bg-[#4E99A4] text-gray-800 hover:text-cyan-50 border rounded-lg flex items-center">
          <FaFacebook className="w-4 h-4 mr-1" />
          Facebook
        </a>
        <a className="tab bg-[#4E99A4] text-gray-800 hover:text-cyan-50 border rounded-lg flex items-center">
          <FaHeart className="w-4 h-4 mr-1" />
          Weddingwire
        </a>
        <a className="tab bg-[#4E99A4] text-gray-800 hover:text-cyan-50 border rounded-lg flex items-center">
          <FaMedapps className="w-4 h-4 mr-1" />
          WedmeGood
        </a>
      </div>
      <div className="mt-4 grid grid-cols-1 md:gird-cols-2 lg:grid-cols-2">
        <div className="">
          <img className="w-60 md:w-96 mx-auto" src={test1} alt="" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 text-white gap-6">
          {renderTestimonial(
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet",
            "Ramdom Name"
          )}
          {renderTestimonial(
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet",
            "Ramdom Name"
          )}
          {renderTestimonial(
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet",
            "Ramdom Name"
          )}
          {renderTestimonial(
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet",
            "Ramdom Name"
          )}
        </div>
      </div>
      <div className="divider my-5"></div>
    </div>
  );
};

const renderTestimonial = (text, name) => {
  return (
    <div className="bg-[#416F75] rounded-lg p-3">
      <p className="text-xs mt-4">{text}</p>
      <h1 className="font-bold mt-2">{name}</h1>
      <div className="text-center mt-2">
        <img className="w-20 mx-auto" src={test2} alt="" />
      </div>
    </div>
  );
};

export default Testimonials;
