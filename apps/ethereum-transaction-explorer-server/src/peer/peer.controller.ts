import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PeerService } from "./peer.service";
import { PeerControllerBase } from "./base/peer.controller.base";

@swagger.ApiTags("peers")
@common.Controller("peers")
export class PeerController extends PeerControllerBase {
  constructor(protected readonly service: PeerService) {
    super(service);
  }
}
