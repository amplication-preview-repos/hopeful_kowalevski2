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
import { ContentService } from "../content.service";
import { ContentCreateInput } from "./ContentCreateInput";
import { Content } from "./Content";
import { ContentFindManyArgs } from "./ContentFindManyArgs";
import { ContentWhereUniqueInput } from "./ContentWhereUniqueInput";
import { ContentUpdateInput } from "./ContentUpdateInput";
import { DmcaRequestFindManyArgs } from "../../dmcaRequest/base/DmcaRequestFindManyArgs";
import { DmcaRequest } from "../../dmcaRequest/base/DmcaRequest";
import { DmcaRequestWhereUniqueInput } from "../../dmcaRequest/base/DmcaRequestWhereUniqueInput";
import { LogFindManyArgs } from "../../log/base/LogFindManyArgs";
import { Log } from "../../log/base/Log";
import { LogWhereUniqueInput } from "../../log/base/LogWhereUniqueInput";

export class ContentControllerBase {
  constructor(protected readonly service: ContentService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Content })
  async createContent(
    @common.Body() data: ContentCreateInput
  ): Promise<Content> {
    return await this.service.createContent({
      data: {
        ...data,

        platform: data.platform
          ? {
              connect: data.platform,
            }
          : undefined,
      },
      select: {
        contentType: true,
        contentUrl: true,
        createdAt: true,
        fingerprint: true,
        foundAt: true,
        id: true,

        platform: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Content] })
  @ApiNestedQuery(ContentFindManyArgs)
  async contents(@common.Req() request: Request): Promise<Content[]> {
    const args = plainToClass(ContentFindManyArgs, request.query);
    return this.service.contents({
      ...args,
      select: {
        contentType: true,
        contentUrl: true,
        createdAt: true,
        fingerprint: true,
        foundAt: true,
        id: true,

        platform: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Content })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async content(
    @common.Param() params: ContentWhereUniqueInput
  ): Promise<Content | null> {
    const result = await this.service.content({
      where: params,
      select: {
        contentType: true,
        contentUrl: true,
        createdAt: true,
        fingerprint: true,
        foundAt: true,
        id: true,

        platform: {
          select: {
            id: true,
          },
        },

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
  @swagger.ApiOkResponse({ type: Content })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateContent(
    @common.Param() params: ContentWhereUniqueInput,
    @common.Body() data: ContentUpdateInput
  ): Promise<Content | null> {
    try {
      return await this.service.updateContent({
        where: params,
        data: {
          ...data,

          platform: data.platform
            ? {
                connect: data.platform,
              }
            : undefined,
        },
        select: {
          contentType: true,
          contentUrl: true,
          createdAt: true,
          fingerprint: true,
          foundAt: true,
          id: true,

          platform: {
            select: {
              id: true,
            },
          },

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
  @swagger.ApiOkResponse({ type: Content })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteContent(
    @common.Param() params: ContentWhereUniqueInput
  ): Promise<Content | null> {
    try {
      return await this.service.deleteContent({
        where: params,
        select: {
          contentType: true,
          contentUrl: true,
          createdAt: true,
          fingerprint: true,
          foundAt: true,
          id: true,

          platform: {
            select: {
              id: true,
            },
          },

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

  @common.Get("/:id/dmcaRequests")
  @ApiNestedQuery(DmcaRequestFindManyArgs)
  async findDmcaRequests(
    @common.Req() request: Request,
    @common.Param() params: ContentWhereUniqueInput
  ): Promise<DmcaRequest[]> {
    const query = plainToClass(DmcaRequestFindManyArgs, request.query);
    const results = await this.service.findDmcaRequests(params.id, {
      ...query,
      select: {
        content: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,
        platformContact: true,
        requestDate: true,
        requestStatus: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/dmcaRequests")
  async connectDmcaRequests(
    @common.Param() params: ContentWhereUniqueInput,
    @common.Body() body: DmcaRequestWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      dmcaRequests: {
        connect: body,
      },
    };
    await this.service.updateContent({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/dmcaRequests")
  async updateDmcaRequests(
    @common.Param() params: ContentWhereUniqueInput,
    @common.Body() body: DmcaRequestWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      dmcaRequests: {
        set: body,
      },
    };
    await this.service.updateContent({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/dmcaRequests")
  async disconnectDmcaRequests(
    @common.Param() params: ContentWhereUniqueInput,
    @common.Body() body: DmcaRequestWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      dmcaRequests: {
        disconnect: body,
      },
    };
    await this.service.updateContent({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/logs")
  @ApiNestedQuery(LogFindManyArgs)
  async findLogs(
    @common.Req() request: Request,
    @common.Param() params: ContentWhereUniqueInput
  ): Promise<Log[]> {
    const query = plainToClass(LogFindManyArgs, request.query);
    const results = await this.service.findLogs(params.id, {
      ...query,
      select: {
        content: {
          select: {
            id: true,
          },
        },

        createdAt: true,

        dmcaRequest: {
          select: {
            id: true,
          },
        },

        id: true,
        logDate: true,
        logType: true,
        message: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/logs")
  async connectLogs(
    @common.Param() params: ContentWhereUniqueInput,
    @common.Body() body: LogWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      logs: {
        connect: body,
      },
    };
    await this.service.updateContent({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/logs")
  async updateLogs(
    @common.Param() params: ContentWhereUniqueInput,
    @common.Body() body: LogWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      logs: {
        set: body,
      },
    };
    await this.service.updateContent({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/logs")
  async disconnectLogs(
    @common.Param() params: ContentWhereUniqueInput,
    @common.Body() body: LogWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      logs: {
        disconnect: body,
      },
    };
    await this.service.updateContent({
      where: params,
      data,
      select: { id: true },
    });
  }
}
