import {Module} from '@nestjs/common';
import {AppService} from './services/app.service';
import {CommandModule} from 'nestjs-command';
import {UserCommand} from './commands/exec/user.command';
import {ConfigModule} from "@nestjs/config";
import cf from '../config';
import {TodoService} from "./services/todo.service";
import {PrismaService} from "./services/prisma.service";
import {TodoDomainModule} from "todo-domain/src/todo-domain.module";
import {
  TodoApplicationModule
} from "todo-application/src/todo-application.module";
import {
  TodoInfraestructureModule
} from "todo-infraestructure/src/todo-infraestructure.module";

@Module({
  imports: [CommandModule, TodoDomainModule, TodoApplicationModule, TodoInfraestructureModule, ConfigModule.forRoot({load: [cf]})],
  providers: [AppService, UserCommand, PrismaService, TodoService],
  exports: [AppModule],
})
export class AppModule {
}
