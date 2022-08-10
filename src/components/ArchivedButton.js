import React from "react";

export default function ArchivedButton({ id, updateStatus }) {
  return <button className="w-full p-2 text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl dark:focus:ring-pink-800 font-medium text-sm text-center" onClick={() => updateStatus(id,true)}>Arsipkan</button>;
}
