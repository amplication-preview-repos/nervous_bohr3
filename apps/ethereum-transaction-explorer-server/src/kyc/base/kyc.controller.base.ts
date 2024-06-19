/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { KycService } from "../kyc.service";
import { KycCreateInput } from "./KycCreateInput";
import { Kyc } from "./Kyc";
import { KycFindManyArgs } from "./KycFindManyArgs";
import { KycWhereUniqueInput } from "./KycWhereUniqueInput";
import { KycUpdateInput } from "./KycUpdateInput";

export class KycControllerBase {
  constructor(protected readonly service: KycService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Kyc })
  async createKyc(@common.Body() data: KycCreateInput): Promise<Kyc> {
    return await this.service.createKyc({
      data: data,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Kyc] })
  @ApiNestedQuery(KycFindManyArgs)
  async kycs(@common.Req() request: Request): Promise<Kyc[]> {
    const args = plainToClass(KycFindManyArgs, request.query);
    return this.service.kycs({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Kyc })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async kyc(@common.Param() params: KycWhereUniqueInput): Promise<Kyc | null> {
    const result = await this.service.kyc({
      where: params,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Kyc })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateKyc(
    @common.Param() params: KycWhereUniqueInput,
    @common.Body() data: KycUpdateInput
  ): Promise<Kyc | null> {
    try {
      return await this.service.updateKyc({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Kyc })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteKyc(
    @common.Param() params: KycWhereUniqueInput
  ): Promise<Kyc | null> {
    try {
      return await this.service.deleteKyc({
        where: params,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
