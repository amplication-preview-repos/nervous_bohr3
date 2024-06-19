import * as graphql from "@nestjs/graphql";
import { PunishmentResolverBase } from "./base/punishment.resolver.base";
import { Punishment } from "./base/Punishment";
import { PunishmentService } from "./punishment.service";

@graphql.Resolver(() => Punishment)
export class PunishmentResolver extends PunishmentResolverBase {
  constructor(protected readonly service: PunishmentService) {
    super(service);
  }
}
