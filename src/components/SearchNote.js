import React, { Component } from "react";

export default class SearchNote extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: "",
    };
    this.onSearchEventHandler = this.onSearchEventHandler.bind(this);
  }

  onSearchEventHandler(event) {
    this.setState(() => {
      return {
        search: event.target.value,
      };
    });
  }

  render() {
    return (
      <form>
        <input
          className=""
          type="text"
          placeholder="Cari catatan . . ."
          onChange={this.onSearchEventHandler}
        />
      </form>
    );
  }
}
