import { Card, CardContent } from "@/components/ui/card";

export function SkeletonCard() {
  return (
    <Card>
      <CardContent className="p-4 text-center">
        <div className="w-24 h-24 bg-muted rounded mx-auto mb-3 animate-pulse" />
        <div className="h-4 bg-muted rounded mb-1 animate-pulse" />
        <div className="h-3 bg-muted rounded w-16 mx-auto animate-pulse" />
      </CardContent>
    </Card>
  );
}
