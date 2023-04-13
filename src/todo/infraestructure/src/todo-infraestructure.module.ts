import { Module } from '@nestjs/common';

@Module({
  exports: [TodoInfraestructureModule],
})
export class TodoInfraestructureModule {}
