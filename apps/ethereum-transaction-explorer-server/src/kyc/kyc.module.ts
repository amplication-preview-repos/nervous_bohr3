import { Module } from "@nestjs/common";
import { KycModuleBase } from "./base/kyc.module.base";
import { KycService } from "./kyc.service";
import { KycController } from "./kyc.controller";
import { KycResolver } from "./kyc.resolver";

@Module({
  imports: [KycModuleBase],
  controllers: [KycController],
  providers: [KycService, KycResolver],
  exports: [KycService],
})
export class KycModule {}
