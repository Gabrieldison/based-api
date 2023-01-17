import fs from "fs";
import { parse as csvParse } from "csv-parse";
import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";

interface IImportCategories {
  name: string;
  description: string;
}
class ImportCategoryUseCase {
  constructor(private categoriesRepository: CategoriesRepository) {}
  loadCategories(file: Express.Multer.File): Promise<IImportCategories[]> {
    return new Promise((reoslve, reject) => {
      const stream = fs.createReadStream(file.path);
      const categories: IImportCategories[] = [];

      const parseFile = csvParse();

      stream.pipe(parseFile);

      parseFile
        .on("data", async (line) => {
          const [name, description] = line;

          categories.push({
            name,
            description,
          });
        })
        .on("end", () => {
          reoslve(categories);
        })
        .on("error", (err) => {
          reject(err);
        });

      return categories;
    });
  }

  async execute(file: Express.Multer.File): Promise<void> {
    const categories = await this.loadCategories(file);

    console.log(categories);
  }
}

export { ImportCategoryUseCase };
