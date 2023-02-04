import { Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { AppError } from "../errors/AppError";
import { UsersRepository } from "../modules/accounts/repositories/implementations/UsersRepository";

interface IPayload {
  sub: string;
}

export async function ensureAuthenticated(
  request: Request,
  response: Response,
  next
) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppError("Token is missing", 401);
  }

  const [, token] = authHeader.split(" ");

  try {
    const { sub: user_id } = verify(
      token,
      "66f6fe9a6f6fafc74043f18702e7e8ca"
    ) as IPayload;

    const userRepository = new UsersRepository();

    const user = userRepository.findById(user_id);

    if (!user) {
      throw new AppError("User does not exist", 401);
    }

    next();
  } catch {
    throw new AppError("token invalid", 401);
  }
}
