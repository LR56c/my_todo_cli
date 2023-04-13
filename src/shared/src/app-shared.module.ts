import { Module } from '@nestjs/common';
import {CreatedAt, UpdatedAt} from "./value_objects";

@Module({
  exports: [CreatedAt, UpdatedAt],
})
export class AppSharedModule {}
