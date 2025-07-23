"use client";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { AlertCircle, RefreshCw } from "lucide-react";

interface ErrorAlertProps {
  title: string;
  message: string;
  onRetry?: () => void;
}

export function ErrorAlert({ title, message, onRetry }: ErrorAlertProps) {
  return (
    <Alert variant="destructive" className="max-w-2xl mx-auto">
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>{title}</AlertTitle>
      <AlertDescription className="mt-2">
        <p className="mb-4">{message}</p>
        {onRetry && (
          <Button
            variant="outline"
            size="sm"
            onClick={onRetry}
            className="border-destructive text-destructive hover:bg-destructive hover:text-destructive-foreground bg-transparent"
          >
            <RefreshCw className="w-4 h-4 mr-2" />
            Try Again
          </Button>
        )}
      </AlertDescription>
    </Alert>
  );
}
