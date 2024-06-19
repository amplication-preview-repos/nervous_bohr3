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
import { OrphanedBlockWhereInput } from "./OrphanedBlockWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class OrphanedBlockListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => OrphanedBlockWhereInput,
  })
  @ValidateNested()
  @Type(() => OrphanedBlockWhereInput)
  @IsOptional()
  @Field(() => OrphanedBlockWhereInput, {
    nullable: true,
  })
  every?: OrphanedBlockWhereInput;

  @ApiProperty({
    required: false,
    type: () => OrphanedBlockWhereInput,
  })
  @ValidateNested()
  @Type(() => OrphanedBlockWhereInput)
  @IsOptional()
  @Field(() => OrphanedBlockWhereInput, {
    nullable: true,
  })
  some?: OrphanedBlockWhereInput;

  @ApiProperty({
    required: false,
    type: () => OrphanedBlockWhereInput,
  })
  @ValidateNested()
  @Type(() => OrphanedBlockWhereInput)
  @IsOptional()
  @Field(() => OrphanedBlockWhereInput, {
    nullable: true,
  })
  none?: OrphanedBlockWhereInput;
}
export { OrphanedBlockListRelationFilter as OrphanedBlockListRelationFilter };
