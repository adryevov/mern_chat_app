import React, { Component } from "react";

import axios from "axios";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { Link } from "react-router-dom";

import Button from "react-bootstrap/Button";

export default class CreateEventlog extends Component {
  constructor(props) {
    super(props);

    this.onChangeType = this.onChangeType.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onChangeEvent = this.onChangeEvent.bind(this);
    this.onChangeUser = this.onChangeUser.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      type: "",
      event: "",
      user: "",
      date: new Date()
    };
  }
  onChangeType(e) {
    this.setState({
      type: e.target.value
    });
  }
  onChangeEvent(e) {
    this.setState({
      event: e.target.value
    });
  }
  onChangeUser(e) {
    this.setState({
      user: e.target.value
    });
  }
  onChangeDate(date) {
    this.setState({
      date: date
    });
  }
  onSubmit(e) {
    e.preventDefault();

    const event = {
      type: this.state.type,
      date: this.state.date,
      event: this.state.event,
      user: this.state.user
    };

    axios
      .post(
        "http://localhost:4000/events/add/" ,
        event
      )
      .then(res => console.log(res.data));

    window.Location = "/eventLog";
  }

  render() {
    return (
      <div>
        <h3>Create New Event Log</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Type: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.type}
              onChange={this.onChangeType}
            />
          </div>
          <div className="form-group">
            <label>Event: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.event}
              onChange={this.onChangeEvent}
            />
          </div>
          <div className="form-group">
            <label>User: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.user}
              onChange={this.onChangeUser}
            />
          </div>

          <div className="form-group">
            <label>Date: </label>
            <div>
              <DatePicker
                selected={this.state.date}
                onChange={this.onChangeDate}
              />
            </div>
          </div>

          <div className="form-group">
            <input
              type="submit"
              value="Create New Event"
              className="btn btn-primary"
            />
          </div>

          <div className="form-group">
            <Link to="/eventLog" className="nav-link">
              <Button >Cancel</Button>
            </Link>
          </div>
        </form>
      </div>
    );
  }
}
