import React, { Component } from "react";

export default class SearchNote extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: "",
    };
    this.onInputHandler = this.onInputHandler.bind(this);
  }

  onInputHandler(event) {
    this.setState(
      {
        query: event.target.value,
      },
      () => {
        this.props.searchQuery(this.state);
      }
    );
  }

  render() {
    return (
      <form>
        <input
          className=""
          type="text"
          placeholder="Cari catatan . . ."
          value={this.state.query}
          onChange={this.onInputHandler}
        />
      </form>
    );
  }
}
