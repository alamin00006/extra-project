


export const metadata = {
  title: "Citzen | Doctors",
  description: "Citezen Doctors",
};

const PrivacyPolicy = () => {
  return (
    <div className="custom-container px-6 py-12">
    <h1 className="text-3xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
    <p className="text-gray-700 mb-4">
      This Privacy Policy explains how we collect, use, disclose, and protect your information when you use our services.
    </p>

    {/* 1. Information We Collect */}
    <h2 className="text-xl font-semibold text-gray-900 mt-6">1. Information We Collect</h2>
    <p className="text-gray-700 mt-2">
      We collect various types of information to provide and improve our services:
    </p>
    <ul className="list-disc list-inside text-gray-700 mt-2">
      <li><span className="font-semibold">Personal Information:</span> Name, email, phone number, etc.</li>
      <li><span className="font-semibold">Usage Data:</span> Information about how you use our website.</li>
      <li><span className="font-semibold">Cookies:</span> Tracking data to enhance your experience.</li>
    </ul>

    {/* 2. How We Use Your Information */}
    <h2 className="text-xl font-semibold text-gray-900 mt-6">2. How We Use Your Information</h2>
    <p className="text-gray-700 mt-2">
      We use the collected information for:
    </p>
    <ul className="list-disc list-inside text-gray-700 mt-2">
      <li>Providing and maintaining our services.</li>
      <li>Personalizing your experience.</li>
      <li>Improving website functionality.</li>
      <li>Responding to inquiries and customer support.</li>
    </ul>

    {/* 3. How We Share Your Information */}
    <h2 className="text-xl font-semibold text-gray-900 mt-6">3. How We Share Your Information</h2>
    <p className="text-gray-700 mt-2">
      We do not sell or trade your personal information. However, we may share information in the following cases:
    </p>
    <ul className="list-disc list-inside text-gray-700 mt-2">
      <li>With trusted third-party service providers.</li>
      <li>To comply with legal obligations.</li>
      <li>To protect the rights and safety of our users.</li>
    </ul>

    {/* 4. Cookies and Tracking Technologies */}
    <h2 className="text-xl font-semibold text-gray-900 mt-6">4. Cookies and Tracking Technologies</h2>
    <p className="text-gray-700 mt-2">
      We use cookies to improve your browsing experience. You can disable cookies in your browser settings.
    </p>

    {/* 5. Data Security */}
    <h2 className="text-xl font-semibold text-gray-900 mt-6">5. Data Security</h2>
    <p className="text-gray-700 mt-2">
      We take reasonable measures to protect your information from unauthorized access or disclosure.
    </p>

    {/* 6. Your Rights */}
    <h2 className="text-xl font-semibold text-gray-900 mt-6">6. Your Rights</h2>
    <p className="text-gray-700 mt-2">
      You have the right to:
    </p>
    <ul className="list-disc list-inside text-gray-700 mt-2">
      <li>Access, update, or delete your personal data.</li>
      <li>Opt-out of marketing communications.</li>
      <li>Request a copy of the information we hold about you.</li>
    </ul>

    {/* 7. Changes to This Privacy Policy */}
    <h2 className="text-xl font-semibold text-gray-900 mt-6">7. Changes to This Privacy Policy</h2>
    <p className="text-gray-700 mt-2">
      We may update this policy from time to time. Any changes will be posted on this page.
    </p>

    {/* 8. Contact Us */}
    <h2 className="text-xl font-semibold text-gray-900 mt-6">8. Contact Us</h2>
    <p className="text-gray-700 mt-2">
      If you have any questions about this Privacy Policy, please contact us at:
    </p>
    <p className="text-gray-700 font-semibold">Email: support@example.com</p>
  </div>
  );
};

export default PrivacyPolicy;