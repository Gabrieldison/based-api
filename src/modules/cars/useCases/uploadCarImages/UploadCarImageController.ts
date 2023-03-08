import { Request, Response } from "express";
import { container } from "tsyringe";
import { UploadCarsImageUseCase } from "./UploadCarImageUseCase";

interface IFiles {
  filename: string;
}

class UploadCarImageController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const images = request.files as IFiles[];

    const uploadCarImagesUseCase = container.resolve(UploadCarsImageUseCase);

    const name_image = images.map((file) => file.filename);

    await uploadCarImagesUseCase.execute({
      car_id: id,
      name_image,
    });

    return response.status(201).send();
  }
}

export { UploadCarImageController };
