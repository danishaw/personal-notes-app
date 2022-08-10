import React from "react";
import MoveButton from "./MoveButton";
import NotesItem from "./NotesItem";
import DeleteButton from "./DeleteButton";

export default function ArchivedList({ notes, onDelete, updateStatus }) {
  return (
    <div className="archived p-3 max-w-4xl mx-auto">
      <h1 className="text-2xl my-4">Arsip</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {notes.map((note) => {
          if (note.archived === true)
            return (
              <div
                key={note.id}
                className="flex flex-col border border-solid rounded overflow-hidden"
              >
                <NotesItem {...note} />
                <div className=" flex border-t">
                  <DeleteButton id={note.id} onDelete={onDelete} />
                  <MoveButton id={note.id} updateStatus={updateStatus} />
                </div>
              </div>
            );
          return null;
        })}
      </div>
    </div>
  );
}
