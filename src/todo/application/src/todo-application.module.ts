import { Module } from '@nestjs/common';

@Module({
  exports: [TodoApplicationModule],
})
export class TodoApplicationModule {}
