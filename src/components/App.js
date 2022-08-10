import React, { Component } from "react";
import Body from "./Body";
import Header from "./Header";
import { getInitialData } from "../utils/data";
import ActiveList from "./ActiveList";
import ArchivedList from "./ArchivedList";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getInitialData(),
    };
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.updateStatus = this.updateStatus.bind(this);
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
        <Body />
        <ActiveList notes={this.state.notes} onDelete={this.onDeleteHandler} updateStatus={this.updateStatus} />
        <ArchivedList notes={this.state.notes} onDelete={this.onDeleteHandler} updateStatus={this.updateStatus}/>
      </div>
    );
  }
}
