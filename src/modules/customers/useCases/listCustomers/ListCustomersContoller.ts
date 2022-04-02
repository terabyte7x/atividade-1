import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListCustomersUseCase } from "./ListCustomersUseCase";

export class ListCustomersContoller {
    async handle(request: Request, response: Response): Promise<Response> {
        
        const createCustomerUseCase = container.resolve(ListCustomersUseCase);
        
        const customers = await createCustomerUseCase.execute();
        
        return response.status(201).send(customers);
        
    }
}