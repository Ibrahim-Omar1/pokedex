import { PokemonGridWrapper } from "@/components/pokemon-card/PokemonGridWrapper";
import { SkeletonGrid } from "@/components/pokemon-card/SkeletonGrid";
import { Suspense } from "react";

interface PageProps {
  searchParams: Promise<{ page?: string; limit?: string }>;
}

/**
 * Pagination page component that displays a grid of Pokémon with pagination controls.
 * Uses Suspense to stream the Pokémon data while showing a skeleton loading state.
 *
 * @param {PageProps} props - The component props.
 * @param {Promise<{ page?: string; limit?: string }>} props.searchParams - The search parameters promise containing pagination options.
 * @returns {JSX.Element} The pagination page with Pokémon grid and controls.
 */
export default function PaginationPage({ searchParams }: PageProps) {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-2">Pokémon Collection</h1>
        <p className="text-muted-foreground">Browse through all Pokémon with pagination</p>
      </div>

      <Suspense fallback={<SkeletonGrid />}>
        <PokemonGridWrapper searchParams={searchParams} />
      </Suspense>
    </div>
  );
}
