import { useState, useEffect } from "react";
import { User, MapPin, Phone, Mail, CreditCard, Bell, Lock, HelpCircle, LogOut, ChevronRight, Sun, Moon, Monitor } from "lucide-react";
import { Button } from "../../components/ui/Button";
import { Card } from "../../components/ui/Card";
import { useTheme } from "../../lib/theme";

export function UserProfile() {
  const { theme, setTheme, resolvedTheme } = useTheme();

  const menuItems = [
    { icon: User, label: "Editar Perfil", color: "text-blue-500 bg-blue-500/10" },
    { icon: MapPin, label: "Endereços Salvos", color: "text-green-500 bg-green-500/10" },
    { icon: CreditCard, label: "Pagamentos", color: "text-purple-500 bg-purple-500/10" },
    { icon: Bell, label: "Notificações", color: "text-amber-500 bg-amber-500/10" },
    { icon: Lock, label: "Privacidade", color: "text-rose-500 bg-rose-500/10" },
    { icon: HelpCircle, label: "Ajuda", color: "text-slate-500 bg-slate-500/10" },
  ];

  const themeOptions = [
    { value: "light" as const, icon: Sun, label: "Claro" },
    { value: "dark" as const, icon: Moon, label: "Escuro" },
    { value: "system" as const, icon: Monitor, label: "Sistema" },
  ];

  return (
    <div className="min-h-screen bg-background pb-28">
      {/* Profile Header */}
      <div className="bg-white dark:bg-slate-900 border-b border-border sticky top-0 z-30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
          <div className="flex items-center gap-5 mb-8 animate-fade-in">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center text-primary-foreground text-2xl font-bold shadow-lg shadow-primary/30 ring-4 ring-primary/5 shrink-0">
              AM
            </div>
            <div className="min-w-0">
              <h1 className="text-xl sm:text-2xl font-heading font-bold text-foreground truncate">Ana Maria</h1>
              <p className="text-muted-foreground text-sm font-medium truncate">ana.maria@email.com</p>
              <Button variant="link" className="h-auto p-0 text-primary text-xs mt-1">
                Editar foto
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border">
            <div className="text-center group cursor-pointer hover:bg-muted/50 p-2 rounded-xl transition-colors">
              <div className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">12</div>
              <div className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Serviços</div>
            </div>
            <div className="text-center group cursor-pointer hover:bg-muted/50 p-2 rounded-xl transition-colors">
              <div className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">8</div>
              <div className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Favoritos</div>
            </div>
            <div className="text-center group cursor-pointer hover:bg-muted/50 p-2 rounded-xl transition-colors">
              <div className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">4.9</div>
              <div className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Avaliação</div>
            </div>
          </div>
        </div>
      </div>

      {/* Theme Toggle */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-6">
        <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2 ml-1">Aparência</h2>
        <Card className="p-2 border-none shadow-sm bg-white dark:bg-slate-900 overflow-hidden">
          <div className="flex gap-2 p-1">
            {themeOptions.map(({ value, icon: Icon, label }) => (
              <button
                key={value}
                onClick={() => setTheme(value)}
                className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-medium transition-all ${
                  theme === value
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "text-muted-foreground hover:bg-muted"
                }`}
              >
                <Icon className="w-4 h-4" />
                {label}
              </button>
            ))}
          </div>
        </Card>
      </div>

      {/* Menu Items */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-3 pt-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
        <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2 ml-1">Conta</h2>
        <Card className="p-2 border-none shadow-sm bg-white dark:bg-slate-900 overflow-hidden">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.label}
                className="w-full flex items-center gap-4 px-4 py-3.5 hover:bg-muted/50 transition-colors rounded-xl group relative overflow-hidden"
              >
                <div className={`p-2 rounded-xl ${item.color} group-hover:scale-110 transition-transform`}>
                  <Icon className="w-5 h-5" />
                </div>
                <span className="flex-1 text-left font-medium text-foreground text-sm">{item.label}</span>
                <ChevronRight className="w-4 h-4 text-muted-foreground/50 group-hover:text-primary group-hover:translate-x-1 transition-all" />
              </button>
            );
          })}
        </Card>
      </div>

      {/* Logout */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
        <Button variant="outline" className="w-full justify-center gap-2 py-6 rounded-2xl hover:bg-destructive/5 hover:text-destructive hover:border-destructive/30 transition-all text-muted-foreground border-dashed">
          <LogOut className="w-5 h-5" />
          <span>Sair da Conta</span>
        </Button>
        <p className="text-center text-xs text-muted-foreground mt-6 font-medium">Versão 1.0.0 • CuidaBem</p>
      </div>
    </div>
  );
}
