import React, { Component } from "react";

import { Link } from "react-router-dom";
import axios from "axios";

import Button from "react-bootstrap/Button";

const Event = props => (
  <tr>
    <td>{props.event.type}</td>
    <td>{props.event.date.substring(0, 10)}</td>
    <td>{props.event.event}</td>
    <td>{props.event.user}</td>
    <td>
      <Link to={"/editEvent/" + props.event._id}>edit</Link> |{" "}
      <a
        href="#"
        onClick={() => {
          props.deleteEvent(props.event._id);
        }}
      >
        delete
      </a>
    </td>
  </tr>
);

export default class EventlogList extends Component {
  constructor(props) {
    super(props);

    this.deleteEvent = this.deleteEvent.bind(this);

    this.state = { events: [] };
  }
  componentDidMount() {
    axios
      .get("http://localhost:4000/events/")
      .then(response => {
        this.setState({ events: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }
  deleteEvent(id) {
    axios.delete("http://localhost:4000/events/" + id).then(response => {
      console.log(response.data);
    });

    this.setState({
      events: this.state.events.filter(el => el._id !== id)
    });
  }

  eventList() {
    return this.state.events.map(currentevents => {
      return (
        <Event
          event={currentevents}
          deleteEvent={this.deleteEvent}
          key={currentevents._id}
        />
      );
    });
  }

  render() {
    return (
      <div>
        <h3>Logged Event History</h3>
        <Link to="/createEvent" className="nav-link">
          <Button variant="primary" size="lg" block>
            Add New Event
          </Button>
        </Link>

        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Event Type</th>
              <th>Date Of Event</th>
              <th>Event Description</th>
              <th>User</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>{this.eventList()}</tbody>
        </table>
      </div>
    );
  }
}
