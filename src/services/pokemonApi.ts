import type { PokemonDetail, PokemonListResponse } from "@/types/pokemon";
import { toast } from "sonner";

/**
 * Base URL for the PokéAPI.
 * @type {string}
 */
const BASE_URL = "https://pokeapi.co/api/v2";

/**
 * Fetches a list of Pokémon from the PokéAPI.
 * @param {number} [limit=20] - The number of Pokémon to fetch.
 * @param {number} [offset=0] - The offset for pagination.
 * @returns {Promise<PokemonListResponse>} The response containing the list of Pokémon.
 */
export async function getPokemonList(limit = 20, offset = 0): Promise<PokemonListResponse> {
  const url = `${BASE_URL}/pokemon?limit=${limit}&offset=${offset}`;
  try {
    const response = await fetch(url, {
      next: { revalidate: 3600 }, // Cache for 1 hour
    });
    if (!response.ok) {
      throw new Error(`Failed to fetch Pokémon list: ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching Pokemon list:", error);
    if (typeof window !== "undefined") {
      toast.error("Error fetching Pokémon list");
    }
    throw error;
  }
}

/**
 * Fetches details for a specific Pokémon by name or ID.
 * @param {string | number} nameOrId - The Pokémon's name or ID.
 * @returns {Promise<PokemonDetail>} The detailed Pokémon data.
 */
export async function getPokemonDetails(nameOrId: string | number): Promise<PokemonDetail> {
  const url = `${BASE_URL}/pokemon/${nameOrId}`;
  try {
    const response = await fetch(url, {
      next: { revalidate: 3600 }, // Cache for 1 hour
    });
    if (!response.ok) {
      throw new Error(`Failed to fetch Pokémon details: ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching Pokemon details:", error);
    if (typeof window !== "undefined") {
      toast.error("Error fetching Pokémon details");
    }
    throw error;
  }
}

/**
 * Extracts the Pokémon ID from a PokéAPI URL.
 * @param {string} url - The URL to extract the ID from.
 * @returns {number} The extracted Pokémon ID, or 0 if not found.
 */
export function extractIdFromUrl(url: string): number {
  const matches = url.match(/\/pokemon\/(\d+)\/?/);
  return matches ? Number.parseInt(matches[1], 10) : 0;
}
