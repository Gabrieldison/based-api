import { Request, Response } from "express";
import { verify } from "jsonwebtoken";

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
    const decoded = verify(token, "66f6fe9a6f6fafc74043f18702e7e8ca");
    console.log(decoded);

    next();
  } catch {
    throw new Error("token invalid");
  }
}
