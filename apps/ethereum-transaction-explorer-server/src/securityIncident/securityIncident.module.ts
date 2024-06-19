import { Module } from "@nestjs/common";
import { SecurityIncidentModuleBase } from "./base/securityIncident.module.base";
import { SecurityIncidentService } from "./securityIncident.service";
import { SecurityIncidentController } from "./securityIncident.controller";
import { SecurityIncidentResolver } from "./securityIncident.resolver";

@Module({
  imports: [SecurityIncidentModuleBase],
  controllers: [SecurityIncidentController],
  providers: [SecurityIncidentService, SecurityIncidentResolver],
  exports: [SecurityIncidentService],
})
export class SecurityIncidentModule {}
