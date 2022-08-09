import React from "react";
import { showFormattedDate } from "../utils/data";
import ArchivedButton from "./ArchivedButton";
import DeleteButton from "./DeleteButton";

export default function NotesItem({
  title,
  createdAt,
  body,
  id,
  archived,
  onDelete,
  onArchived,
}) {
  return (
    <div className="flex flex-col border border-solid rounded overflow-hidden">
      <div className="flex-1 p-3">
        <h3 className="text-xl font-bold ">{title}</h3>
        <p className=" text-xs">{showFormattedDate(createdAt)}</p>
        <p className=" text-sm">{body}</p>
      </div>
      <div className=" flex border-t">
        <DeleteButton id={id} onDelete={onDelete} />
        <ArchivedButton id={archived} onArchived={onArchived} />
      </div>
    </div>
  );
}
