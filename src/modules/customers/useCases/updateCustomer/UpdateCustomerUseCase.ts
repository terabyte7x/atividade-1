import { ICreateCustomerDTO } from "@modules/customers/dtos/ICreateCustomerDTO";
import { Customer } from "@modules/customers/entities/Customer";
import { ICustomersRepository } from "@modules/customers/repositories/ICustomersRepository";
import { inject, injectable } from "tsyringe";

import { AppError } from "@shared/errors/AppError";

@injectable()
export class UpdateCustomerUseCase {
    constructor(
        @inject("CustomerRepositoryInMemory")
        private customersRepository: ICustomersRepository
    ) {}

    async execute({
        id,
        nome,
        endereco,
        email,
    }: ICreateCustomerDTO): Promise<Customer> {
        const customer = await this.customersRepository.findById(id);

        if (!customer) {
            throw new AppError("Cliente não encontrado");
        }

        await this.customersRepository.update({ id, nome, endereco, email });

        return customer;
    }
}
