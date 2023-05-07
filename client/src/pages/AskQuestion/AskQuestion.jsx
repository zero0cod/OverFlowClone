import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import questionaction from "../../actions/questionaction";
import "./askquestion.css";

const AskQuestion = () => {
  const [questionTitle, setQuestionTitle] = useState("");
  const [questionBody, setQuestionBody] = useState("");
  const [questionTags, setQuestionTags] = useState("");
  const dispatch = useDispatch();
  const User = useSelector((state) => state.currentUserReducer);
  console.log(User + "user");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ questionTitle, questionBody, questionTags });
    dispatch(
      questionaction(
        {
          questionTitle,
          questionBody,
          questionTags,
          userPosted: User.result.name,
        },
        navigate
      )
    );
  };
  const handleEnter = (e) => {
    if (e.key === "Enter") {
      setQuestionBody(questionBody + "\n");
    }
  };
  return (
    <div className="ask-question">
      <div className="ask-ques-container">
        <h1>Ask a Public Question</h1>
        <form onSubmit={handleSubmit}>
          <div className="ask-form-container">
            {/* label one */}

            <label htmlFor="ask-ques-title">
              <h4>title</h4>
              <p>
                Be Specific and Imagine you're asking a question to another
                person
              </p>
              <input
                type="text"
                placeholder="e.g. is there an R function for finding the index of an element in a vector"
                id="ask-ques-title"
                onChange={(e) => {
                  setQuestionTitle(e.target.value);
                }}
              />
            </label>
            {/* label two */}

            <label htmlFor="ask-ques-title">
              <h4>Body</h4>
              <p>
                Include all information Someone would need to answer your
                question
              </p>
              <textarea
                name=""
                id="ask-ques-title"
                cols="30"
                rows="10"
                onChange={(e) => {
                  setQuestionBody(e.target.value);
                }}
                onKeyDown={handleEnter}
              ></textarea>
            </label>

            {/* label three */}
            <label htmlFor="ask-ques-title">
              <h4>Tags</h4>
              <p>Add upto 5 tags to describe what your question is about</p>
              <input
                type="text"
                placeholder="e.g. (Xml TypeScript Wordpress"
                onChange={(e) => {
                  setQuestionTags(e.target.value.split(" "));
                }}
              />
            </label>
          </div>
          <input
            type="submit"
            value="Review your question"
            className="rew-btn"
          />
        </form>
      </div>
    </div>
  );
};

export default AskQuestion;
