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
import { SyncStatusService } from "../syncStatus.service";
import { SyncStatusCreateInput } from "./SyncStatusCreateInput";
import { SyncStatus } from "./SyncStatus";
import { SyncStatusFindManyArgs } from "./SyncStatusFindManyArgs";
import { SyncStatusWhereUniqueInput } from "./SyncStatusWhereUniqueInput";
import { SyncStatusUpdateInput } from "./SyncStatusUpdateInput";

export class SyncStatusControllerBase {
  constructor(protected readonly service: SyncStatusService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: SyncStatus })
  async createSyncStatus(
    @common.Body() data: SyncStatusCreateInput
  ): Promise<SyncStatus> {
    return await this.service.createSyncStatus({
      data: data,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [SyncStatus] })
  @ApiNestedQuery(SyncStatusFindManyArgs)
  async syncStatuses(@common.Req() request: Request): Promise<SyncStatus[]> {
    const args = plainToClass(SyncStatusFindManyArgs, request.query);
    return this.service.syncStatuses({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: SyncStatus })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async syncStatus(
    @common.Param() params: SyncStatusWhereUniqueInput
  ): Promise<SyncStatus | null> {
    const result = await this.service.syncStatus({
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
  @swagger.ApiOkResponse({ type: SyncStatus })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateSyncStatus(
    @common.Param() params: SyncStatusWhereUniqueInput,
    @common.Body() data: SyncStatusUpdateInput
  ): Promise<SyncStatus | null> {
    try {
      return await this.service.updateSyncStatus({
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
  @swagger.ApiOkResponse({ type: SyncStatus })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteSyncStatus(
    @common.Param() params: SyncStatusWhereUniqueInput
  ): Promise<SyncStatus | null> {
    try {
      return await this.service.deleteSyncStatus({
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
