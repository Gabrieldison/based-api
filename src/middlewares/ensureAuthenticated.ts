import { Request, Response } from "express";
import { verify } from "jsonwebtoken";
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
    throw new Error("Token is missing");
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
      throw new Error("User does not exist");
    }

    next();
  } catch {
    throw new Error("token invalid");
  }
}
