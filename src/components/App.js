import React, { Component } from "react";
import Header from "./Header";
import { getInitialData } from "../utils/data";
import ActiveList from "./ActiveList";
import ArchivedList from "./ArchivedList";
import InputNote from "./InputNote";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getInitialData(),
    };
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.updateStatus = this.updateStatus.bind(this);
    this.onAddHandler = this.onAddHandler.bind(this);
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
    let allNotes = this.state.notes;
    allNotes = allNotes.map((note) => {
      if (note.id === id) {
        note.archived = newStatus;
      }
      return note;
    });
    this.setState({ allNotes });
  }

  render() {
    return (
      <div>
        <Header />
        <InputNote addNote={this.onAddHandler}/>
        <ActiveList
          notes={this.state.notes}
          onDelete={this.onDeleteHandler}
          updateStatus={this.updateStatus}
        />
        <ArchivedList
          notes={this.state.notes}
          onDelete={this.onDeleteHandler}
          updateStatus={this.updateStatus}
        />
      </div>
    );
  }
}
