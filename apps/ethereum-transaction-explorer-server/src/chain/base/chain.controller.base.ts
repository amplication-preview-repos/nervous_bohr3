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
import { ChainService } from "../chain.service";
import { ChainCreateInput } from "./ChainCreateInput";
import { Chain } from "./Chain";
import { ChainFindManyArgs } from "./ChainFindManyArgs";
import { ChainWhereUniqueInput } from "./ChainWhereUniqueInput";
import { ChainUpdateInput } from "./ChainUpdateInput";

export class ChainControllerBase {
  constructor(protected readonly service: ChainService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Chain })
  async createChain(@common.Body() data: ChainCreateInput): Promise<Chain> {
    return await this.service.createChain({
      data: data,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Chain] })
  @ApiNestedQuery(ChainFindManyArgs)
  async chains(@common.Req() request: Request): Promise<Chain[]> {
    const args = plainToClass(ChainFindManyArgs, request.query);
    return this.service.chains({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Chain })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async chain(
    @common.Param() params: ChainWhereUniqueInput
  ): Promise<Chain | null> {
    const result = await this.service.chain({
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
  @swagger.ApiOkResponse({ type: Chain })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateChain(
    @common.Param() params: ChainWhereUniqueInput,
    @common.Body() data: ChainUpdateInput
  ): Promise<Chain | null> {
    try {
      return await this.service.updateChain({
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
  @swagger.ApiOkResponse({ type: Chain })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteChain(
    @common.Param() params: ChainWhereUniqueInput
  ): Promise<Chain | null> {
    try {
      return await this.service.deleteChain({
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
