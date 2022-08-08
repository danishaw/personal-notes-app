import React, { Component } from "react";

export default class SearchNote extends Component {
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
