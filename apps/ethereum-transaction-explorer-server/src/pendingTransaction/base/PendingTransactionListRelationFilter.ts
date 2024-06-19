/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { PendingTransactionWhereInput } from "./PendingTransactionWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class PendingTransactionListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => PendingTransactionWhereInput,
  })
  @ValidateNested()
  @Type(() => PendingTransactionWhereInput)
  @IsOptional()
  @Field(() => PendingTransactionWhereInput, {
    nullable: true,
  })
  every?: PendingTransactionWhereInput;

  @ApiProperty({
    required: false,
    type: () => PendingTransactionWhereInput,
  })
  @ValidateNested()
  @Type(() => PendingTransactionWhereInput)
  @IsOptional()
  @Field(() => PendingTransactionWhereInput, {
    nullable: true,
  })
  some?: PendingTransactionWhereInput;

  @ApiProperty({
    required: false,
    type: () => PendingTransactionWhereInput,
  })
  @ValidateNested()
  @Type(() => PendingTransactionWhereInput)
  @IsOptional()
  @Field(() => PendingTransactionWhereInput, {
    nullable: true,
  })
  none?: PendingTransactionWhereInput;
}
export { PendingTransactionListRelationFilter as PendingTransactionListRelationFilter };
