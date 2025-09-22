import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

export default function FeatureSlider() {
  const features = [
    {
      title: "Smart Care Reminders",
      description:
        "Get automatic notifications for watering, fertilizing, and pruning. Stay consistent with plant care and let us remind you at the right time.",
      image: "https://i.ibb.co/jvZVvcHY/hero-image.webp",
    },
    {
      title: "Various Plant Database",
      description:
        "Access detailed care guides for a wide range of plants including succulents, tropicals, ferns, and bonsai. Learn about their specific needs and how to keep them thriving.",
      image: "https://i.ibb.co.com/0jZ1P0kG/Capture.png",
    },
    {
      title: "Health & Growth Tracking",
      description:
        "Log plant health checks, add notes, and upload progress photos. Watch your plants thrive over time with meaningful insights.",
      image: "https://i.ibb.co/N6XSV87M/plant2.jpg",
    },
    {
      title: "Mobile-Friendly Experience",
      description:
        "Enjoy a seamless, responsive design that works perfectly on mobile, tablet, and desktop. Care for your plants anytime, anywhere.",
      image: "https://i.ibb.co/bRFw2F9D/plant4.jpg",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h1 className='secondary-font font-bold text-3xl sm:text-4xl md:text-5xl text-center my-8 text-black dark:text-white'>
        Our Best Features
      </h1>
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={true}
      >
        {features.map((feature, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md overflow-hidden flex flex-col md:flex-row">
              
              {/* Image */}
              <div className="md:w-1/2 w-full h-64 md:h-auto">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Text */}
              <div className="p-4 sm:p-6 md:p-8 flex-1 flex flex-col justify-center bg-[#0bc743] dark:bg-[#05a21d]">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-3 sm:mb-4 text-white">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base md:text-lg text-white leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
