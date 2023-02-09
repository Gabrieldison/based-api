import { ICreateUSerDTO } from "../dtos";
import { User } from "../infra/typeorm/entities/Users";

interface IUsersRepository {
  create(data: ICreateUSerDTO): Promise<void>;
  findByEmail(email: string): Promise<User>;
  findById(id: string): Promise<User>;
}

export { IUsersRepository };
