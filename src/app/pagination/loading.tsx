import { SkeletonGrid } from "@/components/pokemon-card/SkeletonGrid";

export default function Loading() {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <div className="h-9 bg-muted rounded w-64 mx-auto mb-2" />
        <div className="h-5 bg-muted rounded w-96 mx-auto" />
      </div>
      <SkeletonGrid />
      <div className="h-12 bg-muted rounded w-full max-w-md mx-auto" />
    </div>
  );
}
