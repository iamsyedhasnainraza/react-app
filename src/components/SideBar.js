import React, { useState } from "react";

const SideBar = () => {
  const [state, setState] = useState([
    { id: 1, image: "/images/f1.jpg", name: "ARY News" },
    { id: 2, image: "/images/2.jpeg", name: "Fiverr Projects" },
    { id: 3, image: "/images/3.jpg", name: "React.JS Classes " },
    { id: 4, image: "/images/4.jpg", name: "Hasnian Raza" },
    { id: 5, image: "/images/m1.jpg", name: "Islamic TV" },
    { id: 6, image: "/images/f3.jpg", name: "Jeeto Pakistan" },
  ]);
  return (
    <div className="sidebar">
      {state.map((info) => (
        <div className="sidebar__list" key={info.id}>
          <div className="sidebar__list-img">
            <img src={info.image} alt="img" />
          </div>
          <div className="sidebar__list-name">{info.name}</div>
        </div>
      ))}
    </div>
  );
};

export default SideBar;
