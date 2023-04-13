import { Todo } from '../entities/todo';
import { Result } from 'oxide.ts';
import { TodoId } from '../entities/todo_id';

export interface TodoRepository {
  createTodo(newTodo: Todo): Promise<Result<boolean, Error>>;

  deleteTodo(id: TodoId): Promise<Result<boolean, Error>>;

  getTodoById(id: TodoId): Promise<Result<Todo, Error>>;

  getTodos(): Promise<Result<Todo[], Error>>;

  updateTodo(newTodo: Todo): Promise<Result<boolean, Error>>;
}
