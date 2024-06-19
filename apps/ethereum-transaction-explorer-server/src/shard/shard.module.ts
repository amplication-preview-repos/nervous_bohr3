import { Module } from "@nestjs/common";
import { ShardModuleBase } from "./base/shard.module.base";
import { ShardService } from "./shard.service";
import { ShardController } from "./shard.controller";
import { ShardResolver } from "./shard.resolver";

@Module({
  imports: [ShardModuleBase],
  controllers: [ShardController],
  providers: [ShardService, ShardResolver],
  exports: [ShardService],
})
export class ShardModule {}
