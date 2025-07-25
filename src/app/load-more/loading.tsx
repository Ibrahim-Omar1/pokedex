import { SkeletonGrid } from "@/components/pokemon-card/SkeletonGrid";

export default function Loading() {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-2">Discover Pokémon</h1>
        <p className="text-muted-foreground">Load more Pokémon as you explore</p>
      </div>
      <SkeletonGrid />
    </div>
  );
}
