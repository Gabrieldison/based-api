import { createSpecificationController } from "../modules/useCases/createSpecifications";

import { Router } from "express";

const specificationsRoutes = Router();

specificationsRoutes.post("/", (request, response) => {
  return createSpecificationController.handle(request, response);
});

export { specificationsRoutes };
