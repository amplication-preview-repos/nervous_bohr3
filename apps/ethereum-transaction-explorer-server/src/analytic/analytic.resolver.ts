import * as graphql from "@nestjs/graphql";
import { AnalyticResolverBase } from "./base/analytic.resolver.base";
import { Analytic } from "./base/Analytic";
import { AnalyticService } from "./analytic.service";

@graphql.Resolver(() => Analytic)
export class AnalyticResolver extends AnalyticResolverBase {
  constructor(protected readonly service: AnalyticService) {
    super(service);
  }
}
