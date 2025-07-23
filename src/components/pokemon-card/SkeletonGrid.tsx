import { SkeletonCard } from "./SkeletonCard";

export function SkeletonGrid() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
      {Array.from({ length: 20 }).map((_, i) => (
        <SkeletonCard key={i} />
      ))}
    </div>
  );
}
