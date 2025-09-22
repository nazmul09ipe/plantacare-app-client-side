// @flow strict
import * as React from 'react';
import { Helmet } from 'react-helmet';

function Faqs() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-500 py-10 px-4 sm:px-6 lg:px-12">
      <Helmet>
        <title>FAQs | PlantaCare</title>
      </Helmet>

      <div className="w-full ml-60 flex flex-col justify-center items-center max-w-4xl  mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-amber-600 dark:text-amber-400 mb-2">
          Our FAQs
        </h1>
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-gray-100">
          Have any Questions?
        </h2>
      </div>

     
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-900 rounded-3xl shadow-xl p-6 sm:p-8 space-y-3 transition-colors duration-500">
        {[
          {
            question: "How do I create an account?",
            answer: 'Click the "Register" button inside the "Login" section and follow the registration process.',
            defaultChecked: true
          },
          {
            question: "I forgot my password. What should I do?",
            answer: 'Click on "Forgot Password" on the login page and follow the instructions sent to your email.'
          },
          {
            question: "How do I update my profile information?",
            answer: 'Go to "My Profile" settings and select "Edit Profile" to make changes.'
          },
          {
            question: "How do I get suggestions for common diseases for plants?",
            answer: 'Please contact a Botanist through the contact info provided in our Botanists panel.'
          },
          {
            question: "How do I follow this site?",
            answer: 'Go to the footer, explore our social media links, and follow us to stay updated.'
          }
        ].map((faq, index) => (
          <div
            key={index}
            className="collapse collapse-arrow border-2 border-cyan-800 dark:border-cyan-500 bg-white dark:bg-gray-800 rounded-lg"
          >
            <input type="radio" name="faq-accordion" defaultChecked={faq.defaultChecked || false} />
            <div className="collapse-title font-semibold text-base sm:text-lg text-gray-900 dark:text-gray-100">
              {faq.question}
            </div>
            <div className="collapse-content text-sm sm:text-base text-gray-700 dark:text-gray-300">
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Faqs;
