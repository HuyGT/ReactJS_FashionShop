import { lazy } from "react";
import { ROUTER_PATH } from "./routerLink";

//user
const Home = lazy(() => import("../pages/HomePage/Home.js"));
const Detail = lazy(() => import("../pages/Detail/Detail.js"));
const Login = lazy(() => import("../pages/Login/Login.js"));
const Shop = lazy(() => import("../pages/Shop/ShopStore.js"));
const MaleShop = lazy(() => import("../pages/Shop/ShopMan.js"));
const FemaleShop = lazy(() => import("../pages/Shop/ShopWoman.js"));
const Blog = lazy(() => import("../pages/Blog/Blog.js"));
const Collection = lazy(() => import("../pages/Collection/Collection.js"));
const Contact = lazy(() => import("../pages/Contact/Contact.js"));
const Profile = lazy(() => import("../pages/Profile/Profile.js"));
const User = lazy(() => import("../pages/User/User.js"));
const Pay = lazy(() => import("../pages/Pay/Pay.js"));
const OrderStatus = lazy(() => import("../pages/OrderStatus/OrderStatus.js"));
const DetailOrderUser = lazy(() => import("../pages/OrderStatus/DetailOrder"));

//admin
const Admin = lazy(() => import("../pages/Admin/Dashboard/Admin"));
const ProfileAdmin = lazy(() => import("../pages/Admin/Profile"));
const Products = lazy(() => import("../pages/Admin/Products"));
const Users = lazy(() => import("../pages/Admin/Users"));
const Categories = lazy(() => import("../pages/Admin/Categories"));
const Orders = lazy(() => import("../pages/Admin/Orders"));
const DetailOrder = lazy(() => import("../pages/Admin/Orders/DetailOrder"));
const Ratings = lazy(() => import("../pages/Admin/Ratings/"));

// user
export const userRouter = [
  {
    path: ROUTER_PATH.HOME.path,
    isExact: true,
    component: Home,
  },
  {
    path: ROUTER_PATH.DETAIL.path,
    isExact: true,
    component: Detail,
  },
  {
    path: ROUTER_PATH.SHOP.path,
    isExact: true,
    component: Shop,
  },
  {
    path: ROUTER_PATH.SHOP_MAN.path,
    isExact: true,
    component: MaleShop,
  },
  {
    path: ROUTER_PATH.SHOP_WOMAN.path,
    isExact: true,
    component: FemaleShop,
  },
  {
    path: ROUTER_PATH.BLOG.path,
    isExact: true,
    component: Blog,
  },
  {
    path: ROUTER_PATH.LOGIN.path,
    isExact: true,
    component: Login,
  },
  {
    path: ROUTER_PATH.COLLECTION.path,
    isExact: true,
    component: Collection,
  },
  {
    path: ROUTER_PATH.CONTACT.path,
    isExact: true,
    component: Contact,
  },
  {
    path: ROUTER_PATH.PROFILE.path,
    isExact: true,
    component: Profile,
  },
  {
    path: ROUTER_PATH.USER.path,
    isExact: true,
    component: User,
  },
  {
    path: ROUTER_PATH.PAY.path,
    isExact: true,
    component: Pay,
  },
  {
    path: ROUTER_PATH.ORDERSTATUS.path,
    isExact: true,
    component: OrderStatus,
  },
  {
    path: ROUTER_PATH.DETAIL_ORDER_USER.path,
    isExact: true,
    component: DetailOrderUser,
  },
];

// admin
export const adminRouter = [
  {
    path: ROUTER_PATH.ADMIN.path,
    isExact: true,
    component: Admin,
  },
  {
    path: ROUTER_PATH.PROFILE_ADMIN.path,
    isExact: true,
    component: ProfileAdmin,
  },
  {
    path: ROUTER_PATH.PRODUCTS.path,
    isExact: true,
    component: Products,
  },
  {
    path: ROUTER_PATH.USERS.path,
    isExact: true,
    component: Users,
  },
  {
    path: ROUTER_PATH.CATEGORIES.path,
    isExact: true,
    component: Categories,
  },
  {
    path: ROUTER_PATH.ORDERS.path,
    isExact: true,
    component: Orders,
  },
  {
    path: ROUTER_PATH.DETAIL_ORDER.path,
    isExact: true,
    component: DetailOrder,
  },
  {
    path: ROUTER_PATH.RATINGS.path,
    isExact: true,
    component: Ratings,
  },
];
