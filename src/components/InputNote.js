import React, { Component } from "react";

export default class InputNote extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
      charLimit : 50,
    };
    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    if (this.state.charLimit - event.target.value.length >= 0) {
      this.setState({
          title: event.target.value
      })
    } 
  }

  onBodyChangeEventHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      };
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addNote(this.state);
  }

  render() {
    return (
      <div className="max-w-md mx-auto mt-4">
        <h2 className="text-2xl">Buat catatan</h2>
        <p className="text-right">
          Sisa karakter: {this.state.charLimit - this.state.title.length}
        </p>
        <form className="flex flex-col" onSubmit={this.onSubmitEventHandler}>
          <input
            className=""
            type="text"
            placeholder="Judul catatan ..."
            value={this.state.title}
            onChange={this.onTitleChangeEventHandler}
          />
          <input
            className="h-44"
            type="text"
            placeholder="Tuliskan catatanmu . . ."
            onChange={this.onBodyChangeEventHandler}
          />
          <button className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
            <span className="relative w-full py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Buat catatan
            </span>
          </button>
        </form>
      </div>
    );
  }
}
