import React from "react";
import comment from "../../../assets/comment-icon.png";
import pen from "../../../assets/pen-solid.svg";
import overflowblack from "../../../assets/overflowblack.png";
const Widget = () => {
  return (
    <div className="widget">
      <h4>The Overflow Blog</h4>
      <div className="right-sidebar-div-1">
        <div className="right-sidebar-div-2">
          <img src={pen} alt="pen" width="18" />
          <p>
            observability is the key to the future of software (and your DevOps
            career)
          </p>
        </div>
        <div className="right-sidebar-div-2">
          <img src={pen} alt="pen" width="18" />
          <p>Podcast 374: How valuable is your screen name? </p>
        </div>
      </div>

      <h4>Featured on Meta</h4>
      <div className="right-sidebar-div-1">
        <div className="right-sidebar-div-2">
          <img src={comment} alt="pen" width="18" />
          <p>
            Do you observe increased relevance of Related Questions with our
            Machine...
          </p>
        </div>

        <div className="right-sidebar-div-2">
          <img src={overflowblack} alt="overflow-black" width="18" />
          <p>
            Plagiarism flag and moderator tooling has launched to Stack
            Overflow!{" "}
          </p>
        </div>
      </div>

      <h4>Hot Meta Posts</h4>
      <div className="right-sidebar-div-1">
        <div className="right-sidebar-div-2">
          <p>20</p>{" "}
          <p>How to keep the servers running when your Mastodon goes viral</p>
        </div>
        <div className="right-sidebar-div-2">
          <p>38</p>{" "}
          <p>
            From Web2 to Web3: How developers can upskill and build with
            blockchain sponsored post
          </p>
        </div>
      </div>
    </div>
  );
};

export default Widget;
