import {TodoRepository} from "todo-domain/src/repository/todo_repository";
import {Todo} from "todo-domain/src/entities/todo";
import {Result} from "oxide.ts";
import {TodoId} from "todo-domain/src/entities/todo_id";

export class LocalDataSource implements TodoRepository{
  async createTodo(newTodo: Todo): Promise<Result<boolean, Error>> {
    return Promise.resolve(undefined);
  }

  async deleteTodo(id: TodoId): Promise<Result<boolean, Error>> {
    return Promise.resolve(undefined);
  }

  async getTodoById(id: TodoId): Promise<Result<Todo, Error>> {
    return Promise.resolve(undefined);
  }

  async getTodos(): Promise<Result<Todo[], Error>> {
    return Promise.resolve(undefined);
  }

  async updateTodo(newTodo: Todo): Promise<Result<boolean, Error>> {
    return Promise.resolve(undefined);
  }
}
