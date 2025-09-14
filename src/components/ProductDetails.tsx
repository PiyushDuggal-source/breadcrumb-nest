import React, { useEffect } from "react";
import { Outlet, useParams, Link, useLocation } from "react-router-dom";
import { useProduct } from "../hooks/useProducts";
import { useBreadcrumbs } from "../context/useBreadcrumbs";

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const productId = id ? parseInt(id) : undefined;
  const { setCrumbs } = useBreadcrumbs();

  const { data, error, status } = useProduct(productId ?? 0);
  const pathname = useLocation();

  useEffect(() => {
    if (data) {
      setCrumbs([
        { label: "Home", path: "/" },
        { label: "Products", path: "/products" },
        { label: data.title, path: `/products/${data.id}` },
      ]);
    }
  }, [data, setCrumbs, pathname.pathname]);

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
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <div className="flex flex-col md:flex-row gap-6">
        <img
          src={data.thumbnail}
          alt={data.title}
          className="w-full md:w-1/3 h-64 object-cover rounded-lg"
        />

        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-2">{data.title}</h2>
          <p className="text-gray-600 mb-4">{data.description}</p>
          <p className="text-lg font-semibold text-green-600">${data.price}</p>

          <div className="mt-4 flex gap-4">
            <Link
              to={`/products/${data.id}/about`}
              className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
            >
              About
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <Outlet context={{ data }} />
      </div>
    </div>
  );
};

export default ProductDetails;
