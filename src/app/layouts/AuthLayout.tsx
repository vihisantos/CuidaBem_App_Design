import { Outlet, Link } from "react-router";
import { ArrowLeft } from "lucide-react";
import { Button } from "../../components/ui/Button";

export function AuthLayout() {
    return (
        <div className="min-h-screen bg-background flex flex-col">
            <div className="absolute top-6 left-6 z-50">
                <Link to="/">
                    <Button variant="ghost" size="icon" className="rounded-full bg-white/20 backdrop-blur-sm text-foreground hover:bg-white/40">
                        <ArrowLeft className="w-5 h-5" />
                    </Button>
                </Link>
            </div>
            <Outlet />
        </div>
    );
}
