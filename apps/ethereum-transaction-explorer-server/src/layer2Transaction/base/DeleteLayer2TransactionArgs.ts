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
import { Layer2TransactionWhereUniqueInput } from "./Layer2TransactionWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class DeleteLayer2TransactionArgs {
  @ApiProperty({
    required: true,
    type: () => Layer2TransactionWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => Layer2TransactionWhereUniqueInput)
  @Field(() => Layer2TransactionWhereUniqueInput, { nullable: false })
  where!: Layer2TransactionWhereUniqueInput;
}

export { DeleteLayer2TransactionArgs as DeleteLayer2TransactionArgs };
