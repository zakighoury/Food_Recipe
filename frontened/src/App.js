import { ConfigProvider } from "antd";
import "./App.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Component } from "react";
import HomePage from "./pages/HomePage/HomePage";
import RecipePage from "./pages/HomePage/RecipePage";
import Create_Recipe from "./pages/HomePage/Create_Recipe";
import Signup from "./pages/HomePage/Signup";
import Blog from "./pages/HomePage/Blog";
import About from "./pages/HomePage/About_Us";
import Categories from "./pages/HomePage/Categories";
import AddProduct from "./Product/ProductForm";
import BlogPage from "./Product/BlogForm";
import Explore from "./Product/ExploreFrom";
import Cat from "./Product/CategoryFrom";
import CategoryDetails from "./Categories/CategoryDetails";
import PartnershipForm from "./Product/PartnershipForm";
import Login_component from "./Login/Login_component";
import Login_page from "./pages/HomePage/Login_page";
import ProductDetails from "./components/TrendingRecepies/ProductDetails/ProductDetails";
import ProfilePage from "./Auth_User/UserProfile/ProfilePage/ProfilePage";
const router = createBrowserRouter([
  {
    path: "/",
    Component: HomePage,
  },
  {
    path: "profile",
    Component: ProfilePage,
  },
  {
    path: "Recipe",
    Component: RecipePage,
    // element: <div>Recipe</div>
  },
  {
    path: "ProductDetails/:productId",
    Component: ProductDetails,
  },
  {
    path: "Create_Recipie",
    Component: Create_Recipe,
  },
  {
    path: "Signup",
    Component: Signup,
  },

  {
    path: "Blog",
    Component: Blog,
  },
  {
    path: "About",
    Component: About,
  },
  {
    path: "Categories",
    Component: Categories,
  },
  {
    path: "AddProduct",
    Component: AddProduct,
  },
  {
    path: "AddBlog",
    Component: BlogPage,
  },
  {
    path: "AddExplore",
    Component: Explore,
  },
  {
    path: "AddCat",
    Component: Cat,
  },
  {
    path: "PartnershipForm",
    Component: PartnershipForm,
  },
  {
    path: "categorydetails/:cat_id",
    Component: CategoryDetails,
  },
  {
    path: "login_page",
    Component: Login_page,
  },
]);
function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#B55D51F8",
        },
        components: {
          Button: {
            controlHeight: 48,
            controlHeightLG: 54,
            controlHeightSM: 44,
            paddingBlock: 12,
            paddingInline: 30,
          },
        },
      }}
    >
      <RouterProvider router={router} />
    </ConfigProvider>
  );
}

export default App;
