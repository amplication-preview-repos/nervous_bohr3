import { Module } from "@nestjs/common";
import { MultiSigModuleBase } from "./base/multiSig.module.base";
import { MultiSigService } from "./multiSig.service";
import { MultiSigController } from "./multiSig.controller";
import { MultiSigResolver } from "./multiSig.resolver";

@Module({
  imports: [MultiSigModuleBase],
  controllers: [MultiSigController],
  providers: [MultiSigService, MultiSigResolver],
  exports: [MultiSigService],
})
export class MultiSigModule {}
