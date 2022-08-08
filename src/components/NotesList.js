import React from "react";
import NotesItem from "./NotesItem";


export default function NotesList({notes}) {
  return (
    <div>
      {notes.map((note) => (
        <NotesItem
          key={note.id}
          title={note.title}
          createdAt={note.createdAt}
          body={note.body}
          //   onDelete={onDelete}
          //   onArchived={onArchived}
          {...note} />
      ))}
    </div>
  );
}
