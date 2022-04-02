import { Customer } from "@modules/customers/entities/Customer";
import { CustomerRepositoryInMemory } from "@modules/customers/repositories/in-memory/CustomersRepositoryInMemory";
import { CreateCustomerUseCase } from "../createCustomer/CreateCustomerUseCase";
import { ListCustomerByIdUseCase } from "./ListCustomerByIdUseCase";

describe('List all customers', () => {

    let createCustomerUseCase: CreateCustomerUseCase;
    let listCustomerByIdUseCase: ListCustomerByIdUseCase;
    let customerRepositoryInMemory: CustomerRepositoryInMemory;

    beforeAll(() => {
        customerRepositoryInMemory = new CustomerRepositoryInMemory();
        listCustomerByIdUseCase = new ListCustomerByIdUseCase(customerRepositoryInMemory);
        createCustomerUseCase = new CreateCustomerUseCase(customerRepositoryInMemory);
    })

    it("should list the customers by id", async () => {

        const {id} = await createCustomerUseCase.execute({
            nome: "Customer 1",
            email: "john@sample.com",
            endereco: "Street 1"
        })

        await createCustomerUseCase.execute({
            nome: "Customer 2",
            email: "john@due.com",
            endereco: "Street 2"
        })

        const customer = await listCustomerByIdUseCase.execute(id);

        expect(customer).toBeInstanceOf(Customer);      

    })
    
});