// import Awards from "../Awards/Awards";
import Banner from "../Banner/Banner";
import BestOffers from "../BestOffers/BestOffers";
import Blog from "../Blog/Blog";
import DiscoverIdea from "../DiscoverIdea/DiscoverIdea";
import FeaturedServices from "../FeaturedServices/FeaturedServices";
import Leading from "../Leading/Leading";
import OurSuccess from "../OurSuccess/OurSuccess";
import Photography from "../Photography/Photography";
import RealWedding from "../RealWedding/RealWedding";
import Testimonials from "../Testimonials/Testimonials";
import TrustedAssociate from "../TrustedAssociate/TrustedAssociate";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Leading></Leading>
      <TrustedAssociate></TrustedAssociate>
      <FeaturedServices></FeaturedServices>
      <DiscoverIdea></DiscoverIdea>
      <Blog></Blog>
      <RealWedding></RealWedding>
      <BestOffers></BestOffers>
      <Testimonials></Testimonials>
      {/* <Awards></Awards> */}
      <OurSuccess></OurSuccess>
      <Photography></Photography>
    </div>
  );
};

export default Home;
