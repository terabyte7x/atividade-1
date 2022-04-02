import { Customer } from "@modules/customers/entities/Customer";
import { ICustomersRepository } from "@modules/customers/repositories/ICustomersRepository";
import { AppError } from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";

@injectable()
export class ListCustomerByIdUseCase {
  constructor(
    @inject("CustomerRepositoryInMemory")
    private customerRepository: ICustomersRepository
  ) {}

  async execute(id: string): Promise<Customer> {

    const customer = await this.customerRepository.findById(id);

    if (!customer) {
      throw new AppError("Cliente não encontrado");
    }

    return customer;
  }
}