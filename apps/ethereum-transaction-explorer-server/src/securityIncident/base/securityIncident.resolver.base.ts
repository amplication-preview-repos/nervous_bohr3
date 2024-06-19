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
import { SecurityIncident } from "./SecurityIncident";
import { SecurityIncidentCountArgs } from "./SecurityIncidentCountArgs";
import { SecurityIncidentFindManyArgs } from "./SecurityIncidentFindManyArgs";
import { SecurityIncidentFindUniqueArgs } from "./SecurityIncidentFindUniqueArgs";
import { DeleteSecurityIncidentArgs } from "./DeleteSecurityIncidentArgs";
import { SecurityIncidentService } from "../securityIncident.service";
@graphql.Resolver(() => SecurityIncident)
export class SecurityIncidentResolverBase {
  constructor(protected readonly service: SecurityIncidentService) {}

  async _securityIncidentsMeta(
    @graphql.Args() args: SecurityIncidentCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [SecurityIncident])
  async securityIncidents(
    @graphql.Args() args: SecurityIncidentFindManyArgs
  ): Promise<SecurityIncident[]> {
    return this.service.securityIncidents(args);
  }

  @graphql.Query(() => SecurityIncident, { nullable: true })
  async securityIncident(
    @graphql.Args() args: SecurityIncidentFindUniqueArgs
  ): Promise<SecurityIncident | null> {
    const result = await this.service.securityIncident(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => SecurityIncident)
  async deleteSecurityIncident(
    @graphql.Args() args: DeleteSecurityIncidentArgs
  ): Promise<SecurityIncident | null> {
    try {
      return await this.service.deleteSecurityIncident(args);
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
