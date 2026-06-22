import { useState } from "react";
import { X, Calendar as CalendarIcon, Clock, Check, ChevronRight } from "lucide-react";
import { Button } from "../ui/Button";

interface BookingModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
    pricePerHour: number;
}

export function BookingModal({ isOpen, onClose, onConfirm, pricePerHour }: BookingModalProps) {
    const [step, setStep] = useState<1 | 2>(1);
    const [selectedDate, setSelectedDate] = useState<string | null>(null);
    const [selectedShift, setSelectedShift] = useState<"morning" | "afternoon" | "full" | null>(null);

    if (!isOpen) return null;

    const dates = [
        { day: "Seg", date: "10" },
        { day: "Ter", date: "11" },
        { day: "Qua", date: "12" },
        { day: "Qui", date: "13" },
        { day: "Sex", date: "14" },
        { day: "Sáb", date: "15" },
    ];

    const shifts = [
        { id: "morning", label: "Manhã", time: "08:00 - 12:00", hours: 4 },
        { id: "afternoon", label: "Tarde", time: "13:00 - 17:00", hours: 4 },
        { id: "full", label: "Dia Inteiro", time: "08:00 - 17:00", hours: 9 },
    ];

    const handleConfirm = () => {
        onConfirm();
    };

    const total = selectedShift
        ? pricePerHour * (shifts.find(s => s.id === selectedShift)?.hours || 0)
        : 0;

    return (
        <div className="fixed inset-0 z-[60] flex items-end md:items-center justify-center">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/40 backdrop-blur-sm animate-fade-in"
                onClick={onClose}
            />

            {/* Modal Content */}
            <div className="relative bg-white w-full md:w-[480px] md:rounded-3xl rounded-t-3xl shadow-2xl animate-slide-up overflow-hidden">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-neutral-100">
                    <div>
                        <h2 className="text-xl font-heading font-bold text-foreground">
                            {step === 1 ? "Agendar Visita" : "Confirmar Pedido"}
                        </h2>
                        <p className="text-sm text-muted-foreground">
                            {step === 1 ? "Escolha o melhor horário" : "Resumo da contratação"}
                        </p>
                    </div>
                    <button onClick={onClose} className="p-2 hover:bg-muted rounded-full transition-colors">
                        <X className="w-5 h-5 text-muted-foreground" />
                    </button>
                </div>

                <div className="p-6">
                    {step === 1 ? (
                        <div className="space-y-6">
                            {/* Date Selection */}
                            <div className="space-y-3">
                                <label className="text-sm font-semibold text-foreground flex items-center gap-2">
                                    <CalendarIcon className="w-4 h-4 text-primary" />
                                    Selecione a Data (Fev)
                                </label>
                                <div className="flex gap-3 overflow-x-auto scrollbar-hide pb-2">
                                    {dates.map((d) => (
                                        <button
                                            key={d.date}
                                            onClick={() => setSelectedDate(d.date)}
                                            className={`flex flex-col items-center justify-center min-w-[64px] h-20 rounded-2xl border transition-all ${selectedDate === d.date
                                                    ? "bg-primary text-white border-primary shadow-lg shadow-primary/20 scale-105"
                                                    : "bg-white border-input text-muted-foreground hover:border-primary/50 hover:bg-primary/5"
                                                }`}
                                        >
                                            <span className="text-xs font-medium opacity-80">{d.day}</span>
                                            <span className="text-xl font-bold">{d.date}</span>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Shift Selection */}
                            <div className="space-y-3">
                                <label className="text-sm font-semibold text-foreground flex items-center gap-2">
                                    <Clock className="w-4 h-4 text-primary" />
                                    Selecione o Turno
                                </label>
                                <div className="space-y-2">
                                    {shifts.map((s) => (
                                        <button
                                            key={s.id}
                                            onClick={() => setSelectedShift(s.id as any)}
                                            className={`w-full flex items-center justify-between p-4 rounded-xl border transition-all ${selectedShift === s.id
                                                    ? "bg-primary/5 border-primary text-primary"
                                                    : "bg-white border-input hover:border-primary/30"
                                                }`}
                                        >
                                            <div className="text-left">
                                                <p className={`font-semibold ${selectedShift === s.id ? "text-primary" : "text-foreground"}`}>{s.label}</p>
                                                <p className="text-xs text-muted-foreground">{s.time} • {s.hours}h</p>
                                            </div>
                                            <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${selectedShift === s.id ? "bg-primary border-primary" : "border-muted-foreground/30"
                                                }`}>
                                                {selectedShift === s.id && <Check className="w-3 h-3 text-white" />}
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <Button
                                disabled={!selectedDate || !selectedShift}
                                onClick={() => setStep(2)}
                                className="w-full h-12 text-base shadow-lg shadow-primary/20"
                            >
                                Continuar
                                <ChevronRight className="w-5 h-5 ml-1" />
                            </Button>
                        </div>
                    ) : (
                        <div className="space-y-6 animate-fade-in">
                            <div className="bg-muted/30 p-4 rounded-2xl space-y-3 border border-border/50">
                                <div className="flex justify-between items-center text-sm">
                                    <span className="text-muted-foreground">Data</span>
                                    <span className="font-semibold text-foreground">{selectedDate} de Fevereiro</span>
                                </div>
                                <div className="flex justify-between items-center text-sm">
                                    <span className="text-muted-foreground">Turno</span>
                                    <span className="font-semibold text-foreground">
                                        {shifts.find(s => s.id === selectedShift)?.label} ({shifts.find(s => s.id === selectedShift)?.time})
                                    </span>
                                </div>
                                <div className="flex justify-between items-center text-sm">
                                    <span className="text-muted-foreground">Valor Hora</span>
                                    <span className="font-semibold text-foreground">R$ {pricePerHour}</span>
                                </div>
                                <div className="border-t border-dashed border-border my-2 pt-2 flex justify-between items-center">
                                    <span className="font-bold text-foreground">Total Estimado</span>
                                    <span className="text-xl font-bold text-primary">R$ {total}</span>
                                </div>
                            </div>

                            <div className="flex gap-3">
                                <Button variant="outline" onClick={() => setStep(1)} className="flex-1">
                                    Voltar
                                </Button>
                                <Button onClick={handleConfirm} className="flex-[2] shadow-lg shadow-primary/20">
                                    Confirmar Pedido
                                </Button>
                            </div>

                            <p className="text-xs text-center text-muted-foreground">
                                Você não será cobrado agora. O pagamento é feito apenas após a confirmação do profissional.
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
