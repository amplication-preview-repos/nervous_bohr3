import { Module } from "@nestjs/common";
import { TokenBalanceModuleBase } from "./base/tokenBalance.module.base";
import { TokenBalanceService } from "./tokenBalance.service";
import { TokenBalanceController } from "./tokenBalance.controller";
import { TokenBalanceResolver } from "./tokenBalance.resolver";

@Module({
  imports: [TokenBalanceModuleBase],
  controllers: [TokenBalanceController],
  providers: [TokenBalanceService, TokenBalanceResolver],
  exports: [TokenBalanceService],
})
export class TokenBalanceModule {}
