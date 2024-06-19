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
import { SecurityIncidentWhereInput } from "./SecurityIncidentWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { SecurityIncidentOrderByInput } from "./SecurityIncidentOrderByInput";

@ArgsType()
class SecurityIncidentFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => SecurityIncidentWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => SecurityIncidentWhereInput, { nullable: true })
  @Type(() => SecurityIncidentWhereInput)
  where?: SecurityIncidentWhereInput;

  @ApiProperty({
    required: false,
    type: [SecurityIncidentOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [SecurityIncidentOrderByInput], { nullable: true })
  @Type(() => SecurityIncidentOrderByInput)
  orderBy?: Array<SecurityIncidentOrderByInput>;

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

export { SecurityIncidentFindManyArgs as SecurityIncidentFindManyArgs };
