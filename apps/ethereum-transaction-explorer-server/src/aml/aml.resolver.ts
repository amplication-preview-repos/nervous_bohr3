import * as graphql from "@nestjs/graphql";
import { AmlResolverBase } from "./base/aml.resolver.base";
import { Aml } from "./base/Aml";
import { AmlService } from "./aml.service";

@graphql.Resolver(() => Aml)
export class AmlResolver extends AmlResolverBase {
  constructor(protected readonly service: AmlService) {
    super(service);
  }
}
