import { ICreateCustomerDTO } from "@modules/customers/dtos/ICreateCustomerDTO";
import { Customer } from "@modules/customers/entities/Customer";
import { ICustomersRepository } from "@modules/customers/repositories/ICustomersRepository";
import { inject, injectable } from "tsyringe";

@injectable()
export class CreateCustomerUseCase {

    constructor(
        @inject("CustomerRepositoryInMemory")
        private customerRepository: ICustomersRepository
    ){}
    async execute({name, email, address}: ICreateCustomerDTO): Promise<Customer>{

        const customer = await this.customerRepository.create({name, email, address});
        return customer;
    }

    

}