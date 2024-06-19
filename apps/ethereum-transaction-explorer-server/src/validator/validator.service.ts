import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ValidatorServiceBase } from "./base/validator.service.base";

@Injectable()
export class ValidatorService extends ValidatorServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
