/*eslint no-param-reassign: ["error", { "props": false }]*/
import { ICreateCustomerDTO } from "@modules/customers/dtos/ICreateCustomerDTO";
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
    async create({nome, email, endereco}: ICreateCustomerDTO): Promise<Customer> {
        const customer = new Customer();        
        await Object.assign(customer, {nome, email, endereco});
        this.customers.push(customer);
        return customer;
    }
    async update({id, nome, email, endereco}: ICreateCustomerDTO): Promise<Customer> {
        const customer = await this.customers.find(customer => customer.id === id);

        if(!nome) nome = customer.nome;

        if(!email) email = customer.email;

        if(!endereco) endereco = customer.endereco;
        
        await this.customers.splice(this.customers.indexOf(customer), 1);
        
        Object.assign(customer, {id, nome, email, endereco, updateAt: new Date()});
        
        await this.customers.push(customer);

        return customer;
    }
    async delete(id: string): Promise<void> {
        const customer = await this.customers.find(customer => customer.id === id);
        await this.customers.splice(this.customers.indexOf(customer), 1);
    }
}