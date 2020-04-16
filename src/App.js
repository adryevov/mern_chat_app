import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar.component";

import MessagelogList from "./components/messagelog-list.component";
import EventlogList from "./components/eventlog-list.component";
import RoomList from "./components/room-list.component";

import EditMessage from "./components/edit-message.component";
import EditEventlog from "./components/edit-eventlog.component";
import EditRoom from "./components/edit-room.component";

import CreateMessage from "./components/create-message.component";
import CreateEventLog from "./components/create-eventlog.component";
import CreateRoom from "./components/create-room.component";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br />

        <Route path="/" exact component={MessagelogList} />
        <Route path="/eventlog" exact component={EventlogList} />
        <Route path="/roomLog" component={RoomList} />

        <Route path="/editMessage/:id" component={EditMessage} />
        <Route path="/editEvent/:id" component={EditEventlog} />
        <Route path="/editRoom/:id" component={EditRoom} />

        <Route path="/createMessage" component={CreateMessage} />
        <Route path="/createEvent" component={CreateEventLog} />
        <Route path="/createRoom" component={CreateRoom} />
      </div>
    </Router>
  );
}

export default App;
