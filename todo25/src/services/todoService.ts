import ApiClient from "./apiClient";



export interface Todo {
    userId: number
    id: number
    title: string
    completed: boolean
}

export default new ApiClient<Todo>('todos/')