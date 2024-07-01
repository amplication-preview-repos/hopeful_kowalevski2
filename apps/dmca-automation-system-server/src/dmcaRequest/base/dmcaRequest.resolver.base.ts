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
import { DmcaRequest } from "./DmcaRequest";
import { DmcaRequestCountArgs } from "./DmcaRequestCountArgs";
import { DmcaRequestFindManyArgs } from "./DmcaRequestFindManyArgs";
import { DmcaRequestFindUniqueArgs } from "./DmcaRequestFindUniqueArgs";
import { CreateDmcaRequestArgs } from "./CreateDmcaRequestArgs";
import { UpdateDmcaRequestArgs } from "./UpdateDmcaRequestArgs";
import { DeleteDmcaRequestArgs } from "./DeleteDmcaRequestArgs";
import { LogFindManyArgs } from "../../log/base/LogFindManyArgs";
import { Log } from "../../log/base/Log";
import { Content } from "../../content/base/Content";
import { DmcaRequestService } from "../dmcaRequest.service";
@graphql.Resolver(() => DmcaRequest)
export class DmcaRequestResolverBase {
  constructor(protected readonly service: DmcaRequestService) {}

  async _dmcaRequestsMeta(
    @graphql.Args() args: DmcaRequestCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [DmcaRequest])
  async dmcaRequests(
    @graphql.Args() args: DmcaRequestFindManyArgs
  ): Promise<DmcaRequest[]> {
    return this.service.dmcaRequests(args);
  }

  @graphql.Query(() => DmcaRequest, { nullable: true })
  async dmcaRequest(
    @graphql.Args() args: DmcaRequestFindUniqueArgs
  ): Promise<DmcaRequest | null> {
    const result = await this.service.dmcaRequest(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => DmcaRequest)
  async createDmcaRequest(
    @graphql.Args() args: CreateDmcaRequestArgs
  ): Promise<DmcaRequest> {
    return await this.service.createDmcaRequest({
      ...args,
      data: {
        ...args.data,

        content: args.data.content
          ? {
              connect: args.data.content,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => DmcaRequest)
  async updateDmcaRequest(
    @graphql.Args() args: UpdateDmcaRequestArgs
  ): Promise<DmcaRequest | null> {
    try {
      return await this.service.updateDmcaRequest({
        ...args,
        data: {
          ...args.data,

          content: args.data.content
            ? {
                connect: args.data.content,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => DmcaRequest)
  async deleteDmcaRequest(
    @graphql.Args() args: DeleteDmcaRequestArgs
  ): Promise<DmcaRequest | null> {
    try {
      return await this.service.deleteDmcaRequest(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [Log], { name: "logs" })
  async findLogs(
    @graphql.Parent() parent: DmcaRequest,
    @graphql.Args() args: LogFindManyArgs
  ): Promise<Log[]> {
    const results = await this.service.findLogs(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => Content, {
    nullable: true,
    name: "content",
  })
  async getContent(
    @graphql.Parent() parent: DmcaRequest
  ): Promise<Content | null> {
    const result = await this.service.getContent(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
