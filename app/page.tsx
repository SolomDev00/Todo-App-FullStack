import { getUserTodoListAction } from "@/actions/todo.actions";
import AddTodoForm from "@/components/AddTodoForm";
import TodoTable from "@/components/TodoTable";
import { auth } from "@clerk/nextjs";

export default async function Home() {
  const { userId } = auth();
  const todos = await getUserTodoListAction({ userId });

  return (
    <div className="container">  
    <div className="w-full flex flex-col items-center justify-center">
      <div className="w-full flex items-center justify-between">
          <AddTodoForm userId={userId} />
      </div>
      <TodoTable todos={todos} />
    </div>
    </div>
  );
}
