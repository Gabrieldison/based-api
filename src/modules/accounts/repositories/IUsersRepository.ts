import { ICreateUSerDTO } from "../dtos";
import { User } from "../entities/Users";

interface IUsersRepository {
  create(data: ICreateUSerDTO): Promise<void>;
  findByEmail(email: string): Promise<User>;
}

export { IUsersRepository };
