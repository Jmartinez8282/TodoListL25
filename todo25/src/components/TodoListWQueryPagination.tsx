import { useState } from "react";
import useTodos from "../hooks/useTodos";

const TodoListWQueryPagination = () => {

  const pageSize = 10;

  const [userId, setUserid] = useState<number>()
  const [page, setPage] = useState(1)

  const { data: todos, error, isLoading } = useTodos({page,pageSize});

  return (
    <>
      {isLoading ? <p>Loading......</p> : null}
      {error ? <p>{error.message}:</p> : null}
     
      <ul className="list-group">
        {todos?.map((todo) => (
          <li className="list-group-item" key={todo.id}>
            {todo.title}
          </li>
        ))}
      </ul>
      <button className="btn btn-primary my-3 ms-2" onClick={() => setPage(page - 1)}>
        Previous
      </button>
      <button className="btn btn-primary my-3 ms-2" onClick={() => setPage(page + 1)}>
        Next
      </button>
    </>
  );
};

export default TodoListWQueryPagination;
