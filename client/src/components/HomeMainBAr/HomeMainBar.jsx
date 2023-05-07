import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./homemainbar.css";
import QuestionList from "./Questions/QuestionList";
const HomeMainBar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const user = 1;
  var questionsList = [
    {
      id: 1,
      votes: 3,
      noOfAnswers: 2,
      questionTitle: "what is a function ?",
      questionBody: "It meant to be",
      questionTags: ["java", "node js", "react js", "mongo db"],
      userPosted: "mano",
      askedOn: "jan 1",
    },
    {
      id: 2,
      votes: 0,
      noOfAnswers: 0,
      questionTitle: "what is a function ?",
      questionBody: "It meant to be",
      questionTags: ["javascript", "R", " python", "d jango"],
      userPosted: "mano",
      askedOn: "jan 1",
    },
    {
      id: 3,
      votes: 1,
      noOfAnswers: 0,
      questionTitle: "what is a function ?",
      questionBody: "It meant to be",
      questionTags: ["javascript", "R", " python", "d jango"],
      userPosted: "mano",
      askedOn: "jan 1",
    },
  ];

  const checkAuth = () => {
    if (user === null) {
      navigate("/Auth");
    } else {
      navigate("/AskQuestion");
    }
  };
  return (
    <div className="main-bar">
      <div className="main-bar-header">
        {location.pathname === "/" ? (
          <h1>Top Questions</h1>
        ) : (
          <h1>All Questions</h1>
        )}
        <button onClick={checkAuth} className="ask-btn">
          Ask Question
        </button>
      </div>
      <div>
        {questionsList === null ? (
          <h1> Loading......</h1>
        ) : (
          <>
            <p>{questionsList.length} questions</p>
            <QuestionList questionsList={questionsList} />
          </>
        )}
      </div>
    </div>
  );
};

export default HomeMainBar;
