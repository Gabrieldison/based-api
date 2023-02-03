import { getRepository, Repository } from "typeorm";
import { ICreateUSerDTO } from "../../dtos";
import { User } from "../../entities/Users";
import { IUsersRepository } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }
  async create({
    driver_license,
    email,
    name,
    password,
    username,
  }: ICreateUSerDTO): Promise<void> {
    const user = this.repository.create({
      name,
      username,
      email,
      driver_license,
      password,
    });

    await this.repository.save(user);
  }

  async findByEmail(email: string): Promise<User> {
    const user = await this.repository.findOne({ email });

    return user;
  }
}

export { UsersRepository };
