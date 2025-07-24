"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

/**
 * Client component that provides a back navigation button.
 * Uses Next.js router to navigate to the previous page in browser history.
 *
 * @returns - A button component for back navigation.
 */
export function BackToListButton() {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <Button variant="outline" size="sm" onClick={handleBack} className="cursor-pointer">
      <ArrowLeft className="w-4 h-4 mr-2" />
      Back to List
    </Button>
  );
}
