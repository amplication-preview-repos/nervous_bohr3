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
import { OffChainDataWhereUniqueInput } from "./OffChainDataWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class DeleteOffChainDataArgs {
  @ApiProperty({
    required: true,
    type: () => OffChainDataWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => OffChainDataWhereUniqueInput)
  @Field(() => OffChainDataWhereUniqueInput, { nullable: false })
  where!: OffChainDataWhereUniqueInput;
}

export { DeleteOffChainDataArgs as DeleteOffChainDataArgs };
