import React from "react";
import { FaVideo, FaPhone, FaRegWindowClose } from "react-icons/fa";

const Chatbox = (props) => {
  const closeChat = () => {
    props.closeChat();
  };
  return (
    <p>
      {props.state ? (
        <div className="chat">
          <div className="chat__header">
            <div className="chat__first">
              <div className="chat__header-img">
                <img src={props.current.image ? props.current.image : ""} />
              </div>
              <div className="chat__header-name">
                {props.current.name ? props.current.name : ""}
              </div>
            </div>
            <div className="chat__second">
              <FaVideo className="chat__header-icons" />
              <FaPhone className="chat__header-icons" />
              <FaRegWindowClose
                className="chat__header-icons"
                onClick={closeChat}
              />
            </div>
          </div>

          <div className="chat__body">
            <div className="chat__left">
              <p className="msg">Hello! Good Morning</p>
            </div>
            <div className="chat__right">
              <p className="msg">Hi! May I help you.</p>
            </div>

            <div className="chat__left">
              <p className="msg">Yes Please send me your office address</p>
            </div>
            <div className="chat__right">
              <p className="msg">Ok Sure</p>
            </div>
          </div>

          <div className="chat__footer">
            <input
              type="text"
              className="chat__input"
              placeholder="Type Here"
            ></input>
          </div>
        </div>
      ) : (
        ""
      )}
    </p>
  );
};

export default Chatbox;
