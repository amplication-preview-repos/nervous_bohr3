import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ShardService } from "./shard.service";
import { ShardControllerBase } from "./base/shard.controller.base";

@swagger.ApiTags("shards")
@common.Controller("shards")
export class ShardController extends ShardControllerBase {
  constructor(protected readonly service: ShardService) {
    super(service);
  }
}
