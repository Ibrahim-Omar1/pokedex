"use client";

import { ErrorAlert } from "@/components/ErrorAlert";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-2">Discover Pokémon</h1>
        <p className="text-muted-foreground">Load more Pokémon as you explore</p>
      </div>
      <ErrorAlert title="Failed to load Pokémon" message={error.message} onRetry={reset} />
    </div>
  );
}
