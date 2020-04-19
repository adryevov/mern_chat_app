import React, { Component } from "react";

import axios from "axios";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { Link } from "react-router-dom";

import Button from "react-bootstrap/Button";

export default class CreateMessage extends Component {
  constructor(props) {
    super(props);

    this.onChangeMessage = this.onChangeMessage.bind(this);
    this.onChangeAuthor = this.onChangeAuthor.bind(this);
    this.onChangetimestamp = this.onChangetimestamp.bind(this);
    this.onChangeRoom = this.onChangeRoom.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      msg: "",
      by: "",
      timestamp: new Date(),
      room: ""
    };
  }
  onChangeMessage(e) {
    this.setState({
      msg: e.target.value
    });
  }
  onChangeAuthor(e) {
    this.setState({
      by: e.target.value
    });
  }
  onChangetimestamp(date) {
    this.setState({
      timestamp: date
    });
  }
  onChangeRoom(e) {
    this.setState({
      room: e.target.value
    });
  }
  onSubmit(e) {
    e.preventDefault();

    const message = {
      msg: this.state.msg,
      by: this.state.by,
      timestamp: this.state.timestamp,
      room: this.state.room
    };
    axios
      .post("http://localhost:4000/messages/add", message)
      .then(res => console.log(res.data));
    window.location = "/";
  }

  render() {
    return (
      <div>
        <h3>Create New Message</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Message: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.msg}
              onChange={this.onChangeMessage}
            />
          </div>

          <div className="form-group">
            <label>Author: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.by}
              onChange={this.onChangeAuthor}
            />
          </div>
          <div className="form-group">
            <label>Room: </label>
            <div>
              <input
                type="text"
                selected={this.state.room}
                onChange={this.onChangeRoom}
              />
            </div>
          </div>
          <div className="form-group">
            <label>Date: </label>
            <div>
              <DatePicker
                selected={this.state.timestamp}
                onChange={this.onChangetimestamp}
              />
            </div>
          </div>

          <div className="form-group">
            <input
              type="submit"
              value="Create New Message"
              className="btn btn-primary"
            />
          </div>
          <div className="form-group">
            <Link to="/" className="nav-link">
              <Button >Cancel</Button>
            </Link>
          </div>
        </form>
      </div>
    );
  }
}
