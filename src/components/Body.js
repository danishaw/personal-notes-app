import React, { Component } from "react";
import InputNote from "./InputNote";
import { getInitialData, showFormattedDate } from "../utils/data";

export default class Body extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getInitialData(),
    };
    this.onAddContactHandler = this.onAddContactHandler.bind(this);
  }

  onAddContactHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            createdAt: showFormattedDate(+new Date()),
            archived: false,
          },
        ],
      };
    });
  }

  render() {
    return (
      <div className="max-w-md mx-auto mt-4">
        <h2 className="text-2xl">Buat catatan</h2>
        <InputNote addNote={this.onAddContactHandler} />
      </div>
    );
  }
}
