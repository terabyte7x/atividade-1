import { ListCustomerByIdController } from "@modules/customers/useCases/listCustomerById/ListCustomerByIdController";
import { Router } from "express";
import { customersRoutes } from "./customers.routes";

export const router = Router();

const listCustomerByIdController = new ListCustomerByIdController();


// Gambiarra
router.get("/cliente/:id", listCustomerByIdController.handle);


router.use("/clientes", customersRoutes);

