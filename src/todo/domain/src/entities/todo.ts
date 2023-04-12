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
import {TodoTitle} from "./todo_title";
import {TodoCompleted} from "./todo_completed";
import {CreatedAt} from "todo-shared/src/value_objects/created_at";
import {UpdatedAt} from "todo-shared/src/value_objects/updated_at";

export class Todo {
  private constructor(private todoId: TodoId,
                      private todoTitle: TodoTitle,
                      private todoCompleted: TodoCompleted,
                      private createdAt: CreatedAt,
                      private updatedAt: UpdatedAt
  ) {
  }

  static create(todoId: TodoId,
                todoTitle: TodoTitle,
                todoCompleted: TodoCompleted,
                createdAt: CreatedAt,
                updatedAt: UpdatedAt
  ): Todo {
    return new Todo(todoId, todoTitle, todoCompleted, createdAt, updatedAt);
  }
}
