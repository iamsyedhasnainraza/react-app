import React from "react";
import "./App.css";
import NavBar from "./Navbar";
import SideBar from "./SideBar";
import Posts from "./Posts";
import Chats from "./Chats";
import Chatbox from "./Chatbox";

function App() {
  const [state, setState] = React.useState(false);
  const [current, setCurrent] = React.useState({});

  const openChat = (user) => {
    setState(true);
    setCurrent(user);
  };

  const closeChat = (user) => {
    setState(false);
  };

  return (
    <div className="App">
      <NavBar />
      <div className="facebook">
        <SideBar />
        <Posts />
        <Chats openChat={openChat} />
        <Chatbox state={state} current={current} closeChat={closeChat} />
      </div>
    </div>
  );
}

export default App;
