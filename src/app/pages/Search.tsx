import { useState } from "react";
import { Search as SearchIcon, MapPin, Filter, Star, Briefcase } from "lucide-react";
import { caregivers, Caregiver } from "../data/caregivers";
import { Link } from "react-router";
import { Badge } from "../../components/ui/Badge";
import { Button } from "../../components/ui/Button";
import { Card } from "../../components/ui/Card";
import { Sheet } from "../../components/ui/Sheet";

export function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const filteredCaregivers = caregivers.filter((c) =>
    c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    c.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleFilter = (filter: string) => {
    setSelectedFilters(prev =>
      prev.includes(filter)
        ? prev.filter(f => f !== filter)
        : [...prev, filter]
    );
  };

  const categories = ["Enfermagem", "Cuidador de Idosos", "Fisioterapia", "Nutrição", "Acompanhante"];

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Sticky Header */}
      <div className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-border/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4 space-y-4">
          <div className="relative">
            <SearchIcon className="absolute left-4 top-3.5 w-5 h-5 text-primary" />
            <input
              type="text"
              placeholder="Buscar por nome ou cidade..."
              className="w-full bg-white border border-border/60 rounded-2xl pl-12 pr-4 py-3 text-foreground placeholder:text-muted-foreground/60 shadow-sm focus:ring-4 focus:ring-primary/10 focus:border-primary/50 transition-all outline-none font-medium"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide md:hidden">
            <Button variant="outline" size="sm" className="rounded-xl gap-2 px-4 shadow-sm border-dashed shrink-0" onClick={() => setIsFilterOpen(true)}>
              <Filter className="w-4 h-4" />
              Filtros
            </Button>
            {categories.map(cat => (
              <button key={cat} className="whitespace-nowrap px-4 py-2 bg-white border border-border rounded-xl text-sm font-medium text-muted-foreground shrink-0">
                {cat}
              </button>
            ))}
          </div>

          <div className="hidden md:flex gap-3">
            <Button variant="outline" size="sm" className="rounded-xl gap-2 px-4 shrink-0" onClick={() => setIsFilterOpen(true)}>
              <Filter className="w-4 h-4" />
              Todos os Filtros
            </Button>
            {categories.map(cat => (
              <button key={cat} onClick={() => toggleFilter(cat)} className={`whitespace-nowrap px-4 py-2 rounded-xl text-sm font-medium transition-colors ${selectedFilters.includes(cat) ? "bg-primary text-white" : "bg-white border border-border hover:bg-muted"}`}>
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 animate-slide-up">
        <h2 className="text-xl font-heading font-bold text-foreground mb-4 flex items-center gap-2">
          Resultados
          <span className="text-sm font-normal text-muted-foreground bg-muted px-2 py-0.5 rounded-full">{filteredCaregivers.length}</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {filteredCaregivers.map((caregiver) => (
            <Link key={caregiver.id} to={`/app/perfil/${caregiver.id}`}>
              <Card className="p-4 border-none shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 bg-white group">
                <div className="flex gap-4">
                  <div className="relative shrink-0">
                    <img
                      src={caregiver.photo}
                      alt={caregiver.name}
                      className="w-20 h-20 rounded-2xl object-cover shadow-sm group-hover:scale-105 transition-transform duration-500"
                    />
                    {caregiver.verified && (
                      <div className="absolute -bottom-2 -right-2 bg-green-500 text-white rounded-full p-1 border-2 border-white">
                        <Star className="w-3 h-3 fill-current" />
                      </div>
                    )}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start gap-2">
                      <h3 className="font-heading font-bold text-lg text-foreground truncate">{caregiver.name}</h3>
                      <Badge variant="secondary" className="px-1.5 py-0.5 text-xs font-bold gap-1 bg-yellow-400/10 text-yellow-600 shrink-0">
                        <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                        {caregiver.rating}
                      </Badge>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground mt-1 mb-2">
                      <MapPin className="w-3.5 h-3.5 shrink-0" />
                      <span className="truncate">{caregiver.location}</span>
                    </div>

                    <div className="flex flex-wrap gap-1.5">
                      {caregiver.specialties.slice(0, 2).map(s => (
                        <span key={s} className="px-2 py-0.5 bg-muted rounded-md text-[10px] font-medium text-muted-foreground uppercase tracking-wide">
                          {s}
                        </span>
                      ))}
                      {caregiver.specialties.length > 2 && (
                        <span className="px-2 py-0.5 bg-muted rounded-md text-[10px] font-medium text-muted-foreground">
                          +{caregiver.specialties.length - 2}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-border/50 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-muted-foreground block">A partir de</span>
                    <span className="text-lg font-heading font-bold text-primary">R$ {caregiver.pricePerHour}</span>
                    <span className="text-xs text-muted-foreground">/hora</span>
                  </div>
                  <Button size="sm" variant="outline" className="rounded-xl border-primary/20 text-primary hover:bg-primary hover:text-white transition-colors">
                    Ver Perfil
                  </Button>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>

      <Sheet isOpen={isFilterOpen} onClose={() => setIsFilterOpen(false)} title="Filtrar Resultados">
        <div className="space-y-6">
          <div>
            <h3 className="font-medium mb-3 text-sm uppercase tracking-wide text-muted-foreground">Categoria</h3>
            <div className="space-y-2">
              {categories.map(cat => (
                <label key={cat} className="flex items-center gap-3 p-3 rounded-xl border border-input hover:bg-muted/50 cursor-pointer transition-colors">
                  <input
                    type="checkbox"
                    checked={selectedFilters.includes(cat)}
                    onChange={() => toggleFilter(cat)}
                    className="w-5 h-5 rounded border-gray-300 text-primary focus:ring-primary"
                  />
                  <span className="text-sm font-medium">{cat}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-medium mb-3 text-sm uppercase tracking-wide text-muted-foreground">Preço por Hora</h3>
            <div className="h-2 bg-muted rounded-full overflow-hidden">
              <div className="h-full w-1/2 bg-primary"></div>
            </div>
            <div className="flex justify-between mt-2 text-sm text-foreground font-medium">
              <span>R$ 20</span>
              <span>R$ 150+</span>
            </div>
          </div>

          <div className="pt-8">
            <Button className="w-full h-12 text-base" onClick={() => setIsFilterOpen(false)}>
              Aplicar Filtros
            </Button>
          </div>
        </div>
      </Sheet>
    </div>
  );
}
