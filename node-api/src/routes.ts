import { Router } from "express";
import { ProductController } from "./controllers/ProductController";

const routes = Router();

const productController = new ProductController();

routes.get('/products', productController.findAll);
routes.post('/products', productController.create);
routes.get('/products/:id', productController.findOne);
routes.put('/products/:id', productController.update);
routes.delete('/products/:id', productController.delete);

export { routes };
