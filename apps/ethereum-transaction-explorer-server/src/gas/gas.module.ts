import { Module } from "@nestjs/common";
import { GasModuleBase } from "./base/gas.module.base";
import { GasService } from "./gas.service";
import { GasController } from "./gas.controller";
import { GasResolver } from "./gas.resolver";

@Module({
  imports: [GasModuleBase],
  controllers: [GasController],
  providers: [GasService, GasResolver],
  exports: [GasService],
})
export class GasModule {}
