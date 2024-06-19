import { Module } from "@nestjs/common";
import { PriceFeedModuleBase } from "./base/priceFeed.module.base";
import { PriceFeedService } from "./priceFeed.service";
import { PriceFeedController } from "./priceFeed.controller";
import { PriceFeedResolver } from "./priceFeed.resolver";

@Module({
  imports: [PriceFeedModuleBase],
  controllers: [PriceFeedController],
  providers: [PriceFeedService, PriceFeedResolver],
  exports: [PriceFeedService],
})
export class PriceFeedModule {}
