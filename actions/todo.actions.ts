"use server";

import { TodoFormValues } from "@/schema";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getTodoListAction = async () => {
  return await prisma.todo.findMany();
};
export const createTodoAction = async ({ title, body, complated }: TodoFormValues) => {
  await prisma.todo.create({
    data: {
      title,
      body,
      complated,
    },
  });
};
export const updateTodoAction = async () => {};
export const deleteTodoAction = async ({id}: {id: string}) => {
  await prisma.todo.delete({
    where: {
      id,
    }
  })
};
