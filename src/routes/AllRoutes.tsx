import { BrowserRouter, Routes, Route } from "react-router-dom";

// The main layout of the app
import { Layout } from "../components";

// Pages
import * as pages from "../pages";

const AllRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Homepage */}
          <Route path="/" element={<pages.Home />} />

          {/* Products Page */}
          <Route path="/products" element={<pages.products.Products />} />
          <Route
            path="/product/:productId"
            element={<pages.products.ProductDetail />}
          />

          {/* Cart Page */}
          <Route path="/cart" element={<pages.Cart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AllRoutes;
