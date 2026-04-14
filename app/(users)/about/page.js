"use client";

import Image from "next/image";
import Testimonials from "../testimonials";

export default function AboutSection() {
  const brands = [
    { img: "/brands/1.png", title: "LOGONAME", offer: "Big sale 25% off" },
    {
      img: "/brands/2.png",
      title: "KIDS PRESCHOOL",
      offer: "Big sale 20% off",
    },
    { img: "/brands/3.png", title: "COMPANY NAME", offer: "Big sale 10% off" },
    { img: "/brands/4.png", title: "BRAND LOGO", offer: "Big sale 15% off" },
    {
      img: "/brands/5.png",
      title: "ONLINE SHOPPING",
      offer: "Big sale 25% off",
    },
    { img: "/brands/6.png", title: "TOY SHOP", offer: "Big sale 10% off" },

    { img: "/brands/7.png", title: "BEAR", offer: "Big sale 15% off" },
    { img: "/brands/8.png", title: "LEARNING", offer: "Big sale 20% off" },
    { img: "/brands/9.png", title: "KIDS STORE", offer: "Big sale 10% off" },
    { img: "/brands/10.png", title: "TOY SHOP", offer: "Big sale 25% off" },
    { img: "/brands/3.png", title: "COMPANY NAME", offer: "Big sale 15% off" },
    { img: "/brands/1.png", title: "LOGONAME", offer: "Big sale 20% off" },
  ];

  return (
    <>
      <section className="bg-[#f7f7f7] py-20 px-5">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          {/* LEFT SIDE */}
          <div className="relative flex justify-center md:justify-start">
            {/* BIG CIRCLE */}
            <div className="w-[350px] h-[350px] md:w-[450px] md:h-[450px] rounded-full bg-pink-200 relative overflow-hidden flex items-center justify-center">
              <Image
                src="/girl.png" // replace with your image
                alt="girl"
                fill
                className="object-cover"
              />
            </div>

            {/* SMALL CIRCLE */}
            <div className="absolute bottom-[-40px] right-[20px] md:right-[40px] w-[180px] h-[180px] md:w-[220px] md:h-[220px] rounded-full bg-blue-200 overflow-hidden border-8 border-white shadow-lg">
              <Image
                src="/boy.png" // replace with your image
                alt="boy"
                fill
                className="object-cover"
              />
            </div>

            {/* EXPERIENCE BADGE */}
            <div className="absolute top-[40px] right-[10px] md:right-[40px] bg-white rounded-full w-[110px] h-[110px] flex flex-col items-center justify-center text-center border border-pink-300 shadow">
              <span className="text-pink-500 text-xl font-bold">30+</span>
              <span className="text-[10px] tracking-widest text-gray-500">
                YEARS
              </span>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold leading-snug mb-4 text-black">
              We are a retail business in the Ecommerce <br />
              Products and accessories for kids
            </h2>

            <p className="text-gray-600 mb-4">
              <span className="text-pink-500 font-semibold">Balloon</span>, with
              a rich legacy spanning 12 years, stands as a venerable online
              destination for automotive enthusiasts seeking a diverse range of
              high-quality vehicle components.
            </p>

            <p className="text-gray-500 mb-8">
              All components featured in their inventory undergo rigorous
              quality checks to meet or exceed industry standards, instilling
              confidence in customers regarding the reliability of their
              purchases.
            </p>

            {/* STATS BOX */}
            <div className="border border-pink-300 rounded-xl p-6 flex flex-col md:flex-row justify-between gap-6 text-center md:text-left">
              <div className="flex-1">
                <h3 className="text-3xl font-bold text-pink-500">25+</h3>
                <p className="text-gray-600 text-sm mt-1">
                  Retails Store in the city
                </p>
              </div>

              <div className="hidden md:block w-px bg-gray-300"></div>

              <div className="flex-1">
                <h3 className="text-3xl font-bold text-pink-500">300+</h3>
                <p className="text-gray-600 text-sm mt-1">
                  Active Delivery Person
                </p>
              </div>

              <div className="hidden md:block w-px bg-gray-300"></div>

              <div className="flex-1">
                <h3 className="text-3xl font-bold text-pink-500">120+</h3>
                <p className="text-gray-600 text-sm mt-1">
                  Brands and Companies
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-5 bg-[#f5f1e6] relative overflow-hidden">
        {/* BACKGROUND PATTERN */}
        <div className="absolute inset-0 opacity-10 bg-[url('/pattern.png')] bg-repeat"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* HEADING */}
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Shop by <span className="text-pink-500">Brands</span>
          </h2>

          {/* GRID */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {brands.map((brand, i) => (
              <div
                key={i}
                className="bg-white rounded-xl border border-dashed border-gray-300 p-5 text-center hover:shadow-lg transition duration-300"
              >
                <div className="h-[60px] flex items-center justify-center mb-3">
                  <Image
                    src={brand.img}
                    alt={brand.title}
                    width={100}
                    height={60}
                    className="object-contain"
                  />
                </div>

                <h4 className="text-sm font-semibold text-gray-700 mb-1">
                  {brand.title}
                </h4>

                <p className="text-xs text-gray-500">{brand.offer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Testimonials />
    </>
  );
}
