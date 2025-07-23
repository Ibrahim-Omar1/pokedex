import { PokemonCard } from "@/components/pokemon-card/PokemonCard";
import type { PokemonListItem } from "@/types/pokemon";

interface PokemonGridProps {
  pokemon: PokemonListItem[];
}

/**
 * Displays a responsive grid of Pokémon cards.
 * Shows a message when no Pokémon are available.
 * Uses a responsive grid layout that adapts to different screen sizes.
 *
 * @param {PokemonGridProps} props - The component props.
 * @param {PokemonListItem[]} props.pokemon - Array of Pokémon data to display.
 * @returns {JSX.Element} The Pokémon grid or a "no Pokémon found" message.
 */
export function PokemonGrid({ pokemon }: PokemonGridProps) {
  if (pokemon.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">No Pokémon found.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
      {pokemon.map((pokemon) => (
        <PokemonCard key={pokemon.name} name={pokemon.name} url={pokemon.url} />
      ))}
    </div>
  );
}
