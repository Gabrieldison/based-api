import { getRepository, Repository } from "typeorm";
import { ICreateUSerDTO } from "../../../dtos";
import { IUsersRepository } from "../../../repositories/IUsersRepository";
import { User } from "../entities/Users";

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
    avatar,
    id,
  }: ICreateUSerDTO): Promise<void> {
    const user = this.repository.create({
      name,
      username,
      email,
      driver_license,
      password,
      avatar,
      id,
    });

    await this.repository.save(user);
  }

  async findByEmail(email: string): Promise<User> {
    const user = await this.repository.findOne({ email });

    return user;
  }

  async findById(id: string): Promise<User> {
    const user = await this.repository.findOne(id);

    return user;
  }
}

export { UsersRepository };
