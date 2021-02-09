import { v4 as uuid } from 'uuid';
import { Fragment, useEffect, useState } from 'react';
import './App.css';

import Header from './Header';
import Content from './Content';

function App() {
  const [todoList, setTodo] = useState([]);
  const [text, setText] = useState('');
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [btnDisplay, setBtnDisplay] = useState('none');

  useEffect(() => {
    if(text){
      setBtnDisabled(false);
      setBtnDisplay('');
    } else {
      setBtnDisabled(true);
      setBtnDisplay('none');
    }
  }, [text])

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleCleanClick = () => {
    setText('');
    setBtnDisplay('none');
    setBtnDisabled(true);
  };

  const handleAddClick = () => {
    setTodo(prevTodoList => [{ text, key: uuid() }, ...prevTodoList]);
    setText('');
    setBtnDisplay('none');
    setBtnDisabled(true);
  };

  const handleDeleteClick = (key) => {
    setTodo(prevTodoList => prevTodoList.filter(todo => todo.key !== key))
  };

  const handleEnterKeyPress = (event) => {
    if (event.charCode === 13 && event.target.value) {
      handleAddClick();
    }
  };

  return (
    <Fragment>
      <Header />
      <Content
        handleChange={handleChange}
        text={text}
        btnDisabled={btnDisabled}
        btnDisplay={btnDisplay}
        handleCleanClick={handleCleanClick}
        handleAddClick={handleAddClick}
        todoList={todoList}
        handleDeleteClick={handleDeleteClick}
        handleEnterKeyPress={handleEnterKeyPress}
      />
    </Fragment>
  );
}

export default App;
