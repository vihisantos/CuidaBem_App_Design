import { useNavigate, Link } from "react-router";
import { ArrowRight, Mail, Lock } from "lucide-react";
import { Button } from "../../components/ui/Button";

export function Login() {
    const navigate = useNavigate();

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        navigate("/app"); // finge que ta logando rs
    };

    return (
        <div className="flex min-h-screen">
            {/* Lado Esquerdo - Coisa bonita pra ver */}
            <div className="hidden lg:flex lg:w-1/2 bg-slate-900 relative overflow-hidden items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-purple-900/80 z-10 mix-blend-multiply" />
                <img
                    src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2070&auto=format&fit=crop"
                    alt="Caregiver holding hands"
                    className="absolute inset-0 w-full h-full object-cover opacity-60"
                />
                <div className="relative z-20 max-w-lg p-12 text-white text-center">
                    <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mx-auto mb-8 border border-white/20">
                        <span className="text-3xl font-heading font-bold">C</span>
                    </div>
                    <h1 className="text-4xl font-heading font-bold mb-6 leading-tight">Cuidado profissional com quem você ama.</h1>
                    <p className="text-lg text-white/80 leading-relaxed">Conectamos as melhores cuidadoras a famílias que buscam segurança, carinho e profissionalismo.</p>
                </div>
            </div>

            {/* Lado Direito - O Form mesmo */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-background relative">
                <div className="w-full max-w-md space-y-8 animate-slide-up">
                    <div className="text-center lg:text-left">
                        <Link to="/" className="lg:hidden inline-flex items-center justify-center w-12 h-12 bg-primary/10 text-primary rounded-xl mb-6">
                            <span className="font-heading font-bold text-xl">C</span>
                        </Link>
                        <h2 className="text-3xl font-heading font-bold text-foreground">Bem-vindo de volta!</h2>
                        <p className="text-muted-foreground mt-2">Digite suas credenciais para acessar sua conta.</p>
                    </div>

                    <form onSubmit={handleLogin} className="space-y-5">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-foreground ml-1">Email</label>
                            <div className="relative">
                                <Mail className="absolute left-4 top-3.5 w-5 h-5 text-muted-foreground" />
                                <input
                                    type="email"
                                    placeholder="seu@email.com"
                                    className="w-full bg-muted/50 border border-input focus:border-primary/50 focus:bg-white rounded-xl pl-12 pr-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-4 focus:ring-primary/10 transition-all"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <div className="flex items-center justify-between">
                                <label className="text-sm font-medium text-foreground ml-1">Senha</label>
                                <Link to="#" className="text-xs text-primary font-medium hover:underline">Esqueceu a senha?</Link>
                            </div>
                            <div className="relative">
                                <Lock className="absolute left-4 top-3.5 w-5 h-5 text-muted-foreground" />
                                <input
                                    type="password"
                                    placeholder="••••••••"
                                    className="w-full bg-muted/50 border border-input focus:border-primary/50 focus:bg-white rounded-xl pl-12 pr-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-4 focus:ring-primary/10 transition-all"
                                />
                            </div>
                        </div>

                        <div className="space-y-3 pt-2">
                            <Button type="submit" size="lg" className="w-full text-base py-6 shadow-lg shadow-primary/20">
                                Entrar na Conta
                                <ArrowRight className="w-5 h-5 ml-2" />
                            </Button>

                            <div className="grid grid-cols-2 gap-3 pt-2">
                                <Button variant="ghost" type="button" onClick={() => navigate("/app")} className="w-full text-xs font-normal text-muted-foreground hover:text-primary border border-border/50 hover:bg-primary/5">
                                    Visitante (Família)
                                </Button>
                                <Button variant="ghost" type="button" onClick={() => navigate("/app/cuidador")} className="w-full text-xs font-normal text-muted-foreground hover:text-primary border border-border/50 hover:bg-primary/5">
                                    Visitante (Cuidador)
                                </Button>
                            </div>
                        </div>
                    </form>

                    <div className="relative my-8">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-border"></div>
                        </div>
                        <div className="relative flex justify-center text-xs uppercase">
                            <span className="bg-background px-4 text-muted-foreground font-medium tracking-wide">Ou continue com</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <Button variant="outline" className="h-12 border-input hover:bg-muted font-normal text-muted-foreground hover:text-foreground">
                            Google
                        </Button>
                        <Button variant="outline" className="h-12 border-input hover:bg-muted font-normal text-muted-foreground hover:text-foreground">
                            Facebook
                        </Button>
                    </div>

                    <p className="text-center text-sm text-muted-foreground mt-8">
                        Não tem uma conta?{" "}
                        <Link to="/cadastro" className="text-primary font-semibold hover:underline">
                            Criar conta grátis
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
