import React, { Component } from "react";
import Header from "./Header";
import { getInitialData } from "../utils/data";
import NotesList from "./NotesList";
import InputNote from "./InputNote";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getInitialData(),
      searchQuery: "",
    };
    this.onAddHandler = this.onAddHandler.bind(this);
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.updateStatus = this.updateStatus.bind(this);
    this.onSearch = this.onSearch.bind(this);
  }

  onSearch({ query }) {
    this.setState(() => {
      return { searchQuery: query.toLowerCase() };
    });
  }

  onAddHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            createdAt: +new Date(),
            archived: false,
          },
        ],
      };
    });
  }

  onDeleteHandler(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes });
  }

  updateStatus(id, newStatus) {
    const notes = this.state.notes.map((note) => {
      if (note.id === id) {
        note.archived = newStatus;
      }
      return note;
    });
    this.setState({ notes });
  }
  render() {
    const filteredNotes = !this.state.searchQuery
      ? this.state.notes
      : this.state.notes.filter((note) =>
          note.title.toLocaleLowerCase().match(this.state.searchQuery)
        );
    const activeList = filteredNotes.filter((note) => {
      return note.archived === false;
    });
    const archivedList = filteredNotes.filter((note) => {
      return note.archived === true;
    });
    return (
      <div>
        <Header searchQuery={this.onSearch} />
        <InputNote addNote={this.onAddHandler} />
        <NotesList
          notesName="Catatan Aktif"
          notes={activeList}
          buttonName="Arsipkan"
          onDelete={this.onDeleteHandler}
          updateStatus={this.updateStatus}
        />

        <NotesList
          notesName="Arsip"
          notes={archivedList}
          buttonName="Pindahkan"
          onDelete={this.onDeleteHandler}
          updateStatus={this.updateStatus}
        />
      </div>
    );
  }
}
