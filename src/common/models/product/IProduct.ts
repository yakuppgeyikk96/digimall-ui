export default interface IProduct {
  id: string;
  name: string;
  description: string | null;
  price: number;
  discount: number | null;
  stock: number;
  sku: string;
  categoryId: string | null;
  images: string[];
  brand: string | null;
  createdAt: Date;
  updatedAt: Date;
}
