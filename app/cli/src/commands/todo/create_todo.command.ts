import { Command } from 'nestjs-command';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CreateTodoCommand {
  @Command({
    command: 'create',
    describe: 'create a user',
  })
  async create() {
    return null;
  }
}
