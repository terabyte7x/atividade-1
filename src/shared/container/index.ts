import { ICustomersRepository } from "@modules/customers/repositories/ICustomersRepository";
import { CustomerRepositoryInMemory } from "@modules/customers/repositories/in-memory/CustomersRepositoryInMemory";
import { container } from "tsyringe";

container.registerSingleton<ICustomersRepository>(
    "CustomerRepositoryInMemory",
    CustomerRepositoryInMemory
);

