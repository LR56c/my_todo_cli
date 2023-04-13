import { Module } from '@nestjs/common';

@Module({
  exports: [TodoDomainModule],
})
export class TodoDomainModule {}
