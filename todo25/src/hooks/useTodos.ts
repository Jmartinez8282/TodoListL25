import { useQuery } from "@tanstack/react-query";
import axios from "axios";

  interface Todo {
    userId: number
    id: number;
    title: string;
    completed: boolean;
}

interface TodoQuery {
    page: number;
    pageSize: number
}


const useTodos = (query: TodoQuery) => {

    

    const fetchTodos = () =>
        axios
            .get<Todo[]>("https://jsonplaceholder.typicode.com/todos",{
                params: {
                   _start:(query.page -1) * query.pageSize,
                   _limit: query.pageSize
                }
            })
            .then((res) => res.data)

    return useQuery<Todo[], Error>({
        queryKey: ["todos",query],
        queryFn: fetchTodos,
        staleTime: 10 * 1000 //stale to 10 sec
    });
}

export default useTodos;