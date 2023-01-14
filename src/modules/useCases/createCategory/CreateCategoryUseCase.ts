import { ICategoriesRepository } from "../../cars/repositories/ICategoriesRepository";

interface IRequest {
  name: string;
  description: string;
}

class CreateCategoryUseCase {
  constructor(private categoriesRepository: ICategoriesRepository) {}
  execute({ description, name }: IRequest): void {
    const categoryNameAlreadyExists =
      this.categoriesRepository.findByName(name);

    if (categoryNameAlreadyExists) {
      throw new Error("Category already exists");
    }

    this.categoriesRepository.create({ name, description });
  }
}

export { CreateCategoryUseCase };
