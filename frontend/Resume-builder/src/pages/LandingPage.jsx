import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Resume1_template from "../assets/Resume_img.png";
import Modal from "../components/Modal";
import Login from "./Auth/Login";
import Signup from "./Auth/Signup";
import { UserContext } from "../context/userContext";
import { useContext } from "react";

const LandingPage = () => {
  const { Updateuser } = useContext(UserContext); 
  const navigate = useNavigate();
  const [openAuthModal, setOpenAuthModal] = useState(false);
  const [currentPage, setCurrentPage] = useState("Login");

  const handleCTA = () => {
    if(!user){
      setOpenAuthModal(true);
    }
    else{
      navigate("/builder");
    }
  };

  return (
    <div className="w-full min-h-screen bg-white">
      <div className="container mx-auto px-4 py-6">
        {/* Header */}
        <header className="flex justify-between items-center mb-16">
          <div className="text-xl font-bold">Resume Builder</div>
          <button
            className="bg-purple-100 text-sm font-semibold text-black px-7 py-2.5 rounded-lg hover:bg-gray-800 hover:text-white transition"
            onClick={() => setOpenAuthModal(true)}
          >
            Login / Sign Up
          </button>
        </header>

        {/* Hero */}
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 pr-4 mb-8 md:mb-0">
            <h1 className="text-5xl font-bold mb-6">
              Build Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-400 animate-text-shine">
                Resume Effortlessly
              </span>
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              Craft a standout resume in minutes with our smart and intuitive resume builder.
            </p>
            <button
              className="bg-black text-sm font-semibold text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition"
              onClick={handleCTA}
            >
              Get Started
            </button>
          </div>
          <div className="w-full md:w-1/2">
            <img
              src={Resume1_template}
              alt="Resume Template"
              className="w-full rounded-lg"
            />
          </div>
        </div>

        {/* Features */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold text-center mb-12">
            Features That Make You Shine
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition">
              <h3 className="text-lg font-semibold mb-3">Easy Editing</h3>
              <p className="text-gray-600">
                Update your resume section with live preview and instant formatting.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition">
              <h3 className="text-lg font-semibold mb-3">Beautiful Templates</h3>
              <p className="text-gray-600">
                Choose from modern, professional templates that are easy to customize.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition">
              <h3 className="text-lg font-semibold mb-3">One-Click Export</h3>
              <p className="text-gray-600">
                Download your resume instantly as a high-quality PDF with one click.
              </p>
            </div>
          </div>
        </section>

        <div className="text-sm bg-gray-50 text-secondary text-center p-5 mt-10">
          Made with love... Happy Coding
        </div>

        {/* Auth Modal */}
        <Modal
          isOpen={openAuthModal}
          onClose={() => setOpenAuthModal(false)}
          hideHeader
        >
          {currentPage === "Login" && <Login setCurrentPage={setCurrentPage} />}
          {currentPage === "Signup" && <Signup setCurrentPage={setCurrentPage} />}
        </Modal>
      </div>
    </div>
  );
};

export default LandingPage;
