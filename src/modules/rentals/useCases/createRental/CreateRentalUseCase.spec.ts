import { RentalsRepositoryInMemory } from "../../repositories/in-memory/RentalsRepositoryInMemory";
import { CreateRentalUSeCase } from "./CreateRentalUseCase";

let createRentalUseCase: CreateRentalUSeCase;
let rentalsRepositoryImMemory: RentalsRepositoryInMemory;

describe("Create Rental", () => {
  beforeEach(() => {
    rentalsRepositoryImMemory = new RentalsRepositoryInMemory();
    createRentalUseCase = new CreateRentalUSeCase(rentalsRepositoryImMemory);
  });

  it("should be able to create a new rental", async () => {
    await createRentalUseCase.execute({
      user_id: "12345",
      car_id: "121212",
      expected_return_date: new Date(),
    });
  });
});
