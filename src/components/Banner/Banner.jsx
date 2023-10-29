import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Style.css";
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import logo1 from "../../assets/images//banner/image 5.png";

export default function Banner() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper mt-0"
      >
        <SwiperSlide>
          <img src={logo1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={logo1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={logo1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={logo1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={logo1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={logo1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={logo1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={logo1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={logo1} alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
