import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Welcome to Pokémon Browser</h1>
        <p className="text-lg text-muted-foreground">
          Explore the world of Pokémon with our modern, responsive browser
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Pagination View</CardTitle>
            <CardDescription>Browse Pokémon with traditional pagination controls</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Navigate through pages of Pokémon with previous/next buttons and page numbers.
            </p>
            <Button asChild>
              <Link href="/pagination">View with Pagination</Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Load More View</CardTitle>
            <CardDescription>Discover Pokémon with infinite loading</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Load more Pokémon as you scroll with our seamless "Load More" button.
            </p>
            <Button asChild variant="outline">
              <Link href="/load-more">View with Load More</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
