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

export default function RootLayout({ children }) {
  return (
    <Providers>
      <html lang="en">
        <body className="antialiased">
          <div className="hidden md:block">
            <TopNavber />
          </div>

          {/* Apply the sticky-navbar class on page load and after scroll */}
          <nav className="sticky top-0 z-50 transition-all duration-300 ease-in-out">
            <Navbar />
          </nav>

          {children}
          <Footer />
        </body>
      </html>
    </Providers>
  );
}
