import { Module } from "@nestjs/common";
import { ForkModuleBase } from "./base/fork.module.base";
import { ForkService } from "./fork.service";
import { ForkController } from "./fork.controller";
import { ForkResolver } from "./fork.resolver";

@Module({
  imports: [ForkModuleBase],
  controllers: [ForkController],
  providers: [ForkService, ForkResolver],
  exports: [ForkService],
})
export class ForkModule {}
