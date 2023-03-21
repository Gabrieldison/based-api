import { inject, injectable } from "tsyringe";
import { IStorageProvider } from "../../../../shared/container/providers/StorageProvider/IStorage";
import { ICarsImageRepository } from "../../repositories/ICarsImageRepository";

interface IRequest {
  car_id: string;
  name_image: string[];
}

@injectable()
class UploadCarsImageUseCase {
  constructor(
    @inject("CarsImagesRepository")
    private carsImagesRepository: ICarsImageRepository,

    @inject("StorageProvider")
    private storageProvider: IStorageProvider
  ) {}

  async execute({ car_id, name_image }: IRequest): Promise<void> {
    name_image.map(async (image) => {
      await this.carsImagesRepository.create(car_id, image);
      await this.storageProvider.save(image, "cars");
    });
  }
}

export { UploadCarsImageUseCase };
