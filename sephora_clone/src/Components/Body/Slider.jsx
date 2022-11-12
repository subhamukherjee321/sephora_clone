import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

export default function SliderShow() {
  return (
    <div style={{maxWidth: "100%", margin: "auto"}}>
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
        className="mySwiper"
      >
        <SwiperSlide>
          <img alt="1" src="https://logan.nnnow.com/content/dam/nnnow-project/09-nov-2022/se-11-11-/Sephora_GenericTopbanner_1111sale.jpg" width={"100%"} />
        </SwiperSlide>
        <SwiperSlide>
          <img alt="2" src="https://logan.nnnow.com/content/dam/nnnow-project/09-nov-2022/se-11-11-/SC_Topbanner_1111Saledesktop.jpg" width={"100%"} />
        </SwiperSlide>
        <SwiperSlide>
          <img alt="3" src="https://logan.nnnow.com/content/dam/nnnow-project/09-nov-2022/se-11-11-/Sephora_GenericTopbanner_1111sale.jpg" width={"100%"} />
        </SwiperSlide>
        <SwiperSlide>
          <img alt="4" src="https://logan.nnnow.com/content/dam/nnnow-project/09-nov-2022/se-11-11-/Sephora_GenericTopbanner_1111sale.jpg" width={"100%"} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
