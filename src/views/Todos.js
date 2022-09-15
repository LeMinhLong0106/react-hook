const Todo = (props) => {
  const { todos, title, deleteTodo } = props;

  const handelDelete = (id) => {
    deleteTodo(id);
  };

  return (
    <div className="todos-container">
      <p>{title}</p>
      {todos.map((item) => {
        return (
          <div key={item.id}>
            <li className="todos-child">
              {item.title} <span onClick={() => handelDelete(item.id)}>x</span>
            </li>
          </div>
        );
      })}
      <hr />
    </div>
  );
};

export default Todo;
