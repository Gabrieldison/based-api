import { ImportCategoryController } from "./ImportCategoriesController";
import { ImportCategoryUseCase } from "./ImportCategoryUseCase";

const importCategoryUseCase = new ImportCategoryUseCase();

const importCategoryController = new ImportCategoryController(
  importCategoryUseCase
);

export { importCategoryController };
