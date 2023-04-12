import {Todo} from "../entities/todo";
import {Result} from "oxide.ts";

export interface TodoRepository {
    createTodo(newTodo: Todo): Promise<Result<boolean, Error>>

    deleteTodo(id: number): Promise<Result<boolean, Error>>

    getTodoById(id: number): Promise<Result<Todo, Error>>

    getTodos(): Promise<Result<Todo[], Error>>

    updateTodo(newTodo: Todo): Promise<Result<boolean, Error>>
}
