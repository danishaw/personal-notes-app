import React, { Component } from "react";
import Body from "./Body";
import Header from "./Header";
import NotesList from "./NotesList";
import { getInitialData } from "../utils/data";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getInitialData(),
    };
  }
  render() {
    return (
      <div>
        <Header />
        <Body />
        <NotesList notes={this.state.notes} />
      </div>
    );
  }
}
