import { getTodoListAction } from "@/actions/todo.actions";
import AddTodoForm from "@/components/AddTodoForm";
import TodoTable from "@/components/TodoTable";

export default async function Home() {
  const todos = await getTodoListAction();

  return (
    <div className="container">  
    <div className="w-full flex flex-col items-center justify-center">
      <div className="w-full flex items-center justify-between">
      <AddTodoForm />
      </div>
      <TodoTable todos={todos} />
    </div>
    </div>
  );
}
