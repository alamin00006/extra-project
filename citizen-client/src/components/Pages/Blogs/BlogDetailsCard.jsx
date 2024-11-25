// components/HealthcareService.js

import Image from "next/image";

const BlogDetailsCard = () => (
  <div className="max-w-4xl mx-auto p-6 space-y-8">
    {/* Hero Image */}
    <div className="flex justify-center">
      <Image
        src="/images/blog-details1.jpg"
        alt="10 Taka Health Service Hero"
        className="rounded-lg shadow-lg"
        width={800}
        height={400}
        objectFit="cover"
      />
    </div>

    {/* Content Section */}
    <section className="space-y-6 text-gray-700">
      {/* Introduction */}
      <div>
        <p className="leading-relaxed">
          Access to affordable healthcare is a critical need for citizens around
          the world, especially in developing countries where financial barriers
          often prevent people from receiving essential medical services...
        </p>
      </div>

      {/* What is the 10 Taka Health Service Program */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-800">
          What Is The 10 Taka Health Service Program?
        </h2>
        <p className="leading-relaxed mt-4">
          The 10 Taka Health Service initiative was introduced with the vision
          of {"Healthcare for All"}...
        </p>
      </div>

      {/* Key Features */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-800">
          Key Features Of The 10 Taka Health Service
        </h2>
        <ul className="list-disc list-inside mt-4 space-y-2">
          <li>
            <span className="font-semibold">Affordable Medical Service:</span>{" "}
            Citizens can access basic healthcare services...
          </li>
          <li>
            <span className="font-semibold">
              Focus on Rural and Underserved Areas:
            </span>{" "}
            The program ensures that health services are...
          </li>
          <li>
            <span className="font-semibold">
              Improving Access to Primary Healthcare:
            </span>{" "}
            The primary goal is to enhance access to basic health services...
          </li>
          <li>
            <span className="font-semibold">
              Eliminating Financial Barriers:
            </span>{" "}
            By charging only 10 Taka, the program aims to address...
          </li>
          <li>
            <span className="font-semibold">Public-Private Collaboration:</span>{" "}
            This initiative involves partnership between...
          </li>
        </ul>
      </div>

      {/* Impact Section */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-800">
          Impact On Healthcare Access And Communities
        </h2>
        <p className="leading-relaxed mt-4">
          The 10 Taka Health Service initiative has already started to make a
          positive impact...
        </p>
      </div>
    </section>
  </div>
);

export default BlogDetailsCard;
