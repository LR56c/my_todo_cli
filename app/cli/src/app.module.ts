import {Module} from '@nestjs/common';
import {AppService} from './app.service';
import {CommandModule} from 'nestjs-command';
import {UserCommand} from './exec/user.command';
import {ConfigModule} from "@nestjs/config";
import cf from '../config'

@Module({
    imports: [CommandModule, ConfigModule.forRoot({load: [cf]})],
    providers: [AppService, UserCommand],
    exports: [AppModule],
})
export class AppModule {
}
