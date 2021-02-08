import Todo from './Todo';

export default function TodoSection(props) {
  const { todoList, handleDeleteClick } = props;
  // const { text, key } = todoList
  // console.log(text)

  return (
    <section id='todo-section'>
      {todoList.map((todo) => (
        <Todo todoText={todo.text} id={todo.key} handleDeleteClick={handleDeleteClick} />
      ))}
    </section>
  );
}
