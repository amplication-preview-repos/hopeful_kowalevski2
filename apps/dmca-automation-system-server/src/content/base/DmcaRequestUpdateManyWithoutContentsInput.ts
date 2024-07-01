/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { DmcaRequestWhereUniqueInput } from "../../dmcaRequest/base/DmcaRequestWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class DmcaRequestUpdateManyWithoutContentsInput {
  @Field(() => [DmcaRequestWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [DmcaRequestWhereUniqueInput],
  })
  connect?: Array<DmcaRequestWhereUniqueInput>;

  @Field(() => [DmcaRequestWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [DmcaRequestWhereUniqueInput],
  })
  disconnect?: Array<DmcaRequestWhereUniqueInput>;

  @Field(() => [DmcaRequestWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [DmcaRequestWhereUniqueInput],
  })
  set?: Array<DmcaRequestWhereUniqueInput>;
}

export { DmcaRequestUpdateManyWithoutContentsInput as DmcaRequestUpdateManyWithoutContentsInput };
