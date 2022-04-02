import { ICreateCustomerDTO } from "../dtos/ICreateCustomerDTO";
import { IUpdateCustomerDTO } from "../dtos/IUpdateCustomerDTO";
import { Customer } from "../entities/Customer";

export interface ICustomersRepository {

    all(): Promise<Customer[]>;
    findById(id: string): Promise<Customer>;
    create(data: ICreateCustomerDTO): Promise<Customer>;
    update(id: string, data: IUpdateCustomerDTO): Promise<Customer>;
    delete(id: string): Promise<void>;

}


