import { v4 as uuidV4 } from "uuid";

export class Customer {
    id: string;
    nome: string;
    email: string;
    endereco: string;
    createAt: Date;
    updateAt: Date;

    constructor() {
        if (!this.id) {
            this.id = uuidV4();
            this.createAt = new Date();
            this.updateAt = new Date();
        } else {
            this.updateAt = new Date();
        }
    }
}
