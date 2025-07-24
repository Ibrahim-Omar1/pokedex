import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getSprite } from "@/lib/sprites";
import { getPokemonDetails, getPokemonList } from "@/services/pokemonApi";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { cache } from "react";

/**
 * Cache the getPokemonDetails function to prevent duplicate API calls.
 *
 * Since this function is called in both generateMetadata and the page component
 * during the same render pass, React's cache function ensures only one API call
 * is made per Pokémon name, improving performance and reducing API usage.
 *
 * @param {string} name - The name of the Pokémon to get details for.
 * @returns {Promise<PokemonDetail>} The Pokémon details.
 */
const getPokemonDetailsCached = cache(getPokemonDetails);

interface PageProps {
  params: Promise<{ name: string }>;
}

/**
 * Generate static parameters for the first 20 Pokémon.
 * This pre-renders pages at build time for better performance and SEO.
 *
 * @returns - Array of Pokémon names for static generation.
 */
export async function generateStaticParams() {
  try {
    const pokemonList = await getPokemonList(20, 0);
    return pokemonList.results.map((pokemon) => ({
      name: pokemon.name,
    }));
  } catch (error) {
    console.error("Error generating static params:", error);
    // Fallback to generate on demand
    return [];
  }
}

export async function generateMetadata({ params }: PageProps) {
  const { name } = await params;

  try {
    const pokemon = await getPokemonDetailsCached(name);
    return {
      title: `${pokemon.name}`,
      description: `Details for ${pokemon.name} including stats, types, and more.`,
    };
  } catch {
    return {
      title: "Pokémon Not Found",
    };
  }
}
export default async function PokemonDetailPage({ params }: PageProps) {
  const { name } = await params;

  const pokemon = await getPokemonDetailsCached(name);

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="outline" size="sm" asChild>
          <Link href="/pagination">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to List
          </Link>
        </Button>
      </div>

      <Card>
        <CardHeader className="text-center">
          <div className="mx-auto mb-4">
            <Image
              src={getSprite(pokemon.sprites) || "/placeholder.svg"}
              alt={pokemon.name}
              width={200}
              height={200}
              className="mx-auto"
              priority
            />
          </div>
          <CardTitle className="text-3xl capitalize">{pokemon.name}</CardTitle>
          <div className="text-sm text-muted-foreground">
            #{pokemon.id.toString().padStart(3, "0")}
          </div>
        </CardHeader>

        <CardContent className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold">{pokemon.height / 10}m</div>
              <div className="text-sm text-muted-foreground">Height</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">{pokemon.weight / 10}kg</div>
              <div className="text-sm text-muted-foreground">Weight</div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Types</h3>
            <div className="flex gap-2 flex-wrap">
              {pokemon.types.map((type) => (
                <Badge key={type.type.name} variant="secondary">
                  {type.type.name}
                </Badge>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Base Stats</h3>
            <div className="space-y-2">
              {pokemon.stats.map((stat) => (
                <div key={stat.stat.name} className="flex items-center gap-4">
                  <div className="w-24 text-sm text-muted-foreground">
                    {stat.stat.name.replace("-", " ")}
                  </div>
                  <div className="flex-1 bg-muted rounded-full h-2">
                    <div
                      className="bg-primary h-2 rounded-full transition-all"
                      style={{ width: `${Math.min((stat.base_stat / 255) * 100, 100)}%` }}
                    />
                  </div>
                  <div className="w-12 text-sm font-medium text-right">{stat.base_stat}</div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
