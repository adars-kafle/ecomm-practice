import Footer from "../footer/Footer";
import Header from "../header/Header";

// For rendering childrens
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <main>
      <Header />
      <main className="mx-auto my-3 w-[96%] min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </main>
  );
};

export default Layout;
