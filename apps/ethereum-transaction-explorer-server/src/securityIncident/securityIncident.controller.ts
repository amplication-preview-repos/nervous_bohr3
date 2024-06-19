import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SecurityIncidentService } from "./securityIncident.service";
import { SecurityIncidentControllerBase } from "./base/securityIncident.controller.base";

@swagger.ApiTags("securityIncidents")
@common.Controller("securityIncidents")
export class SecurityIncidentController extends SecurityIncidentControllerBase {
  constructor(protected readonly service: SecurityIncidentService) {
    super(service);
  }
}
