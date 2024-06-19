import { Module } from "@nestjs/common";
import { BiddingModuleBase } from "./base/bidding.module.base";
import { BiddingService } from "./bidding.service";
import { BiddingController } from "./bidding.controller";
import { BiddingResolver } from "./bidding.resolver";

@Module({
  imports: [BiddingModuleBase],
  controllers: [BiddingController],
  providers: [BiddingService, BiddingResolver],
  exports: [BiddingService],
})
export class BiddingModule {}
