import { useState } from "react";
import useTodos from "../hooks/useTodos";

const TodoListWQueryHook = () => {
  
  const [userId, setuserId] = useState<number>()
  
  const { data: todos, error, isLoading } = useTodos(userId);

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
