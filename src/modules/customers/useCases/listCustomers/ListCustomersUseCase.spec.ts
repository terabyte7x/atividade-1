import { CustomerRepositoryInMemory } from "@modules/customers/repositories/in-memory/CustomersRepositoryInMemory";

import { CreateCustomerUseCase } from "../createCustomer/CreateCustomerUseCase";
import { ListCustomersUseCase } from "./ListCustomersUseCase";

describe("List all customers", () => {
    let createCustomerUseCase: CreateCustomerUseCase;
    let listCustomersUseCase: ListCustomersUseCase;
    let customerRepositoryInMemory: CustomerRepositoryInMemory;

    beforeAll(() => {
        customerRepositoryInMemory = new CustomerRepositoryInMemory();
        listCustomersUseCase = new ListCustomersUseCase(
            customerRepositoryInMemory
        );
        createCustomerUseCase = new CreateCustomerUseCase(
            customerRepositoryInMemory
        );
    });

    it("should list all customers", async () => {
        await createCustomerUseCase.execute({
            nome: "Customer 1",
            email: "john@sample.com",
            endereco: "Street 1",
        });

        await createCustomerUseCase.execute({
            nome: "Customer 2",
            email: "john@due.com",
            endereco: "Street 2",
        });

        const customers = await listCustomersUseCase.execute();

        expect(customers).toHaveLength(2);
    });
});
