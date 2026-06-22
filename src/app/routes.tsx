import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router";
import { RootLayout } from "./layouts/RootLayout";
import { AuthLayout } from "./layouts/AuthLayout";
import { HomeSkeleton } from "../components/Skeleton";

const ErrorPage = lazy(() => import("./pages/ErrorPage").then(m => ({ default: m.ErrorPage })));
const Login = lazy(() => import("./pages/Login").then(m => ({ default: m.Login })));
const Register = lazy(() => import("./pages/Register").then(m => ({ default: m.Register })));
const Home = lazy(() => import("./pages/Home").then(m => ({ default: m.Home })));
const Search = lazy(() => import("./pages/Search").then(m => ({ default: m.Search })));
const Profile = lazy(() => import("./pages/Profile").then(m => ({ default: m.Profile })));
const Pedidos = lazy(() => import("./pages/Pedidos").then(m => ({ default: m.Pedidos })));
const UserProfile = lazy(() => import("./pages/UserProfile").then(m => ({ default: m.UserProfile })));
const OrderConfirmation = lazy(() => import("./pages/OrderConfirmation").then(m => ({ default: m.OrderConfirmation })));
const CaregiverHome = lazy(() => import("./pages/CaregiverHome").then(m => ({ default: m.CaregiverHome })));
const ProjectMap = lazy(() => import("./pages/ProjectMap"));

function PageLoader() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 border-primary/20 border-t-primary rounded-full animate-spin" />
        <p className="text-sm text-muted-foreground font-medium">Carregando...</p>
      </div>
    </div>
  );
}

function withSuspense(Component: React.ComponentType) {
  return (
    <Suspense fallback={<PageLoader />}>
      <Component />
    </Suspense>
  );
}

export const router = createBrowserRouter([
  {
    path: "/mapa",
    element: withSuspense(ProjectMap)
  },
  {
    path: "/",
    Component: AuthLayout,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: withSuspense(Login) },
      { path: "login", element: withSuspense(Login) },
      { path: "cadastro", element: withSuspense(Register) },
    ]
  },
  {
    path: "/app",
    Component: RootLayout,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: withSuspense(Home) },
      { path: "buscar", element: withSuspense(Search) },
      { path: "perfil/:id", element: withSuspense(Profile) },
      { path: "pedidos", element: withSuspense(Pedidos) },
      { path: "perfil", element: withSuspense(UserProfile) },
      { path: "pedido-confirmado", element: withSuspense(OrderConfirmation) },
      { path: "cuidador", element: withSuspense(CaregiverHome) },
    ],
  },
], {
  basename: '/CuidaBem_App_Design',
});
