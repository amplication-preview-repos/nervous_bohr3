/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Shard as PrismaShard } from "@prisma/client";

export class ShardServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.ShardCountArgs, "select">): Promise<number> {
    return this.prisma.shard.count(args);
  }

  async shards(args: Prisma.ShardFindManyArgs): Promise<PrismaShard[]> {
    return this.prisma.shard.findMany(args);
  }
  async shard(args: Prisma.ShardFindUniqueArgs): Promise<PrismaShard | null> {
    return this.prisma.shard.findUnique(args);
  }
  async createShard(args: Prisma.ShardCreateArgs): Promise<PrismaShard> {
    return this.prisma.shard.create(args);
  }
  async updateShard(args: Prisma.ShardUpdateArgs): Promise<PrismaShard> {
    return this.prisma.shard.update(args);
  }
  async deleteShard(args: Prisma.ShardDeleteArgs): Promise<PrismaShard> {
    return this.prisma.shard.delete(args);
  }
}
