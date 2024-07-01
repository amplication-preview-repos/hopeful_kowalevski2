import * as graphql from "@nestjs/graphql";
import { DmcaRequestResolverBase } from "./base/dmcaRequest.resolver.base";
import { DmcaRequest } from "./base/DmcaRequest";
import { DmcaRequestService } from "./dmcaRequest.service";

@graphql.Resolver(() => DmcaRequest)
export class DmcaRequestResolver extends DmcaRequestResolverBase {
  constructor(protected readonly service: DmcaRequestService) {
    super(service);
  }
}
