export type Dimensions = {
  width: number;
  height: number;
  depth: number;
};

export type Meta = {
  createdAt: string;
  updatedAt: string;
  barcode: string;
  qrCode: string;
};

export type Review = {
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;
};

export type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  sku: string;
  weight: number;
  dimensions: Dimensions;
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  returnPolicy: string;
  minimumOrderQuantity: number;
  tags: string[];
  images: string[];
  thumbnail: string;
  reviews: Review[];
  meta: Meta;
};

export type ProductsResponse = {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
};

export const fetchProducts = async (
  page: number,
  limit: number,
): Promise<ProductsResponse> => {
  const skip = (page - 1) * limit;
  const res = await fetch(
    `https://dummyjson.com/products?limit=${limit}&skip=${skip}`,
  );
  if (!res.ok) throw new Error("Failed to fetch products");
  return res.json();
};

export const fetchProduct = async (id: number): Promise<Product> => {
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  if (!res.ok) throw new Error("Failed to fetch product");
  return res.json();
};
