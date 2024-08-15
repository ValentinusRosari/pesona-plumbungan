import React from "react";

const Card = ({ id, title, image, description, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer flex-none w-64 bg-white rounded-lg shadow-lg m-4"
    >
      <img
        src={image}
        alt={title}
        className="w-full h-56 rounded-t-lg object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default Card;
