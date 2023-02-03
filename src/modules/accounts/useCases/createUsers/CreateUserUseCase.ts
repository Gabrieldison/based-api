import { inject, injectable } from "tsyringe";
import { ICreateUSerDTO } from "../../dtos";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { hash } from "bcryptjs";
@injectable()
class CreateUSerUSeCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  async execute({
    name,
    username,
    email,
    password,
    driver_license,
  }: ICreateUSerDTO): Promise<void> {
    const userAlreadyExists = await this.usersRepository.findByEmail(email);

    if (userAlreadyExists) {
      throw new Error("User already Exists");
    }

    const passwordHash = await hash(password, 8);

    await this.usersRepository.create({
      name,
      username,
      email,
      password: passwordHash,
      driver_license,
    });
  }
}

export { CreateUSerUSeCase };
