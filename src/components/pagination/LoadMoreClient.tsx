"use client";
import { useInfiniteQuery } from "@tanstack/react-query";
import { getPokemonList } from "@/services/pokemonApi";
import { PokemonGrid } from "../pokemon-card/PokemonGrid";
import { LoadMoreButton } from "./LoadMoreButton";
import { ErrorAlert } from "@/components/ErrorAlert";
import type { PokemonListResponse } from "@/types/pokemon";

interface LoadMoreClientProps {
  /**
   * The initial Pokémon data, hydrated from the server for SSR/SSG.
   * Used as the first page in the infinite query.
   */
  initialData: PokemonListResponse;
}

/**
 * Client component for infinite Pokémon pagination using React Query.
 *
 * - Uses useInfiniteQuery to fetch and cache paginated Pokémon data.
 * - Receives initialData from the server for SSR/SSG hydration (hybrid rendering).
 * - Handles error and loading states, and flattens all pages for the grid.
 * - Provides a "Load More" button to fetch the next page.
 *
 * @param {LoadMoreClientProps} props - The component props.
 * @param {PokemonListResponse} props.initialData - The initial Pokémon data for hydration.
 * @returns - The paginated Pokémon grid with load more functionality.
 */
export function LoadMoreClient({ initialData }: LoadMoreClientProps) {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isError, error } = useInfiniteQuery(
    {
      queryKey: ["pokemon"],
      queryFn: async ({ pageParam = 0 }) => {
        const limit = 20;
        const offset = pageParam;
        return getPokemonList(limit, offset);
      },
      initialPageParam: 0,
      getNextPageParam: (lastPage) => {
        if (!lastPage.next) return undefined;
        const url = new URL(lastPage.next);
        return Number(url.searchParams.get("offset"));
      },
      initialData: {
        pages: [initialData],
        pageParams: [0],
      },
    },
  );

  const allPokemon = data?.pages.flatMap((page) => page.results) ?? [];

  return (
    <div className="space-y-8">
      <PokemonGrid pokemon={allPokemon} />
      {isError && (
        <ErrorAlert
          title="Failed to load more Pokémon"
          message={error instanceof Error ? error.message : "Unknown error"}
          onRetry={() => fetchNextPage()}
        />
      )}
      {hasNextPage && (
        <div className="text-center">
          <LoadMoreButton
            onClick={() => fetchNextPage()}
            loading={isFetchingNextPage}
            disabled={isFetchingNextPage}
          />
        </div>
      )}
      {!hasNextPage && allPokemon.length > 0 && (
        <div className="text-center text-muted-foreground">
          <p>You've seen all the Pokémon! 🎉</p>
        </div>
      )}
    </div>
  );
}
