import React from "react";

const WidgetTags = () => {
  const tags = [
    " html",
    " css",
    " js",
    " express",
    " node",
    " mongo",
    " mern",
    " react",
    " web",
    "bootstrap",
  ];
  return (
    <div className="widget-tags">
      <h3>Watched tags</h3>
      <div className="widget-tags-div">
        {tags.map((tag) => (
          <p key={tag}>{tag}</p>
        ))}
      </div>
    </div>
  );
};

export default WidgetTags;
