const KeyboardEvents = () => {
  // keyDown
  const handleKeyDown = (e) => {
    console.log(e.key);
    console.log(e.keyCode)
    e.keyCode === "Enter" && alert("form submitted")
  };

  //keyUp

  // cut event

  // paste event

  // copy
  const handleCopy = (e) => {
    e.target.tagName === 'P' && e.target.remove();
    alert("You will not be able to access the information again because you tried to copy it." )

  }

  return (
    <div style={{ marginTop: "30px" }}>
      <h2>KeyboardEvents</h2>
      <input type="text" onKeyDown={handleKeyDown} />
      <p onCopy={handleCopy}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
    </div>
  );
};

export default KeyboardEvents;