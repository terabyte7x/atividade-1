import { ICustomersRepository } from "@modules/customers/repositories/ICustomersRepository";
import { inject, injectable } from "tsyringe";

import { AppError } from "@shared/errors/AppError";

@injectable()
export class DeleteCustomerUseCase {
    constructor(
        @inject("CustomerRepositoryInMemory")
        private customersRepository: ICustomersRepository
    ) {}

    async execute(id: string): Promise<void> {
        const customerExists = await this.customersRepository.findById(id);

        if (!customerExists) {
            throw new AppError("Cliente não encontrado");
        }

        await this.customersRepository.delete(id);
    }
}
