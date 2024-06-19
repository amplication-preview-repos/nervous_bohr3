import { Module } from "@nestjs/common";
import { PeerModuleBase } from "./base/peer.module.base";
import { PeerService } from "./peer.service";
import { PeerController } from "./peer.controller";
import { PeerResolver } from "./peer.resolver";

@Module({
  imports: [PeerModuleBase],
  controllers: [PeerController],
  providers: [PeerService, PeerResolver],
  exports: [PeerService],
})
export class PeerModule {}
