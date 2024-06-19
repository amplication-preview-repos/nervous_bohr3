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
import { GrantWhereInput } from "./GrantWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { GrantOrderByInput } from "./GrantOrderByInput";

@ArgsType()
class GrantFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => GrantWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => GrantWhereInput, { nullable: true })
  @Type(() => GrantWhereInput)
  where?: GrantWhereInput;

  @ApiProperty({
    required: false,
    type: [GrantOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [GrantOrderByInput], { nullable: true })
  @Type(() => GrantOrderByInput)
  orderBy?: Array<GrantOrderByInput>;

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

export { GrantFindManyArgs as GrantFindManyArgs };
