import React from "react";
import { showFormattedDate } from "../utils/data";

export default function NotesItem({ title, createdAt, body }) {
  return (
    <div className="flex-1 p-3">
      <h3 className="text-xl font-bold ">{title}</h3>
      <p className=" text-xs">{showFormattedDate(createdAt)}</p>
      <p className=" text-sm">{body}</p>
    </div>
  );
}
