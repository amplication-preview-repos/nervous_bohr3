import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SecurityIncidentServiceBase } from "./base/securityIncident.service.base";

@Injectable()
export class SecurityIncidentService extends SecurityIncidentServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
