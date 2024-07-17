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
import {
  IsString,
  MaxLength,
  IsOptional,
  IsEnum,
  ValidateNested,
} from "class-validator";
import { EnumContractStatus } from "./EnumContractStatus";
import { SignatureUpdateManyWithoutContractsInput } from "./SignatureUpdateManyWithoutContractsInput";
import { Type } from "class-transformer";
import { ClientUpdateManyWithoutContractsInput } from "./ClientUpdateManyWithoutContractsInput";

@InputType()
class ContractUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  title?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  content?: string | null;

  @ApiProperty({
    required: false,
    enum: EnumContractStatus,
  })
  @IsEnum(EnumContractStatus)
  @IsOptional()
  @Field(() => EnumContractStatus, {
    nullable: true,
  })
  status?: "Option1" | null;

  @ApiProperty({
    required: false,
    type: () => SignatureUpdateManyWithoutContractsInput,
  })
  @ValidateNested()
  @Type(() => SignatureUpdateManyWithoutContractsInput)
  @IsOptional()
  @Field(() => SignatureUpdateManyWithoutContractsInput, {
    nullable: true,
  })
  signatures?: SignatureUpdateManyWithoutContractsInput;

  @ApiProperty({
    required: false,
    type: () => ClientUpdateManyWithoutContractsInput,
  })
  @ValidateNested()
  @Type(() => ClientUpdateManyWithoutContractsInput)
  @IsOptional()
  @Field(() => ClientUpdateManyWithoutContractsInput, {
    nullable: true,
  })
  clients?: ClientUpdateManyWithoutContractsInput;
}

export { ContractUpdateInput as ContractUpdateInput };
