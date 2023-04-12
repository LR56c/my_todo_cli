import {Injectable} from '@nestjs/common';
import {ConfigService} from "@nestjs/config";

@Injectable()
export class AppService {
    constructor(private cf: ConfigService) {
        console.log(this.cf.get<string>('DATABASE_USER'))
    }
    getHello(): string {
        return 'Hello World!';
    }
}
