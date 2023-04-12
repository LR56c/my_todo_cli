// import {z} from "zod";
// export const TodoSchema = z
//     .object({
//         id: z.number().positive(),
//         title: z.string().max(5),
//         createdAt: z.date(),
//         updatedAt: z.date(),
//         completed: z.boolean(),
//     })
//     .required();
//
// export type Todo = z.infer<typeof TodoSchema>;

import {TodoId} from "./todo_id";

export class Todo {
  private constructor(private todoId : TodoId) {}

  static create(todoId : TodoId): Todo {
    return new Todo(todoId);
  }
}
