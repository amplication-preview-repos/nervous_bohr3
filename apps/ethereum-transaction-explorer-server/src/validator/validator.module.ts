import { Module } from "@nestjs/common";
import { ValidatorModuleBase } from "./base/validator.module.base";
import { ValidatorService } from "./validator.service";
import { ValidatorController } from "./validator.controller";
import { ValidatorResolver } from "./validator.resolver";

@Module({
  imports: [ValidatorModuleBase],
  controllers: [ValidatorController],
  providers: [ValidatorService, ValidatorResolver],
  exports: [ValidatorService],
})
export class ValidatorModule {}
