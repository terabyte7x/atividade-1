import { Request, Response } from "express";
import { container } from "tsyringe";

import { DeleteCustomerUseCase } from "./DeleteCustomerUseCase";

export class DeleteCustomerController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

        const deleteCustomerUseCase = container.resolve(DeleteCustomerUseCase);

        await deleteCustomerUseCase.execute(id);

        return response.status(200).send();
    }
}
