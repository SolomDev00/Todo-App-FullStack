"use server";

import { ITodo } from "@/interfaces";
import { TodoFormValues } from "@/schema";
import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";

const prisma = new PrismaClient();

export const getTodoListAction = async () => {
  return await prisma.todo.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
};
export const createTodoAction = async ({
  title,
  body,
  complated,
}: TodoFormValues) => {
  await prisma.todo.create({
    data: {
      title,
      body,
      complated,
    },
  });
  revalidatePath("/");
};
export const updateTodoAction = async ({
  id,
  title,
  body,
  complated,
}: ITodo) => {
  await prisma.todo.update({
    where: {
      id,
    },
    data: {
      title,
      body,
      complated,
    },
  });
  revalidatePath("/");
};
export const deleteTodoAction = async ({ id }: { id: string | undefined }) => {
  await prisma.todo.delete({
    where: {
      id,
    },
  });
  revalidatePath("/");
};
