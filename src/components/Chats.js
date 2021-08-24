import React from "react";

const Chats = (props) => {
  const [state, setState] = React.useState([
    {
      id: 1,
      image: "/images/fm3.jpg",
      name: "Kazam Raza",
    },
    {
      id: 2,
      image: "/images/f2.jpg",
      name: "Hasnain Raza",
    },
    {
      id: 3,
      image: "/images/3.jpg",
      name: "Muntzir Mehdi",
    },
    {
      id: 4,
      image: "/images/4.jpg",
      name: "Ali Mughees",
    },
    {
      id: 5,
      image: "/images/5.jpg",
      name: "Abdullah Khan",
    },
    {
      id: 6,
      image: "/images/1.jpg",
      name: "Imran Baig",
    },
    {
      id: 6,
      image: "/images/fm3.jpg",
      name: "Amir Ali",
    },
    {
      id: 7,
      image: "/images/4.jpg",
      name: "M Waseem",
    },
    {
      id: 8,
      image: "/images/a1.jpg",
      name: "Hassan Murtaza",
    },
    {
      id: 9,
      image: "/images/2.jpeg",
      name: "Bilal Haider",
    },
    {
      id: 10,
      image: "/images/5.jpg",
      name: "Hammad Amaar",
    },
  ]);

  const openChat = (user) => {
    props.openChat(user);
  };
  return (
    <div className="chatBar">
      {state.map((user) => (
        <div
          className="chatBar__list"
          key={user.id}
          onClick={() => openChat(user)}
        >
          <div className="chatBar__list-img">
            <img src={user.image} alt="image" />
            <span className="status"></span>
          </div>
          <div className="chatBar__list-name">{user.name}</div>
        </div>
      ))}
    </div>
  );
};

export default Chats;
