import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./(users)/navbar";
import Footer from "./(users)/footer";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/grid";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-full flex flex-col">
<<<<<<< HEAD
        <Navbar />
        {children}
        <Footer />
=======
        {children}
>>>>>>> 0a9e8a8d60dee6099fe44faf1eabf6448b7a1db0
      </body>
    </html>
  );
}
