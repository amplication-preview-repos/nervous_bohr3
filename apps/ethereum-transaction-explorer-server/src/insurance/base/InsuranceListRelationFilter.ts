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
import { InsuranceWhereInput } from "./InsuranceWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class InsuranceListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => InsuranceWhereInput,
  })
  @ValidateNested()
  @Type(() => InsuranceWhereInput)
  @IsOptional()
  @Field(() => InsuranceWhereInput, {
    nullable: true,
  })
  every?: InsuranceWhereInput;

  @ApiProperty({
    required: false,
    type: () => InsuranceWhereInput,
  })
  @ValidateNested()
  @Type(() => InsuranceWhereInput)
  @IsOptional()
  @Field(() => InsuranceWhereInput, {
    nullable: true,
  })
  some?: InsuranceWhereInput;

  @ApiProperty({
    required: false,
    type: () => InsuranceWhereInput,
  })
  @ValidateNested()
  @Type(() => InsuranceWhereInput)
  @IsOptional()
  @Field(() => InsuranceWhereInput, {
    nullable: true,
  })
  none?: InsuranceWhereInput;
}
export { InsuranceListRelationFilter as InsuranceListRelationFilter };
