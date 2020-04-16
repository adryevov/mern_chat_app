import React, { Component } from "react";

import { Link } from "react-router-dom";
import axios from "axios";

import Button from "react-bootstrap/Button";

const Message = props => (
  <tr>
    <td>{props.message.msg}</td>
    <td>{props.message.by}</td>
    <td>{props.message.timestamp.substring(0, 10)}</td>
    <td>{props.message.room}</td>
    <td>
      <Link to={"/editMessage/" + props.message._id}>edit</Link> |{" "}
      <a
        href="#"
        onClick={() => {
          props.deleteMessage(props.message._id);
        }}
      >
        delete
      </a>
    </td>
  </tr>
);

export default class MessagelogList extends Component {
  constructor(props) {
    super(props);

    this.deleteMessage = this.deleteMessage.bind(this);

    this.state = { messages: [] };
  }
  componentDidMount() {
    axios
      .get("http://localhost:4000/messages/")
      .then(response => {
        this.setState({ messages: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }
  deleteMessage(id) {
    axios.delete("http://localhost:4000/messages/" + id).then(response => {
      console.log(response.data);
    });

    this.setState({
      messages: this.state.messages.filter(el => el._id !== id)
    });
  }

  messageList() {
    return this.state.messages.map(currentmessages => {
      return (
        <Message
          message={currentmessages}
          deleteMessage={this.deleteMessage}
          key={currentmessages._id}
        />
      );
    });
  }

  render() {
    return (
      <div>
        <h3>Logged Chat History</h3>
        <Link to="/createMessage" className="nav-link">
          <Button variant="primary" size="lg" block>
            Add New Message
          </Button>
        </Link>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Message</th>
              <th>Author</th>
              <th>Date</th>
              <th>Room Sent To</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>{this.messageList()}</tbody>
        </table>
      </div>
    );
  }
}
