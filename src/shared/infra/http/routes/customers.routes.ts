import { CreateCustomerController } from "@modules/customers/useCases/createCustomer/CreateCustomerController";
import { DeleteCustomerController } from "@modules/customers/useCases/deleteCustomer/DeleteCustomerController";
// import { ListCustomerByIdController } from "@modules/customers/useCases/listCustomerById/ListCustomerByIdController";
import { ListCustomersContoller } from "@modules/customers/useCases/listCustomers/ListCustomersContoller";
import { UpdateCustomerController } from "@modules/customers/useCases/updateCustomer/UpdateCustomerController";
import { Router } from "express";

export const customersRoutes = Router();

const deleteCustomerController= new DeleteCustomerController();
const createCustomerController = new CreateCustomerController();
const listCustomersContoller = new ListCustomersContoller();
const updateCustomerContoller = new UpdateCustomerController();
// const listCustomerByIdController = new ListCustomerByIdController();


customersRoutes.delete("/:id", deleteCustomerController.handle);
customersRoutes.post("/", createCustomerController.handle);
customersRoutes.get("/", listCustomersContoller.handle);
customersRoutes.patch("/:id", updateCustomerContoller.handle);
// customersRoutes.get("/:id", listCustomerByIdController.handle);

