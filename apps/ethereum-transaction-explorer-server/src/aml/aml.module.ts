import { Module } from "@nestjs/common";
import { AmlModuleBase } from "./base/aml.module.base";
import { AmlService } from "./aml.service";
import { AmlController } from "./aml.controller";
import { AmlResolver } from "./aml.resolver";

@Module({
  imports: [AmlModuleBase],
  controllers: [AmlController],
  providers: [AmlService, AmlResolver],
  exports: [AmlService],
})
export class AmlModule {}
