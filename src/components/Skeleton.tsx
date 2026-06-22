export function Skeleton({ className = "" }: { className?: string }) {
  return (
    <div className={`animate-pulse bg-muted rounded-xl ${className}`} />
  );
}

export function CardSkeleton() {
  return (
    <div className="p-4 border-none shadow-sm bg-white rounded-xl space-y-4">
      <div className="flex gap-4">
        <Skeleton className="w-20 h-20 rounded-2xl shrink-0" />
        <div className="flex-1 space-y-3">
          <Skeleton className="h-5 w-3/4" />
          <Skeleton className="h-3 w-1/2" />
          <div className="flex gap-2">
            <Skeleton className="h-5 w-16 rounded-md" />
            <Skeleton className="h-5 w-16 rounded-md" />
          </div>
        </div>
      </div>
      <div className="pt-3 border-t border-border/50 flex justify-between">
        <Skeleton className="h-6 w-20" />
        <Skeleton className="h-8 w-20 rounded-xl" />
      </div>
    </div>
  );
}

export function ProfileSkeleton() {
  return (
    <div className="min-h-screen bg-background pb-28">
      <div className="relative h-56 sm:h-64 bg-slate-200 animate-pulse" />
      <div className="max-w-2xl mx-auto px-4 sm:px-6 relative -mt-12 z-30">
        <div className="p-6 bg-white rounded-xl shadow-xl space-y-6">
          <div className="flex flex-col items-center -mt-16 mb-4">
            <Skeleton className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl" />
            <Skeleton className="h-7 w-40 mt-3" />
            <Skeleton className="h-4 w-32 mt-2" />
            <div className="flex gap-2 mt-3">
              <Skeleton className="h-6 w-24 rounded-full" />
              <Skeleton className="h-6 w-24 rounded-full" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <Skeleton className="h-12 rounded-xl" />
            <Skeleton className="h-12 rounded-xl" />
          </div>
        </div>
        <div className="mt-8 space-y-4">
          <Skeleton className="h-10 w-full rounded-xl" />
          <Skeleton className="h-32 w-full rounded-xl" />
          <Skeleton className="h-32 w-full rounded-xl" />
        </div>
      </div>
    </div>
  );
}

export function SearchSkeleton() {
  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-border/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4 space-y-4">
          <Skeleton className="h-12 w-full rounded-2xl" />
          <div className="flex gap-3">
            <Skeleton className="h-9 w-24 rounded-xl shrink-0" />
            <Skeleton className="h-9 w-20 rounded-xl shrink-0" />
            <Skeleton className="h-9 w-20 rounded-xl shrink-0" />
          </div>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 space-y-5">
        {[1, 2, 3].map((i) => (
          <CardSkeleton key={i} />
        ))}
      </div>
    </div>
  );
}

export function HomeSkeleton() {
  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="bg-gradient-to-br from-primary/20 to-blue-600/20 rounded-b-[3rem] pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 space-y-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <Skeleton className="w-10 h-10 rounded-full" />
              <div className="space-y-1">
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-5 w-40" />
              </div>
            </div>
            <Skeleton className="w-10 h-10 rounded-full" />
          </div>
          <Skeleton className="h-10 w-3/4" />
          <Skeleton className="h-12 w-48 rounded-xl" />
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 -mt-8">
        <div className="flex gap-4 overflow-hidden">
          {[1, 2, 3, 4].map((i) => (
            <Skeleton key={i} className="w-36 h-28 rounded-xl shrink-0" />
          ))}
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 space-y-4">
        <Skeleton className="h-6 w-32" />
        {[1, 2, 3].map((i) => (
          <CardSkeleton key={i} />
        ))}
      </div>
    </div>
  );
}
