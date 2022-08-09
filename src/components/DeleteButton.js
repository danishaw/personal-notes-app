import React from "react";

export default function DeleteButton({ id, onDelete }) {
  return <button className="border-r w-full text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l  dark:focus:ring-purple-800 font-medium text-sm text-center" onClick={() => onDelete(id)}>Delete</button>;
}
