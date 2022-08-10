import React from "react";
import ArchivedButton from "./ArchivedButton";
import NotesItem from "./NotesItem";
import DeleteButton from "./DeleteButton";

export default function ActiveList({ notes, onDelete, updateStatus }) {
  return (
    <div className="active p-3 max-w-4xl mx-auto">
      <h1 className="text-2xl my-4">Aktif</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {notes.map((note) => {
          if (note.archived === false)
            return (
              <div
                key={note.id}
                className="flex flex-col border border-solid rounded overflow-hidden"
              >
                <NotesItem {...note} />
                <div className=" flex border-t">
                  <DeleteButton id={note.id} onDelete={onDelete} />
                  <ArchivedButton id={note.id} updateStatus={updateStatus} />
                </div>
              </div>
            );
          return null;
        })}
      </div>
    </div>
  );
}
