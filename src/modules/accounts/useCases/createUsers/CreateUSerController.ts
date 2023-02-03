import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateUSerUSeCase } from "./CreateUserUseCase";

class CreateUSerController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, username, email, password, driver_license } = request.body;

    const createUserUseCase = container.resolve(CreateUSerUSeCase);

    await createUserUseCase.execute({
      name,
      username,
      email,
      password,
      driver_license,
    });

    return response.status(201).send();
  }
}

export { CreateUSerController };
