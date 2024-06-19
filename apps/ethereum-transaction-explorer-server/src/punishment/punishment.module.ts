import { Module } from "@nestjs/common";
import { PunishmentModuleBase } from "./base/punishment.module.base";
import { PunishmentService } from "./punishment.service";
import { PunishmentController } from "./punishment.controller";
import { PunishmentResolver } from "./punishment.resolver";

@Module({
  imports: [PunishmentModuleBase],
  controllers: [PunishmentController],
  providers: [PunishmentService, PunishmentResolver],
  exports: [PunishmentService],
})
export class PunishmentModule {}
