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
        <h1 className="text-3xl font-bold mb-2">Pokémon Collection</h1>
        <p className="text-muted-foreground">Browse through all Pokémon with pagination</p>
      </div>
      <ErrorAlert title="Failed to load Pokémon" message={error.message} onRetry={reset} />
    </div>
  );
}
