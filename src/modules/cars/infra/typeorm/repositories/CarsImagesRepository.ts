import { getRepository, Repository } from "typeorm";
import { ICarsImageRepository } from "../../../repositories/ICarsImageRepository";
import { CarImage } from "../entities/CarImage";

class CarsImagesRepository implements ICarsImageRepository {
  private repository: Repository<CarImage>;

  constructor() {
    this.repository = getRepository(CarImage);
  }

  async create(car_id: string, name_image: string): Promise<CarImage> {
    const carImage = this.repository.create({
      car_id,
      name_image,
    });

    await this.repository.save(carImage);

    return carImage;
  }
}

export { CarsImagesRepository };
