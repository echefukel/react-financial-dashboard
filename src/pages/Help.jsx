// src/pages/Help.jsx
import React, { useState } from "react";
import { FaSearch, FaChevronDown, FaChevronUp, FaLinkedin, FaTwitter, FaEnvelope , FaGithub } from "react-icons/fa";

const Help = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [openIndex, setOpenIndex] = useState(null); // To track which FAQ is open

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const faqs = [
    { question: "How can I view my transactions?", answer: "You can view all your transactions under the 'Transactions' tab." },
    { question: "How do I add a new wallet?", answer: "Navigate to the 'Wallets' section, then click 'Add New Wallet' to get started." },
    { question: "Is this Dashboard fully responsive?", answer: "Yes , It is fully responsive on all screens" },
    { question: "How do I update my profile information?", answer: "Go to 'Settings' to update your personal and financial information." },
    { question: "How can I contact support?", answer: "Send a message to one of those socials below" }
  ];

  const filteredFaqs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Toggle answer visibility
  };

  return (
    <div className="p-4 md:p-6 bg-white rounded-2xl shadow-md w-full">
      {/* Page Title */}
      <h2 className="text-xl font-semibold text-gray-800 mb-2">Help Center</h2>
      <p className="text-sm text-gray-500 mb-6">
        Find answers to common questions or contact support.
      </p>

      {/* Search Bar */}
      <div className="flex items-center border border-gray-200 rounded-lg px-3 py-2 w-full md:w-1/2 mb-6">
        <FaSearch className="text-gray-400" />
        <input
          value={searchTerm}
          onChange={handleSearch}
          type="text"
          placeholder="Search help topics..."
          className="w-full text-sm focus:outline-none px-3"
        />
      </div>

      {/* FAQ Section */}
      <div className="space-y-4">
        {filteredFaqs.length > 0 ? (
          filteredFaqs.map((faq, index) => (
            <div key={index} className="border-b pb-4">
              <div
                onClick={() => toggleAnswer(index)} // Toggle answer visibility on question click
                className="cursor-pointer flex justify-between items-center text-lg  text-gray-800"
              >
                <span>{faq.question}</span>
                {openIndex === index ? (
                  <FaChevronUp className="text-gray-500" />
                ) : (
                  <FaChevronDown className="text-gray-500" />
                )}
              </div>
              {openIndex === index && (
                <p className="text-sm text-gray-500 mt-2">{faq.answer}</p>
              )}
            </div>
          ))
        ) : (
          <p className="text-sm text-gray-500">No results found for "{searchTerm}".</p>
        )}
      </div>

      {/* Contact Section */}
      <div className="mt-8">
        <h3 className="text-lg  text-gray-800 mb-4">Contact Me :</h3>
        <div className="flex space-x-18 md:space-x-48">
          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/kelechi-echefu-22490710a" target="_blank" rel="noopener noreferrer" className="block">
            <FaLinkedin className="text-2xl text-blue-700 hover:text-blue-800" size={48}/>
          </a>
          {/* GitHub */}
          <a href="https://github.com/echefukel" target="_blank" rel="noopener noreferrer"className="block">
            <FaGithub className="text-2xl text-gray-700 hover:text-gray-800" size={48} />
          </a>
          {/* Twitter */}
          <a href="https://twitter.com/EchefuKelechi97" target="_blank" rel="noopener noreferrer"className="block">
            <FaTwitter className="text-2xl text-blue-400 hover:text-blue-500" size={48} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Help;
