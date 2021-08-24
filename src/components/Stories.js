import React from "react";

const Stories = () => {
  const [state, setState] = React.useState([
    { id: 1, image: "/images/fm2.jpg", name: "ARY Digital" },
    { id: 3, image: "/images/a1.jpg", name: "Shahid Afridi" },
    { id: 2, image: "/images/f3.jpg", name: "Fawad Khan" },
    { id: 4, image: "/images/i2.jpg", name: "Iqrar ul Hassan" },
  ]);
  return (
    <div className="stories">
      {state.map((story) => (
        <div className="stories__col" key={story.id}>
          <div className="stories__body">
            <img src={story.image} alt="story"></img>
            <div className="stories__body-overlay">
              <div className="stories__body-overlay-img">
                <img src={story.image} alt="story"></img>
              </div>
              <div className="stories__body-name">{story.name}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Stories;
