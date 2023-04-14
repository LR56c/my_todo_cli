import { Injectable } from '@nestjs/common';
import {TodoService} from "./todo.service";
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
