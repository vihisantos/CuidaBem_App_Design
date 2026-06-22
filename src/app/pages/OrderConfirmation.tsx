import { useNavigate } from "react-router";
import { CheckCircle, ArrowRight, Calendar, Clock } from "lucide-react";
import { Button } from "../../components/ui/Button";
import { Card } from "../../components/ui/Card";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export function OrderConfirmation() {
    const navigate = useNavigate();
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
        setTimeout(() => setShowContent(true), 300);
    }, []);

    return (
        <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4 sm:p-6 relative overflow-hidden">
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-500/5 rounded-full blur-3xl -ml-32 -mb-32 pointer-events-none" />
            </div>

            <AnimatePresence>
                {showContent && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="relative z-10 w-full max-w-md text-center"
                    >
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.1, type: "spring", stiffness: 200 }}
                            className="w-20 h-20 sm:w-24 sm:h-24 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6"
                        >
                            <CheckCircle className="w-10 h-10 sm:w-12 sm:h-12 text-green-600 dark:text-green-400" />
                        </motion.div>

                        <h1 className="text-2xl sm:text-3xl font-heading font-bold text-foreground mb-2">Pedido Confirmado!</h1>
                        <p className="text-muted-foreground text-base sm:text-lg mb-8">Sua solicitação foi enviada com sucesso. Em breve o cuidador entrará em contato.</p>

                        <Card className="p-4 sm:p-6 border-dashed border-2 border-border bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm mb-8">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-12 rounded-xl bg-gray-200 dark:bg-gray-700 overflow-hidden shrink-0">
                                    <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80" alt="Caregiver" className="w-full h-full object-cover" />
                                </div>
                                <div className="text-left">
                                    <p className="font-bold text-foreground">Ana Silva</p>
                                    <p className="text-xs text-muted-foreground">Cuidadora Profissional</p>
                                </div>
                            </div>

                            <div className="space-y-3">
                                <div className="flex items-center gap-3 text-sm text-foreground/80">
                                    <Calendar className="w-4 h-4 text-primary shrink-0" />
                                    <span>14 de Fevereiro (Sexta)</span>
                                </div>
                                <div className="flex items-center gap-3 text-sm text-foreground/80">
                                    <Clock className="w-4 h-4 text-primary shrink-0" />
                                    <span>08:00 - 12:00 (Manhã)</span>
                                </div>
                            </div>
                        </Card>

                        <div className="space-y-3">
                            <Button onClick={() => navigate("/app/pedidos")} size="lg" className="w-full shadow-lg shadow-green-500/20 bg-green-600 hover:bg-green-700 border-transparent">
                                Ver Meus Pedidos
                                <ArrowRight className="w-5 h-5 ml-2" />
                            </Button>
                            <Button onClick={() => navigate("/app")} variant="ghost" className="w-full">
                                Voltar ao Início
                            </Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
