import { Module } from '@nestjs/common';
import { CommandModule } from 'nestjs-command';
import { UserCommand } from './commands/exec/user.command';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from 'nestjs-prisma';
import cf from '../config';
import { TodoInfraestructureModule } from 'todo-infraestructure/dist';
import { TodoApplicationModule } from 'todo-application/dist';
import { TodoDomainModule } from 'todo-domain/dist';
import {AppService, TodoService} from "./services";
import {CreateTodoCommand} from "./commands";

@Module({
  imports: [
    CommandModule,
    TodoDomainModule,
    TodoApplicationModule,
    TodoInfraestructureModule,
    ConfigModule.forRoot({ load: [cf] }),
    PrismaModule.forRoot(),
  ],
  providers: [AppService, UserCommand, CreateTodoCommand, TodoService],
  exports: [AppModule],
})
export class AppModule {}
