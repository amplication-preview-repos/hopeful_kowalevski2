import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DmcaRequestService } from "./dmcaRequest.service";
import { DmcaRequestControllerBase } from "./base/dmcaRequest.controller.base";

@swagger.ApiTags("dmcaRequests")
@common.Controller("dmcaRequests")
export class DmcaRequestController extends DmcaRequestControllerBase {
  constructor(protected readonly service: DmcaRequestService) {
    super(service);
  }
}
