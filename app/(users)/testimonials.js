import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Grid } from "swiper/modules";

function testimonials() {
  const testimonials = [
    {
      name: "Kenneth R. Myers",
      date: "June 3, 2024",
      text: "I absolutely love this baby shop! The staff is incredibly helpful.",
      price: "$83.99",
    },
    {
      name: "James W. Myers",
      date: "June 12, 2024",
      text: "Shopping here has been a delightful experience.",
      price: "$32.99",
    },
    {
      name: "James W. Myers",
      date: "June 31, 2024",
      text: "This baby shop has been a lifesaver!",
      price: "$83.99",
    },
    {
      name: "Kenneth R. Myers",
      date: "June 23, 2024",
      text: "I found everything I needed for my newborn.",
      price: "$16.99",
    },
  ];
  return (
    <>
      <section className="py-24 bg-gradient-to-r from-[#f7f7f7] to-[#eaf6f6] overflow-hidden">
        <h2 className="text-5xl font-black text-center">Testimonials</h2>

        <Swiper
          modules={[Autoplay]} // ✅ add module
          slidesPerView={1.2}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 1500, // time between slides (2.5 sec)
            disableOnInteraction: false, // keeps autoplay after user swipe
          }}
          speed={1200} // smooth transition
          className="py-20 h-120 flex items-center justify-center"
          breakpoints={{
            768: { slidesPerView: 2.2 },
            1024: { slidesPerView: 3.2 },
          }}
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>
              <div
                className={`
                bg-white rounded-3xl p-10 my-30 shadow-md border border-dashed
                transition-all duration-500
                ${i % 2 === 0 ? "translate-y-10" : "-translate-y-10"}
              `}
              >
                {/* Header */}
                <div className="mb-4">
                  <h3 className="font-bold text-lg">{t.name}</h3>
                  <p className="text-sm text-gray-400">{t.date}</p>
                </div>

                {/* Stars */}
                <div className="flex text-yellow-400 mb-4">{"★★★★★"}</div>

                {/* Text */}
                <p className="text-gray-500 italic mb-6">{t.text}</p>

                {/* Footer */}
                <div className="flex items-center gap-3 border-t pt-4">
                  <div className="w-10 h-10 rounded-full bg-gray-200"></div>
                  <div>
                    <p className="text-sm font-semibold">
                      Creation Rotating Doll
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
}

export default testimonials;
