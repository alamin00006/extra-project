export const metadata = {
  title: "Citzen | Doctors",
  description: "Citezen Doctors",
};

const MissionVision = () => {
  return (
    <div className="custom-container px-6 py-12">
      {/* Page Title */}
      <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">
        Our Mission & Vision
      </h1>

      {/* Mission Section */}
      <div className=" p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold text-blue-900 mb-4">
          Our Mission
        </h2>
        <p className="text-gray-600 font-english font-medium text-lg">
          To be the leading home healthcare provider in Bangladesh,
          revolutionizing primary medical services with innovation, trust, and
          excellence, making quality healthcare available at every doorstep. We
          aim to give world-class regular Health Monitoring, Guidance, and
          Lifestyle management for all patients and people of Bangladesh.
        </p>
      </div>

      {/* Vision Section */}
      <div className="p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-green-900 mb-4">
          Our Vision
        </h2>
        <p className="text-gray-600 font-english font-medium text-lg">
          To be the most trusted home healthcare provider in Bangladesh,
          pioneering a future where quality healthcare is just a doorstep away.
          We envision a healthier nation with proactive primary medical support,
          easy healthcare accessibility, and a commitment to patient-centric
          innovation.
        </p>
      </div>
    </div>
  );
};

export default MissionVision;
