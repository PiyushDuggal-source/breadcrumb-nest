import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useBreadcrumbs } from "../context/useBreadcrumbs";

const Home = () => {
  const { setCrumbs } = useBreadcrumbs();

  useEffect(() => {
    setCrumbs([{ label: "Home", path: "/" }]);
  }, [setCrumbs]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 px-6">
      <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 text-center">
        Welcome to <span className="text-blue-600">ShopEasy</span>
      </h1>
      <p className="mt-4 text-lg md:text-xl text-gray-600 text-center max-w-xl">
        Discover a wide variety of products at unbeatable prices. Start
        exploring now!
      </p>

      <div className="mt-10">
        <Link
          to="/products"
          className="px-6 py-3 text-lg font-semibold text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 transition duration-300 ease-in-out"
        >
          Browse Products
        </Link>
      </div>

      <div className="mt-16 grid gap-8 sm:grid-cols-2 md:grid-cols-3 text-center">
        <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
          <h3 className="font-semibold text-xl mb-2">Wide Selection</h3>
          <p className="text-gray-600">
            Thousands of products across all categories.
          </p>
        </div>
        <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
          <h3 className="font-semibold text-xl mb-2">Best Prices</h3>
          <p className="text-gray-600">
            Unbeatable deals and regular discounts.
          </p>
        </div>
        <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
          <h3 className="font-semibold text-xl mb-2">Fast Delivery</h3>
          <p className="text-gray-600">
            Get your orders delivered quickly and safely.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
