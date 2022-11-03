const ReduxTodoApp = () => {
  const handleChange = () => {};
  const handleSubmit = () => {};
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} type="text" />
        <button>ekle</button>
      </form>
    </div>
  );
};

export default ReduxTodoApp;
