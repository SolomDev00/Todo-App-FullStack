import AddTodoForm from "@/components/AddTodoForm";
import { ModeToggle } from "@/components/ModeToggle";

export default function Home() {
  return (
    <div className="container">
      <ModeToggle />
      <AddTodoForm />
    </div>
  );
}
