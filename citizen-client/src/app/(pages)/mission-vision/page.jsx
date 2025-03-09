


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
      <div className="bg-blue-100 p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold text-blue-900 mb-4">Our Mission</h2>
        <p className="text-gray-700">
          Our mission is to provide innovative, high-quality, and accessible solutions that improve the well-being of individuals and communities. We are committed to delivering excellence through our services, ensuring customer satisfaction, and fostering sustainable development.
        </p>
      </div>

      {/* Vision Section */}
      <div className="bg-green-100 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-green-900 mb-4">Our Vision</h2>
        <p className="text-gray-700">
          Our vision is to be a globally recognized organization that leads with integrity, innovation, and impact. We aim to create a future where technology and human-centered solutions drive progress, sustainability, and a better quality of life for all.
        </p>
      </div>
    </div>
  );
};

export default MissionVision;
