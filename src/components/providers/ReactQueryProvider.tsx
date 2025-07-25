"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { type ReactNode, useState } from "react";

/**
 * Provides a React Query client context for the app.
 *
 * - Configures recommended options for SSR/CSR hybrid Next.js apps:
 *   - retry: 1 (fail fast, don't spam API)
 *   - refetchOnWindowFocus: false (avoid unnecessary refetches)
 *   - staleTime: 60_000 (1 min, good for paginated data)
 *   - gcTime: 5 * 60_000 (5 min, balances memory and cache)
 *
 * @param {object} props - The provider props.
 * @param {ReactNode} props.children - The children to render inside the provider.
 * @returns {JSX.Element} The React Query provider wrapping the app.
 *
 * @see https://tanstack.com/query/v5/docs/framework/react/guides/ssr
 * @see https://tkdodo.eu/blog/react-query-and-type-script
 */
export function ReactQueryProvider({ children }: { children: ReactNode }) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            retry: 1,
            refetchOnWindowFocus: false,
            staleTime: 60_000, // 1 minute
            gcTime: 5 * 60_000, // 5 minutes
          },
        },
      }),
  );
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}
