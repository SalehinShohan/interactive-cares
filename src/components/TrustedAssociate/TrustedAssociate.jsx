import ass1 from "../../assets/images/Associate/Rectangle 171 (1).png";
import ass2 from "../../assets/images/Associate/Rectangle 171 (2).png";
import ass3 from "../../assets/images/Associate/Rectangle 171 (3).png";
import ass4 from "../../assets/images/Associate/Rectangle 171 (4).png";
import ass5 from "../../assets/images/Associate/Rectangle 171.png";
import { CiStar } from "react-icons/ci";

const TrustedAssociate = () => {
  return (
    <div
      className="bg-[#A1E3D8] md:h-[351px] mb-16 mt-16 text-white"
    >
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-3/5">
          <h1 className="text-[#4C696D] text-4xl font-bold px-5 pt-5">
            Find Trusted Associate
          </h1>
          <p className="px-5 text-[#0C0C0C]">
            Find the best Fliqa Associate for your special day.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-8 px-4 md:px-8 lg:px-16">
        {renderAssociateCard(ass1, "Selina Gomez", "Location: Dhaka, Gulsan-1")}
        {renderAssociateCard(ass2, "Gort's Zam", "Location: Dhaka, Gulsan-1")}
        {renderAssociateCard(ass3, "Nikols Tim", "Location: Dhaka, Gulsan-1")}
        {renderAssociateCard(ass4, "Jamis Hila", "Location: Dhaka, Gulsan-1")}
        {renderAssociateCard(ass5, "Maria Hons", "Location: Dhaka, Gulsan-1")}
      </div>
    </div>
  );
};

const renderAssociateCard = (imageSrc, name, location) => {
  return (
    <div className="p-4 md:p-8 ml-10 md:ml-0 lg:ml-0">
      <div className="card card-compact w-48 bg-[#2C2C2C] shadow-xl">
        <figure>
          <img src={imageSrc} alt="" />
        </figure>
        <div className="flex items-center justify-between h-20">
          <div className="p-2">
            <h2 className="card-title">{name}</h2>
            <p className="text-xs">{location}</p>
          </div>
          <div className="flex absolute top-32 left-36 items-center justify-center text-xs">
            <p>5.0</p>
            <p className="ml-1">
              <CiStar className="text-yellow-400" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustedAssociate;
