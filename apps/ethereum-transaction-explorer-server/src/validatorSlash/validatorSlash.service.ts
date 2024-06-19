import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ValidatorSlashServiceBase } from "./base/validatorSlash.service.base";

@Injectable()
export class ValidatorSlashService extends ValidatorSlashServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
