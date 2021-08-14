import { Request, Response } from "express";
import { ProductService } from "../services/ProductService";

class ProductController {

  async findAll(req: Request, res: Response) {
    const productService = new ProductService();

    try {
      const products = await productService.findAll();
      return res.status(200).json(products);
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: "Erro ao procurar por produtos." });
    }
  }

  async create(req: Request, res: Response) {
    const { name, description, price, image_url } = req.body;
    const productService = new ProductService();

    try {
      const product = await productService.create({
        name,
        description,
        price,
        image_url
      });

      return res.status(201).json(product);
    } catch (error) {
      return res.status(400).json({ message: "Erro ao salvar produto." });
    }
  }

  async findOne(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const productService = new ProductService();

      const product = await productService.findOne(id);

      if (!product) {
        return res.status(404).json({ message: "Produto não encontrado." });
      }

      return res.status(200).json(product);
    } catch (error) {
      return res.status(400).json({ message: "Erro ao procurar produto." });
    }
  }

  async update(req: Request, res: Response) {
    const { name, description, price, image_url, slug } = req.body;
    const { id } = req.params;

    try {
      const productService = new ProductService();

      await productService.update(id, { name, description, price, image_url, slug });

      return res.status(204).json({ message: "OK" });
    } catch (error) {
      return res.status(400).json({ message: "Erro ao atualizar produto." });
    }
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const productService = new ProductService();

      await productService.delete(id);

      return res.status(204).json({ message: "OK" });
    } catch (error) {
      return res.status(400).json({ message: "Erro ao excluir produto." });
    }
  }
}

export { ProductController };
