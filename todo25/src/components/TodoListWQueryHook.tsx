import useTodos from "../hooks/useTodos";

const TodoListWQueryHook = () => {
  const { data: todos, error, isLoading } = useTodos();

  return (
    <>
      {isLoading ? <p>Loading......</p> : null}
      {error ? <p>{error.message}:</p> : null}
      {todos?.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </>
  );
};

export default TodoListWQueryHook;
