import Link from "next/link";

/**
 * Site header with a link to the homepage and the site title.
 * @returns - The site header component.
 */
export function SiteHeader() {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4">
        <div>
          <Link href="/">
            <h1 className="text-2xl font-bold text-primary">Pokémon Browser</h1>
          </Link>
        </div>
      </div>
    </header>
  );
}
