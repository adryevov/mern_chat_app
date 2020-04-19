import React, { Component } from "react";

import { Link } from "react-router-dom";
import axios from "axios";

import Button from "react-bootstrap/Button";

const Room = props => (
  <tr>
    <td>{props.room.roomName}</td>
    <td>{props.room.status}</td>
    <td>{props.room.dateAdded.substring(0, 10)}</td>
    <td>
      <Link to={"/editRoom/" + props.room._id}>edit</Link> |{" "}
      <a
        href="/#"
        onClick={() => {
          props.deleteRoom(props.room._id);
        }}
      >
        delete
      </a>
    </td>
  </tr>
);

export default class RoomList extends Component {
  constructor(props) {
    super(props);

    this.deleteRoom = this.deleteRoom.bind(this);

    this.state = { rooms: [] };
  }
  componentDidMount() {
    axios
      .get("http://localhost:4000/rooms/")
      .then(response => {
        this.setState({ rooms: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }
  deleteRoom(id) {
    axios.delete("http://localhost:4000/rooms/" + id).then(response => {
      console.log(response.data);
    });

    this.setState({
      rooms: this.state.rooms.filter(el => el._id !== id)
    });
  }

  roomList() {
    return this.state.rooms.map(currentrooms => {
      return (
        <Room
          room={currentrooms}
          deleteRoom={this.deleteRoom}
          key={currentrooms._id}
        />
      );
    });
  }

  render() {
    return (
      <div>
        <h3>Room History</h3>
        <Link to="/createRoom" className="nav-link">
          <Button variant="primary" size="lg" block>
            Create New Chat Room
          </Button>
        </Link>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Chat Room Name</th>
              <th>Status</th>
              <th>Last Date Edited</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{this.roomList()}</tbody>
        </table>
      </div>
    );
  }
}
