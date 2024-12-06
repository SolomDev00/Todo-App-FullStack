"use client";

import { Button } from "./ui/button";
import { Pen, Trash } from "lucide-react";
import { deleteTodoAction } from "@/actions/todo.actions";
import Spinner from "./Spinner";
import { useState } from "react";

const TodosTableActions = ({ id }: { id: string }) => {
  const [loading, setLoading] = useState(false);
  
  return (
    <>
      <Button size={"icon"}>
        <Pen size={16} />
      </Button>
      <Button
        size={"icon"}
        variant={"destructive"}
        onClick={async () => {
          setLoading(true);
          await deleteTodoAction({ id });
          setLoading(false);
        }}
      >
        {loading ? <Spinner /> : <Trash size={16} />}
      </Button>
    </>
  );
};

export default TodosTableActions;
