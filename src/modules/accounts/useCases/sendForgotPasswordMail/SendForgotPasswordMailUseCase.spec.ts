import { DayjsDateProvider } from "../../../../shared/container/providers/DateProvider/implementations/DayjsDateProvider";
import { MailProviderInMemory } from "../../../../shared/container/providers/MailProvider/in-memory/MailproviderInMemory";
import { AppError } from "../../../../shared/errors/AppError";
import { UsersRepositoryInMemory } from "../../repositories/in-memory/UsersRepositoryInMemory";
import { UserTokensRepositoryInMemory } from "../../repositories/in-memory/UserTokensRepositoryInMemory";
import { SendForgotPasswordMailUseCase } from "./SendForgotPasswordMailUseCase";

let sendForgotPasswordMailUseCase: SendForgotPasswordMailUseCase;
let usersRepositoryInMemory: UsersRepositoryInMemory;
let dateProvider: DayjsDateProvider;
let userTokenRepositoryInMemory: UserTokensRepositoryInMemory;
let mailProvider: MailProviderInMemory;

describe("Send forgot Mail", () => {
  beforeEach(() => {
    usersRepositoryInMemory = new UsersRepositoryInMemory();
    dateProvider = new DayjsDateProvider();
    userTokenRepositoryInMemory = new UserTokensRepositoryInMemory();
    mailProvider = new MailProviderInMemory();

    sendForgotPasswordMailUseCase = new SendForgotPasswordMailUseCase(
      usersRepositoryInMemory,
      userTokenRepositoryInMemory,
      dateProvider,
      mailProvider
    );
  });

  it("should be able to send a forgot password mail to user", async () => {
    const sendMail = jest.spyOn(mailProvider, "sendMail");

    await usersRepositoryInMemory.create({
      driver_license: "664168",
      email: "gabrielLima@gmail.com",
      name: "Gabriel Doido",
      password: "1234",
    });

    await sendForgotPasswordMailUseCase.execute("gabrielLima@gmail.com");

    expect(sendMail).toHaveBeenCalled();
  });

  it("should not be able to send an email if user does not exists!", async () => {
    await expect(
      sendForgotPasswordMailUseCase.execute("dudu@gmail.com")
    ).rejects.toEqual(new AppError("User does not exists!"));
  });

  it("should not be able to send an email if user does not exists!", async () => {
    const generateTokenMail = jest.spyOn(userTokenRepositoryInMemory, "create");

    await usersRepositoryInMemory.create({
      driver_license: "787878",
      email: "gabrielReis@gmail.com",
      name: "Gabriel maluco",
      password: "1234",
    });

    await sendForgotPasswordMailUseCase.execute("gabrielReis@gmail.com");

    expect(generateTokenMail).toHaveBeenCalled();
  });
});
