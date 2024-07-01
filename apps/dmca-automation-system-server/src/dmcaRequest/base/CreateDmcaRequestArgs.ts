/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { DmcaRequestCreateInput } from "./DmcaRequestCreateInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class CreateDmcaRequestArgs {
  @ApiProperty({
    required: true,
    type: () => DmcaRequestCreateInput,
  })
  @ValidateNested()
  @Type(() => DmcaRequestCreateInput)
  @Field(() => DmcaRequestCreateInput, { nullable: false })
  data!: DmcaRequestCreateInput;
}

export { CreateDmcaRequestArgs as CreateDmcaRequestArgs };
