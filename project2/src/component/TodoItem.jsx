import React, { useContext } from "react";
import { TodoDispatchContext } from "../App";
import "./TodoItem.css";

function TodoItem({ id, content, isDone, createdDate }) {
  const { onUpdate, onDelete } = useContext(TodoDispatchContext);
  console.log(`${id}`);
  const onChangeCheckbox = () => {
    onUpdate(id);
  };

  const onClickDelete = () => {
    onDelete(id);
  };

  return (
    <div className="TodoItem">
      <div className="checkbox_col">
        <input checked={isDone} onChange={onChangeCheckbox} type="checkbox" />
      </div>
      <div className="title_col">{content}</div>
      <div className="date_col">
        {new Date(createdDate).toLocaleDateString()}
      </div>
      <div className="btn_col">
        <button onClick={onClickDelete}>삭제</button>
      </div>
    </div>
  );
}

export default React.memo(TodoItem);
