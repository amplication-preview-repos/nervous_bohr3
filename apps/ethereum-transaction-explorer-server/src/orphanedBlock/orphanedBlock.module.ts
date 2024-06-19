import { Module } from "@nestjs/common";
import { OrphanedBlockModuleBase } from "./base/orphanedBlock.module.base";
import { OrphanedBlockService } from "./orphanedBlock.service";
import { OrphanedBlockController } from "./orphanedBlock.controller";
import { OrphanedBlockResolver } from "./orphanedBlock.resolver";

@Module({
  imports: [OrphanedBlockModuleBase],
  controllers: [OrphanedBlockController],
  providers: [OrphanedBlockService, OrphanedBlockResolver],
  exports: [OrphanedBlockService],
})
export class OrphanedBlockModule {}
