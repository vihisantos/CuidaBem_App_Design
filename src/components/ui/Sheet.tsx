import { X } from "lucide-react";
import { useEffect, useState } from "react";

interface SheetProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: React.ReactNode;
}

export function Sheet({ isOpen, onClose, title, children }: SheetProps) {
    const [show, setShow] = useState(isOpen);

    useEffect(() => {
        if (isOpen) setShow(true);
        else setTimeout(() => setShow(false), 300);
    }, [isOpen]);

    if (!show) return null;

    return (
        <div className="fixed inset-0 z-[60] flex justify-end">
            {/* Backdrop */}
            <div
                className={`absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0"}`}
                onClick={onClose}
            />

            {/* Sheet Content */}
            <div
                className={`relative w-full max-w-sm bg-background h-full shadow-2xl transition-transform duration-300 ease-out transform ${isOpen ? "translate-x-0" : "translate-x-full"}`}
            >
                <div className="flex items-center justify-between p-4 border-b border-border/50">
                    <h2 className="font-heading font-bold text-lg">{title}</h2>
                    <button onClick={onClose} className="p-2 hover:bg-muted rounded-full transition-colors">
                        <X className="w-5 h-5 text-muted-foreground" />
                    </button>
                </div>

                <div className="p-4 overflow-y-auto h-[calc(100vh-64px)]">
                    {children}
                </div>
            </div>
        </div>
    );
}
