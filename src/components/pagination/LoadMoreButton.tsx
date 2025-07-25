"use client";

import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

interface LoadMoreButtonProps {
  onClick: () => void;
  loading: boolean;
  disabled: boolean;
}

/**
 * A button component for loading more Pokémon data.
 *
 * @param {LoadMoreButtonProps} props - The component props.
 * @param {() => void} props.onClick - The function to call when the button is clicked.
 * @param {boolean} props.loading - Whether the button is currently loading.
 * @param {boolean} props.disabled - Whether the button is disabled.
 * @returns - The LoadMoreButton component.
 */
export function LoadMoreButton({ onClick, loading, disabled }: LoadMoreButtonProps) {
  return (
    <Button
      onClick={onClick}
      disabled={disabled}
      size="lg"
      className="min-w-[200px] cursor-pointer hover:bg-primary/90"
    >
      {loading ? (
        <>
          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
          Loading...
        </>
      ) : (
        "Load More Pokémon"
      )}
    </Button>
  );
}
