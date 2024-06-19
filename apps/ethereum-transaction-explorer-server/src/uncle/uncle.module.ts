import { Module } from "@nestjs/common";
import { UncleModuleBase } from "./base/uncle.module.base";
import { UncleService } from "./uncle.service";
import { UncleController } from "./uncle.controller";
import { UncleResolver } from "./uncle.resolver";

@Module({
  imports: [UncleModuleBase],
  controllers: [UncleController],
  providers: [UncleService, UncleResolver],
  exports: [UncleService],
})
export class UncleModule {}
