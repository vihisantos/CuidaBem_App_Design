import { useState } from "react";
import { useNavigate, Link } from "react-router";
import { ArrowRight, User, HeartHandshake } from "lucide-react";
import { Button } from "../../components/ui/Button";

export function Register() {
    const navigate = useNavigate();
    const [role, setRole] = useState<"client" | "caregiver" | null>(null);

    const handleRegister = (e: React.FormEvent) => {
        e.preventDefault();
        navigate("/app"); // Manda pro app direto sem validar nada kkkk
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-neutral-50 p-4 md:p-8">
            <div className="w-full max-w-5xl bg-white rounded-[2rem] shadow-xl overflow-hidden flex flex-col md:flex-row min-h-[600px] animate-scale-in">
                {/* Lado Esquerdo - Propaganda chique */}
                <div className="w-full md:w-5/12 bg-primary p-8 md:p-12 text-primary-foreground flex flex-col justify-between relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-3xl -ml-16 -mb-16 pointer-events-none" />

                    <div className="relative z-10">
                        <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center mb-6 border border-white/30">
                            <span className="text-2xl font-heading font-bold">C</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Junte-se à nossa comunidade.</h2>
                        <p className="text-primary-foreground/80 text-lg leading-relaxed">
                            Faça parte da plataforma que está transformando o cuidado no Brasil. Segurança e carinho em primeiro lugar.
                        </p>
                    </div>

                    <div className="relative z-10 space-y-4 mt-8 md:mt-0">
                        <div className="flex items-center gap-4 bg-white/10 p-4 rounded-2xl backdrop-blur-sm border border-white/10">
                            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                                <User className="w-5 h-5" />
                            </div>
                            <div>
                                <p className="font-bold text-sm">Para Famílias</p>
                                <p className="text-xs text-primary-foreground/70">Encontre profissionais verificados rapidamente.</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 bg-white/10 p-4 rounded-2xl backdrop-blur-sm border border-white/10">
                            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                                <HeartHandshake className="w-5 h-5" />
                            </div>
                            <div>
                                <p className="font-bold text-sm">Para Cuidadores</p>
                                <p className="text-xs text-primary-foreground/70">Receba ofertas justas e gerencie sua agenda.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Lado Direito - O cadastro em si */}
                <div className="w-full md:w-7/12 p-8 md:p-12 bg-white flex flex-col justify-center">
                    <div className="max-w-md mx-auto w-full">
                        <div className="mb-8">
                            <h1 className="text-2xl font-heading font-bold text-foreground mb-2">Crie sua conta</h1>
                            <p className="text-muted-foreground">Preencha seus dados para começar.</p>
                        </div>

                        {!role ? (
                            <div className="space-y-4 animate-slide-up">
                                <p className="text-sm font-medium text-foreground mb-4">Você quer:</p>

                                <button onClick={() => setRole("client")} className="w-full group text-left p-4 rounded-2xl border-2 border-muted hover:border-primary/50 bg-muted/30 hover:bg-primary/5 transition-all flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <User className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">Contratar um Cuidador</h3>
                                        <p className="text-xs text-muted-foreground">Busco auxílio para um familiar.</p>
                                    </div>
                                    <ArrowRight className="w-5 h-5 ml-auto text-muted-foreground group-hover:text-primary transition-colors" />
                                </button>

                                <button onClick={() => setRole("caregiver")} className="w-full group text-left p-4 rounded-2xl border-2 border-muted hover:border-primary/50 bg-muted/30 hover:bg-primary/5 transition-all flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-green-100 text-green-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <HeartHandshake className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">Trabalhar como Cuidador</h3>
                                        <p className="text-xs text-muted-foreground">Quero oferecer meus serviços.</p>
                                    </div>
                                    <ArrowRight className="w-5 h-5 ml-auto text-muted-foreground group-hover:text-primary transition-colors" />
                                </button>

                                <p className="text-center text-sm text-muted-foreground mt-8">
                                    Já tem uma conta?{" "}
                                    <Link to="/login" className="text-primary font-semibold hover:underline">
                                        Fazer Login
                                    </Link>
                                </p>
                            </div>
                        ) : (
                            <form onSubmit={handleRegister} className="space-y-5 animate-slide-up">
                                <div className="flex items-center gap-2 mb-4 text-sm text-muted-foreground bg-muted/50 p-2 px-3 rounded-lg w-fit">
                                    <span>Conta: </span>
                                    <span className="font-bold text-foreground capitalize">{role === 'client' ? 'Contratante' : 'Cuidador'}</span>
                                    <button type="button" onClick={() => setRole(null)} className="text-xs text-primary hover:underline ml-2">(Alterar)</button>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-foreground ml-1">Nome</label>
                                        <input type="text" placeholder="Maria" className="w-full bg-muted/50 border border-input focus:bg-white rounded-xl px-4 py-3 text-foreground focus:outline-none focus:ring-4 focus:ring-primary/10 transition-all font-medium" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-foreground ml-1">Sobrenome</label>
                                        <input type="text" placeholder="Silva" className="w-full bg-muted/50 border border-input focus:bg-white rounded-xl px-4 py-3 text-foreground focus:outline-none focus:ring-4 focus:ring-primary/10 transition-all font-medium" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-foreground ml-1">Email</label>
                                    <input type="email" placeholder="seu@email.com" className="w-full bg-muted/50 border border-input focus:bg-white rounded-xl px-4 py-3 text-foreground focus:outline-none focus:ring-4 focus:ring-primary/10 transition-all font-medium" />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-foreground ml-1">Senha</label>
                                    <input type="password" placeholder="Mínimo 8 caracteres" className="w-full bg-muted/50 border border-input focus:bg-white rounded-xl px-4 py-3 text-foreground focus:outline-none focus:ring-4 focus:ring-primary/10 transition-all font-medium" />
                                </div>

                                <Button type="submit" size="lg" className="w-full text-base py-6 shadow-lg shadow-primary/20 mt-4">
                                    Criar Conta Grátis
                                </Button>

                                <p className="text-center text-sm text-muted-foreground mt-4">
                                    Ao criar conta, você aceita nossos <a href="#" className="underline">Termos</a> e <a href="#" className="underline">Privacidade</a>.
                                </p>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
