import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import ApiClient from "../services/apiClient";
import { CACHE_KEY_TODOS } from "../constants";

const apiClient = new ApiClient<Todo>('todos/')

export interface Todo {
    userId: number
    id: number
    title: string
    completed: boolean
}




const useTodos = () => {





    return useQuery<Todo[], Error>({
        queryKey: CACHE_KEY_TODOS,
        queryFn: apiClient.getAll,
        staleTime: 10 * 1000 //stale to 10 sec
    });
}

export default useTodos;