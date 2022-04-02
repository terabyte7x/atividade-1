import { ICreateCustomerDTO } from "../dtos/ICreateCustomerDTO";
import { Customer } from "../entities/Customer";

export interface ICustomersRepository {
    all(): Promise<Customer[]>;
    findById(id: string): Promise<Customer>;
    create(data: ICreateCustomerDTO): Promise<Customer>;
    update(data: ICreateCustomerDTO): Promise<Customer>;
    delete(id: string): Promise<void>;
}
