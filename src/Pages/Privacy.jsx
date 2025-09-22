// @flow strict
import * as React from "react";
import { Helmet } from "react-helmet";

function Privacy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-500 py-10 px-5 sm:px-10 lg:px-24">
      <Helmet>
        <title>Privacy Policy | PlantaCare</title>
      </Helmet>

      {/* Page Header */}
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-orange-800 dark:text-orange-400 text-center mb-10">
        PlantaCare – Privacy Policy
      </h1>

      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-900 rounded-3xl shadow-xl p-8 sm:p-10 space-y-8 transition-colors duration-500">
        {/* Effective Date & Intro */}
        <section className="text-center">
          <p className="text-base sm:text-lg font-medium mb-2 text-gray-700 dark:text-gray-300">
            Effective Date: July 2025
          </p>
          <h2 className="text-xl sm:text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">
            Welcome to PlantaCare!
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-left">
            At PlantaCare, your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your information when you use our website (
            <a href="https://www.happenhub.com" className="text-blue-700 dark:text-blue-400 underline">
              https://www.plantacare.com
            </a>
            ) or related domains.
            <br />
            <br />
            By using PlantaCare, you agree to the practices described below.
          </p>
        </section>

        {/* Sections */}
        <section>
          <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-gray-100">1. Information We Collect</h3>
          <p className="text-gray-700 dark:text-gray-300">
            <strong>a. Personal Information:</strong> We collect personal data when you:
            <ul className="list-disc list-inside ml-4 mt-1">
              <li>Sign up for an account</li>
              <li>Subscribe to a newsletter</li>
              <li>Contact us via forms or email</li>
            </ul>
            This may include name, email address, location (optional), and login credentials.
            <br /><br />
            <strong>b. Usage Data:</strong> We may automatically collect IP address, browser type/version, visited pages, device info, and clickstream data.
            <br /><br />
            <strong>c. Cookies and Tracking:</strong> We use cookies to improve site functionality, understand user behavior, and save preferences. You can manage cookies through your browser.
          </p>
        </section>

        <section>
          <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-gray-100">2. How We Use Your Information</h3>
          <p className="text-gray-700 dark:text-gray-300">
            We use your information to:
            <ul className="list-disc list-inside ml-4 mt-1">
              <li>Provide and maintain PlantaCare</li>
              <li>Personalize event recommendations</li>
              <li>Respond to inquiries and support</li>
              <li>Send updates and marketing (if opted-in)</li>
              <li>Monitor and improve performance</li>
              <li>Prevent fraud or misuse</li>
            </ul>
          </p>
        </section>

        <section>
          <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-gray-100">3. Sharing Your Information</h3>
          <p className="text-gray-700 dark:text-gray-300">
            We do not sell your personal data. We may share it with:
            <ul className="list-disc list-inside ml-4 mt-1">
              <li>Service providers (hosting, analytics)</li>
              <li>Legal authorities (when required)</li>
              <li>Event partners (with prior notice)</li>
            </ul>
            All third parties are required to use your data securely and for intended purposes only.
          </p>
        </section>

        <section>
          <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-gray-100">4. Data Retention</h3>
          <p className="text-gray-700 dark:text-gray-300">
            We retain data only as long as necessary or legally required. You may request to delete your data or account at any time.
          </p>
        </section>

        <section>
          <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-gray-100">5. Security</h3>
          <p className="text-gray-700 dark:text-gray-300">
            We use reasonable security practices (encryption, access control, etc.), but no system is 100% secure.
          </p>
        </section>

        <section>
          <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-gray-100">6. Your Rights</h3>
          <p className="text-gray-700 dark:text-gray-300">
            Depending on your location, you may have the right to:
            <ul className="list-disc list-inside ml-4 mt-1">
              <li>Access your personal data</li>
              <li>Request correction or deletion</li>
              <li>Object to certain uses</li>
              <li>Withdraw consent</li>
            </ul>
            Contact us at <a href="mailto:plantacare2025@gmail.com" className="text-blue-700 dark:text-blue-400 underline">plantacare2025@gmail.com</a> to exercise your rights.
          </p>
        </section>

        <section>
          <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-gray-100">7. Third-Party Links</h3>
          <p className="text-gray-700 dark:text-gray-300">
            Our platform may link to external sites. We are not responsible for their privacy policies. Review theirs independently.
          </p>
        </section>

        <section>
          <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-gray-100">8. Children’s Privacy</h3>
          <p className="text-gray-700 dark:text-gray-300">
            PlantaCare is not intended for children under 13. We do not knowingly collect their data. If we find such data, it will be deleted.
          </p>
        </section>

        <section>
          <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-gray-100">9. Changes to This Privacy Policy</h3>
          <p className="text-gray-700 dark:text-gray-300">
            We may revise this policy. Updates will be reflected here with a new effective date. Please review regularly.
          </p>
        </section>

        <section>
          <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-gray-100">10. Contact Us</h3>
          <p className="text-gray-700 dark:text-gray-300">
            Have questions? Contact us at:<br />
            📧 <a href="mailto:plantacare2025@gmail.com" className="text-blue-700 dark:text-blue-400 underline">plantacare2025@gmail.com</a><br />
            🌐 <a href="https://www.plantacare.com" className="text-blue-700 dark:text-blue-400 underline">https://www.plantacare.com</a>
          </p>
        </section>
      </div>
    </div>
  );
}

export default Privacy;
