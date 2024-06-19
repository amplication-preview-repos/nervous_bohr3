/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { MultiSig } from "./MultiSig";
import { MultiSigCountArgs } from "./MultiSigCountArgs";
import { MultiSigFindManyArgs } from "./MultiSigFindManyArgs";
import { MultiSigFindUniqueArgs } from "./MultiSigFindUniqueArgs";
import { DeleteMultiSigArgs } from "./DeleteMultiSigArgs";
import { MultiSigService } from "../multiSig.service";
@graphql.Resolver(() => MultiSig)
export class MultiSigResolverBase {
  constructor(protected readonly service: MultiSigService) {}

  async _multiSigsMeta(
    @graphql.Args() args: MultiSigCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [MultiSig])
  async multiSigs(
    @graphql.Args() args: MultiSigFindManyArgs
  ): Promise<MultiSig[]> {
    return this.service.multiSigs(args);
  }

  @graphql.Query(() => MultiSig, { nullable: true })
  async multiSig(
    @graphql.Args() args: MultiSigFindUniqueArgs
  ): Promise<MultiSig | null> {
    const result = await this.service.multiSig(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => MultiSig)
  async deleteMultiSig(
    @graphql.Args() args: DeleteMultiSigArgs
  ): Promise<MultiSig | null> {
    try {
      return await this.service.deleteMultiSig(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
