import React from "react";

function footer() {
  return (
    <>
      {" "}
      <footer className="bg-slate-900 text-slate-400 pt-20 pb-10 px-5">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="text-3xl font-black">
              <span className="text-[#E84393]">KIDD</span>
              <span className="text-[#FFB800]">EX</span>
            </div>
            <p className="text-sm leading-relaxed">
              Your one-stop shop for the best kids&apos; toys, games, and
              accessories. Quality and safety guaranteed.
            </p>
            <div className="flex space-x-3">
              {["📘", "🐦", "📸"].map((ic, i) => (
                <div
                  key={i}
                  className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center cursor-pointer hover:bg-[#E84393] transition-colors"
                >
                  {ic}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-black mb-6 uppercase tracking-widest text-sm">
              Quick Links
            </h4>
            <ul className="space-y-4 text-sm font-bold">
              {[
                "Shop All",
                "New Arrivals",
                "Best Sellers",
                "Sale Items",
                "About Us",
              ].map((l) => (
                <li key={l} className="hover:text-white cursor-pointer">
                  {l}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-black mb-6 uppercase tracking-widest text-sm">
              Customer Care
            </h4>
            <ul className="space-y-4 text-sm font-bold">
              {[
                "Order Tracking",
                "Shipping Policy",
                "Return Policy",
                "Privacy",
                "Terms",
              ].map((l) => (
                <li key={l} className="hover:text-white cursor-pointer">
                  {l}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-black mb-6 uppercase tracking-widest text-sm">
              Join the Fun
            </h4>
            <p className="text-xs mb-6">
              Subscribe for exclusive deals and updates!
            </p>
            <div className="flex bg-slate-800 rounded-full p-1 border border-slate-700">
              <input
                className="bg-transparent border-none outline-none text-xs px-4 flex-1 text-white"
                placeholder="Email address"
              />
              <button className="bg-[#E84393] text-white px-5 py-2 rounded-full font-black text-xs hover:bg-white hover:text-slate-900 transition-colors">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-10 text-center text-[10px] font-bold uppercase tracking-[0.2em]">
          © 2024 Kiddex Store. Created for Joyful Childhoods.
        </div>
      </footer>
    </>
  );
}

export default footer;
