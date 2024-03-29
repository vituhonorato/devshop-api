/* eslint-disable prettier/prettier */
import { Category } from '../category.entity'
import { CategoryCreateInput } from './category-create.input'

// convert between types
export class CategoryMapper {
  public static toEntity(input: CategoryCreateInput): Category {
    const entity = new Category()
    entity.name = input.name
    entity.slug = input.slug
    return entity
  }
// eslint-disable-next-line prettier/prettier
}
