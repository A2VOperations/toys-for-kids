"use client";

import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaBuilding } from "react-icons/fa";

export default function ContactPage() {
  return (
    <div className="bg-gray-100 min-h-screen py-16 px-4">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-center mb-12 text-black">
        Contact <span className="text-pink-500">Information</span>
      </h1>

      {/* Top Cards */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-6 mb-16">
        {[
          {
            title: "Corporate Office",
            desc: "0233 Brisbane Cir. Shiloh, Australia 81063",
            color: "bg-orange-500",
            icon: <FaBuilding />,
          },
          {
            title: "Main Warehouse",
            desc: "0233 Brisbane Cir. Shiloh, Australia 81063",
            color: "bg-blue-500",
            icon: <FaMapMarkerAlt />,
          },
          {
            title: "Email Address",
            desc: "contact@example.com\nsupport@example.com",
            color: "bg-green-500",
            icon: <FaEnvelope />,
          },
          {
            title: "Phone Number",
            desc: "+(208) 544-0142\n+(208) 544-0143",
            color: "bg-red-500",
            icon: <FaPhoneAlt />,
          },
        ].map((item, i) => (
          <div
            key={i}
            className={`${item.color} rounded-2xl p-6 flex items-center gap-4`}
          >
            <div className="bg-white text-black p-3 rounded-full">
              {item.icon}
            </div>
            <div>
              <h3 className="font-semibold text-lg">{item.title}</h3>
              <p className="text-sm whitespace-pre-line">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Form + Map */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 border border-dashed border-pink-800 p-6 rounded-xl">
        {/* Form */}
        <form className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Name"
              className="p-3 rounded-full border border-black placeholder:text-gray-500 outline-none"
            />
            <input
              type="email"
              placeholder="E-mail"
              className="p-3 rounded-full border border-black placeholder:text-gray-500 outline-none"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Phone"
              className="p-3 rounded-full border border-black placeholder:text-gray-500 outline-none"
            />
            <input
              type="text"
              placeholder="Subject"
              className="p-3 rounded-full border border-black placeholder:text-gray-500 outline-none"
            />
          </div>

          <textarea
            placeholder="Write Message *"
            rows={5}
            className="w-full p-4 rounded-xl border border-black placeholder:text-gray-500 b outline-none"
          />

          <button className="bg-pink-500 text-white px-6 py-3 rounded-full hover:bg-pink-600 transition">
            Send Message
          </button>
        </form>

        {/* Map */}
        <div className="w-full h-[400px] rounded-xl overflow-hidden">
          <iframe
            src="https://www.google.com/maps?q=New+York&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
