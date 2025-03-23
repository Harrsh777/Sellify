"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const Page = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans relative">
      {/* Background Animation */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-gray-900 opacity-70"></div>

      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-4 bg-gray-800 shadow-md relative z-10">
        <div className="text-2xl font-bold tracking-wider text-purple-500">
          SELLIFY
        </div>
        <div className="hidden md:flex space-x-6">
          <a href="#features" className="hover:text-purple-400 transition">
            Features
          </a>
          <a href="#benefits" className="hover:text-purple-400 transition">
            Benefits
          </a>
          <a href="#pricing" className="hover:text-purple-400 transition">
            Pricing
          </a>
          <a href="#support" className="hover:text-purple-400 transition">
            Support
          </a>
          <a href="#testimonials" className="hover:text-purple-400 transition">
            Testimonials
          </a>
          <Link href="/main">
            <button className="ml-4 px-6 py-2 bg-purple-600 rounded-md hover:bg-purple-700 transition focus:ring-2 focus:ring-purple-500">
              Start Selling
            </button>
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row justify-between items-center px-8 md:px-16 py-20 relative z-10">
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="md:w-1/2"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
            Empowering Small Businesses to Sell Online Easily
          </h1>
          <p className="mt-4 text-lg text-gray-300">
            Sellify helps small business owners launch, manage, and grow their online stores effortlessly with powerful e-commerce tools.
          </p>

          <div className="mt-6 space-y-4">
            <p className="flex items-center text-gray-400">
              ✅ Easy Store Setup in Minutes
            </p>
            <p className="flex items-center text-gray-400">
              ✅ Secure & Hassle-Free Transactions
            </p>
            <p className="flex items-center text-gray-400">
              ✅ Built-in Marketing & SEO Tools
            </p>
            <p className="flex items-center text-gray-400">
              ✅ Mobile-Friendly & Customizable Themes
            </p>
            <p className="flex items-center text-gray-400">
              ✅ 24/7 Customer Support
            </p>
          </div>

          <Link href="/signup">
            <button className="mt-6 px-6 py-3 bg-purple-600 rounded-md text-white hover:bg-purple-700 transition focus:ring-2 focus:ring-purple-500">
              Get Started for Free
            </button>
          </Link>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-10 md:mt-0 md:w-1/2 flex justify-center"
        >
          <img
            src="https://wallpapers.com/images/featured-full/e-commerce-pictures-ybm2y9yd0mjsgx7h.jpg"
            alt="Sellify E-commerce Platform"
            className="w-full max-w-md rounded-lg shadow-lg"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Page;
