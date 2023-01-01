import { Field, InputType } from "@nestjs/graphql";
import { IsUUID, Length, Matches, Validate } from "class-validator";
import { BrandSlugIsUnique } from "../validations/BrandSlugIsUnique";
const mobileNumberRegex = /^[a-z0-9]+(?:-[a-z0-9]+)*$/

@InputType()
export class BrandUpdateInput{
    @Field()
    @IsUUID()
    id: string

    @Field()
    @Length(4,20)
    name: string

    @Field()
    @Length(4,20)
    @Matches(mobileNumberRegex)
    @Validate(BrandSlugIsUnique)
    slug: string
}