/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  DmcaRequest as PrismaDmcaRequest,
  Log as PrismaLog,
  Content as PrismaContent,
} from "@prisma/client";

export class DmcaRequestServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.DmcaRequestCountArgs, "select">
  ): Promise<number> {
    return this.prisma.dmcaRequest.count(args);
  }

  async dmcaRequests(
    args: Prisma.DmcaRequestFindManyArgs
  ): Promise<PrismaDmcaRequest[]> {
    return this.prisma.dmcaRequest.findMany(args);
  }
  async dmcaRequest(
    args: Prisma.DmcaRequestFindUniqueArgs
  ): Promise<PrismaDmcaRequest | null> {
    return this.prisma.dmcaRequest.findUnique(args);
  }
  async createDmcaRequest(
    args: Prisma.DmcaRequestCreateArgs
  ): Promise<PrismaDmcaRequest> {
    return this.prisma.dmcaRequest.create(args);
  }
  async updateDmcaRequest(
    args: Prisma.DmcaRequestUpdateArgs
  ): Promise<PrismaDmcaRequest> {
    return this.prisma.dmcaRequest.update(args);
  }
  async deleteDmcaRequest(
    args: Prisma.DmcaRequestDeleteArgs
  ): Promise<PrismaDmcaRequest> {
    return this.prisma.dmcaRequest.delete(args);
  }

  async findLogs(
    parentId: string,
    args: Prisma.LogFindManyArgs
  ): Promise<PrismaLog[]> {
    return this.prisma.dmcaRequest
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .logs(args);
  }

  async getContent(parentId: string): Promise<PrismaContent | null> {
    return this.prisma.dmcaRequest
      .findUnique({
        where: { id: parentId },
      })
      .content();
  }
}
