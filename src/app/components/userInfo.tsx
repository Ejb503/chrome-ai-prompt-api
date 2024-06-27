"use client";
import React from "react";
import useBehaviourCues from "../hooks/useBehaviourCues";
import useProductCues from "../hooks/useProductCues";
import useUserCues from "../hooks/useUserCues";
import usePersonalData from "../hooks/usePersonalData";
import useSocialCues from "../hooks/useSocialCues";

const UserInfo: React.FC = ({}) => {
  const personalData = usePersonalData();
  const behaviourCues = useBehaviourCues();
  const productCues = useProductCues();
  const socialCues = useSocialCues();
  const userCues = useUserCues();

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-white mb-4">User Info</h2>
      <div className="space-y-3">
        <p className="text-white text-xl">
          Behaviour:{" "}
          <span className="font-semibold">{behaviourCues.behaviour1}</span>
        </p>
        <p className="text-white text-xl">
          Social Cues:{" "}
          <span className="font-semibold">{socialCues.behaviour1}</span>
        </p>
        <div className="text-white text-lg sm:text-xl">
          Recommended Products:
          <div className="flex flex-wrap mt-2">
            {productCues.products.map((product) => (
              <span
                key={product.id}
                className="bg-blue-500 text-white px-2 py-1 rounded-full text-sm ml-2 mb-2"
              >
                {product.name}
              </span>
            ))}
          </div>
        </div>
        <div className="text-white text-lg sm:text-xl">
          User Specific Products:
          <div className="flex flex-wrap mt-2">
            {userCues.products.map((product) => (
              <span
                key={product.id}
                className="bg-blue-500 text-white px-2 py-1 rounded-full text-sm ml-2 mb-2"
              >
                {product.name}
              </span>
            ))}
          </div>
        </div>{" "}
        <div className="flex flex-wrap mt-2 text-white text-lg sm:text-xl">
          User Profile:{" "}
          <span className="font-semibold text-white break-words">
            {JSON.stringify(personalData, null, 2)}
          </span>{" "}
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
