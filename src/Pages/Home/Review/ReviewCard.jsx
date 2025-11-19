import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

const ReviewCard = ({ review }) => {
  const { userName, user_photoURL, review: testimoni } = review;
  return (
    <div className="max-w-sm p-6 rounded-2xl shadow-md bg-base-100 border border-gray-200">
      {/* Quote Icon */}
      <FaQuoteLeft className="text-3xl text-primary mb-3" />

      {/* Text */}
      <p className=" mb-5">{testimoni}</p>

      <div className="border-t border-dashed my-4"></div>

      {/* Author */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 ">
          <img className="rounded-full" src={user_photoURL} alt="" />
        </div>
        <div>
          <h3 className="font-semibold text-gray-800">{userName}</h3>
          <p className="text-sm text-gray-500">Senior Product Designer</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
