import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DmcaRequestServiceBase } from "./base/dmcaRequest.service.base";

@Injectable()
export class DmcaRequestService extends DmcaRequestServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
