import { ICreateCustomerDTO } from "@modules/customers/dtos/ICreateCustomerDTO";
import { IUpdateCustomerDTO } from "@modules/customers/dtos/IUpdateCustomerDTO";
import { Customer } from "@modules/customers/entities/Customer";
import { ICustomersRepository } from "../ICustomersRepository";

export class CustomerRepositoryInMemory implements ICustomersRepository {

    private customers: Customer[] = [];

    async all(): Promise<Customer[]> {
        const customers = await this.customers;
        return customers;
    }
    async findById(id: string): Promise<Customer> {
        const customer = await this.customers.find(customer => customer.id === id);
        return customer;
    }
    async create({name, email, address}: ICreateCustomerDTO): Promise<Customer> {
        const customer = new Customer();        
        await Object.assign(customer, {name, email, address});
        this.customers.push(customer);
        return customer;
    }
    async update(id: string, {name, email, address}: IUpdateCustomerDTO): Promise<Customer> {
        const customer = await this.customers.find(customer => customer.id === id);
        Object.assign(customer, {name, email, address});
        await this.customers.push(customer);
        return customer;
    }
    async delete(id: string): Promise<void> {
        const customer = await this.customers.find(customer => customer.id === id);
        await this.customers.splice(this.customers.indexOf(customer), 1);
    }
}