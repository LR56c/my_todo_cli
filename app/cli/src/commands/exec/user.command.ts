import { Command, Positional, Option } from 'nestjs-command';
import { Injectable } from '@nestjs/common';
@Injectable()
export class UserCommand {
  @Command({

    command: 'create:user <username>',
    describe: 'create a user',
  })
  async create(
    @Positional({
      name: 'username',
      describe: 'the username',
      type: 'string',
    })
    username: string,
    @Option({
      name: 'group',
      describe: 'user group (ex: "jedi")',
      type: 'string',
      alias: 'g',
    })
    group: string,
    @Option({
      name: 'saber',
      describe: 'if user has a lightsaber',
      type: 'boolean',
      default: false,
    })
    saber: boolean,
  ) {

    return {
      username,
      group,
      saber,
    };
  }
}
