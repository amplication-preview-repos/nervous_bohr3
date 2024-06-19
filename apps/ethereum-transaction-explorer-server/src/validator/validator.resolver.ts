import * as graphql from "@nestjs/graphql";
import { ValidatorResolverBase } from "./base/validator.resolver.base";
import { Validator } from "./base/Validator";
import { ValidatorService } from "./validator.service";

@graphql.Resolver(() => Validator)
export class ValidatorResolver extends ValidatorResolverBase {
  constructor(protected readonly service: ValidatorService) {
    super(service);
  }
}
