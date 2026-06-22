import { useState } from "react";
import { useParams, useNavigate } from "react-router";
import { ArrowLeft, Star, CheckCircle, MapPin, Briefcase, Phone, MessageCircle, Shield, Heart, Clock } from "lucide-react";
import { caregivers } from "../data/caregivers";
import { Button } from "../../components/ui/Button";
import { Badge } from "../../components/ui/Badge";
import { Card } from "../../components/ui/Card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/Tabs";
import { BookingModal } from "../../components/booking/BookingModal";
import { motion } from "motion/react";

export function Profile() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const caregiver = caregivers.find((c) => c.id === id);

  if (!caregiver) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-4">
        <div className="text-center">
          <h2 className="text-xl font-semibold text-foreground mb-2">Profissional não encontrado</h2>
          <Button onClick={() => navigate("/app")} variant="link">
            Voltar para o início
          </Button>
        </div>
      </div>
    );
  }

  const handleBookingConfirm = () => {
    setIsBookingOpen(false);
    navigate("/app/pedido-confirmado");
  };

  return (
    <div className="min-h-screen bg-background pb-28">
      {/* Header imersivo */}
      <div className="relative h-56 sm:h-64 bg-slate-900">
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60 z-10" />
        <img
          src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
          alt="Cover"
          className="w-full h-full object-cover opacity-80"
        />

        <div className="absolute top-0 left-0 right-0 p-4 sm:p-6 flex justify-between items-center z-20">
          <button
            onClick={() => navigate(-1)}
            className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <button className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors hover:text-red-400">
            <Heart className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Perfil */}
      <div className="max-w-2xl mx-auto px-4 sm:px-6 relative -mt-12 z-30">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Card className="p-6 border-none shadow-xl bg-white dark:bg-slate-900">
            <div className="flex flex-col items-center -mt-16 mb-4">
              <div className="relative">
                <img
                  src={caregiver.photo}
                  alt={caregiver.name}
                  className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl object-cover border-4 border-white dark:border-slate-900 shadow-md"
                />
                {caregiver.verified && (
                  <div className="absolute -bottom-2 -right-2 bg-green-500 text-white rounded-full p-1.5 border-4 border-white dark:border-slate-900">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                )}
              </div>

              <h1 className="text-2xl font-heading font-bold text-foreground mt-3 text-center">{caregiver.name}</h1>
              <div className="flex items-center gap-1.5 text-muted-foreground mt-1">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">{caregiver.location}</span>
              </div>

              <div className="flex items-center gap-2 mt-3">
                <Badge variant="secondary" className="px-3 py-1">
                  <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400 mr-1.5" />
                  {caregiver.rating} ({caregiver.reviewCount})
                </Badge>
                <Badge variant="outline" className="px-3 py-1 border-primary/20 text-primary bg-primary/5">
                  <Clock className="w-3.5 h-3.5 mr-1.5" />
                  {caregiver.experience} anos exp.
                </Badge>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 mt-6">
              <Button variant="outline" className="w-full text-foreground border-input hover:bg-muted" onClick={() => window.open('tel:123')}>
                <Phone className="w-4 h-4 mr-2" />
                Ligar
              </Button>
              <Button variant="outline" className="w-full text-foreground border-input hover:bg-muted">
                <MessageCircle className="w-4 h-4 mr-2" />
                Chat
              </Button>
            </div>
          </Card>
        </motion.div>

        <div className="mt-8">
          <Tabs defaultValue="about" className="w-full">
            <TabsList className="w-full grid grid-cols-2 bg-muted p-1.5 h-auto rounded-xl">
              <TabsTrigger value="about" className="rounded-lg">Sobre</TabsTrigger>
              <TabsTrigger value="reviews" className="rounded-lg">Avaliações</TabsTrigger>
            </TabsList>

            <TabsContent value="about" className="mt-6 space-y-6">
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}>
                <h3 className="text-lg font-heading font-semibold mb-3 flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-primary" />
                  Sobre Mim
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{caregiver.bio}</p>
              </motion.div>

              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
                <h3 className="text-lg font-heading font-semibold mb-3 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-primary" />
                  Especialidades
                </h3>
                <div className="flex flex-wrap gap-2">
                  {caregiver.specialties.map((specialty) => (
                    <Badge key={specialty} variant="secondary" className="text-sm py-1.5 px-3">{specialty}</Badge>
                  ))}
                </div>
              </motion.div>

              <Card className="bg-primary/5 border-primary/10 p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <span className="block text-xs uppercase tracking-wider font-bold text-muted-foreground mb-1">Valor Hora</span>
                  <span className="text-2xl font-bold text-primary">R$ {caregiver.pricePerHour}</span>
                </div>
                <Button onClick={() => setIsBookingOpen(true)} size="lg" className="shadow-lg shadow-primary/20 w-full sm:w-auto">
                  Contratar
                </Button>
              </Card>
            </TabsContent>

            <TabsContent value="reviews" className="mt-6 space-y-4">
              {caregiver.reviews.map((review, i) => (
                <motion.div
                  key={review.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Card className="p-4 border-none shadow-sm bg-white dark:bg-slate-900">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-gray-200 to-gray-100 dark:from-gray-700 dark:to-gray-600 flex items-center justify-center text-xs font-bold text-gray-600 dark:text-gray-300">
                          {review.author[0]}
                        </div>
                        <div>
                          <h4 className="font-semibold text-sm text-foreground">{review.author}</h4>
                          <span className="text-xs text-muted-foreground">{new Date(review.date).toLocaleDateString("pt-BR")}</span>
                        </div>
                      </div>
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`w-3 h-3 ${i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-200 dark:text-gray-700"}`} />
                        ))}
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">"{review.comment}"</p>
                  </Card>
                </motion.div>
              ))}
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        onConfirm={handleBookingConfirm}
        pricePerHour={caregiver.pricePerHour}
      />
    </div>
  );
}
