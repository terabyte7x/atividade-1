import { CustomerRepositoryInMemory } from "@modules/customers/repositories/in-memory/CustomersRepositoryInMemory";
import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateCustomerUseCase } from "./CreateCustomerUseCase";

export class CreateCustomerController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { name, email, address } = request.body;
        
        const createCustomerUseCase = container.resolve(CreateCustomerUseCase);
        
        await createCustomerUseCase.execute({ name, email, address });
        
        return response.status(201).send();
    }


}