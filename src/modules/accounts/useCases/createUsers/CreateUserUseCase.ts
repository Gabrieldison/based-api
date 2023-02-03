import { inject, injectable } from "tsyringe";
import { ICreateUSerDTO } from "../../dtos";
import { IUsersRepository } from "../../repositories/IUsersRepository";
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
    await this.usersRepository.create({
      name,
      username,
      email,
      password,
      driver_license,
    });
  }
}

export { CreateUSerUSeCase };
