import { Fragment } from 'react';

export default function Todo(props) {
  const { todoText, id, handleDeleteClick } = props;

  return (
    <Fragment>
      <div className='todo' id={id}>
        <p>{todoText}</p>
        <button className='delete-todo' onClick={() => handleDeleteClick(id)}>
          X
        </button>
      </div>
    </Fragment>
  );
}
