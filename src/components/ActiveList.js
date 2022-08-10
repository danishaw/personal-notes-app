import React from "react";
import NotesItem from "./NotesItem";

export default function ActiveList({ notes, onDelete, updateStatus }) {
  return (
    <div className="active p-3 max-w-4xl mx-auto">
      <h1 className="text-2xl my-4">Catatan Aktif</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {notes.map((note) => {
          if (note.archived === false)
            return (
              <NotesItem
                key={note.id}
                id={note.id}
                status={!note.archived}
                buttonName="Arsipkan"
                onDelete={onDelete}
                updateStatus={updateStatus}
                {...note}
              />
            );
          return null;
        })}
      </div>
    </div>
  );
}
