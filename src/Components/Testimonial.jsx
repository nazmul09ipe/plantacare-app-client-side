import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const Testimonial = () => {
  const reviews = [
    {
      name: "Mr. Alex Johnson",
      comment: "PlantCare keeps me on track with my succulents. I never forget watering days anymore!",
      image: "https://i.ibb.co/0Lf2N3Z/portrait-man-laughing.jpg",
    },
    {
      name: "Mr. John Doe",
      comment: "I love the dashboard feature. It feels like my plants have their own personal diary!",
      image: "https://i.ibb.co/ymv248bf/portrait-happy-male-with-broad-smile.jpg",
    },
    {
      name: "Mr. Smith",
      comment: "The reminders are a lifesaver. My tropical plants have never been healthier!",
      image: "https://i.ibb.co/NdY98N71/portrait-white-man-isolated.jpg",
    },
    {
      name: "Mr. Wilson",
      comment: "The botanist panel is so helpful! I feel more confident caring for my bonsai now.",
      image: "https://i.ibb.co.com/BHwGcNDH/9.png",
    },
    {
      name: "Dr. Daniel Lee",
      comment: "The health tracking feature is amazing. I can see how my plants improve week by week.",
      image: "https://i.ibb.co.com/5hC1VqCq/Capture10.png",
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 md:px-8">
      <h2 className="font-bold text-center mb-10 secondary-font text-4xl sm:text-5xl text-black dark:text-white">
        What Our Community Says
      </h2>
      <div className="max-w-6xl mx-auto">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          speed={4000} 
          loop={true}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <div className="bg-[#3EB489] rounded-2xl shadow-md p-6 flex flex-col items-center text-center h-full transition-transform duration-300 hover:scale-105">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover mb-4 border-2 border-white"
                />
                <p className="text-white italic mb-3 text-sm sm:text-base">"{review.comment}"</p>
                <h4 className="font-semibold text-yellow-200 text-sm sm:text-base">{review.name}</h4>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonial;
