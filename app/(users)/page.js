"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Grid } from "swiper/modules";
import Testimonials from "./testimonials";

// ─── DATA ────────────────────────────────────────────────────────────────────

const categories = [
  {
    label: "Indoor Games",
    color: "#2ecc71",
    stroke: "#00b894",
    bg: "#e8f8f0",
    emoji: "🎲",
  },
  {
    label: "Puzzle Games",
    color: "#f39c12",
    stroke: "#e67e22",
    bg: "#fef9e7",
    emoji: "🧩",
  },
  {
    label: "Kids Books",
    color: "#9b59b6",
    stroke: "#8e44ad",
    bg: "#f5eef8",
    emoji: "📚",
  },
  {
    label: "Balloons Cards",
    color: "#e74c3c",
    stroke: "#c0392b",
    bg: "#fdecea",
    emoji: "🎈",
  },
  {
    label: "Water Toys",
    color: "#ff69b4",
    stroke: "#e91e8c",
    bg: "#fde7f3",
    emoji: "💦",
  },
  {
    label: "Kids Toys",
    color: "#3498db",
    stroke: "#2980b9",
    bg: "#eaf4fc",
    emoji: "🧸",
    badge: "3 Item",
  },
  {
    label: "Art & Craft",
    color: "#e67e22",
    stroke: "#d35400",
    bg: "#fdf2e9",
    emoji: "🎨",
  },
  {
    label: "Outdoor Fun",
    color: "#1abc9c",
    stroke: "#16a085",
    bg: "#e8f8f5",
    emoji: "⚽",
  },
];

const VISIBLE = 6;
const ITEM_W = 200; // px per item (width + gap)

const featuredBanners = [
  {
    tag: "FEATURED",
    label: "Baby Toy's",
    price: "$0.99",
    bg: "bg-[#F4A261]",
    image:
      "https://azim.hostlin.com/Kiddex/assets/images/resource/feature-1.png",
  },
  {
    tag: "HOT DEAL",
    label: "Gaming",
    price: "$34.00",
    bg: "bg-[#2EC4B6]",
    image:
      "https://azim.hostlin.com/Kiddex/assets/images/resource/feature-2.png",
  },
  {
    tag: "LATEST",
    label: "Accessories",
    price: "$35.99",
    bg: "bg-[#E76F51]",
    image:
      "https://azim.hostlin.com/Kiddex/assets/images/resource/feature-3.png",
  },
];
const popularProducts = [
  {
    name: "Baby Kids Infant Swimming Neck Float",
    category: "Bath",
    price: "$05.99",
    old: "$06.99",
    badge: null,
    rating: 5,
    reviews: 4,
    image: "https://azim.hostlin.com/Kiddex/assets/images/shop/shop-9.png",
  },
  {
    name: "Cute Soft Long Cat Plush Toys Stuffed",
    category: "Doll",
    price: "$11.99",
    old: "$12.99",
    badge: null,
    rating: 5,
    reviews: 4,
    image: "https://azim.hostlin.com/Kiddex/assets/images/shop/shop-10.png",
  },
  {
    name: "Ultrasoft Stuffed Animal Plush Bunny",
    category: "Toy",
    price: "$06.99",
    old: "$07.49",
    badge: "6% Off",
    rating: 5,
    reviews: 5,
    image: "https://azim.hostlin.com/Kiddex/assets/images/shop/shop-11.png",
  },
  {
    name: "Kids Musical Piano Developmental Toy",
    category: "Music",
    price: "$01.99",
    old: "$02.99",
    badge: "6% Off",
    rating: 5,
    reviews: 2,
    image: "https://azim.hostlin.com/Kiddex/assets/images/shop/shop-12.png",
  },
  {
    name: "Avengers Action Figure Figurine Thano",
    category: "Toy",
    price: "$07.99",
    old: "$08.99",
    badge: null,
    rating: 3.5,
    reviews: 14,
    image: "https://azim.hostlin.com/Kiddex/assets/images/shop/shop-13.png",
  },
  {
    name: "Colorful Building Blocks Set 100pcs",
    category: "Educational",
    price: "$14.99",
    old: "$18.99",
    badge: "21% Off",
    rating: 5,
    reviews: 31,
    image: "https://azim.hostlin.com/Kiddex/assets/images/shop/shop-14.png",
  },
  {
    name: "Remote Control Monster Truck Kids",
    category: "RC Toy",
    price: "$19.99",
    old: "$24.99",
    badge: "20% Off",
    rating: 4.5,
    reviews: 18,
    image: "https://azim.hostlin.com/Kiddex/assets/images/shop/shop-15.png",
  },
  {
    name: "Wooden Puzzle Animals Safari Set",
    category: "Puzzle",
    price: "$08.99",
    old: "$10.99",
    badge: null,
    rating: 4,
    reviews: 9,
    image: "https://azim.hostlin.com/Kiddex/assets/images/shop/shop-16.png",
  },
  {
    name: "Glow in the Dark Star Stickers Pack",
    category: "Decor",
    price: "$03.49",
    old: "$04.99",
    badge: "30% Off",
    rating: 5,
    reviews: 42,
    image: "https://azim.hostlin.com/Kiddex/assets/images/shop/shop-17.png",
  },
  {
    name: "Art & Craft Paint Set for Kids 24pcs",
    category: "Art",
    price: "$09.99",
    old: "$12.99",
    badge: null,
    rating: 4.5,
    reviews: 27,
    image: "https://azim.hostlin.com/Kiddex/assets/images/shop/shop-18.png",
  },
  {
    name: "Magnetic Drawing Board Doodle Pad",
    category: "Educational",
    price: "$06.49",
    old: "$08.99",
    badge: "28% Off",
    rating: 5,
    reviews: 55,
    image: "https://azim.hostlin.com/Kiddex/assets/images/shop/shop-19.png",
  },
  {
    name: "Soft Foam Play Mat Colorful Tiles",
    category: "Play Mat",
    price: "$22.99",
    old: "$29.99",
    badge: null,
    rating: 4,
    reviews: 13,
    image: "https://azim.hostlin.com/Kiddex/assets/images/shop/shop-20.png",
  },
];

const dealOfDay = [
  {
    name: "3d Cartoon – Toy action Figures of Captain America",
    image: "https://azim.hostlin.com/Kiddex/assets/images/resource/deals-1.jpg",
  },
  {
    name: "3d Cartoon – Cartoon Hulk with green action",
    image: "https://azim.hostlin.com/Kiddex/assets/images/resource/deals-2.jpg",
  },
];

const products = [
  {
    id: 1,
    name: "Sunny Ride on & Car for Kids with Music",
    price: "$08.99",
    old: "$09.99",
    img: "https://azim.hostlin.com/Kiddex/assets/images/shop/shop-1.png",
  },
  {
    id: 2,
    name: "Creation Rotating and Musical Doll with 3D",
    price: "$05.99",
    old: "$06.99",
    img: "https://azim.hostlin.com/Kiddex/assets/images/shop/shop-2.png",
  },
  {
    id: 3,
    name: "Cute Big Jumping Fish",
    price: "$02.99",
    old: "$03.99",
    img: "https://azim.hostlin.com/Kiddex/assets/images/shop/shop-3.png",
  },
  {
    id: 4,
    name: "Heart shaped lego container",
    price: "$07.99",
    old: "$08.99",
    img: "https://azim.hostlin.com/Kiddex/assets/images/shop/shop-4.png",
  },
  {
    id: 5,
    name: "Color Balloons Set",
    price: "$01.99",
    old: "$02.99",
    img: "https://azim.hostlin.com/Kiddex/assets/images/shop/shop-5.png",
  },
  {
    id: 6,
    name: "Dinosaur Soft Toy",
    price: "$06.99",
    old: "$07.99",
    img: "https://azim.hostlin.com/Kiddex/assets/images/shop/shop-6.png",
  },
  {
    id: 7,
    name: "Dinosaur Soft Toy",
    price: "$06.99",
    old: "$07.99",
    img: "https://azim.hostlin.com/Kiddex/assets/images/shop/shop-7.png",
  },
  {
    id: 8,
    name: "Dinosaur Soft Toy",
    price: "$06.99",
    old: "$07.99",
    img: "https://azim.hostlin.com/Kiddex/assets/images/shop/shop-8.png",
  },
];

const promoTags = [
  "Puzzles ✦",
  "Cubes ✦",
  "Toy Car ✦",
  "Girls Doll ✦",
  "Balloons ✦",
  "Or Plate ✦",
];

// ─── COMPONENTS ──────────────────────────────────────────────────────────────

const heroStars = [
  { size: "text-xl", top: "top-10", left: "left-[8%]", delay: "0s" },
  { size: "text-3xl", top: "top-20", left: "left-[42%]", delay: "1.2s" },
  { size: "text-2xl", top: "top-14", right: "right-[12%]", delay: "2.1s" },
  { size: "text-lg", top: "top-[52%]", left: "left-[6%]", delay: "0.8s" },
  { size: "text-4xl", top: "top-[60%]", right: "right-[8%]", delay: "1.7s" },
  { size: "text-xl", top: "bottom-12", left: "left-[34%]", delay: "2.6s" },
];

const Stars = ({ count = 5 }) => (
  <span className="text-[#FFB800] text-xs">
    {"★".repeat(count)}
    {"☆".repeat(5 - count)}
  </span>
);

function ProductRatingStars({ rating }) {
  return (
    <div className="flex items-center justify-center gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => {
        const filled = i <= Math.floor(rating);
        const half = !filled && i - 0.5 <= rating;

        return (
          <svg key={i} viewBox="0 0 20 20" className="h-3 w-3">
            {half && (
              <defs>
                <linearGradient id={`popular-picks-half-${i}`}>
                  <stop offset="50%" stopColor="#f59e0b" />
                  <stop offset="50%" stopColor="#e5e7eb" />
                </linearGradient>
              </defs>
            )}
            <path
              fill={
                filled
                  ? "#f59e0b"
                  : half
                    ? `url(#popular-picks-half-${i})`
                    : "#e5e7eb"
              }
              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.286 3.957c.3.921-.755 1.688-1.54 1.118L10 15.347l-3.37 2.448c-.784.57-1.838-.197-1.539-1.118l1.286-3.957a1 1 0 00-.364-1.118L2.644 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69L9.049 2.927z"
            />
          </svg>
        );
      })}
    </div>
  );
}

function KiteSVG() {
  return (
    <svg
      viewBox="0 0 72 96"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-20 w-16"
    >
      <polygon
        points="36,4 68,38 36,72 4,38"
        fill="#F59E0B"
        stroke="#E88A00"
        strokeWidth="1"
      />
      <polygon points="36,4 68,38 36,38" fill="#EF4444" opacity="0.7" />
      <polygon points="4,38 36,38 36,72" fill="#22C55E" opacity="0.7" />
      <line
        x1="36"
        y1="72"
        x2="28"
        y2="90"
        stroke="#E84393"
        strokeWidth="1.5"
        strokeDasharray="3,3"
      />
      <circle cx="24" cy="88" r="3" fill="#E84393" />
      <circle cx="32" cy="93" r="2" fill="#E84393" />
    </svg>
  );
}

function PopularPicksArrowButton({ direction, onClick, disabled }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`absolute top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-lg transition-all duration-200 ${
        direction === "left" ? "-left-5" : "-right-5"
      } ${
        disabled
          ? "cursor-not-allowed opacity-30"
          : "cursor-pointer hover:scale-110 hover:border-[#E84393] hover:bg-[#E84393] hover:text-white"
      }`}
      aria-label={direction === "left" ? "Previous products" : "Next products"}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        className="h-4 w-4"
      >
        {direction === "left" ? (
          <path
            d="M15 18l-6-6 6-6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        ) : (
          <path
            d="M9 18l6-6-6-6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        )}
      </svg>
    </button>
  );
}

function PopularProductCard({ product, onAddToCart }) {
  return (
    <div className="bg-white p-4 rounded-2xl text-center hover:shadow-lg transition h-full">
      <img
        src={product.image}
        alt={product.name}
        className="mx-auto h-32 object-contain"
      />

      <p className="text-xs text-gray-400 mt-2">Toy</p>

      <h3 className="text-sm font-semibold mt-1 line-clamp-2">
        {product.name}
      </h3>

      <div className="text-yellow-400 text-sm mt-1">★★★★★</div>

      <button
        onClick={onAddToCart}
        className="w-full rounded-full bg-green-500 py-2 text-[10px] font-black uppercase tracking-widest text-white transition-colors duration-200 hover:bg-[#E84393]"
      >
        whatsapp
      </button>
    </div>
  );
}

export default function Home() {
  // home page section 2 - categories carousel
  const [current, setCurrent] = useState(0);
  const autoRef = useRef(null);
  const max = categories.length - VISIBLE;

  const goTo = (idx) => {
    setCurrent(Math.max(0, Math.min(idx, max)));
  };

  const next = () => setCurrent((c) => (c < max ? c + 1 : 0));
  const prev = () => setCurrent((c) => (c > 0 ? c - 1 : max));

  const startAuto = () => {
    autoRef.current = setInterval(next, 2800);
  };
  const stopAuto = () => clearInterval(autoRef.current);
  const resetAuto = () => {
    stopAuto();
    startAuto();
  };

  useEffect(() => {
    startAuto();
    return () => stopAuto();
  }, []);

  // Touch swipe
  const touchStartX = useRef(0);
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e) => {
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (dx < -40) {
      next();
      resetAuto();
    } else if (dx > 40) {
      prev();
      resetAuto();
    }
  };

  const dotCount = max + 1;

  const [activeTab, setActiveTab] = useState(0);
  const [cartCount, setCartCount] = useState(0);
  const [heroVisible, setHeroVisible] = useState(false);
  const [dealTimer, setDealTimer] = useState({ h: 11, m: 47, s: 22 });
  const [popularCurrent, setPopularCurrent] = useState(0);
  const popularVisible = 4;
  const popularMaxIndex = popularProducts.length - popularVisible;

  useEffect(() => {
    setTimeout(() => setHeroVisible(true), 100);
    const t = setInterval(() => {
      setDealTimer((prev) => {
        let { h, m, s } = prev;
        s--;
        if (s < 0) {
          s = 59;
          m--;
        }
        if (m < 0) {
          m = 59;
          h--;
        }
        if (h < 0) {
          h = 23;
          m = 59;
          s = 59;
        }
        return { h, m, s };
      });
    }, 1000);
    return () => clearInterval(t);
  }, []);

  const pad = (n) => String(n).padStart(2, "0");
  const addToCart = () => setCartCount((c) => c + 1);

  return (
    <div className="min-w-[320px] bg-white text-slate-800 font-sans selection:bg-[#E84393] selection:text-white">
      {/* ── HERO ── */}
      <section className="m-0 p-0 leading-none">
        <Image
          src="https://azim.hostlin.com/Kiddex/assets/images/shape/shape-21.png"
          alt="Decorative shape divider"
          width={1920}
          height={180}
          className="block h-auto w-full scale-y-[-1] bg-amber-300"
        />
      </section>
      <section className="relative overflow-hidden bg-amber-300 py-16 px-5">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-32 -top-24 h-56 w-56 rounded-full bg-white/30 blur-3xl" />
          <div className="absolute -bottom-16 -right-12 h-48 w-48 rounded-full bg-[#ff8fc7]/25 blur-3xl" />
          {heroStars.map((star, index) => (
            <span
              key={index}
              className={`absolute ${star.size} ${star.top} ${star.left || ""} ${star.right || ""} text-white/90 drop-shadow-[0_0_18px_rgba(255,255,255,0.75)] animate-hero-star`}
              style={{ animationDelay: star.delay }}
            >
              ✦
            </span>
          ))}
        </div>
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          <div
            className={`relative z-10 flex-1 transition-all duration-1000 transform ${heroVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <div className="inline-block bg-[#FFE0EE] text-[#E84393] text-[11px] font-black px-4 py-1 rounded-full mb-6 uppercase tracking-widest">
              🎁 Free Delivery on $50+
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-[1.1] mb-6">
              The Best Kids
              <br />
              <span className="text-[#E84393]">Toy Store</span>
              <br />
              in the City
            </h1>

            <button
              onClick={addToCart}
              className="bg-gradient-to-r from-[#E84393] to-[#FF6B6B] text-white px-10 py-4 rounded-full font-black text-sm uppercase tracking-widest shadow-lg shadow-pink-200 hover:scale-105 active:scale-95 transition-all"
            >
              🛍️ View Shop
            </button>
          </div>
          <div
            className={`relative z-10 w-100 h-100 md:w-[400px] md:h-[400px] bg-white/95 rounded-full flex items-center justify-center text-[180px] shadow-2xl ring-8 ring-white/40 transition-all duration-1000 delay-200 animate-bounce-slow transform ${heroVisible ? "scale-100 opacity-100" : "scale-50 opacity-0"}`}
          >
            <span className="absolute left-8 top-12 text-2xl text-[#FFB800] animate-hero-star">
              ★
            </span>
            <span
              className="absolute bottom-16 right-10 text-xl text-[#E84393] animate-hero-star"
              style={{ animationDelay: "1s" }}
            >
              ✦
            </span>
            <Image
              src="https://azim.hostlin.com/Kiddex/assets/images/banner/banner-img-1.png"
              alt="Hero Toy"
              width={400}
              height={400}
              className="object-contain"
            />
          </div>
        </div>
      </section>

      <section className="m-0 p-0 leading-none">
        <Image
          src="https://azim.hostlin.com/Kiddex/assets/images/shape/shape-21.png"
          alt="Decorative shape divider"
          width={1920}
          height={180}
          className="block h-auto w-full bg-amber-300"
        />
      </section>

      {/* ── CATEGORIES ── */}
      <section
        className="relative py-10 px-4 overflow-hidden rounded-2xl"
        style={{
          background: "linear-gradient(135deg, #fffde7 0%, #e0f7fa 100%)",
        }}
        onMouseEnter={stopAuto}
        onMouseLeave={startAuto}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Decorative elements */}
        <span className="absolute text-2xl" style={{ top: 10, left: 30 }}>
          ⭐
        </span>
        <span className="absolute text-base" style={{ top: 24, left: 52 }}>
          ⭐
        </span>
        <span className="absolute text-xl" style={{ bottom: 12, right: 40 }}>
          🦋
        </span>

        {/* Prev Button */}
        <button
          onClick={() => {
            prev();
            resetAuto();
          }}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-white rounded-full w-9 h-9 flex items-center justify-center shadow-md text-lg hover:bg-gray-100 transition"
          aria-label="Previous"
        >
          ‹
        </button>

        {/* Next Button */}
        <button
          onClick={() => {
            next();
            resetAuto();
          }}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-white rounded-full w-9 h-9 flex items-center justify-center shadow-md text-lg hover:bg-gray-100 transition"
          aria-label="Next"
        >
          ›
        </button>

        {/* Track */}
        <div className="overflow-hidden">
          <div
            className="flex gap-8 transition-transform duration-500 ease-in-out px-8"
            style={{ transform: `translateX(-${current * ITEM_W}px)` }}
          >
            {categories.map((c, i) => (
              <div
                key={c.label}
                className="flex-none flex flex-col items-center cursor-pointer group"
                style={{ width: 140 }}
              >
                <div className="relative w-32 h-32 transition-transform duration-200 group-hover:scale-110">
                  {/* Cart badge */}
                  {c.badge && (
                    <div
                      className="absolute -top-1 -right-1 z-10 flex items-center gap-1 text-white text-xs font-bold rounded-lg px-2 py-1"
                      style={{ background: "#ff4f8b" }}
                    >
                      🛒 {c.badge}
                    </div>
                  )}

                  {/* Brushstroke ring SVG */}
                  <svg
                    viewBox="0 0 130 130"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute inset-0 w-full h-full"
                  >
                    <circle
                      cx="65"
                      cy="65"
                      r="55"
                      fill="none"
                      stroke={c.color}
                      strokeWidth="14"
                      strokeDasharray="220 120"
                      strokeLinecap="round"
                      opacity="0.9"
                      transform="rotate(-60 65 65)"
                    />
                    <circle
                      cx="65"
                      cy="65"
                      r="55"
                      fill="none"
                      stroke={c.stroke}
                      strokeWidth="8"
                      strokeDasharray="80 260"
                      strokeLinecap="round"
                      opacity="0.6"
                      transform="rotate(100 65 65)"
                    />
                  </svg>

                  {/* Emoji / Image placeholder */}
                  <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full flex items-center justify-center text-4xl"
                    style={{ background: c.bg }}
                  >
                    {c.emoji}
                  </div>
                </div>

                <span className="mt-3 text-xs font-black text-gray-700 uppercase tracking-tight text-center">
                  {c.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-4">
          {Array.from({ length: dotCount }).map((_, i) => (
            <button
              key={i}
              onClick={() => {
                goTo(i);
                resetAuto();
              }}
              className="h-2 rounded-full transition-all duration-300"
              style={{
                width: i === current ? 18 : 7,
                background: i === current ? "#ff4f8b" : "#ccc",
              }}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </section>

      {/* ── FEATURED BANNERS ── */}
      <section className="px-5 pb-16 max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {featuredBanners.map((b) => (
          <div
            key={b.label}
            className={`${b.bg} h-80 rounded-3xl p-3 flex items-center justify-between text-white group hover:-translate-y-2 transition-transform cursor-pointer shadow-xl overflow-hidden`}
          >
            <div className="flex flex-col gap-3 p-5">
              <span className="inline-block bg-white/30 text-xs font-black px-4 py-1.5 rounded-full w-fit">
                {b.tag}
              </span>
              <h3 className="text-2xl font-black leading-tight">{b.label}</h3>
              <button className="bg-white text-slate-800 px-6 py-2.5 rounded-full text-sm font-black shadow-lg w-fit">
                Shop Now
              </button>
            </div>

            <div className="h-full w-[220px] shrink-0 flex items-end justify-center group-hover:scale-105 transition-transform duration-500">
              <Image
                src={b.image}
                alt={b.label}
                width={220}
                height={320}
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        ))}
      </section>

      {/* ── POPULAR PICKS ── */}
      <section
        className="relative overflow-hidden px-6 py-14"
        style={{
          background:
            "linear-gradient(135deg, #fff0f5 0%, #fffbf0 60%, #f5f5f0 100%)",
        }}
      >
        <div className="pointer-events-none absolute left-5 top-5">
          <KiteSVG />
        </div>

        <div className="absolute left-4 top-28 flex h-8 w-8 items-center justify-center rounded-full bg-[#E84393] text-[9px] font-black tracking-wider text-white">
          RTL
        </div>

        <div className="mb-10 text-center">
          <h2 className="text-4xl font-black tracking-tight text-slate-900 md:text-5xl">
            Today&apos;s <span className="text-[#E84393]">popular picks</span>
          </h2>
        </div>

        <div className="relative mx-auto max-w-[1200px] px-6">
          <PopularPicksArrowButton
            direction="left"
            onClick={() => setPopularCurrent((c) => Math.max(0, c - 1))}
            disabled={popularCurrent === 0}
          />

          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${popularCurrent * (100 / popularVisible)}%)`,
              }}
            >
              {popularProducts.map((product) => (
                <div
                  key={product.name}
                  className="shrink-0 px-2"
                  style={{ width: `${100 / popularVisible}%` }}
                >
                  <PopularProductCard
                    product={product}
                    onAddToCart={addToCart}
                  />
                </div>
              ))}
            </div>
          </div>

          <PopularPicksArrowButton
            direction="right"
            onClick={() =>
              setPopularCurrent((c) => Math.min(popularMaxIndex, c + 1))
            }
            disabled={popularCurrent === popularMaxIndex}
          />

          <div className="mt-6 flex justify-center gap-2">
            {Array.from({ length: popularMaxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => setPopularCurrent(i)}
                className={`rounded-full transition-all duration-300 ${
                  i === popularCurrent
                    ? "h-2 w-5 bg-[#E84393]"
                    : "h-2 w-2 bg-slate-300 hover:bg-slate-400"
                }`}
                aria-label={`Go to popular picks slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── DEAL OF THE DAY ── */}
      <section className="bg-[#FFF5F9] py-16 px-5">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-6">
            <h2 className="text-3xl font-black text-slate-900">
              Deal of <span className="text-[#E84393]">the Day</span>
            </h2>
            <div className="flex items-center space-x-3">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                Ends in:
              </span>
              {[dealTimer.h, dealTimer.m, dealTimer.s].map((v, i) => (
                <div
                  key={i}
                  className="bg-slate-900 text-white w-12 h-12 flex items-center justify-center rounded-xl text-xl font-black"
                >
                  {pad(v)}
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {dealOfDay.map((d) => (
              <div
                key={d.name}
                className="bg-white p-8 rounded-[40px] flex flex-col sm:flex-row items-center gap-8 border-4 border-[#FFE0EE] shadow-xl"
              >
                <Image
                  className="object-contain "
                  height={200}
                  width={200}
                  src={d.image}
                  alt={d.name}
                />
                <div className="flex flex-col flex-1 items-center sm:items-start text-center sm:text-left gap-4">
                  <h3 className="text-lg font-black leading-tight mb-3">
                    {d.name}
                  </h3>
                  <Stars />
                  <button
                    onClick={addToCart}
                    className="bg-green-500 text-white px-8 py-3 rounded-full font-black text-xs uppercase tracking-widest hover:bg-slate-900 transition-colors"
                  >
                    whatsapp
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-6">
          {/* LEFT BANNER */}
          <div className="col-span-1 relative rounded-3xl overflow-hidden">
            {/* Background Image */}
            <Image
              src="https://azim.hostlin.com/Kiddex/assets/images/resource/ads-1.jpg"
              alt="toy"
              fill
              className="object-cover"
            />

            {/* Overlay Gradient */}
            <div className="absolute inset-0 opacity-80"></div>

            {/* Content */}
            <div className="absolute inset-0 p-6 flex flex-col justify-between text-white z-10">
              <div>
                <p className="text-xs uppercase tracking-widest">Featured</p>
                <h2 className="text-xl font-bold mt-2">
                  Kid Toy Collection <br /> for Summer
                </h2>

                <button className="mt-4 bg-white text-orange-500 px-4 py-2 rounded-full text-sm font-semibold">
                  View Shop
                </button>
              </div>
            </div>
          </div>
          {/* RIGHT CONTENT */}
          <div className="col-span-3">
            {/* HEADER */}
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-5xl font-semibold">
                Top Selling <span className="text-pink-500">products</span>
              </h2>
            </div>

            {/* SLIDER */}
            <Swiper
              modules={[Navigation, Autoplay, Grid]}
              spaceBetween={20}
              slidesPerView={4}
              navigation
              autoplay={{ delay: 3000 }}
              grid={{
                rows: 2,
                fill: "row",
              }}
              breakpoints={{
                320: { slidesPerView: 1, grid: { rows: 2 } },
                640: { slidesPerView: 2, grid: { rows: 2 } },
                1024: { slidesPerView: 4, grid: { rows: 2 } },
              }}
            >
              {products.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className="bg-[#fdf3f5] p-4 rounded-2xl text-center hover:shadow-lg transition h-full">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="mx-auto h-32 object-contain"
                    />

                    <p className="text-xs text-gray-400 mt-2">Toy</p>

                    <h3 className="text-sm font-semibold mt-1 line-clamp-2">
                      {item.name}
                    </h3>

                    <div className="text-yellow-400 text-sm mt-1">★★★★★</div>

                    <div className="mt-1">
                      <span className="text-gray-400 line-through text-sm mr-2">
                        {item.old}
                      </span>
                      <span className="text-red-500 font-bold">
                        {item.price}
                      </span>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      {/* ── PROMO TICKER ── */}
      <div className="bg-slate-900 py-4 overflow-hidden whitespace-nowrap">
        <div className="inline-block animate-marquee">
          {[...promoTags, ...promoTags, ...promoTags].map((t, i) => (
            <span
              key={i}
              className="text-[#FFB800] font-black text-sm mx-10 uppercase tracking-[0.2em]"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      <Testimonials />
    </div>
  );
}
