import { Link } from "react-router";
import { DollarSign, Star, Briefcase, MapPin, Calendar, Clock, ArrowRight } from "lucide-react";
import { Button } from "../../components/ui/Button";
import { Card } from "../../components/ui/Card";
import { Badge } from "../../components/ui/Badge";
import { motion } from "motion/react";

export function CaregiverHome() {
    const opportunities = [
        { id: 1, title: "Acompanhamento Idoso", location: "Copacabana, RJ", price: "180", date: "14/02", time: "08:00 - 18:00", tags: ["Diária", "Alta Complexidade"] },
        { id: 2, title: "Plantão Noturno", location: "Botafogo, RJ", price: "250", date: "15/02", time: "19:00 - 07:00", tags: ["Noturno", "Enfermagem"] },
        { id: 3, title: "Cuidados Pós-Cirúrgicos", location: "Leblon, RJ", price: "200", date: "16/02", time: "09:00 - 17:00", tags: ["Técnico", "Curativos"] },
    ];

    return (
        <div className="min-h-screen bg-background pb-20">
            <div className="bg-gradient-to-br from-primary via-primary to-blue-600 pb-8 px-4 sm:px-6 rounded-b-[2.5rem] shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />

                <div className="relative z-10 max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex justify-between items-center mb-8 pt-4"
                    >
                        <div className="flex items-center gap-3">
                            <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80" alt="Profile" className="w-12 h-12 rounded-full border-2 border-white/30" />
                            <div>
                                <h1 className="text-white text-lg font-bold">Olá, Ana!</h1>
                                <p className="text-white/70 text-sm">Cuidadora verificada</p>
                            </div>
                        </div>
                        <div className="bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-xl flex items-center gap-2">
                            <Star className="w-4 h-4 text-yellow-300 fill-current" />
                            <span className="text-white font-bold">4.9</span>
                        </div>
                    </motion.div>

                    <div className="grid grid-cols-2 gap-4">
                        <Card className="bg-white/10 border-none backdrop-blur-md p-4 text-white hover:bg-white/20 transition-colors">
                            <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center mb-3">
                                <DollarSign className="w-5 h-5 text-green-300" />
                            </div>
                            <p className="text-white/60 text-xs mb-1">Ganhos (Fev)</p>
                            <p className="text-2xl font-heading font-bold">R$ 2.450</p>
                        </Card>
                        <Card className="bg-white/10 border-none backdrop-blur-md p-4 text-white hover:bg-white/20 transition-colors">
                            <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center mb-3">
                                <Briefcase className="w-5 h-5 text-blue-300" />
                            </div>
                            <p className="text-white/60 text-xs mb-1">Realizados</p>
                            <p className="text-2xl font-heading font-bold">12</p>
                        </Card>
                    </div>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
                <h2 className="text-xl font-heading font-bold text-foreground mb-6 flex items-center gap-2">
                    Oportunidades
                    <Badge variant="secondary" className="px-2 bg-primary/10 text-primary">Novas</Badge>
                </h2>

                <div className="space-y-4">
                    {opportunities.map((job, i) => (
                        <motion.div
                            key={job.id}
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <Card className="p-5 border-none shadow-sm hover:shadow-md transition-all bg-white dark:bg-slate-900">
                                <div className="flex justify-between items-start mb-3 gap-3">
                                    <div className="min-w-0">
                                        <h3 className="font-bold text-foreground text-lg">{job.title}</h3>
                                        <div className="flex items-center gap-1.5 text-xs text-muted-foreground mt-1">
                                            <MapPin className="w-3.5 h-3.5 shrink-0" />
                                            {job.location}
                                        </div>
                                    </div>
                                    <span className="text-xl font-bold text-green-600 shrink-0">R$ {job.price}</span>
                                </div>

                                <div className="flex flex-wrap gap-2 mb-4">
                                    {job.tags.map(tag => (
                                        <Badge key={tag} variant="secondary" className="text-[10px] font-medium bg-muted text-muted-foreground">{tag}</Badge>
                                    ))}
                                </div>

                                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-3 border-t border-dashed border-border">
                                    <div className="flex gap-4 text-xs font-medium text-muted-foreground">
                                        <div className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" />{job.date}</div>
                                        <div className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{job.time}</div>
                                    </div>
                                    <Button size="sm" className="rounded-xl h-9 w-full sm:w-auto">
                                        Candidatar<ArrowRight className="w-4 h-4 ml-1" />
                                    </Button>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
