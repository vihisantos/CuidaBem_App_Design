import { Link } from "react-router";
import { ArrowRight, Search, Star, Heart, Shield } from "lucide-react";
import { Button } from "../../components/ui/Button";
import { Card } from "../../components/ui/Card";
import { Badge } from "../../components/ui/Badge";
import { caregivers } from "../data/caregivers";

export function Home() {
  const featuredCaregivers = caregivers.filter((c) => c.rating >= 4.9).slice(0, 3);

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Seção Hero */}
      <div className="relative bg-gradient-to-br from-primary via-primary to-blue-600 text-primary-foreground rounded-b-[3rem] shadow-2xl overflow-hidden pb-16">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-3xl -ml-16 -mb-16 pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 relative z-10 animate-fade-in">
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur border border-white/20 flex items-center justify-center">
                <span className="font-heading font-bold text-lg">C</span>
              </div>
              <div>
                <h1 className="text-sm opacity-90">Olá, João!</h1>
                <p className="font-heading font-bold text-xl leading-none">Bem-vindo de volta.</p>
              </div>
            </div>
            <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur border border-white/20 flex items-center justify-center relative">
              <div className="absolute top-2 right-2 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-primary" />
              <Heart className="w-5 h-5" />
            </div>
          </div>

          <h2 className="text-3xl font-heading font-bold leading-tight mb-6 max-w-xs">
            Encontre o cuidado ideal para quem você ama.
          </h2>

          <Button size="lg" className="shadow-lg shadow-primary/25 text-base h-12 px-8 bg-white text-primary hover:bg-white/90" asChild>
            <Link to="/app/buscar">
              <Search className="w-5 h-5 mr-2" />
              Encontrar Cuidador
            </Link>
          </Button>
        </div>
      </div>

      {/* Serviços Rápidos */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 -mt-12 relative z-20">
        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x pt-2">
          {["Enfermagem", "Cuidador", "Fisioterapia", "Nutrição"].map((service, i) => (
            <Link key={service} to="/app/buscar" className="snap-center shrink-0">
              <Card className="min-w-[140px] p-4 flex flex-col items-center gap-3 hover:-translate-y-1 transition-all duration-300 border-none shadow-lg bg-white/95 backdrop-blur">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${i % 2 === 0 ? 'bg-primary/10 text-primary' : 'bg-secondary/20 text-secondary-foreground'}`}>
                  <Heart className="w-6 h-6" />
                </div>
                <span className="font-medium text-sm text-foreground">{service}</span>
              </Card>
            </Link>
          ))}
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-heading font-bold text-foreground">Destaques</h2>
          <Link to="/app/buscar" className="text-sm text-primary font-medium hover:underline decoration-2 underline-offset-4">
            Ver todos
          </Link>
        </div>

        <div className="space-y-4">
          {featuredCaregivers.map((caregiver) => (
            <Link key={caregiver.id} to={`/app/perfil/${caregiver.id}`}>
              <Card className="p-4 border-none shadow-sm hover:shadow-lg transition-all duration-300 bg-white group flex gap-4">
                <div className="relative">
                  <img
                    src={caregiver.photo}
                    alt={caregiver.name}
                    className="w-20 h-20 rounded-2xl object-cover shadow-sm group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-yellow-400 text-yellow-900 text-[10px] font-bold px-1.5 py-0.5 rounded-md shadow-sm flex items-center gap-0.5">
                    <Star className="w-3 h-3 fill-current" />
                    {caregiver.rating}
                  </div>
                </div>

                <div className="flex-1 min-w-0 py-1">
                  <div className="flex justify-between items-start">
                    <h3 className="font-heading font-bold text-foreground truncate">{caregiver.name}</h3>
                    <Badge variant="secondary" className="text-[10px] px-1.5 py-0.5">Verified</Badge>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1 line-clamp-1">{caregiver.specialties.join(" • ")}</p>

                  <div className="flex items-end justify-between mt-3">
                    <p className="text-sm font-bold text-primary">R$ {caregiver.pricePerHour}<span className="text-xs font-normal text-muted-foreground">/h</span></p>
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>

      {/* Banner */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-8">
        <div className="bg-slate-900 rounded-3xl p-6 relative overflow-hidden text-white">
          <div className="absolute right-0 top-0 w-32 h-32 bg-primary/30 rounded-full blur-3xl -mr-10 -mt-10" />
          <div className="relative z-10">
            <div className="w-10 h-10 bg-white/10 backdrop-blur rounded-xl flex items-center justify-center mb-4">
              <Shield className="w-5 h-5" />
            </div>
            <h3 className="font-heading font-bold text-lg mb-2">Segurança Garantida</h3>
            <p className="text-white/70 text-sm mb-4">Todos os profissionais passam por verificação rigorosa de antecedentes.</p>
            <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 hover:text-white bg-transparent h-9 text-sm">
              Saiba mais
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
