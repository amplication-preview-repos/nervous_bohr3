/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Nft as PrismaNft } from "@prisma/client";

export class NftServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.NftCountArgs, "select">): Promise<number> {
    return this.prisma.nft.count(args);
  }

  async nfts(args: Prisma.NftFindManyArgs): Promise<PrismaNft[]> {
    return this.prisma.nft.findMany(args);
  }
  async nft(args: Prisma.NftFindUniqueArgs): Promise<PrismaNft | null> {
    return this.prisma.nft.findUnique(args);
  }
  async createNft(args: Prisma.NftCreateArgs): Promise<PrismaNft> {
    return this.prisma.nft.create(args);
  }
  async updateNft(args: Prisma.NftUpdateArgs): Promise<PrismaNft> {
    return this.prisma.nft.update(args);
  }
  async deleteNft(args: Prisma.NftDeleteArgs): Promise<PrismaNft> {
    return this.prisma.nft.delete(args);
  }
}
