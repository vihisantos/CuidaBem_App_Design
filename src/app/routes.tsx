import { createBrowserRouter } from "react-router";
import { Home } from "./pages/Home";
import { Search } from "./pages/Search";
import { Profile } from "./pages/Profile";
import { Pedidos } from "./pages/Pedidos";
import { UserProfile } from "./pages/UserProfile";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { OrderConfirmation } from "./pages/OrderConfirmation";
import { CaregiverHome } from "./pages/CaregiverHome";
import ProjectMap from "./pages/ProjectMap";
import { ErrorPage } from "./pages/ErrorPage";
import { RootLayout } from "./layouts/RootLayout";
import { AuthLayout } from "./layouts/AuthLayout";

export const router = createBrowserRouter([
  {
    path: "/mapa",
    Component: ProjectMap
  },
  {
    path: "/",
    Component: AuthLayout,
    errorElement: <ErrorPage />,
    children: [
      { index: true, Component: Login },
      { path: "login", Component: Login },
      { path: "cadastro", Component: Register },
    ]
  },
  {
    path: "/app",
    Component: RootLayout,
    errorElement: <ErrorPage />,
    children: [
      { index: true, Component: Home },
      { path: "buscar", Component: Search },
      { path: "perfil/:id", Component: Profile },
      { path: "pedidos", Component: Pedidos },
      { path: "perfil", Component: UserProfile },
      { path: "pedido-confirmado", Component: OrderConfirmation },
      { path: "cuidador", Component: CaregiverHome },
    ],
  },
], {
  basename: '/CuidaBem_App_Design',
});
