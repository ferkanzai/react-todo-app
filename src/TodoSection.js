import Todo from './Todo';

export default function TodoSection(props) {
  const { todoList, handleDeleteClick } = props;

  return (
    <section id='todo-section'>
      {todoList.map((todo) => (
        <Todo todoText={todo.text} key={todo.key} id={todo.key} handleDeleteClick={handleDeleteClick} />
      ))}
    </section>
  );
}
