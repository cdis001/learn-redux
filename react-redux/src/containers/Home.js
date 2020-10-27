import React, { useState } from "react";
import { connect } from "react-redux";

import { actionCreators } from "../routes/store";
import ToDo from "../components/ToDo";

const Home = ({ toDos, addToDo }) => {
  const [text, setText] = useState("");

  function onChange(e) {
    setText(e.target.value);
  }
  function onSubmit(e) {
    e.preventDefault();
    addToDo(text);
    setText("");
  }

  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>add</button>
      </form>
      <ul>
        {toDos.map((toDo) => (
          <ToDo key={toDo.id} {...toDo} />
        ))}
      </ul>
    </>
  );
};

function mapStateToProps(state, ownProps) {
  // console.log(state);
  // console.log(ownProps);
  return { toDos: state };
}

function mapDispatchToProps(dispatch, ownProps) {
  // console.log(dispatch);
  // console.log(ownProps);
  return { addToDo: (text) => dispatch(actionCreators.addToDo(text)) };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
