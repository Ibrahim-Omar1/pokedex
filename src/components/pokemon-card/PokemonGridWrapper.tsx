import { PaginationControls } from "@/components/pagination/PaginationControls";
import { PokemonGrid } from "@/components/pokemon-card/PokemonGrid";
import { parsePaginationParams } from "@/lib/pagination";
import { getPokemonList } from "@/services/pokemonApi";

interface PokemonGridWrapperProps {
  searchParams: Promise<{ page?: string; limit?: string }>;
}

/**
 * Server component that fetches and displays Pokémon data with pagination controls.
 * Designed to be wrapped with Suspense for streaming performance optimization.
 * Handles data fetching, pagination calculation, and renders both the grid and controls.
 *
 * @param {PokemonGridWrapperProps} props - The component props.
 * @param {Promise<{ page?: string; limit?: string }>} props.searchParams - The search parameters promise containing pagination options.
 * @returns {Promise<JSX.Element>} The Pokémon grid with pagination controls.
 */
export async function PokemonGridWrapper({ searchParams }: PokemonGridWrapperProps) {
  const { page, limit, offset } = await parsePaginationParams(searchParams);

  const data = await getPokemonList(limit, offset);
  const totalPages = Math.ceil(data.count / limit);

  return (
    <div className="space-y-8">
      <PokemonGrid pokemon={data.results} />
      <PaginationControls currentPage={page} totalPages={totalPages} basePath="/pagination" />
    </div>
  );
}
