import { Route, Routes } from "react-router";
import Home from "./components/Home";
import ProductDetails from "./components/ProductDetails";
import AboutProduct from "./components/AboutProduct";
import { BreadcrumbProvider } from "./context/BreadCrumbContext";
import Breadcrumbs from "./components/Breadcrumbs";
import PaginatedProducts from "./components/PaginatedProducts";

function App() {
  return (
    <>
      <div className="max-w-[1440px]">
        <BreadcrumbProvider>
          <Breadcrumbs />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<PaginatedProducts />} />
            <Route path="/products/:id" element={<ProductDetails />}>
              <Route path="about" element={<AboutProduct />} />
            </Route>
          </Routes>
        </BreadcrumbProvider>
      </div>
    </>
  );
}

export default App;
