import { getRepository, Repository } from "typeorm";
import { Product } from "../entities/Product";

interface IProduct {
  name: string,
  description: string,
  price: number,
  image_url: string,
  slug?: string
}

class ProductService {
  private productRepository: Repository<Product>;

  constructor() {
    this.productRepository = getRepository(Product);
  }

  async findAll(): Promise<Product[]> {
    const products = await this.productRepository.find({});

    return products;
  }

  async findOne(id: string): Promise<Product> {
    const product = await this.productRepository.findOne(id);

    return product;
  }

  async create({ name, description, price, image_url }: IProduct): Promise<Product> {

    const slug = name.replace(/\s/g, "-").toLowerCase();

    const product = this.productRepository.create({
      name,
      description,
      price,
      image_url,
      slug
    });

    await this.productRepository.save(product);

    return product;
  }

  async update(id: string, { name, description, price, image_url, slug }: IProduct) {
    const product = await this.productRepository.findOne(id);

    if (name) product.name = name;
    if (description) product.description = description;
    if (price) product.price = price;
    if (image_url) product.image_url = image_url;
    if (slug) product.slug = slug;

    await this.productRepository.save(product);
  }

  async delete(id: string) {
    await this.productRepository.delete(id);
  }
}

export { ProductService };
