import { Router } from "express";
import { customersRoutes } from "./customers.routes";

export const router = Router();

router.use("/api/v1/customers", customersRoutes);

