import { Module } from "@nestjs/common";
import { MasterNodeModuleBase } from "./base/masterNode.module.base";
import { MasterNodeService } from "./masterNode.service";
import { MasterNodeController } from "./masterNode.controller";
import { MasterNodeResolver } from "./masterNode.resolver";

@Module({
  imports: [MasterNodeModuleBase],
  controllers: [MasterNodeController],
  providers: [MasterNodeService, MasterNodeResolver],
  exports: [MasterNodeService],
})
export class MasterNodeModule {}
