import { useQuery } from "@tanstack/react-query";
import {
  fetchProduct,
  fetchProducts,
  type ProductsResponse,
} from "../service.ts";

export const useProducts = (page: number, limit: number) => {
  return useQuery<ProductsResponse>({
    queryKey: ["products", page, limit],
    queryFn: () => fetchProducts(page, limit),
    staleTime: 1000 * 60 * 5,
  });
};

export const useProduct = (id: number) => {
  return useQuery({
    queryKey: ["product", id],
    queryFn: () => fetchProduct(id),
    staleTime: 1000 * 60 * 5,
  });
};
