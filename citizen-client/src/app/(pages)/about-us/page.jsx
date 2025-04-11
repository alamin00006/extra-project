import About from "@/components/Pages/About/About";
import WhoWeAre from "@/components/Pages/About/WhoWeAre";

export const metadata = {
  title: "About Citzien",
  description: "About Citzien",
};

const AboutPage = () => {
  return (
    <div className="custom-container">
  <WhoWeAre/>
  <About/>
  
  
    </div>
  );
};

export default AboutPage;
