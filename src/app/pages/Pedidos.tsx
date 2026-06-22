import { Clock, CheckCircle, XCircle, Calendar, DollarSign } from "lucide-react";
import { Badge } from "../../components/ui/Badge";
import { Card } from "../../components/ui/Card";

interface Order {
  id: string;
  caregiverName: string;
  date: string;
  time: string;
  status: "pending" | "confirmed" | "cancelled";
  price: number;
}

const mockOrders: Order[] = [
  {
    id: "1",
    caregiverName: "Lúcia Santos",
    date: "2026-02-06",
    time: "09:00 - 17:00",
    status: "confirmed",
    price: 360,
  },
  {
    id: "2",
    caregiverName: "Maria Helena",
    date: "2026-02-10",
    time: "14:00 - 22:00",
    status: "pending",
    price: 440,
  },
];

export function Pedidos() {
  const getStatusConfig = (status: Order["status"]) => {
    switch (status) {
      case "confirmed":
        return {
          label: "Confirmado",
          icon: CheckCircle,
          variant: "success",
        } as const;
      case "pending":
        return {
          label: "Pendente",
          icon: Clock,
          variant: "secondary",
        } as const;
      case "cancelled":
        return {
          label: "Cancelado",
          icon: XCircle,
          variant: "destructive",
        } as const;
    }
  };

  return (
    <div className="min-h-screen bg-background pb-24">
      <div className="bg-white/80 backdrop-blur-md sticky top-0 z-40 border-b border-border/50 px-6 py-4 shadow-sm">
        <h1 className="text-xl font-heading font-medium text-foreground">Meus Pedidos</h1>
      </div>

      <div className="px-6 py-6 space-y-4 animate-slide-up">
        {mockOrders.length === 0 ? (
          <div className="text-center py-12">
            <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-10 h-10 text-muted-foreground" />
            </div>
            <p className="text-muted-foreground font-medium">Você ainda não tem pedidos</p>
          </div>
        ) : (
          mockOrders.map((order) => {
            const statusConfig = getStatusConfig(order.status);
            const StatusIcon = statusConfig.icon;

            return (
              <Card key={order.id} className="p-5 border-none shadow-sm hover:shadow-md transition-all bg-white">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-heading font-semibold text-foreground text-lg mb-1">{order.caregiverName}</h3>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{new Date(order.date).toLocaleDateString("pt-BR")}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mt-0.5">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{order.time}</span>
                    </div>
                  </div>
                  <Badge variant={statusConfig.variant} className="gap-1.5 py-1 px-2.5">
                    <StatusIcon className="w-3.5 h-3.5" />
                    <span>{statusConfig.label}</span>
                  </Badge>
                </div>

                <div className="border-t border-dashed border-border/60 pt-4 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground">
                    <DollarSign className="w-4 h-4" />
                    <span>Total</span>
                  </div>
                  <span className="text-xl font-heading font-bold text-primary">R$ {order.price}</span>
                </div>
              </Card>
            );
          })
        )}
      </div>
    </div>
  );
}
