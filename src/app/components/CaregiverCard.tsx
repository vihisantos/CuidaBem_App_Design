import { Link } from "react-router";
import { Star, CheckCircle } from "lucide-react";
import type { Caregiver } from "../data/caregivers";

interface CaregiverCardProps {
  caregiver: Caregiver;
  compact?: boolean;
}

export function CaregiverCard({ caregiver, compact = false }: CaregiverCardProps) {
  return (
    <Link
      to={`/perfil/${caregiver.id}`}
      className="block bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="flex gap-4">
        <img
          src={caregiver.photo}
          alt={caregiver.name}
          className={`${compact ? "w-20 h-20" : "w-24 h-24"} rounded-xl object-cover flex-shrink-0`}
        />
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2 mb-1">
            <div className="flex items-center gap-2">
              <h3 className="font-semibold text-neutral-900">{caregiver.name}</h3>
              {caregiver.verified && (
                <CheckCircle className="w-4 h-4 text-[#2D9CDB] flex-shrink-0" />
              )}
            </div>
          </div>

          <div className="flex items-center gap-1 mb-2">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium text-neutral-900">{caregiver.rating}</span>
            <span className="text-sm text-neutral-500">({caregiver.reviewCount})</span>
          </div>

          <div className="flex flex-wrap gap-2 mb-2">
            {caregiver.specialties.slice(0, compact ? 2 : 3).map((specialty) => (
              <span
                key={specialty}
                className="text-xs px-2 py-1 bg-blue-50 text-blue-700 rounded-md"
              >
                {specialty}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-between">
            <span className="text-lg font-bold text-[#27AE60]">
              R$ {caregiver.pricePerHour}/h
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
