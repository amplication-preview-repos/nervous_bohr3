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
import { UncleWhereInput } from "./UncleWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { UncleOrderByInput } from "./UncleOrderByInput";

@ArgsType()
class UncleFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => UncleWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => UncleWhereInput, { nullable: true })
  @Type(() => UncleWhereInput)
  where?: UncleWhereInput;

  @ApiProperty({
    required: false,
    type: [UncleOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [UncleOrderByInput], { nullable: true })
  @Type(() => UncleOrderByInput)
  orderBy?: Array<UncleOrderByInput>;

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

export { UncleFindManyArgs as UncleFindManyArgs };
