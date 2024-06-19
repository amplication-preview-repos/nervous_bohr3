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
import { RollupWhereInput } from "./RollupWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { RollupOrderByInput } from "./RollupOrderByInput";

@ArgsType()
class RollupFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => RollupWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => RollupWhereInput, { nullable: true })
  @Type(() => RollupWhereInput)
  where?: RollupWhereInput;

  @ApiProperty({
    required: false,
    type: [RollupOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [RollupOrderByInput], { nullable: true })
  @Type(() => RollupOrderByInput)
  orderBy?: Array<RollupOrderByInput>;

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

export { RollupFindManyArgs as RollupFindManyArgs };
