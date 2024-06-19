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
import { RollupService } from "../rollup.service";
import { RollupCreateInput } from "./RollupCreateInput";
import { Rollup } from "./Rollup";
import { RollupFindManyArgs } from "./RollupFindManyArgs";
import { RollupWhereUniqueInput } from "./RollupWhereUniqueInput";
import { RollupUpdateInput } from "./RollupUpdateInput";

export class RollupControllerBase {
  constructor(protected readonly service: RollupService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Rollup })
  async createRollup(@common.Body() data: RollupCreateInput): Promise<Rollup> {
    return await this.service.createRollup({
      data: data,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Rollup] })
  @ApiNestedQuery(RollupFindManyArgs)
  async rollups(@common.Req() request: Request): Promise<Rollup[]> {
    const args = plainToClass(RollupFindManyArgs, request.query);
    return this.service.rollups({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Rollup })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async rollup(
    @common.Param() params: RollupWhereUniqueInput
  ): Promise<Rollup | null> {
    const result = await this.service.rollup({
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
  @swagger.ApiOkResponse({ type: Rollup })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateRollup(
    @common.Param() params: RollupWhereUniqueInput,
    @common.Body() data: RollupUpdateInput
  ): Promise<Rollup | null> {
    try {
      return await this.service.updateRollup({
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
  @swagger.ApiOkResponse({ type: Rollup })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteRollup(
    @common.Param() params: RollupWhereUniqueInput
  ): Promise<Rollup | null> {
    try {
      return await this.service.deleteRollup({
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
