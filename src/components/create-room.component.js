import React, { Component } from "react";

import axios from "axios";
import "react-datepicker/dist/react-datepicker.css";

import { Link } from "react-router-dom";

import Button from "react-bootstrap/Button";

export default class CreateRoom extends Component {
  constructor(props) {
    super(props);

    this.onChangeRoomName = this.onChangeRoomName.bind(this);
    this.onChangeStatus = this.onChangeStatus.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      roomName: "",
      status: "Active",
      dateAdded: new Date()
    };
  }
  onChangeRoomName(e) {
    this.setState({
      roomName: e.target.value
    });
  }
  onChangeStatus(e) {
    this.setState({
      status: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const room = {
      roomName: this.state.roomName,
      status: this.state.status,
      dateAdded: this.state.dateAdded
    };

    axios
      .post("http://localhost:4000/rooms/add", room)
      .then(res => console.log(res.data));

    window.location = "/roomLog";
  }

  render() {
    return (
      <div>
        <h3>Create New Chat Room</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Chat Room Name: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.roomName}
              onChange={this.onChangeRoomName}
            />
          </div>
          <div className="form-group">
            <label>Set Chat Room Status: </label>
            <select
              required
              className="form-control"
              value={this.state.status}
              onChange={this.onChangeStatus}
            >
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>

          <div className="form-group">
            <input
              type="submit"
              value="Create New Chat Room"
              className="btn btn-primary"
            />
          </div>
          <div className="form-group">
            <Link to="/roomLog" className="nav-link">
              <Button >Cancel</Button>
            </Link>
          </div>
        </form>
      </div>
    );
  }
}
