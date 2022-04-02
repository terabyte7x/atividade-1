import { CreateCustomerController } from "@modules/customers/useCases/createCustomerUseCase/CreateCustomerController";
import { Router } from "express";
import multer from "multer";

export const customersRoutes = Router();

const createCustomerController = new CreateCustomerController();

customersRoutes.post("/", createCustomerController.handle);

