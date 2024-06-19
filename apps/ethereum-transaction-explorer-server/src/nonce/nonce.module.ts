import { Module } from "@nestjs/common";
import { NonceModuleBase } from "./base/nonce.module.base";
import { NonceService } from "./nonce.service";
import { NonceController } from "./nonce.controller";
import { NonceResolver } from "./nonce.resolver";

@Module({
  imports: [NonceModuleBase],
  controllers: [NonceController],
  providers: [NonceService, NonceResolver],
  exports: [NonceService],
})
export class NonceModule {}
