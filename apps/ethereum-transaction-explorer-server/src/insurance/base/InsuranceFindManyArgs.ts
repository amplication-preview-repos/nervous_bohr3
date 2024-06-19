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
import { InsuranceWhereInput } from "./InsuranceWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { InsuranceOrderByInput } from "./InsuranceOrderByInput";

@ArgsType()
class InsuranceFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => InsuranceWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => InsuranceWhereInput, { nullable: true })
  @Type(() => InsuranceWhereInput)
  where?: InsuranceWhereInput;

  @ApiProperty({
    required: false,
    type: [InsuranceOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [InsuranceOrderByInput], { nullable: true })
  @Type(() => InsuranceOrderByInput)
  orderBy?: Array<InsuranceOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { InsuranceFindManyArgs as InsuranceFindManyArgs };
