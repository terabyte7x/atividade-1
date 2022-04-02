import { CustomerRepositoryInMemory } from "@modules/customers/repositories/in-memory/CustomersRepositoryInMemory";
import { CreateCustomerUseCase } from "../createCustomer/CreateCustomerUseCase";
import { ListCustomerByIdUseCase } from "../listCustomerById/ListCustomerByIdUseCase";
import { UpdateCustomerUseCase } from "./UpdateCustomerUseCase";

describe('update customer', () => {

    let createCustomerUseCase: CreateCustomerUseCase;
    let listCustomerByIdUseCase: ListCustomerByIdUseCase;
    let customerRepositoryInMemory: CustomerRepositoryInMemory;
    let updateCustomerUseCase: UpdateCustomerUseCase;

    beforeAll(() => {
        customerRepositoryInMemory = new CustomerRepositoryInMemory();
        listCustomerByIdUseCase = new ListCustomerByIdUseCase(customerRepositoryInMemory);
        createCustomerUseCase = new CreateCustomerUseCase(customerRepositoryInMemory);
        updateCustomerUseCase = new UpdateCustomerUseCase(customerRepositoryInMemory);
    })


    it('should be able to update a customer', async () => {


        const {id} = await createCustomerUseCase.execute({
            nome: "Customer 1",
            email: "john@sample.com",
            endereco: "Street 1"
        })

        await updateCustomerUseCase.execute({id,nome: "Customer 1 Updated"});

        const customerUpdated = await listCustomerByIdUseCase.execute(id);

        expect(customerUpdated).toHaveProperty('nome', 'Customer 1 Updated');

    })
});