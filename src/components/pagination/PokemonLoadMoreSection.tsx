import { LoadMoreClient } from "@/components/pagination/LoadMoreClient";
import { getPokemonList } from "@/services/pokemonApi";

/**
 * Server component that fetches the initial Pokémon data for the load more section.
 *
 * - Fetches the first page of Pokémon on the server for SSR/SSG hydration.
 * - Passes the data to the client LoadMoreClient, which handles infinite pagination with React Query.
 * - Enables fast initial load, SEO, and smooth client-side pagination.
 *
 * @returns - The LoadMoreClient component with initial data.
 */
const PokemonLoadMoreSection = async () => {
  const initialData = await getPokemonList(20, 0);
  return <LoadMoreClient initialData={initialData} />;
};

export default PokemonLoadMoreSection;
