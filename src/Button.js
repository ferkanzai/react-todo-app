export default function Button(props) {
  const { text, disabled, btnDisplay, handleCleanClick, handleAddClick } = props;

  return (
    <button
      disabled={disabled}
      style={{ display: btnDisplay }}
      onClick={() => {
        if (text === 'ADD') {
          handleAddClick();
        } else {
          handleCleanClick();
        }
      }}
    >
      {text}
    </button>
  );
}
