import { Outlet, Link } from "react-router";
import { ArrowLeft } from "lucide-react";
import { Button } from "../../components/ui/Button";
import { motion } from "motion/react";

export function AuthLayout() {
    return (
        <div className="min-h-screen bg-background flex flex-col">
            <div className="absolute top-6 left-6 z-50">
                <Link to="/">
                    <Button variant="ghost" size="icon" className="rounded-full bg-white/20 dark:bg-slate-800/50 backdrop-blur-sm text-foreground hover:bg-white/40 dark:hover:bg-slate-700/50">
                        <ArrowLeft className="w-5 h-5" />
                    </Button>
                </Link>
            </div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="flex-1 flex flex-col"
            >
                <Outlet />
            </motion.div>
        </div>
    );
}
