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
import { MultiSigWhereInput } from "./MultiSigWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { MultiSigOrderByInput } from "./MultiSigOrderByInput";

@ArgsType()
class MultiSigFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => MultiSigWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => MultiSigWhereInput, { nullable: true })
  @Type(() => MultiSigWhereInput)
  where?: MultiSigWhereInput;

  @ApiProperty({
    required: false,
    type: [MultiSigOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [MultiSigOrderByInput], { nullable: true })
  @Type(() => MultiSigOrderByInput)
  orderBy?: Array<MultiSigOrderByInput>;

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

export { MultiSigFindManyArgs as MultiSigFindManyArgs };
