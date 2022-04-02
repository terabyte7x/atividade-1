import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateCustomerUseCase } from "./UpdateCustomerUseCase";

export class UpdateCustomerController {
    async handle(request: Request, response: Response): Promise<Response> {

        const {id} = request.params;
        const {nome, endereco, email} = request.body;
        
        const updateCustomerUseCase = container.resolve(UpdateCustomerUseCase);
        
        await updateCustomerUseCase.execute({id, nome, endereco, email});
        
        return response.status(200).send();
        
    }
}