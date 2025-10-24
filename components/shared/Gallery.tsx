"use client";

import Image from "next/image";
import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const images = [
  "https://images.unsplash.com/photo-1518005020951-eccb494ad742",
  "https://images.unsplash.com/photo-1518005020951-eccb494ad742",
  "https://images.unsplash.com/photo-1518005020951-eccb494ad742",
];

const GallerySection = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleFileChange = (e: any) => {
    const file = e?.target?.files[0];
    if (file) {
      console.log("Selected image:", file);
    }
  };
  return (
    <div
      className="bg-gray-700 my-5 p-6 rounded-2xl w-full max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto relative"
      style={{ boxShadow: "5px 4px 6px rgba(0,0,0,0.6)" }}
    >
      <div className="flex justify-between items-center mb-4">
        <button
          className="bg-gray-900 text-white md:px-10 px-4 md:text-lg text-xs font-semibold py-3 rounded-2xl transition-all hover:shadow-lg"
          style={{ boxShadow: "inset 0 2px 4px rgba(0,0,0,0.6)" }}
        >
          Gallery
        </button>

        <div className="flex items-center md:gap-4 gap-2">
          <div>
            {/* Hidden file input */}
            <input
              type="file"
              accept="image/*"
              id="upload-image"
              className="hidden"
              onChange={handleFileChange}
            />

            <label
              htmlFor="upload-image"
              className="bg-gray-700 p-3 md:px-4 px-2 rounded-full transition-all font-bold md:mr-7 mr-2 text-white text-xs cursor-pointer hover:scale-105"
              style={{
                boxShadow:
                  "0 -1px 3px rgba(255,255,255,0.6), 10px 8px 12px rgba(0,0,0,0.6)",
              }}
            >
              + ADD IMAGE
            </label>
          </div>

          <button
            className="bg-[#2b2e38] p-2 rounded-full transition-all hover:bg-gray-900"
            style={{
              boxShadow: "0 4px 6px rgba(0,0,0,0.6)",
            }}
          >
            <FaArrowLeft className="text-gray-500" />
          </button>

          <button
            className="bg-[#2b2e38] p-2 rounded-full transition-all hover:bg-gray-900"
            style={{
              boxShadow: "0 4px 6px rgba(0,0,0,0.6)",
            }}
          >
            <FaArrowRight className="text-gray-500" />
          </button>
        </div>
      </div>

      <div className="grid my-10 grid-cols-1 md:grid-cols-3 gap-6">
        {images.map((src, idx) => (
          <div
            key={idx}
            className="rounded-xl overflow-hidden shadow-lg cursor-pointer 
                 transition-all duration-500 hover:scale-110 hover:-rotate-3"
          >
            <Image
              className="w-full transform-gpu h-30 object-cover grayscale hover:grayscale-0 transition-all duration-500"
              src={src}
              width={50}
              height={50}
              alt={`Gallery ${idx + 1}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GallerySection;
