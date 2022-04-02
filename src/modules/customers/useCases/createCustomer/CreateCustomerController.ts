import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateCustomerUseCase } from "./CreateCustomerUseCase";

export class CreateCustomerController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { nome, email, endereco } = request.body;

        const createCustomerUseCase = container.resolve(CreateCustomerUseCase);

        await createCustomerUseCase.execute({ nome, email, endereco });

        return response.status(201).send();
    }
}
