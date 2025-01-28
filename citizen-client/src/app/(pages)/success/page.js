import Link from "next/link";

export const metadata = {
  title: "Citzen | Carrier",
  description: "Citezen Carrier",
};

const ThankYouPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-xl max-w-md text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Thank You!</h1>
        <p className="text-gray-600 mb-6">
          We appreciate your feedback. Your submission has been received. We
          will contact you very soon.
        </p>
        <Link
          href={"/"}
          className="px-6 py-2 bg-[#39bcbc] no-underline text-white rounded-lg hover:bg-blue-600 transition"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default ThankYouPage;
