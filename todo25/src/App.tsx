import TodoForm from "./components/TodoForm"
import TodoList from "./components/TodoList"
import TodoListWQuery from "./components/TodoListWQuery"
import TodoListWQueryHook from "./components/TodoListWQueryHook"
import TodoListWQueryHookSelect from "./components/TodoListWQueryHookSelect"
import TodoListWQueryInf from "./components/TodoListWQueryInf"
import TodoListWQueryPagination from "./components/TodoListWQueryPagination"


const App = () => {
  return (
   <>
   <h1>Todo List</h1>
   {/* <TodoList/> */}
   {/* <TodoListWQuery/> */}
   {/* <TodoListWQueryHook/> */}
   {/* <TodoListWQueryHookSelect/> */}
   <TodoForm/>
<TodoListWQuery/>
   </>
  )
}

export default App