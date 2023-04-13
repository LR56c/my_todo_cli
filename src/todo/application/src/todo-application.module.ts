import { Module } from '@nestjs/common';
import {CreateTodo} from "./create/create_todo";

@Module({
  exports: [CreateTodo],
})
export class TodoApplicationModule {}
