import { Swiper, SwiperSlide } from "swiper/react";
import { FC } from "react";
import { Navigation } from "swiper";
import Skeleton from "../Shared/Skeleton";

const SkeletonSlider: FC = () => {
  if (typeof window === "undefined") {
    return <div> </div>
  }

  return (
    <Swiper
      modules={[Navigation]}
      navigation
      slidesPerView="auto"
      slidesPerGroupAuto
      spaceBetween={30}
    >
      {[...new Array(Math.ceil(window.innerWidth / 200))].map((_, index) => (
        <SwiperSlide className="!w-[175px]" key={index}>
          <Skeleton className="w-[175px] h-[246px] rounded-xl" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SkeletonSlider;
