import type { PokemonSprites } from "@/types/pokemon";

export function getSprite(sprites: PokemonSprites): string {
  // Priority order for sprite selection
  return (
    sprites.other?.["official-artwork"]?.front_default ||
    sprites.other?.dream_world?.front_default ||
    sprites.front_default ||
    "/placeholder.svg?height=200&width=200"
  );
}

export function getSpriteById(id: number): string {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
}
