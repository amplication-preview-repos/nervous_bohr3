import { Module } from "@nestjs/common";
import { Layer2TransactionModuleBase } from "./base/layer2Transaction.module.base";
import { Layer2TransactionService } from "./layer2Transaction.service";
import { Layer2TransactionController } from "./layer2Transaction.controller";
import { Layer2TransactionResolver } from "./layer2Transaction.resolver";

@Module({
  imports: [Layer2TransactionModuleBase],
  controllers: [Layer2TransactionController],
  providers: [Layer2TransactionService, Layer2TransactionResolver],
  exports: [Layer2TransactionService],
})
export class Layer2TransactionModule {}
