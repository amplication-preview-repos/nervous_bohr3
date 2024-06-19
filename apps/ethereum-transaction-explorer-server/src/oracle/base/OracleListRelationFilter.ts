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
import { OracleWhereInput } from "./OracleWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class OracleListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => OracleWhereInput,
  })
  @ValidateNested()
  @Type(() => OracleWhereInput)
  @IsOptional()
  @Field(() => OracleWhereInput, {
    nullable: true,
  })
  every?: OracleWhereInput;

  @ApiProperty({
    required: false,
    type: () => OracleWhereInput,
  })
  @ValidateNested()
  @Type(() => OracleWhereInput)
  @IsOptional()
  @Field(() => OracleWhereInput, {
    nullable: true,
  })
  some?: OracleWhereInput;

  @ApiProperty({
    required: false,
    type: () => OracleWhereInput,
  })
  @ValidateNested()
  @Type(() => OracleWhereInput)
  @IsOptional()
  @Field(() => OracleWhereInput, {
    nullable: true,
  })
  none?: OracleWhereInput;
}
export { OracleListRelationFilter as OracleListRelationFilter };
