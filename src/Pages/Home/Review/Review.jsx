import React, { use } from "react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ReviewCard from "./ReviewCard";

const Review = ({ reviewPromise }) => {
  const reviews = use(reviewPromise);
  return (
    <div className="my-24">
      <div className="text-center mb-24">
        <h3 className="text-3xl text-center font-bold my-8">Reviews</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat hic
          et, officia consequuntur blanditiis voluptas vitae assumenda, impedit,
          consequatur culpa quasi. Voluptate quod quam voluptas nobis minus.
          Voluptatibus, dolorum dicta.
        </p>
      </div>

      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        loop={true}
        coverflowEffect={{
          rotate: 30,
          stretch: "50%",
          depth: 200,
          scale: 0.75,
          modifier: 1,
          slideShadows: true,
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
      >
        {reviews.map((review) => (
          <SwiperSlide key={review.id}>
            <ReviewCard review={review}></ReviewCard>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Review;
