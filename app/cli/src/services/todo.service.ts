import {Err, Ok, Result} from "oxide.ts";
import {PrismaService} from "./prisma.service";
import {
  Todo,
  TodoCompleted,
  TodoId,
  TodoRepository,
  TodoTitle
} from "todo-domain/dist";
import {CreatedAt, UpdatedAt} from "app-shared/dist";
export class TodoService implements TodoRepository{
  constructor(private context: PrismaService) {
    console.log("TodoService.constructor");
    console.log('todoService.context ' + this.context);
    console.log('-----------');
  }

  async createTodo(newTodo: Todo): Promise<Result<boolean, Error>> {
    try {
      this.context.todo.create({
        data: {
          id: newTodo.todoId.value,
          title: newTodo.todoTitle.value,
          completed: newTodo.todoCompleted.value,
          createdAt: newTodo.createdAt.value,
          updatedAt: newTodo.updatedAt.value
        }
      });
      return Promise.resolve(Ok(true));
    } catch (e) {
      return Promise.resolve(Err(e));
    }
  }

  async deleteTodo(id: TodoId): Promise<Result<boolean, Error>> {
    try {
      this.context.todo.delete({
        where: {
          id: id.value
        }
      });
      return Promise.resolve(Ok(true));
    }
    catch (e) {
      return Promise.resolve(Err(e));
    }
  }

  async getTodoById(id: TodoId): Promise<Result<Todo, Error>> {
    try {
      const prismaTodo = await this.context.todo.findUnique({
        where: {
          id: id.value
        }
      });

      const todo = Todo.create(
        new TodoId(prismaTodo.id),
        new TodoTitle(prismaTodo.title),
        new TodoCompleted(prismaTodo.completed),
        new CreatedAt(prismaTodo.createdAt),
        new UpdatedAt(prismaTodo.updatedAt, prismaTodo.createdAt)
      );

      return Promise.resolve(Ok(todo));
    }
    catch (e) {
      return Promise.resolve(Err(e));
    }
  }

  async getTodos(): Promise<Result<Todo[], Error>> {
    try {
      const prismaTodos = await this.context.todo.findMany();

      const todos = prismaTodos.map((prismaTodo) => {
        return Todo.create(
          new TodoId(prismaTodo.id),
          new TodoTitle(prismaTodo.title),
          new TodoCompleted(prismaTodo.completed),
          new CreatedAt(prismaTodo.createdAt),
          new UpdatedAt(prismaTodo.updatedAt, prismaTodo.createdAt)
        );
      });

      return Promise.resolve(Ok(todos));
    }
    catch (e) {
      return Promise.resolve(Err(e));
    }
  }

  async updateTodo(newTodo: Todo): Promise<Result<boolean, Error>> {
    try {
      this.context.todo.update({
        where: {
          id: newTodo.todoId.value
        },
        data: {
          title: newTodo.todoTitle.value,
          completed: newTodo.todoCompleted.value,
          updatedAt: newTodo.updatedAt.value
        }
      });
      return Promise.resolve(Ok(true));
    }
    catch (e) {
      return Promise.resolve(Err(e));
    }
  }
}
