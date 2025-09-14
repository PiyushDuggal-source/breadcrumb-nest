import React, { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import { type Product } from "../service";
import { useBreadcrumbs } from "../context/useBreadcrumbs";

const AboutProduct = () => {
  const { data } = useOutletContext<{ data: Product }>();
  const { setCrumbs } = useBreadcrumbs();

  useEffect(() => {
    setCrumbs([
      { label: "Home", path: "/" },
      { label: "Products", path: "/products" },
      { label: data.title, path: `/products/${data.id}` },
      { label: "About", path: `/products/${data.id}/about` },
    ]);
  }, [setCrumbs, data]);

  if (!data) {
    return (
      <p className="text-center text-gray-500">No product details available.</p>
    );
  }

  return (
    <div className="mt-6 space-y-8">
      <h2 className="text-2xl font-bold text-gray-800">About {data.title}</h2>
      <p className="text-gray-600">{data.description}</p>

      <div className="bg-white shadow rounded-lg p-4">
        <h3 className="text-lg font-semibold text-gray-700 mb-2">Dimensions</h3>
        <ul className="text-gray-600 space-y-1">
          <li>Width: {data.dimensions?.width} cm</li>
          <li>Height: {data.dimensions?.height} cm</li>
          <li>Depth: {data.dimensions?.depth} cm</li>
        </ul>
      </div>

      <div className="bg-white shadow rounded-lg p-4">
        <h3 className="text-lg font-semibold text-gray-700 mb-2">
          Meta Information
        </h3>
        <ul className="text-gray-600 space-y-1">
          <li>
            Created At: {new Date(data.meta?.createdAt).toLocaleDateString()}
          </li>
          <li>
            Updated At: {new Date(data.meta?.updatedAt).toLocaleDateString()}
          </li>
          <li>Barcode: {data.meta?.barcode}</li>
        </ul>
      </div>
    </div>
  );
};

export default AboutProduct;
