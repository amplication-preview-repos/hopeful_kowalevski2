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
class DmcaRequestCreateNestedManyWithoutContentsInput {
  @Field(() => [DmcaRequestWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [DmcaRequestWhereUniqueInput],
  })
  connect?: Array<DmcaRequestWhereUniqueInput>;
}

export { DmcaRequestCreateNestedManyWithoutContentsInput as DmcaRequestCreateNestedManyWithoutContentsInput };