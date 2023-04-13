import {Module} from '@nestjs/common';
import {AppService} from './services/app.service';
import {CommandModule} from 'nestjs-command';
import {UserCommand} from './commands/exec/user.command';
import {ConfigModule} from "@nestjs/config";
import cf from '../config';
import {TodoService} from "./services/todo.service";
import {PrismaService} from "./services/prisma.service";

@Module({
  imports: [CommandModule, ConfigModule.forRoot({load: [cf]})],
  providers: [AppService, UserCommand, PrismaService, TodoService],
  exports: [AppModule],
})
export class AppModule {
}
