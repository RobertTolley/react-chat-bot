function MoveChatbox({ setTextboxPosition, textboxPosition }) {
  function changePosition() {
    setTextboxPosition(!textboxPosition);
  }

  return (
    <p className="move-chatbox-line" onClick={changePosition}>
      Move textbox to top
    </p>
  );
}

export default MoveChatbox;
