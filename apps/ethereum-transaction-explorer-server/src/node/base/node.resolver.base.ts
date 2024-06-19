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
import { Node } from "./Node";
import { NodeCountArgs } from "./NodeCountArgs";
import { NodeFindManyArgs } from "./NodeFindManyArgs";
import { NodeFindUniqueArgs } from "./NodeFindUniqueArgs";
import { DeleteNodeArgs } from "./DeleteNodeArgs";
import { NodeService } from "../node.service";
@graphql.Resolver(() => Node)
export class NodeResolverBase {
  constructor(protected readonly service: NodeService) {}

  async _nodesMeta(
    @graphql.Args() args: NodeCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Node])
  async nodes(@graphql.Args() args: NodeFindManyArgs): Promise<Node[]> {
    return this.service.nodes(args);
  }

  @graphql.Query(() => Node, { nullable: true })
  async node(@graphql.Args() args: NodeFindUniqueArgs): Promise<Node | null> {
    const result = await this.service.node(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Node)
  async deleteNode(@graphql.Args() args: DeleteNodeArgs): Promise<Node | null> {
    try {
      return await this.service.deleteNode(args);
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
