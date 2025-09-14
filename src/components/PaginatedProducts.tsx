import { useEffect, useState } from "react";
import { useProducts } from "../hooks/useProducts";
import Pagination from "./Pagination";
import { Link } from "react-router-dom";
import { useBreadcrumbs } from "../context/useBreadcrumbs";

function PaginatedProducts() {
  const [page, setPage] = useState(1);
  const limit = 10;
  const { setCrumbs } = useBreadcrumbs();

  useEffect(() => {
    setCrumbs([
      { label: "Home", path: "/" },
      { label: "Products", path: "/products" },
    ]);
  }, [setCrumbs]);

  const { data, status, error } = useProducts(page, limit);

  if (status === "pending" || !data) {
    return <h1 className="text-center text-lg">Loading...</h1>;
  }

  if (status === "error") {
    return (
      <h1 className="text-center text-red-500">
        Error: {(error as Error).message}
      </h1>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.products.map((product) => (
          <Link
            to={`/products/${product.id}`}
            key={product.id}
            className="border rounded-xl p-4 shadow hover:shadow-lg transition"
          >
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-full h-40 object-cover rounded mb-3"
            />
            <h2 className="text-lg font-semibold mb-1">{product.title}</h2>
            <p className="text-sm text-gray-600 line-clamp-2 mb-2">
              {product.description}
            </p>

            <div className="text-sm text-gray-500 mb-2">
              Brand: <span className="font-medium">{product.brand}</span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-lg font-bold">${product.price}</span>
              <span className="text-yellow-500">⭐ {product.rating}</span>
            </div>

            <div className="mt-2 text-xs text-gray-500">
              Stock: {product.stock} | {product.availabilityStatus}
            </div>
          </Link>
        ))}
      </div>
      <Pagination
        currentPage={page}
        totalPages={Math.ceil(data.total / limit)}
        onPageChange={(newPage) => setPage(newPage)}
      />
    </div>
  );
}

export default PaginatedProducts;
