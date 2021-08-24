import React from "react";
import { FaRegFileImage, FaRegGrinAlt, FaVideo } from "react-icons/fa";

const Create = () => {
  return (
    <div className="create">
      <div className="create__first">
        <div className="create__first-img">
          <span>
            <img src="/images/1.jpg" alt="user"></img>
          </span>
        </div>
        <div className="create__first-input">
          <input
            type="text"
            className="create__first-inputs"
            placeholder="Write what's in your mind.."
          />
        </div>
      </div>
      <div className="create__second">
        <span className="create__second-icon">
          <FaVideo className="redColor" />
          <span className="text">Live video</span>
        </span>
        <span className="create__second-icon">
          <FaRegFileImage className="greenColor" />
          <span className="text">Photo/Video</span>
        </span>
        <span className="create__second-icon">
          <FaRegGrinAlt className="orangeColor" />
          <span className="text">Felling</span>
        </span>
      </div>
    </div>
  );
};

export default Create;
