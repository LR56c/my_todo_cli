import { Module } from '@nestjs/common';

@Module({
  exports: [AppSharedModule],
})
export class AppSharedModule {}
