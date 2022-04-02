import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListCustomerByIdUseCase } from "./ListCustomerByIdUseCase";

export class ListCustomerByIdController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

        const createCustomerUseCase = container.resolve(
            ListCustomerByIdUseCase
        );

        const customers = await createCustomerUseCase.execute(id);

        return response.status(201).send(customers);
    }
}
