import React from "react";
import QuestionsComponent from "./QuestionsComponent";
const QuestionList = ({ questionsList }) => {
  return (
    <>
      {questionsList.map((question) => (
        <QuestionsComponent question={question} key={question.id} />
      ))}
    </>
  );
};

export default QuestionList;
