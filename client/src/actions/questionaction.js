import * as api from "../api";

const questionaction = (questionData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.postQuestion(questionData);
    dispatch({ type: "POST_QUESTION", payload: data });
    navigate("/");
  } catch (error) {
    console.log(error);
  }
};

export default questionaction;
