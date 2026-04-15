import Link from "next/link";
import Image from "next/image";
import dbConnect from "@/backend/dbConfig/db";
import Toy from "@/backend/models/Toy";

async function getLatestProducts() {
  await dbConnect();
  return await Toy.find({}).sort({ createdAt: -1 }).limit(8).lean();
}

export default async function HomePage() {
  const products = await getLatestProducts();

  return (
    <div
      className="min-h-screen"
      style={{
        background: "linear-gradient(135deg, #fff5f9 0%, #fffdf0 50%, #f0fff4 100%)",
        fontFamily: "'Nunito', sans-serif",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&display=swap');

        .toy-card {
          background: #ffffff;
          border-radius: 20px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.06);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
          overflow: hidden;
          cursor: pointer;
        }
        .toy-card:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 16px 40px rgba(232, 67, 147, 0.18);
        }
        .toy-card:hover .card-image-wrap {
          background: linear-gradient(135deg, #fff0f7 0%, #fffbe0 100%);
        }
        .toy-card:hover .add-btn {
          opacity: 1;
          transform: translateY(0);
        }

        .add-btn {
          opacity: 0;
          transform: translateY(6px);
          transition: opacity 0.2s ease, transform 0.2s ease;
        }

        .card-image-wrap {
          background: linear-gradient(135deg, #fdf6ff 0%, #fffbe8 100%);
          transition: background 0.3s ease;
        }

        .hero-title span.pink { color: #E84393; }
        .hero-title span.yellow { color: #FFB800; }

        .stat-card {
          background: white;
          border-radius: 16px;
          box-shadow: 0 2px 12px rgba(0,0,0,0.06);
          transition: transform 0.2s ease;
        }
        .stat-card:hover { transform: translateY(-3px); }

        .dot-pink { background: #E84393; }
        .dot-yellow { background: #FFB800; }
        .dot-green { background: #22c55e; }
      `}</style>

      {/* HERO SECTION */}
      <div className="px-8 pt-10 pb-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <p className="text-xs font-bold tracking-widest uppercase text-[#E84393] mb-2 opacity-70">
                Admin Dashboard
              </p>
              <h1
                className="hero-title text-4xl md:text-5xl font-black leading-tight"
                style={{ color: "#1a1a2e" }}
              >
                Today&apos;s{" "}
                <span className="pink">popular</span>{" "}
                <span className="yellow">picks</span> 🎉
              </h1>
              <p className="text-sm text-gray-400 font-semibold mt-2">
                {products.length} products in your vault
              </p>
            </div>

            {/* STAT PILLS */}
            <div className="flex gap-3 flex-wrap">
              <div className="stat-card px-5 py-3 flex items-center gap-3">
                <div className="w-3 h-3 rounded-full dot-pink" />
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Total</p>
                  <p className="text-lg font-black text-[#1a1a2e]">{products.length}</p>
                </div>
              </div>
              <div className="stat-card px-5 py-3 flex items-center gap-3">
                <div className="w-3 h-3 rounded-full dot-yellow" />
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Latest</p>
                  <p className="text-lg font-black text-[#1a1a2e]">
                    {products[0]
                      ? new Date(products[0].createdAt).toLocaleDateString("en-GB", {
                          day: "2-digit",
                          month: "short",
                        })
                      : "—"}
                  </p>
                </div>
              </div>
              <Link href="/admin/home/addProduct">
                <div
                  className="px-5 py-3 rounded-2xl font-bold text-sm text-white flex items-center gap-2 cursor-pointer transition-opacity hover:opacity-90"
                  style={{
                    background: "linear-gradient(135deg, #E84393, #FFB800)",
                    boxShadow: "0 4px 16px rgba(232,67,147,0.3)",
                  }}
                >
                  <span className="text-lg">+</span> Add Product
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* DIVIDER */}
      <div className="mx-8 border-t border-dashed border-pink-100 my-4" />

      {/* PRODUCT GRID or EMPTY STATE */}
      <div className="px-8 pb-12 max-w-7xl mx-auto">
        {products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div key={String(product._id)} className="toy-card">
                {/* Image Area */}
                <div className="card-image-wrap w-full aspect-square relative flex items-center justify-center p-6">
                  {product.images?.[0] ? (
                    <Image
                      src={product.images[0]}
                      alt={product.title}
                      fill
                      className="object-contain p-4"
                    />
                  ) : (
                    <div className="text-6xl select-none">🧸</div>
                  )}
                </div>

                {/* Card Body */}
                <div className="px-4 pt-3 pb-4">
                  <p
                    className="text-[10px] font-bold uppercase tracking-widest mb-1"
                    style={{ color: "#E84393" }}
                  >
                    {product.category || "Toy"}
                  </p>
                  <h3 className="text-sm font-bold text-[#1a1a2e] leading-snug mb-1 line-clamp-2">
                    {product.title}
                  </h3>

                  {/* Stars */}
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-3.5 h-3.5"
                        viewBox="0 0 20 20"
                        fill="#FFB800"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                    <span className="text-[10px] text-gray-400 font-semibold ml-1">5.0</span>
                  </div>

                  <p className="text-[11px] text-gray-400 font-semibold mb-3">
                    {product.brand} · {product.age}
                  </p>

                  {/* Action Button — only visible on hover */}
                  <Link href={`/admin/home/products/${product._id}`}>
                    <button
                      className="add-btn w-full py-2 rounded-full text-white text-xs font-bold tracking-wider uppercase"
                      style={{
                        background: "linear-gradient(90deg, #E84393, #FFB800)",
                      }}
                    >
                      View Details →
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* EMPTY STATE */
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <div className="text-7xl mb-6 animate-bounce">🧸</div>
            <h2 className="text-2xl font-black text-[#1a1a2e] mb-2">
              Your vault is <span style={{ color: "#E84393" }}>empty!</span>
            </h2>
            <p className="text-sm text-gray-400 font-semibold mb-8">
              Ready to add your first toy?
            </p>
            <Link href="/admin/home/addProduct">
              <button
                className="px-8 py-3 rounded-full text-white font-bold text-sm tracking-wide shadow-lg hover:opacity-90 transition-opacity active:scale-95"
                style={{
                  background: "linear-gradient(135deg, #E84393, #FFB800)",
                  boxShadow: "0 6px 24px rgba(232,67,147,0.35)",
                }}
              >
                + Add First Product
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}