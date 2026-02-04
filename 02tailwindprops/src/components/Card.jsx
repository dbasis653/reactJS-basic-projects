import React from "react";

const Card = ({ username = "DefaultKela", bookName = "No Book" }) => {
  return (
    <div className="flex flex-col items-center gap-6 p-7 rounded-2xl">
      <div>
        <img
          className="size-48 shadow-xl rounded-md"
          alt=""
          src="https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </div>
      <div className="flex items-center">
        <span className="text-2xl font-medium">{bookName}</span>
        <span className="font-medium text-sky-500">{username}</span>
        <span className="flex gap-2 font-medium text-gray-600 dark:text-gray-400">
          <span>No. 4</span>
          <span>·</span>
          <span>2025</span>
        </span>
      </div>
    </div>
  );
};

export default Card;
