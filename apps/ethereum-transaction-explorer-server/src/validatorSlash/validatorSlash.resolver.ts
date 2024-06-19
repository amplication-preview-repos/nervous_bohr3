import * as graphql from "@nestjs/graphql";
import { ValidatorSlashResolverBase } from "./base/validatorSlash.resolver.base";
import { ValidatorSlash } from "./base/ValidatorSlash";
import { ValidatorSlashService } from "./validatorSlash.service";

@graphql.Resolver(() => ValidatorSlash)
export class ValidatorSlashResolver extends ValidatorSlashResolverBase {
  constructor(protected readonly service: ValidatorSlashService) {
    super(service);
  }
}
