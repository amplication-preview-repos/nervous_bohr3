import { Module } from "@nestjs/common";
import { GrantModuleBase } from "./base/grant.module.base";
import { GrantService } from "./grant.service";
import { GrantController } from "./grant.controller";
import { GrantResolver } from "./grant.resolver";

@Module({
  imports: [GrantModuleBase],
  controllers: [GrantController],
  providers: [GrantService, GrantResolver],
  exports: [GrantService],
})
export class GrantModule {}
