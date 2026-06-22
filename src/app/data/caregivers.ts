export interface Caregiver {
  id: string;
  name: string;
  photo: string;
  rating: number;
  reviewCount: number;
  pricePerHour: number;
  verified: boolean;
  specialties: string[];
  bio: string;
  experience: string;
  location: string;
  reviews: Review[];
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  date: string;
  comment: string;
}

export const caregivers: Caregiver[] = [
  {
    id: "1",
    name: "Lúcia Santos",
    photo: "https://images.unsplash.com/photo-1765896387387-0538bc9f997e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGRlcmx5JTIwY2FyZWdpdmVyJTIwbnVyc2UlMjBwcm9mZXNzaW9uYWwlMjB3b21hbnxlbnwxfHx8fDE3NzAyNDAxNDN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    rating: 4.9,
    reviewCount: 127,
    pricePerHour: 45,
    verified: true,
    specialties: ["Alzheimer", "Primeiros Socorros", "Mobilidade Reduzida"],
    bio: "Técnica de Enfermagem com 15 anos de experiência em cuidados geriátricos. Trabalho com amor, dedicação e profissionalismo, oferecendo suporte completo para idosos e suas famílias.",
    experience: "15 anos",
    location: "Zona Sul, São Paulo",
    reviews: [
      {
        id: "r1",
        author: "Maria Silva",
        rating: 5,
        date: "2026-01-28",
        comment: "A Lúcia cuidou da minha mãe por 6 meses. Profissional exemplar, carinhosa e muito atenciosa. Recomendo de olhos fechados!",
      },
      {
        id: "r2",
        author: "João Pedro",
        rating: 5,
        date: "2026-01-15",
        comment: "Excelente profissional! Meu pai tem Alzheimer e ela soube lidar com todas as situações com muita paciência e cuidado.",
      },
      {
        id: "r3",
        author: "Ana Beatriz",
        rating: 4,
        date: "2026-01-05",
        comment: "Muito boa! Pontual e dedicada. Única ressalva é que às vezes tinha dificuldade em finais de semana.",
      },
    ],
  },
  {
    id: "2",
    name: "Carlos Mendes",
    photo: "https://images.unsplash.com/photo-1659353885824-1199aeeebfc6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxudXJzZSUyMHByb2Zlc3Npb25hbCUyMG1hbiUyMGhlYWx0aGNhcmV8ZW58MXx8fHwxNzcwMjQwMTQ0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    rating: 4.8,
    reviewCount: 93,
    pricePerHour: 50,
    verified: true,
    specialties: ["Fisioterapia", "Cuidados Paliativos", "Pós-Operatório"],
    bio: "Enfermeiro especializado em cuidados paliativos e recuperação pós-operatória. Atendo com empatia e respeito, garantindo conforto e segurança.",
    experience: "10 anos",
    location: "Zona Oeste, São Paulo",
    reviews: [
      {
        id: "r4",
        author: "Roberto Costa",
        rating: 5,
        date: "2026-01-20",
        comment: "Carlos cuidou do meu pai após uma cirurgia. Muito profissional e atencioso. Recomendo!",
      },
      {
        id: "r5",
        author: "Fernanda Lima",
        rating: 5,
        date: "2026-01-10",
        comment: "Excelente profissional. Minha avó se sentiu muito bem cuidada.",
      },
    ],
  },
  {
    id: "3",
    name: "Maria Helena",
    photo: "https://images.unsplash.com/photo-1758206523750-a3e2c61d3633?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwd29ya2VyJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc3MDI0MDE0NHww&ixlib=rb-4.1.0&q=80&w=1080",
    rating: 5.0,
    reviewCount: 156,
    pricePerHour: 55,
    verified: true,
    specialties: ["Diabetes", "Hipertensão", "Administração de Medicamentos"],
    bio: "Cuidadora com formação em Enfermagem e especialização em doenças crônicas. Experiência em administração de medicamentos e acompanhamento médico.",
    experience: "18 anos",
    location: "Centro, São Paulo",
    reviews: [
      {
        id: "r6",
        author: "Paulo Santos",
        rating: 5,
        date: "2026-02-01",
        comment: "A Maria é simplesmente perfeita! Cuida da minha mãe diabética com muito zelo e profissionalismo.",
      },
      {
        id: "r7",
        author: "Cristina Alves",
        rating: 5,
        date: "2026-01-25",
        comment: "Profissional incrível! Sempre pontual e muito cuidadosa.",
      },
    ],
  },
  {
    id: "4",
    name: "Roberto Oliveira",
    photo: "https://images.unsplash.com/photo-1659353885824-1199aeeebfc6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxudXJzZSUyMHByb2Zlc3Npb25hbCUyMG1hbiUyMGhlYWx0aGNhcmV8ZW58MXx8fHwxNzcwMjQwMTQ0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    rating: 4.7,
    reviewCount: 68,
    pricePerHour: 42,
    verified: true,
    specialties: ["Acompanhamento Hospitalar", "Banho", "Alimentação"],
    bio: "Cuidador experiente em acompanhamento hospitalar e cuidados básicos diários. Trabalho com dedicação e carinho.",
    experience: "8 anos",
    location: "Zona Norte, São Paulo",
    reviews: [
      {
        id: "r8",
        author: "Juliana Martins",
        rating: 5,
        date: "2026-01-18",
        comment: "Roberto foi essencial durante a internação do meu pai. Muito atencioso!",
      },
    ],
  },
];
