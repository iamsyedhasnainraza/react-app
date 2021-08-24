import React from "react";
import { FaRegCommentAlt, FaRegThumbsUp, FaShareAlt } from "react-icons/fa";
const Showposts = () => {
  const [state, setState] = React.useState([
    {
      id: 1,
      useImg: "/images/ik1.jpg",
      name: "Imran Khan PTI",
      time: "1d",
      text: "",
      postImg: "/images/ik1.jpg",
    },
    {
      id: 2,
      useImg: "/images/m1.jpg",
      name: "Molana Tariq Jameel",
      time: "2h",
      text: "Listen Molana Tariq Jameel leacture live at 3pm",
      postImg: "/images/m1.jpg",
    },
    {
      id: 3,
      useImg: "/images/a2.jpg",
      name: "PTV Sports",
      time: "13h",
      text: "Man of the Match Shahid Afridi",
      postImg: "/images/a2.jpg",
    },
    {
      id: 4,
      useImg: "/images/4.jpg",
      name: "Coke Studio",
      time: "21h",
      text: "Coming Soon",
      postImg: "/images/f4.png",
    },
    {
      id: 10,
      useImg: "/images/f1.jpg",
      name: "Syed Kazam Raza",
      time: "6m",
      text: "Checking in..",
      postImg: "/images/map1.png",
    },
    {
      id: 5,
      useImg: "/images/fm1.jpg",
      name: "Fahad Mustafa",
      time: "1h",
      text: "Jeeto Pakistan",
      postImg: "/images/fm1.jpg",
    },

    {
      id: 6,
      useImg: "/images/f1.jpg",
      name: "Fawad Khan",
      time: "9h",
      text: "",
      postImg: "/images/f2.jpg",
    },
    {
      id: 7,
      useImg: "/images/i1.jpg",
      name: "Iqrar-ul-Hassan",
      time: "16h",
      text: "",
      postImg: "/images/i1.jpg",
    },
    {
      id: 8,
      useImg: "/images/f5.jpg",
      name: "Fawad Khan",
      time: "6h",
      text: "",
      postImg: "/images/f1.jpg",
    },
    {
      id: 9,
      useImg: "/images/h1.jpg",
      name: "Hasnain Raza",
      time: "6h",
      text: "",
      postImg: "/images/h1.jpg",
    },
  ]);

  return (
    <div className="show">
      {state.map((post) => (
        <div key={post.id} className="empty">
          <div className="show__header">
            <div className="show__header-img">
              <img src={post.useImg} alt="image"></img>
            </div>
            <div className="show__header-name">
              {post.name}
              <div className="date">{post.time}</div>
            </div>
          </div>
          <div className="show__body">
            <div className="show__body-text">{post.text}</div>
            <div className="show__body-img">
              <img src={post.postImg} alt="image"></img>
            </div>
          </div>

          <div className="show__reactions">
            <span className="reactions">
              <FaRegThumbsUp /> <span className="reactions-text"> Like</span>
            </span>
            <span className="reactions">
              <FaRegCommentAlt />{" "}
              <span className="reactions-text"> Comment</span>
            </span>
            <span className="reactions">
              <FaShareAlt /> <span className="reactions-text"> Share</span>
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Showposts;
