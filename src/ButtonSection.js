import Button from './Button';

export default function ButtonSection(props) {
  const {
    handleChange,
    text,
    btnDisabled,
    btnDisplay,
    handleCleanClick,
    handleAddClick,
    handleEnterKeyPress,
  } = props;

  return (
    <section id='button-section'>
      <input
        placeholder='What do you need to remember?'
        size='50'
        value={text}
        onChange={handleChange}
        onKeyPress={handleEnterKeyPress}
      />
      <Button text='ADD' disabled={btnDisabled} handleAddClick={handleAddClick} />
      <Button text='CLEAN' btnDisplay={btnDisplay} handleCleanClick={handleCleanClick} />
    </section>
  );
}
