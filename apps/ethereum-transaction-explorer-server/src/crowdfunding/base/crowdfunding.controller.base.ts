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
import { CrowdfundingService } from "../crowdfunding.service";
import { CrowdfundingCreateInput } from "./CrowdfundingCreateInput";
import { Crowdfunding } from "./Crowdfunding";
import { CrowdfundingFindManyArgs } from "./CrowdfundingFindManyArgs";
import { CrowdfundingWhereUniqueInput } from "./CrowdfundingWhereUniqueInput";
import { CrowdfundingUpdateInput } from "./CrowdfundingUpdateInput";

export class CrowdfundingControllerBase {
  constructor(protected readonly service: CrowdfundingService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Crowdfunding })
  async createCrowdfunding(
    @common.Body() data: CrowdfundingCreateInput
  ): Promise<Crowdfunding> {
    return await this.service.createCrowdfunding({
      data: data,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Crowdfunding] })
  @ApiNestedQuery(CrowdfundingFindManyArgs)
  async crowdfundings(@common.Req() request: Request): Promise<Crowdfunding[]> {
    const args = plainToClass(CrowdfundingFindManyArgs, request.query);
    return this.service.crowdfundings({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Crowdfunding })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async crowdfunding(
    @common.Param() params: CrowdfundingWhereUniqueInput
  ): Promise<Crowdfunding | null> {
    const result = await this.service.crowdfunding({
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
  @swagger.ApiOkResponse({ type: Crowdfunding })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateCrowdfunding(
    @common.Param() params: CrowdfundingWhereUniqueInput,
    @common.Body() data: CrowdfundingUpdateInput
  ): Promise<Crowdfunding | null> {
    try {
      return await this.service.updateCrowdfunding({
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
  @swagger.ApiOkResponse({ type: Crowdfunding })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteCrowdfunding(
    @common.Param() params: CrowdfundingWhereUniqueInput
  ): Promise<Crowdfunding | null> {
    try {
      return await this.service.deleteCrowdfunding({
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
