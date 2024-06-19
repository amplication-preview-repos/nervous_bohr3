import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ValidatorRewardServiceBase } from "./base/validatorReward.service.base";

@Injectable()
export class ValidatorRewardService extends ValidatorRewardServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
