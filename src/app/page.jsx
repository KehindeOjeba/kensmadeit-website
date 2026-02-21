"use client";
import { useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y , Autoplay} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import stoned from "@/assets/stoned.jpg";
import strap from "@/assets/toestrap.jpg";
import ojay from "@/assets/ojay.jpg";
import monk from "@/assets/monk.jpg";
import LatestCollection from "@/component/homepage/LatestCollection";

const imgSlider = [
  {
    text: "Handcrafted Comfort",
    image: stoned,
    description: "Explore The Spring of Kens Collection",
  },
  {
    text: "Designed for You",
    image: ojay,
    description: "Explore The Spring of Kens Collection",
  },
  {
    text: "Handmade goodness",
    image: strap,
    description: "Explore The Spring of Kens Collection",
  },
  {
    text: "Timeless Style",
    image: monk,
    description: "We make different types pf shoes",
  },
];

export default function Home() {
  const [slider, setSlider] = useState(imgSlider[0]);
  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setSlider(imgSlider[currentIndex]);
  };
  return (
    <div className="bg-bgSoft min-h-[80vh] flex flex-col justify-center py-10 xl:px-0">
      <section className=" container mx-auto">
        <div className="flex flex-col lg:flex-row lg:gap-[]">
          <div className="w-full  bg-black text-white justify-center items-center m-auto p-3 rounded-tl-3xl">

            <div className="lg:text-7xl  text-4xl">{slider.text}</div>
            <p className='lg:mt-20 lg:text-3xl'>{slider.description}</p>
          </div>
      
          <div className="w-full lg:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="lg:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            //   spaceBetween={30}
            // centeredSlides={true}
            // autoplay={{
            //   delay: 5000,
            //   disableOnInteraction: false,
            // }}
            // pagination={{
            //   clickable: true,
            // }}
            // navigation={false}
            // modules={[Autoplay]}
            >
            
              {imgSlider.map((slider, index) => {
                return (
                  <SwiperSlide
                    key={index}
                    className="w-full"
                  >
                    <div className="h-[460px] relative group flex justify-center items-center ">
                      <div></div>
                      <div className="relative w-full h-full">
                        <Image
                          alt=""
                          src={slider.image}
                          className="object-cover  border-8 border-black "
                          width={500}
                          height={500}
                          
                        />
                          
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </section>

      <LatestCollection/>
    </div>
  );
}
