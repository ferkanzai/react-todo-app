import ButtonSection from './ButtonSection';
import TodoSection from './TodoSection';

export default function Content(props) {
  const {
    handleChange,
    text,
    btnDisabled,
    btnDisplay,
    handleCleanClick,
    handleAddClick,
    todoList,
    handleDeleteClick,
    handleEnterKeyPress,
  } = props;

  return (
    <section id='content'>
      <ButtonSection
        handleChange={handleChange}
        text={text}
        btnDisabled={btnDisabled}
        btnDisplay={btnDisplay}
        handleCleanClick={handleCleanClick}
        handleAddClick={handleAddClick}
        handleEnterKeyPress={handleEnterKeyPress}
      />
      <TodoSection todoList={todoList} handleDeleteClick={handleDeleteClick} />
    </section>
  );
}
