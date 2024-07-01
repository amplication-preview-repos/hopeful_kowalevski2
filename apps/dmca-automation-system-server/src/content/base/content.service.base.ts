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
  Content as PrismaContent,
  DmcaRequest as PrismaDmcaRequest,
  Log as PrismaLog,
  Platform as PrismaPlatform,
} from "@prisma/client";

export class ContentServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.ContentCountArgs, "select">): Promise<number> {
    return this.prisma.content.count(args);
  }

  async contents(args: Prisma.ContentFindManyArgs): Promise<PrismaContent[]> {
    return this.prisma.content.findMany(args);
  }
  async content(
    args: Prisma.ContentFindUniqueArgs
  ): Promise<PrismaContent | null> {
    return this.prisma.content.findUnique(args);
  }
  async createContent(args: Prisma.ContentCreateArgs): Promise<PrismaContent> {
    return this.prisma.content.create(args);
  }
  async updateContent(args: Prisma.ContentUpdateArgs): Promise<PrismaContent> {
    return this.prisma.content.update(args);
  }
  async deleteContent(args: Prisma.ContentDeleteArgs): Promise<PrismaContent> {
    return this.prisma.content.delete(args);
  }

  async findDmcaRequests(
    parentId: string,
    args: Prisma.DmcaRequestFindManyArgs
  ): Promise<PrismaDmcaRequest[]> {
    return this.prisma.content
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .dmcaRequests(args);
  }

  async findLogs(
    parentId: string,
    args: Prisma.LogFindManyArgs
  ): Promise<PrismaLog[]> {
    return this.prisma.content
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .logs(args);
  }

  async getPlatform(parentId: string): Promise<PrismaPlatform | null> {
    return this.prisma.content
      .findUnique({
        where: { id: parentId },
      })
      .platform();
  }
}
