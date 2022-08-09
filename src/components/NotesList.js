import React from "react";
import NotesItem from "./NotesItem";

export default function NotesList({ notes, onDelete, onArchived }) {
  return (
    <div className="p-3 max-w-4xl mx-auto ">
      <h2 className="text-2xl my-4">Catatan Aktif</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
        {notes.map((note) => (
          <NotesItem
            key={note.id}
            onDelete={onDelete}
            onArchived={onArchived}
            {...note}
          />
        ))}
      </div>
    </div>
  );
}
