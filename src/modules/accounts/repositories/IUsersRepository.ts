import { ICreateUSerDTO } from "../dtos";

interface IUsersRepository {
  create(data: ICreateUSerDTO): Promise<void>;
}

export { IUsersRepository };
