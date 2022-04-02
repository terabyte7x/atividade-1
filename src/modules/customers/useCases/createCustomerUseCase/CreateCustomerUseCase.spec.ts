import { CustomerRepositoryInMemory } from "../../repositories/in-memory/CustomersRepositoryInMemory";
import { CreateCustomerUseCase } from "./CreateCustomerUseCase";

describe("CustomersUseCase", () => {

  let createCustomerUseCase: CreateCustomerUseCase;
  let customerRepositoryInMemory: CustomerRepositoryInMemory;

  beforeAll(() => {
    customerRepositoryInMemory = new CustomerRepositoryInMemory();
    createCustomerUseCase = new CreateCustomerUseCase(customerRepositoryInMemory);
  })

  it("should create a new cliente", async () => {

    const customer = await createCustomerUseCase.execute({
      name: "Teste",
      email: "abc@abc.com",
      address: "Rua Teste"
    })

    expect(customer).toHaveProperty("id");
    
  });
});