/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, ValidatorSlash as PrismaValidatorSlash } from "@prisma/client";

export class ValidatorSlashServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.ValidatorSlashCountArgs, "select">
  ): Promise<number> {
    return this.prisma.validatorSlash.count(args);
  }

  async validatorSlashes(
    args: Prisma.ValidatorSlashFindManyArgs
  ): Promise<PrismaValidatorSlash[]> {
    return this.prisma.validatorSlash.findMany(args);
  }
  async validatorSlash(
    args: Prisma.ValidatorSlashFindUniqueArgs
  ): Promise<PrismaValidatorSlash | null> {
    return this.prisma.validatorSlash.findUnique(args);
  }
  async createValidatorSlash(
    args: Prisma.ValidatorSlashCreateArgs
  ): Promise<PrismaValidatorSlash> {
    return this.prisma.validatorSlash.create(args);
  }
  async updateValidatorSlash(
    args: Prisma.ValidatorSlashUpdateArgs
  ): Promise<PrismaValidatorSlash> {
    return this.prisma.validatorSlash.update(args);
  }
  async deleteValidatorSlash(
    args: Prisma.ValidatorSlashDeleteArgs
  ): Promise<PrismaValidatorSlash> {
    return this.prisma.validatorSlash.delete(args);
  }
}
