import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { actionCreators } from "../routes/store";

const ToDo = ({ text, id, onBtnClick }) => {
  return (
    <li>
      <Link to={`/${id}`}>
        {text} <button onClick={onBtnClick}>DEL</button>
      </Link>
    </li>
  );
};

// function mapStateToProps(state, ownProps) {
//   console.log(state);
//   console.log(ownProps);
//   return { state };
// }

function mapDispatchToProps(dispatch, ownProps) {
  // console.log(dispatch);
  // console.log(ownProps);
  return { onBtnClick: () => dispatch(actionCreators.deleteToDo(ownProps.id)) };
}

export default connect(null, mapDispatchToProps)(ToDo);
