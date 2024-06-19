import { Module } from "@nestjs/common";
import { ValidatorSlashModuleBase } from "./base/validatorSlash.module.base";
import { ValidatorSlashService } from "./validatorSlash.service";
import { ValidatorSlashController } from "./validatorSlash.controller";
import { ValidatorSlashResolver } from "./validatorSlash.resolver";

@Module({
  imports: [ValidatorSlashModuleBase],
  controllers: [ValidatorSlashController],
  providers: [ValidatorSlashService, ValidatorSlashResolver],
  exports: [ValidatorSlashService],
})
export class ValidatorSlashModule {}
