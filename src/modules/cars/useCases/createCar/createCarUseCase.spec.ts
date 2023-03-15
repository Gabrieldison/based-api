import { AppError } from "../../../../shared/errors/AppError";
import { CarsRepositoryInMemory } from "../../repositories/in-memory/CarsRepositoryInMemory";
import { CreateCarUseCase } from "./createCarUseCase";

let createCarUseCase: CreateCarUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe("Create Car", () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    createCarUseCase = new CreateCarUseCase(carsRepositoryInMemory);
  });

  it("should be able to create a new car", async () => {
    const car = await createCarUseCase.execute({
      brand: "Name Car",
      category_id: "Description Car",
      daily_rate: 100,
      description: "ABC-1234",
      fine_amount: 60,
      license_plate: "Brand",
      name: "category",
    });

    expect(car).toHaveProperty("id");
  });

  it("should not be able to create a car with exists license plate", async () => {
    await createCarUseCase.execute({
      brand: "Car1",
      category_id: "Description Car",
      daily_rate: 100,
      description: "ABC-1234",
      fine_amount: 60,
      license_plate: "Brand",
      name: "category",
    });

    await expect(
      createCarUseCase.execute({
        brand: "Car2",
        category_id: "Description Car",
        daily_rate: 100,
        description: "ABC-1234",
        fine_amount: 60,
        license_plate: "Brand",
        name: "category",
      })
    ).rejects.toEqual(new AppError("Car already exists"));
  });

  it("should not be able to create a car with available true by default", async () => {
    const car = await createCarUseCase.execute({
      brand: "Car Available",
      category_id: "Description Car",
      daily_rate: 100,
      description: "ABC-1234",
      fine_amount: 60,
      license_plate: "Brand",
      name: "category",
    });

    expect(car.available).toBe(true);
  });
});
