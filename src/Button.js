export default function Button(props) {
  const { text, disabled, btnDisplay, onClick } = props;

  return (
    <button disabled={disabled} style={{ display: btnDisplay }} onClick={onClick}>
      {text}
    </button>
  );
}
