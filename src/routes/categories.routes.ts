import { Router } from "express";
import { CategoriesRepository } from "../modules/cars/repositories/CategoriesRepository";
import { createCategoryController } from "../modules/useCases/createCategory";
import { listCategoriesController } from "../modules/useCases/listCategories";

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post("/", (request, response) => {
  return createCategoryController.handle(request, response);
});

categoriesRoutes.get("/", (request, response) => {
  return listCategoriesController.handle(request, response);
});

export { categoriesRoutes };
