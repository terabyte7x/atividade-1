import { v4 as uuidV4 } from "uuid";


export class Customer {
    id: string;
    name: string;
    email: string;
    address: string;
    createAt: Date;
    updateAt: Date;

    constructor() {
        if (!this.id) {
          this.id = uuidV4();
          this.createAt = new Date();
          this.updateAt = new Date();
        }

        if(this.id) {
          this.updateAt = new Date();
        }
      }

}