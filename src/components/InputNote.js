import React, { Component } from "react";

export default class InputNote extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      content: "",
    };
    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onContentChangeEventHandler =
      this.onContentChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    this.setState(() => {
      return {
        title: event.target.value,
      };
    });
  }

  onContentChangeEventHandler(event) {
    this.setState(() => {
      return {
        content: event.target.value,
      };
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addNotes(this.state);
  }

  render() {
    return (
      <form onSubmit={this.onSubmitEventHandler}>
        <input
          className=""
          type="text"
          placeholder="Judul catatan ..."
          onChange={this.onTitleChangeEventHandler}
        />
        <input
          className=""
          type="text"
          placeholder="Tuliskan catatanmu . . ."
          onChange={this.onContentChangeEventHandler}
        />
        <button className="" type="submit">
          Buat
        </button>
      </form>
    );
  }
}
