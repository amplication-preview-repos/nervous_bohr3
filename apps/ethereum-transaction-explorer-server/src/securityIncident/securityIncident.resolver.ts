import * as graphql from "@nestjs/graphql";
import { SecurityIncidentResolverBase } from "./base/securityIncident.resolver.base";
import { SecurityIncident } from "./base/SecurityIncident";
import { SecurityIncidentService } from "./securityIncident.service";

@graphql.Resolver(() => SecurityIncident)
export class SecurityIncidentResolver extends SecurityIncidentResolverBase {
  constructor(protected readonly service: SecurityIncidentService) {
    super(service);
  }
}
