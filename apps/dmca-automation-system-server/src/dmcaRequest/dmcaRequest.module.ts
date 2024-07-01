import { Module } from "@nestjs/common";
import { DmcaRequestModuleBase } from "./base/dmcaRequest.module.base";
import { DmcaRequestService } from "./dmcaRequest.service";
import { DmcaRequestController } from "./dmcaRequest.controller";
import { DmcaRequestResolver } from "./dmcaRequest.resolver";

@Module({
  imports: [DmcaRequestModuleBase],
  controllers: [DmcaRequestController],
  providers: [DmcaRequestService, DmcaRequestResolver],
  exports: [DmcaRequestService],
})
export class DmcaRequestModule {}
