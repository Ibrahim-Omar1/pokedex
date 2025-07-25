import type { PokemonDetail, PokemonListResponse } from "@/types/pokemon";

/**
 * Base URL for the PokéAPI.
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
    throw error;
  }
}

/**
 * Fetches a paginated list of Pokémon for React Query pagination.
 * @param {Object} params - The pagination parameters.
 * @param {number} params.page - The page number (1-based).
 * @param {number} params.limit - The number of Pokémon per page.
 * @returns {Promise<PokemonListResponse>} The paginated Pokémon list.
 */
export async function fetchPokemonList({
  page = 1,
  limit = 20,
}: {
  page?: number;
  limit?: number;
}): Promise<PokemonListResponse> {
  const offset = (page - 1) * limit;
  return getPokemonList(limit, offset);
}
