import React from "react";
import { Link, useParams } from "react-router-dom";
import Avatar from "../../components/Avatar/Avatar";
import "./question.css";
import DisplayAnswers from "./DisplayAnswers";
const QuestionDetails = () => {
  const { id } = useParams();
  var questionsList = [
    {
      _id: "1",
      upVotes: 3,
      downVotes: 2,
      noOfAnswers: 2,
      questionTitle: "what is a function ?",
      questionBody: "It meant to be",
      questionTags: ["java", "node js", "react js", "mongo db"],
      userPosted: "mano",
      answer: [
        {
          ansId: "1",
          answeBody: "answer",
          userAnswered: "Kumar",
          answeredOn: "jan 2",
        },
      ],
      askedOn: "jan 1",
    },
    {
      _id: "2",
      upVotes: 3,
      downVotes: 2,
      noOfAnswers: 1,
      questionTitle: "what is a function ?",
      questionBody: "It meant to be",
      questionTags: ["javascript", "R", " python", "d jango"],
      userPosted: "mano",
      answer: [
        {
          ansId: "2",
          answeBody: "answer",
          userAnswered: "sree",
          answeredOn: "jan 4",
        },
      ],
      askedOn: "jan 1",
    },
    {
      _id: "3",
      upVotes: 3,
      downVotes: 2,
      noOfAnswers: 0,
      questionTitle: "what is a function ?",
      questionBody: "It meant to be",
      questionTags: ["javascript", "R", " python", "d jango"],
      userPosted: "mano",
      answer: [
        {
          ansId: "3",
          answeBody: "answer",
          userAnswered: "stacker",
          answeredOn: "nov 2",
        },
      ],
      askedOn: "jan 1",
    },
  ];
  return (
    <div className="question-details-page">
      {questionsList === null ? (
        <h1>Loading....</h1>
      ) : (
        <>
          {questionsList
            .filter((question) => question._id === id)
            .map((question) => (
              <div key={question._id}>
                <section className="question-details-container">
                  <h1>{question.questionTitle}</h1>
                  <div className="question-details-container-2">
                    <div className="question-votes">
                      <svg
                        aria-hidden="true"
                        className="votes-icon iconArrowUpLg"
                        width="36"
                        height="36"
                        opacity="0.4"
                        viewBox="0 0 36 36"
                      >
                        <path d="M2 25h32L18 9 1 25Z"></path>
                      </svg>{" "}
                      <p> {question.upVotes - question.downVotes} </p>
                      <svg
                        aria-hidden="true"
                        className="votes-icon iconArrowDownLg"
                        width="36"
                        height="36"
                        opacity="0.4"
                        viewBox="0 0 36 36"
                      >
                        <path d="M2 11h32L18 27 2 11Z"></path>
                      </svg>{" "}
                    </div>{" "}
                    <div style={{ width: "100%" }}>
                      <p className="question-body"> {question.questionBody} </p>
                      <div className="question-details-tags">
                        {question.questionTags.map((tag) => (
                          <p key={tag}> {tag} </p>
                        ))}
                      </div>
                      <div className="question-action-user">
                        <div>
                          <button type="button">Share</button>
                          <button type="button">Delete</button>
                        </div>
                        <div>
                          <p>asked {question.askedOn}</p>
                          <Link
                            to={`/User/${question.userId}`}
                            className="user-link"
                            style={{ color: "#0086d8" }}
                          >
                            <Avatar backgroundColor="orange" px="8px" py="5px">
                              {question.userPosted.charAt(0).toUpperCase()}
                            </Avatar>
                            <div>{question.userPosted}</div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                {question.noOfAnswers !== 0 && (
                  <section>
                    <h3> {question.noOfAnswers} answers</h3>
                    <DisplayAnswers key={question._id} question={question} />
                  </section>
                )}

                <section className="post-ans-container">
                  <h3>Your Answer</h3>
                  <form>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                    <br />
                    <input
                      type="submit"
                      name=""
                      className="post-ans-btn"
                      value="post your  answer"
                    />
                  </form>
                  <p>
                    Browse other Question
                    {question.questionTags.map((tag) => (
                      <Link to="/Tags" key={tag} className="ans-tag">
                        {tag}
                      </Link>
                    ))}
                    or
                    <Link
                      to="/AskQuestion"
                      style={{ textDecoration: "none", color: "#009dff" }}
                    >
                      ask your own Question{" "}
                    </Link>
                  </p>
                </section>
              </div>
            ))}
        </>
      )}
    </div>
  );
};

export default QuestionDetails;
