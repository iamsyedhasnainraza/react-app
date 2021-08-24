import React from "react";
import "./App.css";
import NavBar from "./components/Navbar";
import SideBar from "./components/SideBar";
import Posts from "./components/Posts";
import Chats from "./components/Chats";
import Chatbox from "./components/Chatbox";

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
