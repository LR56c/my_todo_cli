import { Module } from '@nestjs/common';
import {Todo, TodoCompleted, TodoId, TodoTitle} from "./entities";

@Module({
  exports: [Todo, TodoCompleted, TodoId, TodoTitle],
})
export class TodoDomainModule {}
