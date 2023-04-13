import { Module } from '@nestjs/common';
import {LocalDataSource} from "./data/local_data_source";

@Module({
  exports: [LocalDataSource],
})
export class TodoInfraestructureModule {}
