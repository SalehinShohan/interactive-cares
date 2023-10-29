import blog1 from "../../assets/images/Blog/wedding (2).png";
import blog2 from "../../assets/images/Blog/Wedding Trailer.png";
import blog3 from "../../assets/images/Blog/wedding.png";
import "./Blog.css";

const Blog = () => {
  return (
    <div className="bg-[#DDF8F3] mb-10">
      <div className="p-4 md:p-8">
        <h1 className="text-[#4C696D] text-2xl font-bold">Our Blogs</h1>
        <p className="text-[#0C0C0C]">Check out our Latest Blog</p>
      </div>
      <div
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
        className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 md:p-8"
      >
        <div className="bg-white shadow-lg rounded-lg">
          <img
            className="w-full h-48 md:h-64 object-cover object-center"
            src={blog1}
            alt=""
          />
          <div className="p-4">
            <p className="text-xs font-bold">Featured on: Sep 15, 2021</p>
            <h1 className="text-2xl font-serif mt-2">
              Wedding Photography at Goa
            </h1>
          </div>
        </div>
        <div className="bg-white shadow-lg rounded-lg">
          <img
            className="w-full h-48 md:h-64 object-cover object-center"
            src={blog2}
            alt=""
          />
          <div className="p-4">
            <p className="text-xs font-bold">Featured on: Sep 15, 2021</p>
            <h1 className="text-2xl font-serif mt-2">
              Wedding Photography at Goa
            </h1>
          </div>
        </div>
        <div className="bg-white shadow-lg rounded-lg">
          <h1 className="text-2xl font-bold p-4">Trending Now</h1>
          <div className="p-4">
            <div className="flex mb-4">
              <img className="w-20 h-20 mr-4" src={blog3} alt="" />
              <div>
                <p className="text-xs font-semibold">
                  Creative Industries are on the verge of depletion due to
                  COVID-19
                </p>
                <p className="text-xs">
                  In a period where many industries remain highly unclear,
                  others want to grasp how COVID-19 impacts.
                </p>
              </div>
            </div>
            <div className="border my-4"></div>
            <div className="flex mb-4">
              <img className="w-20 h-20 mr-4" src={blog2} alt="" />
              <div>
                <p className="text-xs font-semibold">
                  Photography: Expectations vs. Reality
                </p>
                <p className="text-xs">
                  Most of the time without any hands-on experience in
                  photography, professional and advanced photography actually.
                </p>
              </div>
            </div>
            <div className="border my-4"></div>
            <div className="flex">
              <img className="w-20 h-20 mr-4" src={blog1} alt="" />
              <div>
                <p className="text-xs font-semibold">
                  Wedding Photography at Goa
                </p>
                <p className="text-xs">
                  Wedding Photography in Goa If not, every couple when they make
                  their list of Pre-wedding shoot.
                </p>
              </div>
            </div>
          </div>
          <div className="text-right p-4">
            <p className="text-xs">View All</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
