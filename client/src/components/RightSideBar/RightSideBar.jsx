import React from "react";
import "./rightsidebar.css";
import Widget from "./Widget/Widget";
import WidgetTags from "./Widget/WidgetTags";
const RightSideBar = () => {
  return (
    <aside className="right-sidebar">
      <Widget />
      <WidgetTags />
    </aside>
  );
};

export default RightSideBar;
