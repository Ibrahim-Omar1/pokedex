import { Card, CardContent } from "@/components/ui/card";
import { extractIdFromUrl } from "@/lib/pokemon/extractIdFromUrl";
import Image from "next/image";
import Link from "next/link";

interface PokemonCardProps {
  name: string;
  url: string;
}

export function PokemonCard({ name, url }: PokemonCardProps) {
  const id = extractIdFromUrl(url);
  const spriteUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

  return (
    <Link href={`/pokemon/${name}`} className="group">
      <Card className="transition-all duration-200 hover:shadow-lg hover:scale-105 group-hover:border-primary/50">
        <CardContent className="p-4 text-center">
          <div className="relative w-24 h-24 mx-auto mb-3">
            <Image
              src={spriteUrl || "/placeholder.svg"}
              alt={name}
              fill
              className="object-contain transition-transform group-hover:scale-110"
              sizes="96px"
            />
          </div>
          <h3 className="font-semibold text-sm group-hover:text-primary transition-colors capitalize">
            {name}
          </h3>
          <p className="text-xs text-muted-foreground">#{id.toString().padStart(3, "0")}</p>
        </CardContent>
      </Card>
    </Link>
  );
}
