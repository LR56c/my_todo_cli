import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { CommandModule } from 'nestjs-command';
import { UserCommand } from './exec/user.command';

@Module({
  imports: [CommandModule],
  providers: [AppService, UserCommand],
  exports: [AppModule],
})
export class AppModule {}
