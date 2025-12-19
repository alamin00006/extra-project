import "./globals.css";
import "./responsive.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import "@splidejs/react-splide/css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/Home/Footer";
import TopNavber from "@/components/shared/TopNavber";
import { Providers } from "@/redux/providers";
import Head from "next/head";
import FacebookPixel from "@/components/pixel/FacebookPixel";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link
          rel="preload"
          href="/images/logo.png"
          as="image"
          type="image/png"
        />
      </Head>
      <body className="antialiased">
        <Providers>
          <FacebookPixel />

          <TopNavber />

          <nav className="sticky top-0 z-50 transition-all duration-300 ease-in-out">
            <Navbar />
          </nav>

          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
