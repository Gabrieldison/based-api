import { Response, Request } from "express";
import { container } from "tsyringe";
import { ResetPasswordUserUseCase } from "./resetPasswordUserUseCase";

class ResetPasswordUserController {
  async handle(request: Request, response: Response) {
    const { token } = request.query;

    const { password } = request.body;

    const resetPasswordUserUseCase = container.resolve(
      ResetPasswordUserUseCase
    );

    await resetPasswordUserUseCase.execute({
      token: String(token),
      password,
    });

    return response.send();
  }
}

export { ResetPasswordUserController };
