import { TodoId } from './todo_id';
import { TodoTitle } from './todo_title';
import { TodoCompleted } from './todo_completed';
import { CreatedAt } from 'app-shared/src/value_objects/created_at';
import { UpdatedAt } from 'app-shared/src/value_objects/updated_at';

export class Todo {
  private constructor(
    public readonly todoId: TodoId,
    public readonly todoTitle: TodoTitle,
    public readonly todoCompleted: TodoCompleted,
    public readonly createdAt: CreatedAt,
    public readonly updatedAt: UpdatedAt,
  ) {}

  public static create(
    todoId: TodoId,
    todoTitle: TodoTitle,
    todoCompleted: TodoCompleted,
    createdAt: CreatedAt,
    updatedAt: UpdatedAt,
  ): Todo {
    return new Todo(todoId, todoTitle, todoCompleted, createdAt, updatedAt);
  }
}
