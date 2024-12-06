"use server";

import { TodoFormValues } from "@/schema";
import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";

const prisma = new PrismaClient();

export const getTodoListAction = async () => {
  return await prisma.todo.findMany({
    orderBy: {
      createdAt: "desc"
    }
  });
};
export const createTodoAction = async ({ title, body, complated }: TodoFormValues) => {
  await prisma.todo.create({
    data: {
      title,
      body,
      complated,
    },
  });
  revalidatePath("/");
};
export const updateTodoAction = async () => {};
export const deleteTodoAction = async ({id}: {id: string}) => {
  await prisma.todo.delete({
    where: {
      id,
    }
  })
  revalidatePath('/');
};
