import { Outlet, useLocation, Link } from "react-router";
import { Home, Search, FileText, User } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export function RootLayout() {
  const location = useLocation();

  const navItems = [
    { path: "/app", icon: Home, label: "Home" },
    { path: "/app/buscar", icon: Search, label: "Buscar" },
    { path: "/app/pedidos", icon: FileText, label: "Pedidos" },
    { path: "/app/perfil", icon: User, label: "Perfil" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background font-sans">
      {/* Desktop Top Navigation */}
      <nav className="hidden md:flex fixed top-0 left-0 right-0 h-16 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-border z-50">
        <div className="w-full max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Link to="/app" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">C</span>
              </div>
              <span className="text-xl font-heading font-bold text-primary">CuidaBem</span>
            </Link>
          </div>

          <div className="flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path || (item.path !== "/app" && location.pathname.startsWith(item.path));
              const Icon = item.icon;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary ${isActive ? "text-primary" : "text-muted-foreground"
                    }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? "fill-primary/20" : ""}`} />
                  <span>{item.label}</span>
                </Link>
              )
            })}
          </div>

          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center border border-slate-200 dark:border-slate-700">
              <User className="w-5 h-5 text-slate-600 dark:text-slate-400" />
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content with Page Transitions */}
      <div className="flex-1 overflow-auto pb-20 md:pb-0 md:pt-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Mobile Bottom Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white dark:bg-slate-900 border-t border-border z-50" style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}>
        <div className="flex justify-around items-center h-16 max-w-lg mx-auto">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path || (item.path !== "/app" && location.pathname.startsWith(item.path));
            const Icon = item.icon;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex flex-col items-center justify-center flex-1 h-full transition-colors relative group ${isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
                  }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute -top-[1px] w-12 h-[3px] bg-primary rounded-b-full shadow-[0_2px_8px_rgba(45,156,219,0.5)]"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
                <Icon className={`w-5 h-5 mb-1 transition-transform group-active:scale-90 ${isActive ? "fill-current" : ""}`} />
                <span className="text-[10px] font-medium tracking-wide">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
