import { Customer } from "@modules/customers/entities/Customer";
import { ICustomersRepository } from "@modules/customers/repositories/ICustomersRepository";
import { inject, injectable } from "tsyringe";

@injectable()
export class ListCustomersUseCase {
    constructor(
        @inject("CustomerRepositoryInMemory")
        private customersRepository: ICustomersRepository
    ) {}

    async execute(): Promise<Customer[]> {
        const customers = await this.customersRepository.all();
        return customers;
    }
}
